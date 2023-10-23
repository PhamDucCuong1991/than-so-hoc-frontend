<template>
  <div id="app">
<!--    <video autoplay muted loop id="video-background">-->
<!--      <source src="assets/video/gfp-astro-timelapse.mp4" type="video/mp4">-->
<!--    </video>-->
    <HelloWorld/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Đảm bảo video hiển thị đầy đủ kích thước và không bị cắt */
  z-index: -1; /* Đặt vị trí z-index thấp hơn để video làm nền */
}
</style>
