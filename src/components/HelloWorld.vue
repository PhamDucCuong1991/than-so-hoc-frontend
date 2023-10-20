<template>
  <div>
    <div>
      <div class="divLeft">

      </div>

      <div class="divCenter">

        <form id="form">
          <div>
            <ul class="formTen">
              <label>Họ Và Tên:</label>
              <input id="name" value="" placeholder="Nhập Họ Tên không dấu">
            </ul>
            <ul class="formNgaySinh" style="margin-top: 20px">
              <label>Ngày Sinh :</label>
              <input type="text" value="" class="birthday" id="birthday"><br><br>
              <div align="center">
                <button type="button"
                        v-on:click="handleClick"
                        id="show1"
                        class="show">TÍNH TOÁN
                </button>
                <button
                    type="button"
                    v-on:click="deleteNumber"
                    class="show">XÓA
                </button>
              </div>

            </ul>
          </div>
        </form>
        <div class="HienThiThongSo" style="margin-left: 850px">
          <div id="hienthiJs" align="left"></div>
        </div>
      </div>

      <div class="divRight">

      </div>
    </div>


  </div>
</template>

<script>
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
    }
  },
  methods: {
    handleClick() {
      const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const ten = this.removeAccent(document.getElementById("name").value.toUpperCase());
      const ngaySinh = document.getElementById("birthday").value;

      const arrNgaySinh = extractNumbers(ngaySinh);
      const arr = convertNameToNumbers(ten, str);

      displayResults(ten, ngaySinh, arr, arrNgaySinh);

      function displayResults(name, dob, nameNumbers, dobNumbers) {
        const self = this;
        const el = document.getElementById("hienthiJs");
        el.innerHTML = `
              <div>Xin chào: ${name}</div>
              <div>Ngày sinh: ${dob}</div>
              <div>Dãy số Họ và tên: ${nameNumbers}</div>
              <div>Số còn thiếu là: ${getMissingNumbers(nameNumbers)}</div>
              <div>Chữ cái đầu họ và tên: ${getInitials(name)} (${convertNameToNumbers(getInitials(name), str)})</div>
              <div>Chữ số trong Tên là: ${getLastWordNumbers(name, str)}</div>
            <div>Các nguyên âm là: ${getVowelNumbers(name, str)} </div>
            <div>Các phụ âm  là: ${getConsonantNumbers(name, str)} </div>
            <div>1. Số đường đời của bạn là: ${getSum(dobNumbers)} </div>
            <div>2. Số sứ mệnh của bạn là: ${getSum(nameNumbers)} </div>
            <div>3. Số linh hồn của bạn là : ${getSum(getVowelNumbers(name, str))} </div>
            <div>4. Số nhân cách của bạn là : ${getSum(getConsonantNumbers(name, str))} </div>
            <div>5. Số cân bằng của bạn là: ${getSum(convertNameToNumbers(getInitials(name), str))} </div>
            <div>6. Số Trưởng thành của bạn là : ${getSum(dobNumbers) + getSum(nameNumbers)} </div>
            <div>7. Số ngày sinh của bạn là: ${getBirthDayNumber(dobNumbers)} </div>
            <div>8. Số Thái độ của bạn là: ${getAttitudeNumber(dobNumbers)} </div>
            <div>9. Số Tư duy lý trí của bạn là : ${getBirthDayNumber(dobNumbers) + getDestinyNumber(getLastWordNumbers(name, str))} </div>
            <div>10. Số Vận mệnh của bạn là: ${getDestinyNumber(getLastWordNumbers(name, str))} </div>
        `;
        self.duongDoi = getSum(dobNumbers);
        self.suMenh = getSum(nameNumbers);
        self.linhHon = getSum(getVowelNumbers(name, str));
        self.nhanCach = getSum(getConsonantNumbers(name, str));
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
        return getSum(arr.slice(0, 4));
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
