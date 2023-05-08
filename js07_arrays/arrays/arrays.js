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

//!  Diziye veri yazma
//const değiştirilemezdi ama stackte değil heapte yaptığımız için izin veriyor
names1[2] = "Levent"
// names1[2] = names1[2].toUpperCase()
//? assigning yapildiginda etki eder.
console.log(names1)


//! Identifier 'names' has already been declared
// const names = ["ismet", "canan"]

// names = ["ismet", "canan"] //! Assignment to constant variable.Çünkü
//!adresini değiştirmeye çalışıyorsun.Const adresin değişilmezliğini garanti ediyor

//! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tutulan adresinin degistirilmesini engeller.

//! Diziler farkli veri tiplerini bir arada saklayabilir.
const ageArr = [22, 44, 55]
const people = ["John", "Vermont", new Date().getFullYear() - 1990, true, ageArr]

console.log(people)

console.log(people[4])// [22, 44, 55]

console.log(++people[4][1])// 45
console.log(ageArr)
ageArr[0]--

console.log(people)// 21


//! Bir dizi icerisine baska bir diziyi koyarsak aslinda dizinin
//! tum verileri kopyalanmaz sadece o dizinin refransi konulur.
//! Dolayisiyla disarida bu dizideki bir degisikli diger dimizie de yansir.
//! Cunku JS cogu durumda sig (shallow copying) yapar.

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================
//*Bir classa, objeye ait olan fonksiyonlara method denir.

//** pop() son elemani siler ve sildigi elemani dondurur.
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
console.log(cars.pop())
console.log(cars)

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
cars.push("Lexus")
console.log("LEN:", cars.push("Lexus"))
console.log(cars)

// cars.push = "hyundai" //? diziye yeni bir properyt(degisken) eklendi
// console.log(cars)
// console.log(cars.push)

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

console.log(cars.unshift("Togg"))
console.log(cars)

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
console.log(cars.shift())
console.log(cars)

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

cars.splice(1, 0, "VW")
console.log(cars) //?(5) ['BMW', 'VW', 'Mercedes', 'Fiat', 'Lexus']

cars.splice(3, 1, "Maseratti")
console.log(cars)

//* Dizinin tamamini ters siraya cevirir.
cars.reverse()
console.log(cars)

//*sort() Diziyi alfabetik olarak siralar.
//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.

cars.sort() //? text'leri mantikli bir sekilde siralar
console.log(cars)

const numbers4 = [2, 3, 22, 1, 5, 7, 6]
numbers4.sort() //? Siralama yanlis cikabilir.
console.log(numbers4)

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.

numbers4.sort((a, b) => a - b)
console.log(numbers4) //?(7) [1, 2, 3, 5, 6, 7, 22]

numbers4.sort((a, b) => b - a)
console.log(numbers4) //?(7) [22, 7, 6, 5, 3, 2, 1]

//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================
console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3]

//* includes()
//*-----------------------------------------------------------
console.log(numbers.includes(4))// false
console.log(numbers.includes("4"))// true

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.
console.log(numbers.indexOf(3))// 0
console.log(numbers.lastIndexOf(3))// 9
console.log(numbers.lastIndexOf(7)) //? -1

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.
const strNumbers = numbers.join()
// const strNumbers = numbers.join("-")
console.log(strNumbers)// 3,5,2,4,four,3,4,bes,1,3

let data = [3, 1, 5, 7, 8, 910, 22, 3]

//sort mutator olduğu için direk değiştirir ama joıni görebilmek için
//bir değişkene atmam gerekti
data = data.sort((a, b) => b - a).join(" ")
console.log(data)

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.Parametre almaz ("-")
console.log(numbers.toString())//3,5,2,4,four,3,4,bes,1,3

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
console.log(cars.slice(2, 3))//(2) ['Fiat']
console.log(cars.slice(2))// (2) ['Fiat', 'Anadol']
//! Tek rakam baslangic anlamina gelir ve sonuna kadar alir.
console.log(cars)//dizinin orjinali aynı kalır

const newCars = cars.slice(3,4)
console.log(newCars, cars)// ['Anadol'] (4) ['BMW', 'Mercedes', 'Fiat', 'Anadol']

//* concat()
//*--------------------------------------------------------

const message = ["The weather", "is", "very", "nice"]
const now = [new Date().toLocaleString()]
console.log(now)// ['06.05.2023 09:31:15']

const concattedMsg = message.concat(now, "JS Arrays", [["1,3,4"]])
console.log(concattedMsg)