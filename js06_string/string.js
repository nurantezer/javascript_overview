//*Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.

const str1 = `clarusway`
const str2 = ` hello`
const str3 = `world`

console.log(typeof str1)
const str4 = str1 + str2
console.log(str4)

console.log(str4.concat(str3)) //*birleştirme yapar clarusway helloworld
const str5 = new String(`Non-primitive String`)//!object
console.log(str5, typeof str5)
//*Normalde primitive veri tiplerinin property veya metodu olmaz. Ancak
//*javascript otomatik olarak primitive stringler için object wrapper 
//*oluşturur.