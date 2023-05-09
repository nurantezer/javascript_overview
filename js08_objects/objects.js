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

const worker = {
    name: "Can",
    surname: "Canan",
    age: 33,
    languages: ["C++", "Go", "Java", "Javascript"],
    salary: 100000
}
console.log(worker)

//? write
worker.age += 1
console.log(worker)

worker["languages"].forEach((lang) => console.log(lang))

const upperCaseLangs = worker["languages"].map((lang) => lang.toUpperCase())
console.log(upperCaseLangs)

//? yeni bir property ve value eklenebilir.
worker.nationality = "T.C"
console.log(worker)

const person = worker //? Shallow Copying vs Deep Copying
person.dob = 2000

console.log({person})
console.log({ worker })

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker)) //? Deep Copy bellekte yeni bir yer ayırıyor
console.log(JSON.stringify(worker))

//* ======================================================
//*              Object Metotlari
//* ======================================================
const personel = {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    salary: 10000,
    job: "developer",
    drivingLicence: false,
    calculateAge: function () {
      return new Date().getFullYear() - this.dob
    },
    summary: function () {
      return `${this.name} is ${this.calculateAge()} years old.`
    },
}

console.log(personel.dob)
console.log("AGE:",personel.calculateAge())

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e(yukarı bağlı) sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.
//! direk Allah'a bağlı
console.log(personel.dob)
console.log("AGE:", personel.calculateAge())
console.log(personel.summary())

//? nested
const people = {
    person1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    person2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    person3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
    person4: "JS",
  }
  
  //! ASSIGMENT
  //? person2'nin adini ve maasini yazdiriniz.
  console.log(people)
  console.log(people.person2.name)
  console.log(people.person2.salary)

  //? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)
  //! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }
// ;("strict")

for (let person in people) {
    console.log(person)
    console.log(people[person].salary)//bunlar person1 person2 person değil direk
    console.log(people[person].name)
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

//? Object methods
console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))

for (let key of Object.keys(people)) {
    console.log(key)
}

for (let v of Object.values(people)) {
    console.log(v)
}

for (let [k,v] of Object.entries(people)) {
    console.log("KEY:", k, "VALUE:", v.job)
}

//! ARRAY METOTLARI ILE
console.log("*********")
Object.keys(people).forEach((p) => console.log(p))
console.log("*********")

Object.values(people).forEach((p) => console.log(p.name))

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//? job'i developer olanlarin dob degerlerini yazdiriniz.
console.log("*****")

// const devs = Object.values(people).filter((p) => p.job === "developer")
//console.log(devs)
Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob))

console.log("*****")
const dobs = Object.values(people)
  .filter((p) => p.job === "developer")
  .map((p) => p.dob) //? (2) ['1990', '2000']

console.log(dobs)