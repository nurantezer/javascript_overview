// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------
// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem

const names = ["emir", "oğuzhan", "levent", "tarık"]

console.log(names)
//? 4 (names dizisinin length propertisine erişiyoruz)
//* non-rimitive verilerde özellikler olabilir ve bunlara erişim . nokta
//* notasyonu ile olabilir.
console.log(names.length)

const x = 5.234 //? primitive
console.log(x.toFixed(2)) //? object wrapper sayesinde
//? Primitive'lerde normal sartlarda property olmaz.

//? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
//? primitive verileri bir obje sarmlayicisi ile sarmalar.

console.log(typeof names)//? Js de array aslında object dediğimiz base objecten
//? türetilmiştir.

const emptArr = []
console.log(emptArr)

// ! 2.Yöntem (Object Constructor)

const codingLangs = new Array("C", "C++", "JS", "GO")
console.log(codingLangs)

const numbers = new Array(3, 2, 1)
console.log(numbers) //? (3) [3, 2, 1]

const number1 = new Array(10) //*demekki bellekte on tane boş bir yer ayır
console.log(number1)

// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3)
console.log(number2) //?(3) [1, 2, 3]

const numbers3 = Array.of(5)
console.log(numbers3) //? [5]

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

const names1 = ["emir", "oğuzhan", "levent", "tarık", "Sabata", "Mehtap", "Rose"]
console.log(names1[1])// oğuzhan
const tarık = names1[3]
console.log(tarık)// tarık

//? Dizinin en son elamanını okumak istiyoruz
console.log(names1[5])  //? hard-code

const lastEl = names1[names1.length - 1]
console.log(lastEl)// rose

//? Alternatif olarak at() metodu
console.log(names1.at(-1))
console.log(names1.at(-2))

