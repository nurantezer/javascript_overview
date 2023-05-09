//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********")

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatoru ile
//* ---------------------------------------------------------
const car = new Object()
car.brand = "Volvo"
car.model = "1990"
car.color = "egean blue"


const car2 = new Object()
car2.brand = "BMW"
car2.model = 2023
car2.color = "red"

console.log(car)
console.log(car.model) //?.notasyonu ile erişim 
console.log(car["color"]) //? square bracket ile erişim

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personel(id, ad, maas) {
    this.tc = id
    this.name = ad
    this.salary = maas
    console.log(this)//içinde bulunduğunuz objeyi temsil eder
}

const p1 = new Personel("1234567890", "Selim", 40000)
console.log(p1)
const p2 = new Personel("12348767890", "Levent", 50000)
console.log(p2)
const p3 = new Personel("12348767890", "Murat")
console.log(p3)

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder
console.log(this) //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir

// window.alert("Merhaba")
console.log(window.Personel)

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------