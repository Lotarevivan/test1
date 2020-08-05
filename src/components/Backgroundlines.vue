<template>
<div>
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
    <div class="line line4"></div>
    <div class="line line5"></div>
    <div class="line line6"></div>
    <div class="line line7"></div>
</div>   
</template>

<script>
export default {

}
</script>

<style lang="scss">
.line{
  position: absolute;
  z-index: -10;
  &.line1{
    background: url('../assets/img/svg/line1.svg') no-repeat; 
    width: 3193.31px;
    height: 239.02px;
    left: -11px;
    top: 319px;
    
    }
  &.line2{
    background: url('../assets/img/svg/line2.svg') no-repeat;
    width: 2095.84px;
    height: 201.05px;
    left: -3.5px;
    top: 368.29px;
    }
  &.line3{
    background: url('../assets/img/svg/line3.svg') no-repeat;
    width: 2176.61px;
    height: 214.04px;
    left: -18px;
    top: 418.97px;
    }
      &.line4{
    background: url('../assets/img/svg/line4.svg') no-repeat;
    width: 2251.5px;
    height: 256.02px;
    left: -10px;
    top: 2895px;
    }
      &.line5{
    background: url('../assets/img/svg/line5.svg') no-repeat;
    width: 2055.91px;
    height: 203.85px;
    left: -48.57px;
    top: 3031.29px;
    }
      &.line7{
    background: url('../assets/img/svg/line7.svg') no-repeat;
    width: 2176.61px;
    height: 214.04px;
     left: -14px;
    top: 4030.97px;
    }
       &.line6{
    background: url('../assets/img/svg/line6.png') no-repeat;
    width: 2176.61px;
    height: 313.53px;
    left: 75px;
    top: 3360.97px;
    z-index:20;
     }
}

</style>