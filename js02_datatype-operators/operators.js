// * =======================================================
// *                 ARITMETIK OPERATORLER
// * =======================================================

console.log(" **** Operators ****")

const cola = 20
const gumm = 5
const biscuits = 15

const totalPrice = cola + gumm + biscuits

// totalPrice++ //?hata verir consta sonradan değer atanamaz

console.log("TOTAL PRICE:", totalPrice);

//? + operatoru String Concatination islemi de yapar.
console.log("TOTAL PRICE:" + totalPrice); //? String Concatination

const comments = totalPrice + " TL"
console.log(comments);

const commets = 50 + 40 + "TL"
console.log(commets);

const firstName = "Ahmet"
const LastName = "Can"
console.log(firstName + " " + LastName);

const s1 = 5, s2 = "4", s3 = "three"
console.log(s1 + s2); //? 54
console.log(s1 - s2); //? 1
console.log(s1 - s3); //? NaN (Not A Number)
//! String ifadeyi numbera çevirmeye çalıştı fakat mümkün olmadığı için NaN
//! döndürdü

const difference = s1 - s3
console.log(difference, typeof NaN); //? NaN'in data type'ı number'dır

//* Bir islemin sonucunun NaN olup olmadigini anlamak icin isNaN() fonksiyonu kullanilabilir.
console.log(isNaN(difference)); //?true

// //? Ornek
// //?-----------------------
const yearOfBirth = 1990
const name = "Jane"
console.log(name + " is " + (2022 - yearOfBirth) + " years old");
console.log(name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old");

const date = new Date()
console.log(date);
