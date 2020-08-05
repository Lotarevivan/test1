<template>
<section class="section__benefits">
        <div class="wrapper">
              <h2 class="main__title_h2">Путешествие мечты начинается с CARD PLUS</h2>
              <h3 class="main__title_h3">Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый пакет привилегий, необходимый для любого путешествия </h3>
              <div class="benefits__greed_4">
                <div>
                  <img src="../assets/img/svg/avia-tikets.svg" alt="Авиабилеты">
                </div>
                <div>
                  <img src="../assets/img/svg/airbus.svg" alt="Самолет">
                </div>
                <div>
                  <img src="../assets/img/svg/heart.svg" alt="Сердце">
                </div>
                <div>
                    <img src="../assets/img/svg/money.svg" alt="Деньги">
                </div>
                <div class="item-header">Билеты любых авиакомпаний  
                    <div class="item-description">Предложения от 300+ авиакомпаний,
                      185+ lowcost перевозчиков, 
                      чартеры от 60 крупных российскихтуроператоров
                    </div>
                </div>
                <div class="item-header">Мили больше <br> не сгорают
                    <div class="item-description">Мили, накопленные при оплате картой AlfaTravel,
                       не сгорают и остаются на вашем счете, пока вы не решите их потратить
                    </div>
                </div>
                <div class="item-header">Продвинутая страховка – бесплатно
                    <div class="item-description">
                       Расширенная страховка для всей семьи
                       с учетом экстремальных видов спорта и алкоголя
                    </div>
                </div>
                <div class="item-header">Доступ к счетам <br>в разных валютах
                    <div class="item-description">Текущие счета в рублях, долларах США,
                       евро, английских фунтах стерлингов и швейцарских франках открываются
                       в любой момент
                    </div>
                </div>
              </div>
        </div>
     </section>
</template>
<script>
export default {

}
</script>

<style lang="scss">
.main__title_h2{
	text-align: center;
	font-weight: bold;
	font-size: 30px;
	line-height: 38px;
	color: #FFFFFF;
}
.main__title_h3{
	text-align: center;
	max-width: 530px;
	font-size: 14px;
	font-weight: 500;
	margin:0 auto;
	line-height: 18px;
	color: #6C6C6C;
	margin-bottom:81px;
}
.benefits__greed_4 {
	display: grid;
	grid-template-columns: repeat(4,25%);
	column-gap: 15px;
	margin-bottom: 189px;
}
.benefits__greed_4 >div> img {
	width: 57px;
	height: auto;
	margin-bottom: 23px;
	
}
.benefits__greed_4 .item-header {
	max-width: 80%;
	font-weight: 700;
	font-size: 18px;
	line-height: 23px;
}

.benefits__greed_4 .item-description {
max-width: 97%;
margin-top: 18px;
font-size: 14px;
line-height: 20px;
color: #6C6C6C;
}
</style>