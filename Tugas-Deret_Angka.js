function deret(n) {
    var angka = " ";
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            angka += "NIO "
        } else if (i % 5 === 0) {
            angka += "MIC "
        } else {
            angka += i + " "
        }
    }
    return angka
}
console.log(deret(19));