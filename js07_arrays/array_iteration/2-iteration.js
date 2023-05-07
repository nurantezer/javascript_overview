//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89]
for (let price of prices) {
     console.log(price)
}

console.log("*****")
prices.forEach(price => console.log(price))
//*okur ama birşey döndürmez foreach içine gir oku yazdır amacı bu kadar

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
let sum = 0
prices.forEach(price => sum += price)

console.log("SUM:", sum)

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach(price => sum += price))//! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

let total = 0
prices.forEach((p,i, arr) => {
    total += p
    console.log(`${i + 1}.iteration: {total}`)
    arr[i] = Math.trunc(p * 1.1) 
})
console.log(prices)

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]
//n isimler valuelar
const upperNames = names.map((name) => name.toLocaleUpperCase())

console.log(upperNames)
console.log(names)

console.log(names.map((name) => name.toLocaleUpperCase()))

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23
const dolar = 18.19
const tlPrices = [100, 150, 100, 50, 80]

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)))
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))

console.log(euroPrices, dolarPrices)

//* =======================================
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const moreThan10000 = salaries.filter((s) => s >= 10000)
console.log(moreThan10000)

const range = salaries.filter((s) => s >= 6000 && s <= 20000)
console.log(range)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Inc = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))

console.log(lessThan9000Inc)

salaries
  .filter((x) => x < 9000)
  .map((x) => Math.trunc(x * 1.1))
  .forEach((x) => console.log(x))
//! ForEach terminal(bitirici) methodudur. Br deger dondurmedigi icin devamına baska fonksiyon getirlemez.

//* =======================================
//*             REDUCE METHOD
//* =======================================
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const totalSalary = salaries.reduce((t, s) => t + s)
// .forEach((x) => console.log(x)) //! salaries.reduce(...).forEach is not a function
console.log("TOTAL:", totalSalary)
//*Bize dizi değil değer döndürür o yüzden froEach almaz.Bu da bir terminal metodu

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfRaisedSalaries = salaries
  .filter((s) => s < 9000)
  .map((s) => s * 1.1)
  .reduce((t,s) => t + s,0)

console.log(sumOfRaisedSalaries)