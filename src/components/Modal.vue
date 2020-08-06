<template>
  <div>
    <div class="modal">
      
      <div class="modal-overlay" :class="{'active': modal.isActive}">
         <div class="succes " :class="{'active': modal.Succes}">
          <div class="succes-content"  >
                  <div class="succes-ico"></div>
                  <h3>Ваша заявка принята</h3>
                  <h2>В ближайшее время с вами свяжется наш менеджер</h2>
          </div>
        </div>
       
        <div class="modal-window" :class="{'active': modal.Succes}">
          <div class="modal-header">
            <span></span>
            <span class="modal-title">Заявка на карту</span>
            <span class="modal-close" @click="closeModal">
              <div class="item-close a"></div>
              <div class="item-close b"></div>
            </span>
          </div>
          <div class="modal-content">
            <div
              class="input-form"
              :class="{'for-checkbox':item.type=='checkbox'}"
              v-for="item in formField()"
              :key="item.label"
            >
              <custominput
                v-model="item.value"
                :label="item.label"
                :type="item.type"
                :check="item.check"
                :formName="item.check"
                :errorMessage="item.errorMessage"
                :inputName="item.inputName"
                :value="item.value"
                :mutation="item.mutation"
                :maxlength="item.maxlength"
              ></custominput>
            </div>
          </div>
          <div class="modal-footer">
            <button @click.prevent="sendData" :class="{disabled:btnDisabled}" class="button__normal">Заказать сейчас</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Custominput from "./CustomInput";
export default {
  components: {
    Custominput,
  },
  data: () => {
    return {
      btnDisabled:false,
      modal: {
        isActive: false,
        Succes:false
      },

      formField() {
        let formField = [
          {
            label: "ФИО",
            type: "text",
            check: function (name) {
              if (/^[а-яА-ЯеЁ\- ]*$/.test(name)) {
                return false;
              } else {
                return true;
              }
            },
            inputName: "name",
            errorMessage: "Некорректно введены данные",
            value: this.Name.value,
            mutation: "SET_name",
          },
          {
            label: "Электронный адрес",
            type: "text",
            check: function (email) {
              if (/.+@.+\..+/i.test(email)||email.length==0) {
                return false;
              } else {
                return true;
              }
            },
            inputName: "email",
            errorMessage: "Некорректно введены данные",
            value: this.Email.value,
            mutation: "SET_email",
          },
          {
            label: "Номер телефона",
            type: "text",
            check: function (phone) {
            if (/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/.test(phone) || '' === phone) {
              
                return false;
              } else {
                return true;
              }
            },
            inputName: "phone",
            errorMessage: "Некорректно введены данные",
            value: this.Phone.value,
            mutation: "SET_phone",
            maxlength:15
          },
          {
            label:
              'Я соглашаюсь на <a href="#"> обработку </a> моих персональных данных',
            type: "checkbox",
            inputName: "phone",
            errorMessage: "Необходима отметка",
                check: function (val) {
            if (val) {
                return false;
              } else {
                return true;
              }
            },
            value: this.Rules.value,
            mutation: "SET_rules",
          },
           {
            label: "Гражданство",
            type: "selectfield",
            check: function (name) {
              if (/^[а-яА-ЯеЁ\- ]*$/.test(name)) {
                return false;
              } else {
                return true;
              }
            },
            inputName: "name",
            errorMessage: "Некорректно введены данные",
            value: this.Name.value,
            mutation: "SET_country",
          },
        ];
        return formField;
      },
    };
  },
  created() {
    this.$root.$on('OpenModal',()=>{
      this.openModal()
    })
   
  },
  methods:{
     openModal: function(){
      this.modal.isActive=true
    },
      closeModal: function(){
      this.modal.isActive=false
    },
    sendData :async function(){
      this.btnDisabled=true
     
        let checkout=[]
      for(let item in this.$store.state.form){
          checkout.push(this.$store.state.form[item].isvalid||false)
      }
      if(checkout.every(elem => elem )){
       const data={ name:this.Name.value,
            email:this.Email.value,
            phone:+this.Phone.value.replace(/\D+/g,""),
            country:this.Country.value,
            rules:this.Rules.value,
            }
          // "Отправляем" на фейк сервер,
        console.log(JSON.stringify(data))

        // const url = '';
        //       try {
        //         const response = await fetch(url, {
        //           method: 'POST',
        //           body: JSON.stringify(data), 
        //           headers: {
        //             'Content-Type': 'application/json'
        //           }
        //         });
        //         const json = await response.json();
        //         console.log('Успех:', JSON.stringify(json));
        //       } catch (error) {
        //         console.error('Ошибка:', error);
        //       }

        //"ответ"
              setTimeout(() => {
              
                   this.modal.Succes=true
              }, 1000);

              
              setTimeout(() => {
                 this.closeModal()
                 //дать закрыться потом очищать
                setTimeout(() => {
                this.btnDisabled=false
                this.modal.Succes=false  
                 //  this.$store.state.form.name.value=''
                //  this.$store.state.form.email.value=''
                //  this.$store.state.form.phone.value='' 
                }, 300);
               
               
               
              }, 5000);
      }else{
        this.btnDisabled=false
      }
        
    }
  },
  computed: {
    Name: {
      get() {
        return this.$store.state.form.name;
      },
      set(value) {
        this.$store.commit("SET_name", value);
      },
    },
    Email: {
      get() {
        return this.$store.state.form.email;
      },
      set(value) {
        this.$store.commit("SET_email", value);
      },
    },
    Phone: {
      get() {
        return this.$store.state.form.phone;
      },
      set(value) {
        this.$store.commit("SET_phone", value);
      },
    },
    Rules: {
      get() {
        return this.$store.state.form.rules;
      },
      set(value) {
        this.$store.commit("SET_rules", value);
      },
    },
    Country: {
      get() {
        return this.$store.state.form.country;
      },
      set(value) {
        this.$store.commit("SET_country", value);
      },
    },
  },
};
</script>

