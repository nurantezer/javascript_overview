//*Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.

const str1 = `clarusway`
const str2 = ` hello`
const str3 = `world`

console.log(typeof str1)
const str4 = str1 + str2
console.log(str4)

console.log(str4.concat(str3)) //*birleştirme yapar clarusway helloworld
const str5 = new String(`Non-primitive String`)//object
console.log(str5, typeof str5)
//*Normalde primitive veri tiplerinin property veya metodu olmaz. Ancak
//*javascript otomatik olarak primitive stringler için object wrapper
//*oluşturur.

//!concat()-immutable
const s1 = "hello"
const s2 = "world"
const s3 = s1.concat(s2)
console.log(s3) //helloworld
console.log(s3.concat("clarusway", str2, "merhaba"))//helloworldclarusway hellomerhaba
console.log(s2, s3)

//!charAt
console.log(s3.charAt())//0.indexi getirdi -h-
console.log(s3.charAt(4))//o
console.log(s3.charAt(s3.length - 1))//d

//!includes() - case sensetive
const word = "to be or not to be, this is the question"
console.log(word.includes("to be"))//true
console.log(word.includes("That"))//false
console.log(word.includes(""))//true
console.log(word.includes(`to be`, 13))//true 13ten sonra to be

//!indexOf() lastIndexOf() - case sensetive
const tobeIndex = word.indexOf(`or`) 
console.log(tobeIndex)//6
console.log(word.indexOf(`be`))//baş -3-
console.log(word.lastIndexOf(`be`))//en son 16
console.log(word.lastIndexOf(`BE`))//-1 bulamadığı zaman döndürüyor

//!startWith(), endWith() - case sensetive
const word2 = "Salına salına sinsice :!"
console.log(word2.startsWith("sa"))//false
console.log(word2.startsWith("sa", 7))//true
console.log(word2.endsWith(`!`))//true



