export default new class NumericalCalculation{

     extractNumbers(value) {
        return (value.match(/[0-9]/g) || []).map(Number)
    }

     convertNameToNumbers(name, str) {
        return [...name].filter(c => c !== ' ').map(c => (str.indexOf(c) % 9) + 1);
    }

     getMissingNumbers(arr) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !arr.includes(n));
    }

     getInitials(name) {
        return name.split(' ').map(word => word[0]).join('');
    }

     getLastWordNumbers(name, str) {
         let lastWord;
         lastWord = name.split(' ').pop();
        return this.convertNameToNumbers(lastWord, str).filter(n => n !== 0);
    }

     getVowelNumbers(name, str) {
        return this.convertNameToNumbers(name, str).filter(n => ["A", "E", "I", "O", "U"].includes(name[n - 1]));
    }

     getConsonantNumbers(name, str) {
        return this.convertNameToNumbers(name, str).filter(n => !["A", "E", "I", "O", "U"].includes(name[n - 1]));
    }

     getSum(arr) {
        return arr.reduce((acc, curr) => (acc + curr) % 9, 0) || 9;
    }

     getBirthDayNumber(arr) {
        return (arr[0] + arr[1]) % 9 || 9;
    }

     getAttitudeNumber(arr) {
        return this.getSum(arr.slice(0, 4));
    }

     getDestinyNumber(arr) {
        return this.getSum(arr);
    }

}