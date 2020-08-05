<template>
  <section class="section_card">
       <div class="wrapper">
         <div class="card-image"></div>
         <div class="main__title">
           <h1  class="main__title_h1">Твоя премиум карта</h1>
           <h2 class="main__title_h2_gray">Лучшая карта для любителей путешествий</h2>
         </div>
          <div class="bonus__greed">
              <div class="item-header">11%</div>
              <div class="item-distance"></div>
              <div class="item-header">0%</div>
              <!-- grid-separator -->
              <div></div><div></div><div></div>
              <!-- grid-separator -->
              <div class="item-description">Вернем <br> за покупки милями</div>
              <div class="item-distance"></div>
              <div class="item-description">Бесплатное снятие наличных по всему миру</div>
              <!-- grid-separator -->
              <div></div><div></div><div></div>
              <!-- grid-separator -->
              <div class="item-header">7%</div>
              <div class="item-distance"></div>
              <div class="item-header">0р</div>
              <!-- grid-separator -->
              <div></div><div></div><div></div>
              <!-- grid-separator -->
              <div class="item-description">До 7% <br> на остаток <br>по счету</div>
              <div class="item-distance"></div>
              <div class="item-description">Бесплатное годовое обслуживание</div>
        </div>
         <button class="button__normal" @click="OpenModal">Заказать сейчас</button>
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

}
</script>

<style lang="scss">
.main__title{
	position: relative;
	width: 735px;	
    top: 222px;
    margin-bottom: 305px;
    

}
.main__title_h1{
    margin-top: -7px;
	font-size: 96px;
	line-height: 109px;
	font-weight: 800;
    color: white;
}
.main__title_h2_gray{
	margin-top: -70px;
	margin-left:330px;
	position: absolute;
	width: 303px;
	height: 61px;
	font-size: 24px;
	line-height: 30px;
	font-weight: 800;
	color: #6C6C6C;
}

.card-image{
	position: relative;
	width: 1409px;
	height: 897px;
	left: 302px;
	top: 240px;
	background: url('../assets/img/svg/card_big.svg') no-repeat;
	margin-bottom:-897px;
}
.bonus__greed{
    position: relative;
	display: grid;
	grid-template-columns: 110px 42px 127px;
	grid-auto-rows: 28px 12px 60px 36px;
	margin-bottom: 69px;
}
.bonus__greed .item-header{
	font-weight: bold;
	font-size: 36px;
	color: #C0965C;
}
.bonus__greed .item-description {
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	color: #6C6C6C;
}

</style>