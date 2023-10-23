<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/pdf-preview">About</router-link>

    </div>
    <div>


      <div class="container mt-5">
        <div class="align-content-lg-center">

          <div class="container mt-5" align="center">
            <form id="form" class="col-lg-3">
              <div class="mb-3">
                <label for="name" class="form-label inline-label">Họ Và Tên:</label>
                <input type="text" class="form-control" id="name" placeholder="Nhập Họ và tên">
              </div>

              <div class="mb-3">
                <label for="birthday" class="form-label inline-label">Ngày Sinh:</label>
                <input type="text" class="form-control" id="birthday" placeholder="Ngày /tháng /năm sinh">
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-primary" v-on:click="handleClick">TÍNH TOÁN</button>
                <button type="button" class="btn btn-danger" v-on:click="deleteNumber">XÓA</button>
              </div>
            </form>
            <hr>
          </div>
          <div class="HienThiThongSo" style="margin-left: 850px">
            <div id="hienthiJs" align="left"></div>
            <div>Các nguyên âm là: {{ arrNguyenAm.join(', ') }}</div>
            <div>Các phụ âm là: {{ arrPhuAm.join(', ') }}</div>
          </div>
        </div>


        <div id="HTML_CODE1628" class='ladi-element'>
          <div class='ladi-html-code'><!-- 380 x 400 -->
            <h3 align="center" style="color: #842029">Con số cuộc đời</h3>
            <h3 align="center" style="color: #842029">{{ fullName }} {{ birthDay }}</h3>

            <div class="report-container index-list-frame">

              <div class="index-list" id="l-duongdoi">
                <div class="index-label">Đường&nbsp;đời</div>
                <div id="soDuongDoi" class="index-value">{{ duongDoi }}</div>
              </div>

              <div class="index-list" id="l-sumenh">
                <div class="index-label">Sứ&nbsp;mệnh</div>
                <div id="soSuMenh" class="index-value">{{ suMenh }}</div>
              </div>

              <div class="index-list" id="l-noitam">
                <div class="index-label">Linh Hồn</div>
                <div id="soLinhHon" class="index-value">{{ linhHon }}</div>
              </div>

              <div class="index-list" id="l-damMe">
                <div class="index-label">Đam mê</div>
                <div id="soDamMe" class="index-value">{{ soDamMe.join(', ') }}</div>
              </div>

              <div class="index-list" id="l-nhanCach">
                <div class="index-label">Nhân cách</div>
                <div id="soNhanCach" class="index-value">{{ nhanCach }}</div>
              </div>

              <div class="index-list" id="l-thaiDo">
                <div class="index-label">Thái độ</div>
                <div id="soThaiDo" class="index-value">{{ thaiDo }}</div>
              </div>

              <div class="index-list" id="l-ngaySinh">
                <div class="index-label">Ngày sinh</div>
                <div id="soNgaySinh" class="index-value">{{ ngaySinh }}</div>

              </div>

              <div class="index-list" id="l-tuDuyLyTri">
                <div class="index-label">Tư duy lý trí</div>
                <div id="soTuDuyLyTri" class="index-value">{{ tuDuyLyTri }}</div>
              </div>

              <div class="index-list" id="l-camXuc">
                <div class="index-label">Cảm xúc</div>
                <div id="soCamXuc" class="index-value">{{ soCamXuc }}</div>
              </div>

              <div class="index-list" id="l-trucgiac">
                <div class="index-label">Tư&nbsp;duy Trực&nbsp;giác</div>
                <div id="soTrucGiac" class="index-value">{{ soTrucGiac }}</div>
              </div>

              <div class="index-list" id="l-trainghiem">
                <div class="index-label">Tư&nbsp;duy Trải&nbsp;nghiệm</div>
                <div id="soTuDuyTraiNghiem" class="index-value">{{ soTuDuyTraiNghiem }}</div>
              </div>

              <div class="index-list" id="l-bosung">
                <div class="index-label">Bổ&nbsp;sung</div>
                <div id="soThieu" class="index-value">{{ soThieu.join(', ') }}</div>
              </div>

              <div class="index-list" id="l-nttt">
                <div class="index-label">Kết nối Linh hồn</div>
                <div id="soketNoiLH" class="index-value">{{ soKetNoiLinhHon }}</div>
              </div>

              <div class="index-list" id="l-ddsm">
                <div class="index-label">Kết&nbsp;nối Vận&nbsp;mệnh</div>
                <div id="soKetNoiVM" class="index-value">{{ ketNoiVanMenh }}</div>
              </div>
              <div class="index-list" id="l-canbang">
                <div class="index-label">Cân&nbsp;bằng</div>
                <div id="soCanBang" class="index-value">{{ canBang }}</div>
              </div>

              <div class="index-list" id="l-truongthanh">
                <div class="index-label">Trưởng&nbsp;thành</div>
                <div id="soTruongThanh" class="index-value">{{ truongThanh }}</div>
              </div>

              <div class="index-list" id="l-thangcanhan">
                <div class="index-label">Tháng cá&nbsp;nhân</div>
                <div id="soThangCaNhan" class="index-value">{{ thangCaNhan }}</div>
              </div>

              <div class="index-list" id="l-namcanhan">
                <div class="index-label">Năm cá&nbsp;nhân</div>
                <div id="soNamCaNhan" class="index-value">{{ namCaNhan }}</div>
              </div>


              <div class="index-list" id="l-soTuDuyLyTri">
                <div class="index-label">Tư duy lý trí</div>
                <div id="soTuDuyLyTri" class="index-value">{{ tuDuyLyTri }}</div>
              </div>

              <div class="index-list" id="l-sucManhTT">
                <div class="index-label">Sức mạnh tiềm thức</div>
                <div id="soSucManhTT" class="index-value">{{ sucManhTiemThuc }}</div>
              </div>

            </div>

          </div>

        </div>
        <div class="">
          <DinhCaoVaThachThuc
              :dinhCao="dinhCao"
              :thachThuc="thachThuc"
          />
        </div>
      </div>

      <div class="divCenter">

      </div>

      <div class="divRight">

      </div>
    </div>


  </div>
