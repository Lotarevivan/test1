<template>
  <footer>
    <div class="wrapper">
      <div class="footer__section_logo">
        <img src="../assets/img/svg/logo-bottom.svg" alt="" />
        <div>АО «Кредит Европа Банк</div>
      </div>
      <div class="footer__section_links">
        <ul>
          <li><a href="#">О банке</a></li>
          <li><a href="#">Офисы и банкоматы</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Вакансии</a></li>
          <li><a href="#">Реализуемое имущество</a></li>
        </ul>
      </div>
      <div class="footer__section_links">
        <ul>
          <li><a href="#">Раскрытие информации </a></li>
          <li><a href="#">Ставки по вкладам</a></li>
          <li><a href="#">Условия и тарифы</a></li>
          <li><a href="#">Корпоративное управление</a></li>
          <li><a href="#">Карта сайта</a></li>
        </ul>
      </div>
      <div class="foother-contacts">
        <h3 class="title">По России</h3>
        <h3 class="phone">8 800 950 6570</h3>
        <h3 class="title">По Миру</h3>
        <h3 class="phone">8 800 950 6570</h3>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="scss">
footer {
  min-height: 210px;
  .wrapper{
    display: flex;
    justify-content:space-between;
    div{
      &:first-child{
        margin-left:-10%;
      }
    }
  }

}
.footer__section_logo {
  div{
    font-size: 14px;
    line-height: 26px;
    color: #BBBBBB;
  }
}
.footer__section_links{
  ul{
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
     a{
       text-decoration: none;
       color: #6C6C6C;
     }
  }
}
.foother-contacts{
  text-align: left;
  .title{
    font-size: 14px;
    line-height: 26px;
    color: #6C6C6C;
  }
   .phone{
    font-weight: 400;
    font-size: 24px;
    line-height: 45px;
    color: #BBBBBB;
  }
}
</style>
