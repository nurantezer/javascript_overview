// * =======================================================
// *             Karar Yapilari (Conditions)
// * =======================================================

console.log(" **** Conditions ****")

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const num = Number(prompt("Please enter a number:"))
// console.log(typeof num)

// if (num > 0) {
//     console.log(`${num} is positive`)
// } else if (num < 0) {
//     console.log(`${num} is negative`)
// } else {
//     console.log(`${num} is equal to zero`)
// }


//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

// const n1 = +prompt("Number1")
// const n2 = +prompt("Number2")
// const n3 = +prompt("Number3")

//* 1.Yöntem
// if (n1 >= n2 && n1 >= n3) {
//     console.log(`${n1} is biggest`)
// } else if(n2 >= n1 && n2 >= n3){
//     console.log(`${n2} is biggest`)
// } else if (n3 >= n1 && n3 >= n2) {
//     console.log(`${n3} is biggest`)
// }

//* 2.Yöntem
// let biggest = n1

// if (n2 >= biggest) {
//     biggest = n2
// }

// if (n3 >= biggest) {
//     biggest = n3
// }

// console.log(`${biggest} is biggest`)

//* 3.Yöntem

// console.log(`The Biggest: ${Math.max(n1, n2, n3)}`)


//? ORNEK3: kosullar birlestirilerek bir degiskene aktarilarak kullanilabilir.

const year = 11
const kidCount = 3
const graduate = true
const langCount = 5

const increase = year >= 10 && kidCount >= 2 && graduate == true && 
    langCount >= 2 

if (increase === true) {
        console.log("He or She deserve an increased salary")
}
//*iki şelilde de yazılabilir.
if (increase) {
        console.log("He or She deserve an increased salary")
}

//! && çarpma gibi || toplama gibi düşünülebilir

//**************** SWITCH-CASE *******************

console.log("-------------------------------------")
console.log(" ***** 4 Islem Hesap Makinasi ****** ")
console.log("-------------------------------------")
const s1 = Number(prompt("1.Sayiyi Giriniz:"))
const islem = prompt("Islemi giriniz: +,-,*, /")
const s2 = +prompt("2.Sayiyi Giriniz:")

let sonuc = 0

switch (islem) {
  case "+":
    sonuc = s1 + s2
    break
  case "-":
    sonuc = s1 - s2
    break
  case "*":
    sonuc = s1 * s2
    break
  case "/":
    sonuc = s1 / s2
    break
  default:
    alert("Yanlis islem girisi")
    break
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`)

//! ODEV2
//! Clarusway’deki haftalik ders ve etkinlik programinizi,
//! console’dan girilen gun degerine gore cikti veren kodu
//! switch-case yapisi ile yaziniz.

//! Program
//! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.