<template>
  <div>
    <div>
      <div class="divLeft">
        <div id="HTML_CODE1628" class='ladi-element'>
          <div class='ladi-html-code'><!-- 380 x 400 -->
            <h2 align="center">Con số cuộc đời</h2>
            <div class="report-container index-list-frame">

              <div class="index-list" id="l-duongdoi">
                <div class="index-label">Đường&nbsp;đời</div>
                <div id="s_soduongdoi_1" class="index-value">{{duongDoi}}</div>
              </div>

              <div class="index-list" id="l-sumenh">
                <div class="index-label">Sứ&nbsp;mệnh</div>
                <div id="s_sosumenh_1" class="index-value">{{suMenh}}</div>
              </div>

              <div class="index-list" id="l-noitam">
                <div class="index-label">Linh Hồn</div>
                <div id="s_sonoitam_1" class="index-value">{{linhHon}}</div>
              </div>

              <div class="index-list" id="l-noicam">
                <div class="index-label">Đam Mê</div>
                <div id="s_sonoicam_1" class="index-value"></div>
              </div>

              <div class="index-list" id="l-tuongtac">
                <div class="index-label">Nhân cách</div>
                <div id="s_sotuongtac_1" class="index-value">{{nhanCach}}</div>
              </div>

              <div class="index-list" id="l-thaido">
                <div class="index-label">Thái độ</div>
                <div id="s_sothaido_1" class="index-value">{{thaiDo}}</div>
              </div>

              <div class="index-list" id="l-ngaysinh">
                <div class="index-label">Ngày sinh</div>
                <div id="s_songaysinh_1" class="index-value">{{ngaySinh}}</div>

              </div>

              <div class="index-list" id="l-logic">
                <div class="index-label">Tư duy Logic</div>
                <div id="s_sologic_1" class="index-value">{{tuDuyLyTri}}</div>
              </div>

              <div class="index-list" id="l-camxuc">
                <div class="index-label">Tư&nbsp;duy Cảm&nbsp;xúc</div>
                <div id="s_socamxuc_1" class="index-value"></div>
              </div>

              <div class="index-list" id="l-trucgiac">
                <div class="index-label">Tư&nbsp;duy Trực&nbsp;giác</div>
                <div id="s_sotrucgiac_1" class="index-value"></div>
              </div>

              <div class="index-list" id="l-trainghiem">
                <div class="index-label">Tư&nbsp;duy Trải&nbsp;nghiệm</div>
                <div id="s_sotrainghiem_1" class="index-value"></div>
              </div>

              <div class="index-list" id="l-bosung">
                <div class="index-label">Bổ&nbsp;sung</div>
                <div id="s_sobosung_1" class="index-value">{{soThieu.join(', ')}}</div>
              </div>

              <div class="index-list" id="l-nttt">
                <div class="index-label">Kết&nbsp;nối Linh&nbsp;hồn</div>
                <div id="s_nttt_1" class="index-value"></div>
              </div>

              <div class="index-list" id="l-ddsm">
                <div class="index-label">Kết&nbsp;nối Vận&nbsp;mệnh</div>
                <div id="s_ddsm_1" class="index-value"></div>
              </div>
              <div class="index-list" id="l-canbang">
                <div class="index-label">Cân&nbsp;bằng</div>
                <div id="s_socanbang_1" class="index-value">{{canBang}}</div>
              </div>

              <div class="index-list" id="l-truongthanh">
                <div class="index-label">Trưởng&nbsp;thành</div>
                <div id="s_sotruongthanh_1" class="index-value">{{truongThanh}}</div>
              </div>

              <div class="index-list" id="l-thangcanhan">
                <div class="index-label">Tháng cá&nbsp;nhân</div>
                <div id="s_thangcanhan_1" class="index-value"></div>
              </div>

              <div class="index-list" id="l-namcanhan">
                <div class="index-label">Năm cá&nbsp;nhân</div>
                <div id="s_namcanhan_1" class="index-value"></div>
              </div>


              <div class="index-list" id="l-soTuDuyLyTri">
                <div class="index-label">Tư duy lý trí</div>
                <div id="soTuDuyLyTri" class="index-value">{{tuDuyLyTri}}</div>
              </div>

              <div class="index-list" id="l-sucManhTT">
                <div class="index-label">Sức mạnh tiềm thức</div>
                <div id="soSucManhTT" class="index-value"></div>
              </div>

              <div class="index-list" id="l-changduongdoi">
                <div class="index-label">Đỉnh cao&nbsp;</div>
                <div id="s_sochangfull_2" class="index-value"></div>
              </div>

              <div class="index-list" id="l-thachthuc">
                <div class="index-label">Thách thức &nbsp;</div>
                <div id="s_sothachthucfull_2" class="index-value"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div class="divCenter">
       <div class="align-content-lg-center">

         <div class="container mt-5" align="center">
           <form id="form" class="col-lg-3">
             <div class="mb-3">
               <label for="name" class="form-label">Họ Và Tên:</label>
               <input type="text" class="form-control" id="name" placeholder="Nhập Họ và tên">
             </div>
             <div class="mb-3">
               <label for="birthday" class="form-label">Ngày Sinh:</label>
               <input type="text" class="form-control birthday" id="birthday" placeholder="Ngày tháng năm sinh">
             </div>
             <div class="text-center">
               <button type="button" class="btn btn-primary" v-on:click="handleClick">TÍNH TOÁN</button>
               <button type="button" class="btn btn-danger" v-on:click="deleteNumber">XÓA</button>
             </div>
           </form>
         </div>
         <div class="HienThiThongSo" style="margin-left: 850px">
           <div id="hienthiJs" align="left"></div>
         </div>
       </div>
     </div>

      <div class="divRight">

      </div>
    </div>


  </div>
