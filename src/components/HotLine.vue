<template>
  <!--hotline-->
  <div class="hotline-phone-ring-wrap">
    <div class="hotline-phone-ring">
      <div class="hotline-phone-ring-circle"></div>
      <div class="hotline-phone-ring-circle-fill"></div>
      <div class="hotline-phone-ring-img-circle">
        <a href="tel:0918362992" class="pps-btn-img" title="0918 362 992">
          <img src="src/assets/img/hotLine.png" alt="Gọi điện thoại"  class="lazyload">
        </a>
      </div>
    </div>
    <div class="hotline-bar">
      <a href="tel:0918362992" title="0918362992">
        <span class="text-hotline">0918 362 992</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotLine"
}
</script>

<style scoped>
.lazyload{
  width:22px;
  height:18px;
}
.hotline-phone-ring-wrap {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999999
}

.hotline-phone-ring {
  position: relative;
  visibility: visible;
  background-color: transparent;
  width: 110px;
  height: 110px;
  cursor: pointer;
  z-index: 11;
  -webkit-backface-visibility: hidden;
  transition: visibility .5s;
  right: 0;
  bottom: 0;
  display: block
}

.hotline-phone-ring-circle {
  width: 85px;
  height: 85px;
  top: 10px;
  left: 10px;
  position: absolute;
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid #e60808;
  -webkit-animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
  animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
  transition: all .5s;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  opacity: .5
}

.hotline-phone-ring-circle-fill {
  width: 55px;
  height: 55px;
  top: 25px;
  left: 25px;
  position: absolute;
  background-color: rgba(230, 8, 8, 0.7);
  border-radius: 100%;
  border: 2px solid transparent;
  -webkit-animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
  animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
  transition: all .5s;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%
}

.hotline-phone-ring-img-circle {
  background-color: #e60808;
  width: 33px;
  height: 33px;
  top: 37px;
  left: 37px;
  position: absolute;
  background-size: 20px;
  border-radius: 100%;
  border: 2px solid transparent;
  -webkit-animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
  animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center
}

.hotline-phone-ring-img-circle .pps-btn-img {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.hotline-phone-ring-img-circle .pps-btn-img img {
}

.hotline-bar {
  position: absolute;
  background: #2f8032;
  height: 40px;
  width: 00px;
  line-height: 40px;
  background-size: 100%;
  cursor: pointer;
  transition: all .8s;
  -webkit-transition: all .8s;
  z-index: 9;
  border-radius: 50px !important;
  right: 33px;
  bottom: 37px;
}

.hotline-bar > a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  text-indent: 15px;
  display: block;
  letter-spacing: 1px;
  line-height: 40px;
  font-family: Arial
}

.hotline-bar > a:hover, .hotline-bar > a:active {
  color: #fff
}

</style>