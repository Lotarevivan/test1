<template>
<div class="main-input">
    <div class="main-input" v-if="type==='text'">
        <div class="input-text">
            <span class="input-error-right"  >
                 <span v-if="!isValid&&changed&&field.length>0" class="fake-check-box-item checked"></span>
                    <span v-if="isValid&&changed" class="modal-close">
                        <div class="item-close a"></div>
                        <div class="item-close b"></div>
                    </span>
            </span>
            <input type="text" :name="inputName" @change="fieldIsChanged" @focus="check(value)" @keyup="check(value)" :maxlength="maxlength" required v-model.trim="field">
            <label for="name">{{label}}</label>
            <span class="input-error" v-show="isValid&&changed" >{{errorMessage}}</span>
        </div>
    </div>

    <div class="main-input" v-if="type==='checkbox'">
        <div class="input-checkbox">
            <input type="checkbox" :name="inputName" v-model="value">
            <span class="fake-check-box" @click="field=!field">
                <span class="fake-check-box-item" :class="{'checked':value}"></span>
            </span>
                       <span class="fake-check-title" v-html="label"></span>
            <span class="input-error checkbox" v-show="isValid" >{{errorMessage}}</span>
        </div>
    </div>
    <div class="cover"  v-if="type==='selectfield'" @click="selectOpen=!selectOpen">
      <div class="main-input">
         <div class="input-text select-field">
            <input type="text" :name="inputName" @change="field=SelectedCountry" required v-model="SelectedCountry">
            <label for="name">{{label}}</label>
            <span class="arrow" :class="{'active':selectOpen}">
             
            </span>
            <!-- <span class="input-error" v-show="isValid" >{{errorMessage}}</span> -->
         </div>
        
            <div class="input-text select-area" v-show="selectOpen">
                <input type="text" @click="SelectCountry($event.target)" class="select-area-input first" value="Российская федерация">
            </div>
            <div class="input-text select-area" v-show="selectOpen">
                <input type="text" @click="SelectCountry($event.target)" class="select-area-input second" value="Беларусь">
            </div>
             <div class="input-text select-area" v-show="selectOpen">
                <input type="text" @click="SelectCountry($event.target)" class="select-area-input second" value="Украина">
            </div>
            <div class="input-text select-area" v-show="selectOpen">
                <input type="text" @click="SelectCountry($event.target)" class="select-area-input thrid" value="Казахстан">
            </div>
      </div>
    </div>

</div>
</template>

