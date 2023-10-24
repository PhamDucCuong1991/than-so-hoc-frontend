<template>
  <div class="container">
    <div class='ladi-html-code'>
      <div class="report-process">
        <div class="report-process-range">
          <div class="report-process-top">
            <div id="s_sochang1_1" class="index-value">1</div>
          </div>
          <div class="report-process-mid">
            <div id="dinhCao-1" class="index-value">{{ dinhCao.dinhCao1 }}</div>
          </div>
          <div class="report-process-bottom">
            <div id="s_sothachthuc1_1" class="index-value">1</div>
          </div>
          <!--                    thêm ô thách thức-->
          <div class="report-process-mid">
            <div id="thachThuc-1" class="index-value">{{thachThuc.thachThuc1}}</div>
          </div>
        </div>

        <div class="report-process-range">
          <div class="report-process-top">
            <div id="s_sochang2_1" class="index-value">2</div>
          </div>
          <div class="report-process-mid">
            <div id="dinhCao-2" class="index-value">{{ dinhCao.dinhCao2 }}</div>
          </div>
          <div class="report-process-bottom">
            <div id="s_sothachthuc2_1" class="index-value">2</div>
          </div>
          <!--                    thêm ô thách thức-->
          <div class="report-process-mid">
            <div id="thachThuc-2" class="index-value">{{thachThuc.thachThuc2}}</div>
          </div>
        </div>

        <div class="report-process-range">
          <div class="report-process-top">
            <div id="s_sochang3_1" class="index-value">3</div>
          </div>
          <div class="report-process-mid">
            <div id="dinhCao-3" class="index-value">{{ dinhCao.dinhCao3 }}</div>
          </div>
          <div class="report-process-bottom">
            <div id="s_sothachthuc3_1" class="index-value">3</div>
          </div>
          <!--                    thêm ô thách thức-->
          <div class="report-process-mid">
            <div id="thachThuc-3" class="index-value">{{thachThuc.thachThuc3}}</div>
          </div>
        </div>

        <div class="report-process-range">
          <div class="report-process-top">
            <div id="s_sochang4_1" class="index-value">4</div>
          </div>
          <div class="report-process-mid">
            <div id="dinhCao-4" class="index-value">{{ dinhCao.dinhCao4 }}</div>
          </div>
          <div class="report-process-bottom">
            <div id="s_sothachthuc4_1" class="index-value">4</div>
          </div>
          <!--                    thêm ô thách thức-->
          <div class="report-process-mid">
            <div id="thachThuc-4" class="index-value">{{thachThuc.thachThuc4}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DinhCaoVaThachThuc",
  props:{
    dinhCao:{},
    thachThuc: {}
  }
}
</script>

<style scoped>

</style>