<style lang="scss">
.modal-overlay {
  z-index: -100;
  padding: 50px 0px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: black;
  opacity: 0;
  transition: 0.2s ease-in-out;
  &.active {
    z-index: 20000;
    opacity: 1;
  }
}
.modal-window {
  transition:0.3s;
  height: 100%;
  max-width: 680px;
  color: white;
  margin: 0 auto;
  opacity: 1;
  &.active{
    opacity: 0;
  }
  
  
}
.succes{
    position: absolute;
    margin-top:-50px;
    top:50%;
    width: 100%;
    opacity: 0;
    transition:.3s ease-in;
    &.active{
    opacity: 1;
    }
    .succes-content{
     
      height: 100px;
      position: relative;
     }
      h3{
        font-weight: 800;
        font-size: 30px;
        line-height: 113.22%;
        text-align: center;
        color: #FFFFFF;
      }
      h2{font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #6C6C6C;}
     .succes-ico{
       margin: 0 auto;
       width: 30px;
       height: 20px;
       border-bottom:5px solid green;
       border-left:5px solid green;
       transform: rotate(-45deg);
       margin-bottom: 20px;
     }
}
.modal-header {
  // border:1px solid white;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
}
.modal-title {
  font-weight: 800;
  font-size: 30px;
  line-height: 113.22%;
}
.modal-close {
  cursor: pointer;
}

.item-close {
  width: 25px;
  height: 3px;
  margin-top: 12.5+7.5px;
  transition: 0.2s ease-in-out;
  background: #6c6c6c;
  &.a {
    position: absolute;
    transform: rotate(135deg);
  }
  &.b {
    transform: rotate(45deg);
  }
}
.modal-close:hover {
  .item-close {
    background: white;
  }
}
.modal-content {
  padding: 35px 0;
  // border: 1px solid white;
}
.modal-footer {
  // border: 1px solid white;
  height: 80px;
  width: 100%;
}
.input-form {
  // border:1px solid green;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  &.for-checkbox {
    height: 40px;
  }
}
</style>