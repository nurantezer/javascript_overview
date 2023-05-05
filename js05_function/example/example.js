//*Soru-1) Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız
//*(celsius*9/5)+32 = Fahrenheit
//*console.log(calFahrenheit(30)) // output : 86

function calFahrenheit(cel) {
    const fahr = cel * (9/5) + 32
    return cel + ` derece` + " " + fahr + " fahrenheit'a eşittir"
}
console.log(calFahrenheit(65))
