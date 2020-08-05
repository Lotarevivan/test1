<template>
    <div class="card__container">
        <img :src="`${imgUrl}`" :alt="`${alt}`">        
            <h3 class="card__title" v-html="title"></h3>
             <h4 class="card__description" v-if="description.length" v-html="description"></h4>
            <div class=logo-line>
                <img  v-for="item in logoUrl" :key="item.url"
                :src="`${item.url}`" :alt="`${item.alt}`">
            </div>
    </div>
</template>

<script>
export default {
    // Компонент для отрисовки карточек

    props:{
            imgUrl:{ // Основная картинка
                type:String, 
                default:'../assets/img/svg/card1.png'
            },
            alt:{// Альт текст
             type:String,
             default:'card1'
            },
            title:{// Заголовок
                type:String,
                default:'',
            },
            description:{// Описание
                type:String,
                default:``
            },
            logoUrl:{// Массив с логотипами
                type:Array,
                   default() {
                   return []
            }
            }

    }

}
</script>

<style lang="scss">
.card__container{
    max-width: 33%;
    min-width: 281px;
}
.card__container img{
    max-width: 281px;
    height: auto;
    margin-bottom: 20px;
}

.card__container .card__title{
    max-width: 281px;
    margin-bottom: 7px;
    font-size: 18px;
    line-height: 23px;  
}
.card__container  .card__description{
    max-width: 281px;
    font-size: 14px;
    line-height: 20px;
    color: #6C6C6C;   
}

.logo-line{
    margin-top:25px;
}
.logo-line img {
    margin-bottom:25px;
    margin-right: 20px;
    min-height: 30px;
    width: auto;
    vertical-align: bottom;
}
.get__card_container_item img{
    width: 588px;
    height: 376px;
}
</style>