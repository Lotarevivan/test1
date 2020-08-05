<template>
   <header class="header">
      
     <div class="wrapper">
       <div class="header__logo">
         <div class="sidebar__button" :class="{ 'active': OpenMarker }">
            <div class="burger" @click="OpenSidebar">
               <div class="bulk t" :class="{ 'active': OpenMarker }"></div>
               <div class="bulk m" :class="{ 'active': OpenMarker }"></div>
               <div class="bulk b" :class="{ 'active': OpenMarker }"></div>
            </div>

         </div>
         <a href="/">
          <img src="../assets/img/svg/logo_header.svg" alt="credit_bank">
          </a>
       </div>
       
      </div>
   </header>
</template>

<script>
export default {
    data :()=>{
      return{
        OpenMarker:false, 
      }
    },
   mounted(){
      document.addEventListener('scroll',()=>{
         const header=document.getElementsByClassName('header__logo')[0]
         header.classList.toggle('fixed',window.scrollY>76)
      })
      window.addEventListener("resize", ()=>{
           let w = document.documentElement.clientWidth;
         if(w<1550 &&this.OpenMarker){
         console.log(w<1550 &&this.OpenMarker)
            // this.OpenMarker=false
            this.OpenSidebar()
         }

      });



   },
   methods:{
      OpenSidebar: function(){
         this.OpenMarker=!this.OpenMarker
         this.$emit('toggleSidebar', this.OpenMarker)
      }
   }

}
</script>

<style lang="scss">
$breakepoint_header_X:1780px;
$breakepoint_header_L:1640px;
.header{
   padding-right: 200px;
   padding-top: 86px;
   height: 86px;	
	z-index: 100;
	top:0;
	left: 0;
   width: 100%;
   transition: .3s;
 
}
.sidebar__button{
   position: relative;
   transition:.3s;
   left:-100px;
    &.active{
      margin-left: 100px;
   }
   @media (max-width:$breakepoint_header_X) {
         left:-10px;
         }
   @media (max-width:$breakepoint_header_L) {
        
         }      
}

.header__logo{
   display: flex;
   justify-content: flex-start;
   transition: .2s ease-in;
   margin-left: -20px;
   &.fixed {
   position: fixed;
   padding: 10px 0px;
   width: 110%;
   z-index: 1000;
   background-color: #0E0E0E;

   @media (max-width:$breakepoint_header_X) {
         left: 0;
         padding-left:259px;
      }
   }
   
    @media (max-width:$breakepoint_header_X) {
         transition: none;
         left: 259px;
         padding-left:0px;
      }

    @media (max-width:$breakepoint_header_L){
         position: fixed;
         padding: 10px 0px;
         width: 110%;
         z-index: 1000;
         background-color: #0E0E0E;
         left: 0;
         padding-left:259px
         } 
  
   img {
   width: 296px;  
   height: 36px;
   left: 470px;
   }
   top:0;
}
.burger{
   cursor: pointer;
   width: 25px;
   height: 19px;
   padding-top:10px;
   transition: transform .3s;
   
   .bulk {
      height: 3px;
      background-color:#C0965C;
      margin-bottom: 3px;
      
      transition: transform .3s;
      &.t{
         transform-origin: 20% 10%;
         width: 100%;
         &.active{
            transform: rotate(45deg);
            transform-origin: 20% 10%;
         }
      }
      &.m{
         width: 70%;
         &.active{
             transform: scale(0);
         }
      }
      &.b{
         width: 100%;
         transform-origin: 10% 60%;
         margin-bottom: 0;
         &.active{
            transform: rotate(-45deg);
            
          
         }
      }
    
   }  &:hover{
        transform: scale(1.1);
      }
   
}
// media


</style>