<template>
  <section class="get__card">
    <div class="wrapper">
      <h2 class="main__title_h2">Оформите свою новую карту для путешествий</h2>
      <div class="get__card_contaier_wrapper">
        <div class="get__card_greed">
          <div class="item-header">до 11%</div>
          <div class="item-distance"></div>
          <div class="item-header">до 11%</div>
          <div class="item-distance"></div>
          <div class="item-header">1=1</div>

          <div class="item-description">
            Милями за услуги, оплаченные на travel.ru
          </div>
          <div class="item-distance"></div>
          <div class="item-description">Милями за любые покупки по карте</div>
          <div class="item-distance"></div>
          <div class="item-description">
            Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 Р
          </div>
        </div>
      </div>
      <div class="get__card_container">
        <div class="get__card_container_item">
          <img src="../assets/img/svg/card_bottom.svg" alt="" />
        </div>
        <div class="get__card_container_item">
          <div class="card_select_area">
            <div class="card_select active">Кредитная карта</div>
            <div class="card_select">Дебетовая карта</div>
          </div>
          <button class="button__normal"  @click="OpenModal">Отправить заявку</button>
          <div class="card_cost_info">
            <div class="info_header">Стоимость карты в год (руб.)</div>
            <div class="info_description">6 490 (без пакета услуг),</div>
            <div class="info_header"></div>
            <div class="info_description">4 990 (с пакетом услуг</div>
            <div class="info_header">Приветственные мили (шт.)</div>
            <div class="info_description">1000</div>
            <div class="info_header">Мили за покупки</div>
            <div class="info_description">5%</div>
          </div>
          <a href="#" class="more_details">Все подробности</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    methods:{
    OpenModal: function(){
      this.$root.$emit('OpenModal')
    }
  }
};
</script>

<style lang="scss">
.get__card_contaier_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 86px;
}
.get__card_greed {
  margin: 0 auto;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 175px 110px 132px 110px 255px;
  margin-bottom: 69px;
  .item-header {
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #c0965c;
  }
  .item-description {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #6c6c6c;
  max-width: 255px;
 }

}
.get__card_container {
  font-weight: bold;
  margin-left: -10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 248px;

}
.card_select_area {
  margin-left: 113px;
  max-width: 352px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card_select {
  cursor: pointer;
  font-size: 18px;
  line-height: 23px;
  color: #6c6c6c;
    &:last-child {
        margin-bottom: 51px; 
    }
    &.active {
        color: #c0965c;
    }
}
.get__card_container_item .button__normal{
	margin-left: 110px;
	min-width:352px;
	margin-bottom: 63px;
}
.card_cost_info{
  font-size: 14px;
  line-height: 26px;
	margin-left:  110px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 27px;
	.info_header{
	min-width: 203px;
		color: #6C6C6C;
  }
  .info_description{
    margin: 0 0 0 25px;
    color:  #BBBBBB;
  }
}
.more_details{
  line-height: 26px;
  margin-left:  110px;
  color: #C0965C;
  text-decoration: none;
  border-bottom-style: dashed;
  border-bottom-color:#C0965C;
  border-bottom-width: 1px;
}

</style>