</template>

<script>
import DinhCaoVaThachThuc from "@/components/DinhCaoVaThachThuc";

export default {
  name: 'HelloWorld',
  components: {
    DinhCaoVaThachThuc,
  },
  props: {},
  data() {
    return {
      fullName: '',
      birthDay: '',
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
      sucManhTiemThuc: '',
      soCamXuc: '',
      soTrucGiac: '',
      ketNoiVanMenh: '',
      soKetNoiLinhHon: '',
      soTuDuyTraiNghiem: '',
      soThieu: [],
      arrNguyenAm: [],
      arrPhuAm: [],
      soDamMe: [],
      namCaNhan: '', // Ngày sinh + tháng sinh + năm hiện tại
      thangCaNhan: '', // Tháng hiện tại + năm cá nhân
      dinhCao: {
        dinhCao1: '', // tháng sinh + ngày sinh += 9
        dinhCao2: '', // ngày sinh + năm sinh += 9
        dinhCao3: '', // dinh1 + dinh2 += 9
        dinhCao4: '', // tháng sinh + năm sinh
      },
      thachThuc: {
        thachThuc1: '', // ngày sinh - tháng sinh += 9
        thachThuc2: '', // ngày sinh - năm sinh += 9
        thachThuc3: '', // thachThuc1 - thachThuc 2 +=9
        thachThuc4: '', // tháng sinh - năm sinh
      }
    }
  },
  methods: {
    handleClick() {
      const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const ten = this.removeAccent(document.getElementById("name").value.trim().toUpperCase());
      this.fullName = ten;
      let ngaySinh = document.getElementById("birthday").value.trim();
      if (tachNgayThangNamTuChuoi(ngaySinh) == null) {
        alert("Định dạng ngày sinh không hợp lệ");
        return
      }
      this.birthDay = ngaySinh;
      let arrNa = [];
      let arrPa = [];
      let daySoCamXuc = [];
      let daySoTrucGiac = [];
      const arrNgaySinh = extractNumbers(ngaySinh);
      console.log('arrNgaySinh', arrNgaySinh)
      const arr = convertNameToNumbers(ten, str);

      displayResults(ten, ngaySinh, arr);
      nguyenPhuAm(ten); // Lấy ra mảng nguyên âm và phụ âm
      getDaySoCamXuc(ten); //Lấy ra mảng chữ số cảm xúc trong tên
      getDaySoTrucGiac(ten);  // Lấy ra mảng chữ số trực giác trong tên

      this.arrPhuAm = arrPa;
      this.arrNguyenAm = arrNa;
      this.duongDoi = getSum(arrNgaySinh);
      this.suMenh = getSum(arrPa);
      this.linhHon = getSum(arrNa);
      this.nhanCach = getTongPhuAmTrongHoVaTenDem(tachTenChiLayHoVaTenDem(ten, getLastWordNumbers(ten, str)));
      this.canBang = getSum(convertNameToNumbers(getInitials(ten), str));
      this.truongThanh = getSum(arrNgaySinh) + getSum(arrPa);
      this.ngaySinh = getBirthDayNumber(arrNgaySinh);
      this.thaiDo = getAttitudeNumber(arrNgaySinh);
      this.tuDuyLyTri = getBirthDayNumber(arrNgaySinh) + getDestinyNumber(getLastWordNumbers(ten, str));
      this.vanMenh = getDestinyNumber(getLastWordNumbers(ten, str));
      this.soThieu = getMissingNumbers(arr);
      this.sucManhTiemThuc = 9 - this.soThieu.length;
      this.soCamXuc = getSum(daySoCamXuc);
      this.soTrucGiac = getSum(daySoTrucGiac);
      this.namCaNhan = namCaNhanHienTai();
      this.thangCaNhan = thangCaNhan(this.namCaNhan);
      this.ketNoiVanMenh = (Math.abs(this.duongDoi - this.suMenh)) % 9 || 9;
      this.soDamMe = getDaySoDamMe(arr);
      this.soKetNoiLinhHon = soKetNoiLinhHon(this.arrNguyenAm, this.arrPhuAm);
      this.soTuDuyTraiNghiem = getSoTuDuyTraiNghiem(ten);

      this.dinhCao.dinhCao1 = getSum(arrNgaySinh.slice(0, arrNgaySinh.length - 4));
      this.dinhCao.dinhCao2 = getSoDinhCao2(arrNgaySinh);
      this.dinhCao.dinhCao3 = (this.dinhCao.dinhCao1 + this.dinhCao.dinhCao2) % 9 || 9;
      this.dinhCao.dinhCao4 = getSum(arrNgaySinh.slice(2, arrNgaySinh.length));

      this.thachThuc.thachThuc1 = (Math.abs(tachNgayThangNamTuChuoi(ngaySinh).ngay_sinh - tachNgayThangNamTuChuoi(ngaySinh).thang_sinh)) % 9 || 9;
      this.thachThuc.thachThuc2 = (Math.abs(tachNgayThangNamTuChuoi(ngaySinh).ngay_sinh - tachNgayThangNamTuChuoi(ngaySinh).nam_sinh)) % 9 || 9;
      this.thachThuc.thachThuc3 = (Math.abs(this.thachThuc.thachThuc1 - this.thachThuc.thachThuc2)) % 9 || 9;
      this.thachThuc.thachThuc4 = (Math.abs(tachNgayThangNamTuChuoi(ngaySinh).thang_sinh - tachNgayThangNamTuChuoi(ngaySinh).nam_sinh)) % 9 || 9;


      function displayResults(name, birthDay, nameNumbers) {
        const el = document.getElementById("hienthiJs");
        el.innerHTML = `
              <div>Dãy số Họ và tên: ${nameNumbers}</div>
              <div>Chữ cái đầu họ và tên: ${getInitials(name)} (${convertNameToNumbers(getInitials(name), str)})</div>
              <div>Chữ số trong Tên là: ${getLastWordNumbers(name, str)}</div>
            `;
      }

      function extractNumbers(value) {
        return (value.match(/[0-9]/g) || []).map(Number);
      }

      function convertNameToNumbers(name) {
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


      function getSumOnly(arr) {
        return arr.reduce((acc, curr) => (acc + curr) % 9, 0) || 9;
      }

      function getSum(arr) {
        const sum = arr.reduce((acc, curr) => (acc + curr) % 9, 0);
        return (sum === 11 || sum === 22 || sum === 33) ? sum : (sum || 9);
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

      function nguyenPhuAm(name) {
        const abc = name.replace(/\s/g, '');
        for (let i = 0; i < abc.length; i++) {
          if (abc[i] === "A" || abc[i] === "E" || abc[i] === "I" || abc[i] === "O" || abc[i] === "U") {
            arrNa.push(str.indexOf(abc[i]) % 9 + 1);
          } else {
            arrPa.push(str.indexOf(abc[i]) % 9 + 1);
          }
        }
      }

      function getDaySoCamXuc(name) {
        const abc = name.replace(/\s/g, '');
        for (let i = 0; i < abc.length; i++) {
          if (abc[i] === "I" || abc[i] === "O" || abc[i] === "R" || abc[i] === "Z" || abc[i] === "B" || abc[i] === "S" || abc[i] === "T" || abc[i] === "X") {
            daySoCamXuc.push(str.indexOf(abc[i]) % 9 + 1);
          }
        }
      }

      function getDaySoTrucGiac(name) {
        const abc = name.replace(/\s/g, '');
        for (let i = 0; i < abc.length; i++) {
          if (abc[i] === "K" || abc[i] === "F" || abc[i] === "Q" || abc[i] === "U" || abc[i] === "Y" || abc[i] === "C" || abc[i] === "V") {
            daySoTrucGiac.push(str.indexOf(abc[i]) % 9 + 1);
          }
        }
      }

      function getSoTuDuyTraiNghiem(name) {
        const abc = name.replace(/\s/g, '');
        let soTuDuyTraiNghiem = [];
        for (let i = 0; i < abc.length; i++) {
          if (abc[i] === "E" || abc[i] === "W" || abc[i] === "D" || abc[i] === "M") {
            soTuDuyTraiNghiem.push(str.indexOf(abc[i]) % 9 + 1);
          }
        }
        if (soTuDuyTraiNghiem.length === 0) {
          return 1;
        }
        return getSum(soTuDuyTraiNghiem);
      }

      function namCaNhanHienTai() {
        let currentDate = new Date();
        let dateString = currentDate.toISOString().slice(0, 10);
        let characters = dateString.replace(/-/g, '').split('');
        const a = characters.map(char => parseInt(char));
        return getSumOnly(a)
      }

      function thangCaNhan(namCaNhan) {
        let currentDate = new Date();
        let month = currentDate.getMonth() + 1; // Lưu ý: tháng trong JS bắt đầu từ 0
        const monthChars = month.toString().split('');
        const sumOfMonthChars = monthChars.map(char => parseInt(char)).reduce((acc, val) => acc + val, 0);
        return (sumOfMonthChars + namCaNhan) % 9 || 9;
      }


      function getDaySoDamMe(arr) {
        let numCount = {}; // Đếm số lần xuất hiện của từng số
        let maxCount = 0; // Số lần xuất hiện nhiều nhất
        let mostFrequentNumbers = []; // Mảng chứa các số lặp lại nhiều nhất
        for (let num of arr) {
          if (numCount[num]) {
            numCount[num]++;
          } else {
            numCount[num] = 1;
          }
          maxCount = Math.max(maxCount, numCount[num]);
        }

        for (let num in numCount) {
          if (numCount[num] === maxCount) {
            mostFrequentNumbers.push(Number(num)); // Chuyển số về kiểu number (nếu cần)
          }
        }

        return mostFrequentNumbers;
      }

      function soKetNoiLinhHon(arrNguyenAm, arrPhuAm) {
        return (Math.abs(getSum(arrNguyenAm) - getSum(arrPhuAm))) % 9 || 9;
      }

      function getSoDinhCao2(arr) {
        let phanDau = arr.slice(0, 2); // Lấy phần tử từ đầu đến vị trí thứ 1 và 2
        let phanCuoi = arr.slice(4);   // Lấy phần tử từ vị trí thứ 4 trở đi
        // Nối hai phần lại thành một mảng mới
        let ketQua = phanDau.concat(phanCuoi);
        return getSum(ketQua)
      }

      function tachNgayThangNamTuChuoi(ngaySinh) {
        // Tạo một mảng các biểu thức chính quy cho các định dạng khác nhau
        const regexPatterns = [
          /\d{2}\/\d{2}\/\d{4}/, // DD/MM/YYYY
          /\d{2}-\d{2}-\d{4}/, // DD-MM-YYYY
          /\d{2}\*\d{2}\*\d{4}/ // DD*MM*YYYY (ví dụ)
        ];

        let ketQua = null;
        // Lặp qua từng biểu thức chính quy để kiểm tra định dạng
        for (const pattern of regexPatterns) {
          const matches = ngaySinh.match(pattern);
          if (matches) {
            ketQua = matches[0];
            break; // Dừng khi tìm thấy định dạng hợp lệ đầu tiên
          }
        }
        if (ketQua) {
          // Tách ngày, tháng và năm từ chuỗi kết quả
          const parts = ketQua.split(/\/|-|\*/); // Phân tách bằng /, - hoặc *

          if (parts.length === 3) {
            return {
              ngay_sinh: parseInt(parts[0]),
              thang_sinh: parseInt(parts[1]),
              nam_sinh: parseInt(parts[2])
            };
          }
        } else {
          return null;
        }
      }

      function tachTenChiLayHoVaTenDem(originalArray, paramArray) {
        return originalArray.slice(0, originalArray.length - paramArray.length);
      }

      function getTongPhuAmTrongHoVaTenDem(paramArray) {
        let result = [];
        for (let i = 0; i < paramArray.length; i++) {
          if (paramArray[i] === "A" || paramArray[i] === "E" || paramArray[i] === "I" || paramArray[i] === "O" || paramArray[i] === "U") {
            result.push(str.indexOf(paramArray[i]) % 9 + 1)
          }
        }
        return getSum(result)
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
