//*Soru-1) Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız
//*(celsius*9/5)+32 = Fahrenheit
//*console.log(calFahrenheit(30)) // output : 86

function calFahrenheit(cel) {
    const fahr = cel * (9/5) + 32
    return cel + ` derece` + " " + fahr + " fahrenheit'a eşittir"
}
console.log(calFahrenheit(65))

//*Soru-2) Belirli bir string ifadenin tersini bulan fonksiyonu yazınız
//*console.log(reverseString('hello world)) // output: dlrow olleh

let str = 'Selamun Aleykum'

function reverseString(str) {
    let str2 = ''
    for (let i = str.length - 1; i >= 0; i--){
        str2 += str[i]
    }
    return str2
}

console.log(reverseString('hello world'))

//*Soru3 Belirli bir string ifadenin palindrome olup olmadığını bulan
//*fonksiyonu yazınız.(Büyük, küçük harf duyarlılığı olmamalıdır)Ayna
//*etkisi ile ortadan bölmesi
//*const string = 'selles'
//*console.log(isPalindrome(string)) // output: true

const string = 'seles'

function reverseString(str) {
  let str2 = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
}

const isPalindrome = function (string) {
    const reversed = reverseString(string)
    return reversed == string 
        ? `${string} bir palindrome`
        : `${string} palendrome değil`
}
console.log(isPalindrome(string))