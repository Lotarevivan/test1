<template>
<div></div>
</template>

<script>
export default {
    props:{
        id_element:String,
    },
    methods:{
    Visible : function(target){

        var element=document.getElementById(target)
            target=element
  
        let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
   
            windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
            };

  if (targetPosition.bottom > windowPosition.top && // элемент виден сверху
    targetPosition.top < windowPosition.bottom && // элемент виден снизу
    targetPosition.right > windowPosition.left && //  элемент виден слева
    targetPosition.left < windowPosition.right) { //  элемент виден справа
     
      if(element){
          //анимация появления
          setTimeout(() => {
                element.style="display:none"
                element.style="opacity:1"
                element.style="transform:scale(1)"     
          }, 100);
      }
    } else {
          setTimeout(() => {
                element.style="display:block"
                element.style="opacity:0"  
                element.style="transform:scale(0.9)"    
          }, 100);
    }
}
    },
    mounted(){
    window.addEventListener('scroll', () =>{
    this.Visible (this.id_element);
    })
    this.Visible (this.id_element)
    }
}
</script>

