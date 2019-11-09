//Soal Seleksi Bootcamp No. 3

function thirdHighest(arr) {
    if (arr.length >= 3) {
        sortedArr = arr.sort(function(firstNum, secondNum) { return firstNum < secondNum })
        return sortedArr[2]
    } else if (arr.length < 3) {
        return 'Minimal array length is 3!'
    } else {
        return 'Parameter should be an array!'
    }
}