<script>
export default {
    data:()=>{
        return{
            changed:false,
            selectOpen:false,
            SelectedCountry:"Российская федерация",
            Country:[ //TODO
                 {
                     name:"",
                     id:"1",
                 },
                 {
                     name:"",
                     id:"2"
                 },{
                     name:"",
                     id:"3"
                 }
                 ,{
                     name:"",
                     id:"4"
                 }
             ]
        }
       
    },
    props:{
        maxlength:{
            default:255
        },
       mutation:{
            type:String,
            default:'SET_name',
       },
        value:{
            default:'',
        },
        label:{
            type:String,
            default:'Label',
        },
        type:{
            type:String,
            default:'text',
        },
        mask:{
            type:Function,
            default: (val)=>{
                    return val
                },
        },
         check:{
                type: Function,
                default: ()=>{
                    return false
                }
            },
            errorMessage:{
                type:String,
                default:'Ошибка'
            },
            inputName:{
                type:String,
                default:'inputname'
            }
    },
      computed: {
           isValid: function (){
                return this.check(this.field)||false
            },
            field: {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.$store.commit(this.mutation,{'value':value,'isvalid' :this.check(this.field)})
                }
            },
           
        },
        methods:{
            validateField: function(){
                this.check(this.field)
            },
            fieldIsChanged: function(){
                this.changed=true
            },
            SelectCountry:function(e){
                this.SelectedCountry=e.value
                this.$store.commit(this.mutation,{'value':this.SelectedCountry,'isvalid' :true})
            }
        },
        mounted(){
          
        }
}
</script>
<style lang='scss'>
$bgcolor:#191919;
$bgcolor_focus:#333333;
.main-input{
    width: 100%;
    height: 100%;
}
.input-text{
    position: relative;
    width: 100%;
    height: 100%;
    label{
       position: relative;
       margin-left: 30px;
       top: 30px;
       color: #6C6C6C;
       pointer-events: none;
       display: block;
       transition: .3s;
    }
      input[type="text"] {
        position: absolute;
        height: 100%;
        width: 100%;
        border: none;
        color:white;
        background: $bgcolor;
        font-weight: 500;
        font-size: 20px;
        line-height: 113.22%;
        border-radius: 10px;
        box-shadow: none;
        font-style: 20px;
        padding: 30px 40px 20px 30px;
        transition:.3s;
        &.select-area-input {
        border-radius:10px 10px 0 0;
        &.second{
            border-radius:0;
        }
          &.thrid{
            border-radius:0px 0px 10px 10px;
        }
          }
         
    }
    input[type="text"] {
	&:focus+ {
		label {
            font-weight: 300;
			top:15px;
            font-style: 14px;
		}
	}
    &:hover+ {
	label {
            font-weight: 300;
			top:15px;
            font-style: 14px;
	}
	}
    &:valid+ {
	label {
            font-weight: 300;
			top:15px;
            font-style: 14px;
	}
    }
    
}
    input[type="text"]:hover {
           background: $bgcolor_focus
        }
    input[type="text"]:focus {
           background: $bgcolor_focus
        }
}
.input-checkbox{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
      input[type="checkbox"] {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
      .fake-check-box{
        
        margin:auto 0;
        margin-right:20px;
        display: block;
        background: $bgcolor;
        width: 40px;
        height:40px;
        border-radius: 10px;
        transition:.3s;
        &:hover{
            background: $bgcolor_focus;
        }
        .fake-check-box-item{
            position: relative;
            margin:10px auto;
            display: block;
            border-bottom:3px solid white;
            border-left:3px solid white;
            transform: rotate(-45deg);
            height: 12px;
            width: 0px;
            opacity:0;
            transition:.3s;
            &.checked{
            width: 19px;
            opacity:1;
            }
        }
    }
       .fake-check-title {
        margin:auto 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 113.22%;
        color: #6C6C6C;
        a{
        color:white;
        text-decoration:none;
    }
    } 
}
    
.input-error{
    margin-left:20px;
    color: #CC301B;
    font-size:12px;
    position: relative;
    top:65px;
    margin-bottom:10px;
    &.checkbox{
    color: #CC301B;
    font-size:12px;
    position: absolute;
    top:45px;
    margin-bottom:10px;
    }
}
.input-error-right{
    display: flex;
    position: absolute;
    top:30px;
    right: -40px;
    z-index: 10;
    .fake-check-box-item{
            position: relative;
            display: block;
            border-bottom:3px solid#89CC1B;
            border-left:3px solid #89CC1B;
            transform: rotate(-45deg);
            height: 12px;
            width: 0px;
            opacity:0;
            transition:.3s;

            &.checked{
            width: 19px;
            opacity:1;
            }
        }
        .item-close{
            background:  #CC301B;
            margin-top: 10px;
        }

}
    .select-field{
        caret-color: transparent;
        margin-bottom: 20px;
        .arrow{
            position: absolute;
            right: 30px;
            width: 15px;
            height: 15px;
            z-index: 1500;
            top:30px;
            border-bottom: 3px solid  #BBBBBB;
            border-left: 3px solid  #BBBBBB;
            transition: .3s;
            transform: rotate(-45deg);
            &.active{
               transform: rotate(135deg);
        } 
        }
         
       
    }
   
  .cover{
      margin-top:10px;
      height: 100%;
    //   border:1px solid white
  }
    
</style>