</template>

<script>
// import moment from "moment";
export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      duongDoi: '',
      suMenh: '',
      linhHon: '',
      nhanCach: '',
      canBang: '',
      truongThanh: '',
      ngaySinh: '',
      thaiDo: '',
      tuDuyLyTri: '',
      vanMenh: '',
      soThieu:[],
    }
  },
  methods: {
    handleClick() {
      const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const ten = this.removeAccent(document.getElementById("name").value.trim().toUpperCase());
      let ngaySinh = document.getElementById("birthday").value.trim();
      const arrNgaySinh = extractNumbers(ngaySinh);
      const arr = convertNameToNumbers(ten, str);

      displayResults(ten, ngaySinh, arr);

      this.duongDoi = getSum(arrNgaySinh);
      this.suMenh = getSum(arr);
      this.linhHon = getSum(getVowelNumbers(ten, str));
      this.nhanCach = getSum(getConsonantNumbers(ten, str));
      this.canBang = getSum(convertNameToNumbers(getInitials(ten), str))
      this.truongThanh = getSum(arrNgaySinh) + getSum(arr)
      this.ngaySinh = getBirthDayNumber(arrNgaySinh)
      this.thaiDo = getAttitudeNumber(arrNgaySinh)
      this.tuDuyLyTri = getBirthDayNumber(arrNgaySinh) + getDestinyNumber(getLastWordNumbers(ten, str))
      this.vanMenh = getDestinyNumber(getLastWordNumbers(ten, str))
      this.soThieu = getMissingNumbers(arr)

      function displayResults(name, birthDay, nameNumbers) {
        const el = document.getElementById("hienthiJs");
        el.innerHTML = `
              <div>Xin chào: ${name}</div>
              <div>Ngày sinh: ${birthDay}</div>
              <div>Dãy số Họ và tên: ${nameNumbers}</div>
              <div>Chữ cái đầu họ và tên: ${getInitials(name)} (${convertNameToNumbers(getInitials(name), str)})</div>
              <div>Chữ số trong Tên là: ${getLastWordNumbers(name, str)}</div>
            <div>Các nguyên âm là: ${getVowelNumbers(name, str)} </div>
            <div>Các phụ âm  là: ${getConsonantNumbers(name, str)} </div>`;
      }


      function extractNumbers(value) {
        return (value.match(/[0-9]/g) || []).map(Number);
      }

      function convertNameToNumbers(name, str) {
        return [...name].filter(c => c !== ' ').map(c => (str.indexOf(c) % 9) + 1);
      }

      function getMissingNumbers(arr) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !arr.includes(n));
      }

      function getInitials(name) {
        return name.split(' ').map(word => word[0]).join('');
      }

      function getLastWordNumbers(name, str) {
        const lastWord = name.split(' ').pop();
        return convertNameToNumbers(lastWord, str).filter(n => n !== 0);
      }

      function getVowelNumbers(name, str) {
        return convertNameToNumbers(name, str).filter(n => ["A", "E", "I", "O", "U"].includes(name[n - 1]));
      }

      function getConsonantNumbers(name, str) {
        return convertNameToNumbers(name, str).filter(n => !["A", "E", "I", "O", "U"].includes(name[n - 1]));
      }

      function getSum(arr) {
        return arr.reduce((acc, curr) => (acc + curr) % 9, 0) || 9;
      }

      function getBirthDayNumber(arr) {
        return (arr[0] + arr[1]) % 9 || 9;
      }

      function getAttitudeNumber(arr) {
        return getSum(arr.slice(0, arr.length - 4));
      }

      function getDestinyNumber(arr) {
        return getSum(arr);
      }
    },


    deleteNumber() {
      document.getElementById("name").value = "";
      document.getElementById("birthday").value = "";
      document.getElementById("hienthiJs").value = "";
    },
    removeAccent(str) {
      str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      str = str.replace(/Đ/g, "D").replace(/đ/g, "d");
      return str;
    },
  }


}

</script>


<style scoped>

</style>
