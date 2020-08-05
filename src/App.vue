<template>
  <div id="app">
   <mainpage/>
  
  </div>
</template>

<script>

import Mainpage from './components/Mainpage'
export default {
  name: 'App',
  components: {
    Mainpage,
    
  }
}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
@import url('./assets/css/style.scss');

$maincolor: #0E0E0E;
$breakepoint_header:1780px;
html{
	overflow-x: hidden;
}
body{
  background: $maincolor
}

</style>
