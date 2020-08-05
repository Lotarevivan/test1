<template>
  <div class="content-container">
  <modal href="modal"/>
  <div class="sidebar"  :class="{ 'open': SideBar }" >
        <ul>
          <li><a href="#">Какие преимущества</a></li>
          <li><a href="#">Что вы получаете</a></li>
          <li><a href="#">Еще сюрпризы</a></li>
          <li><a href="#">Вакансии</a></li>
          <li><a href="/">Оформить карту</a></li>
      <div class="foother-contacts sidebar_contacts">
        <h3 class="title">По России</h3>
        <h3 class="phone">8 800 950 6570</h3>
        <h3 class="title">По Миру</h3>
        <h3 class="phone">8 800 950 6570</h3>
      </div>
        </ul>
    </div>
         
      <div class="wrapper">
        <customheader 
          @toggleSidebar='OpensIdebar'
          ></customheader>
           </div>
    <main class="main"  :class="{ 'active': SideBar }">
  
 
      <!-- //Передаем id елемента в компонент который хотим отрисовать при попадании в зону видимости-->
      <elementdraw :id_element="'section-card'"> </elementdraw>
      <section-card id="section-card"></section-card>
   
      


      <elementdraw :id_element="'benefits'"> </elementdraw>
      <section-benefits id='benefits'></section-benefits>
      <!-- ===== -->
      <elementdraw :id_element="'benefits-cards'"> </elementdraw>
      <section class="benefits_cards" id='benefits-cards'>
        <div class="wrapper">
          <h2 class="main__title_h2">Мы позаботились, чтобы вы получили</h2>
          <div class="card_contaier_wrapper">
              <card  v-for="item in Cards" :key="item.title"
              :imgUrl="item.imgUrl"
              :alt="item.alt"
              :title="item.title"
              :description="item.description"
              :logoUrl="item.logoUrl"
              > </card>
          </div>
        </div>
      </section>
      <!-- ===== -->
       <elementdraw :id_element="'personal__assistant'"> </elementdraw>
        <section class="personal__assistant"  id='personal__assistant'>
        <div class="wrapper">
          <h2 class="main__title_h2">Персональный помощник</h2>
          <h3 class="main__title_h3_white">Бесплатно для владельцев <span class="orange">CARD PLUS</span></h3>
          <div  class="personal__assistant_container">
            <div class="personal__assistant_img"></div>
            <div class="personal__assistant_info">
                <table class="table-section">
                  <tr  v-for="item in Assistans" :key="item.src">
                    <td class="personal__assistant_info_element_img">
                      <img :src="`${item.src}`" :alt="`${item.alt}`">
                    </td>
                    <td>
                        <div class="personal__assistant_info_element_text" v-html="item.title">
                        </div>
                    </td>
                  </tr>
                </table>
            </div>
          </div>
        </div>
      </section>

      <section-get-card id='section-get-card'></section-get-card>
      <elementdraw :id_element="'section-get-card'"> </elementdraw>

      <customfooter></customfooter>
      <backgroundlines/>
    </main>
    </div>
</template>

<script>
import Card from './Card'
import Customheader from './Customheader'
import SectionCard from './SectionCard'
import SectionBenefits from './SectionBenefits'
import SectionGetCard from './SectionGetCard'
import Customfooter from './Customfooter'
import Elementdraw from './Elemetdraw' 
import Backgroundlines from './Backgroundlines'
import Modal from './Modal'
export default {
  components:{
     Card,
     Customheader,
     SectionCard,
     SectionBenefits,
     SectionGetCard,
     Customfooter,
     Elementdraw,
     Backgroundlines,
     Modal
  },
  data :()=>{
    return{
      SideBar:false,
      Cards:[
        //1
        {
          imgUrl:require('@/assets/img/svg/card1.png'),
          alt:"card1",
          title:'Бесплатный безлимитный интернет в роуминге',
          logoUrl:[{
          url:require('@/assets/img/svg/megafon_logo.svg'),
          alt:'megafon'  
          },    {
            url:require('@/assets/img/svg/tele2_logo.png'),
            alt:'tele2'  
          },
          {
            url:require('@/assets/img/svg/mtc_logo.png'),
            alt:'mtc'  
          },    
          {
            url:require('@/assets/img/svg/beeline _logo.png'),
            alt:'"beeline'  
          }
          ],
           description:''
        },
        //2
          {
          imgUrl:require('@/assets/img/svg/card2.png'),
          alt:"card2",
          title:'Бесплатная упаковка багажа',
          description:'Держатели карт Visa Signature могут упаковать багаж в крупных аэропортах России'
        },
        //3
        {
          imgUrl:require('@/assets/img/svg/card3.png'),
          alt:"card3",
          title:'Бесплатный доступ <br> в приложении<br>  App In The Air',
          description:'Бесплатная премиум подписка при покупке авиабилетов <br> на travel.alfabank.ru'
        },
        //4
        {
          imgUrl:require('@/assets/img/svg/card4.png'),
          alt:"card4",
          title:'Такси бизнес-класса со скидкой 20%',
            logoUrl:[{
          url:require('@/assets/img/svg/wheely.png'),
          alt:'wheely'  
          },    {
            url:require('@/assets/img/svg/gett.png'),
            alt:'gett'  
          },
          ]
        },
        // 5
           {
          imgUrl:require('@/assets/img/svg/card5.png'),
          alt:"card5",
          title:'Скидка в ресторанах <br> Novikov Group<br> в аэропорту Шереметьево',
         
        },     
        // 6
              {
          imgUrl:require('@/assets/img/svg/card6.png'),
          alt:"card6",
          title:'Доступ в бизнес-залы <br> Priority Pass по всему миру',
        }, 
      ],
      Assistans:[
        {
          src:require('@/assets/img/svg/help_img1.svg'),
          alt:"help1",
          title:"Организует встречи, найдет гидов <br> и переводчиков"
        },
          {
          src:require('@/assets/img/svg/help_img2.svg'),
          alt:"help2",
          title:"Спланирует поездку <br> по самым интересным <br> местам вашего отдыха"
        },
          {
          src:require('@/assets/img/svg/help_img3.svg'),
          alt:"help3",
          title:"Достанет билеты<br> на мероприятия, даже <br> если их уже нет в продаже"
        },  {
          src:require('@/assets/img/svg/help_img4.svg'),
          alt:"help4",
          title:"Закажет столик  <br> в ресторане, клубе или кафе"
        }
      ]
    }
  },
  methods:{
    OpensIdebar :function(payload){
      this.SideBar=payload  
    }
  },
}
</script>

<style lang="scss">
.wrapper{
  margin:0 auto;
  height: 100%;	
  max-width: 1008px;
}
.main{
  margin:0 auto;
  height: 100%;	
  max-width: 1008px;
  transition: transform .3s;
  &.active{
    transform:translateX(100px)
  }
}
.sidebar{
  position: fixed;
  top: 0;
  left: -359px;
  width: 359px;
  height: 100%;
  z-index: 120;
  background: #1C1C1B;
  transition:.3s ease-in;
  &.open{
    left:0;
  }
}


.table-section{
	vertical-align: middle;
  margin-left: 156px;
  width: auto;
  height: 80%;
}
.table-section td{
  height:100px;
  vertical-align: middle;
}
.sidebar{
  padding: auto;
  ul{
    margin-left:99px;
    margin-top:93px;
   li>a{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
    text-decoration: none;
  }
 
  }
}
.sidebar_contacts{
  margin-top: 508px;
}

  
	
	

</style>
