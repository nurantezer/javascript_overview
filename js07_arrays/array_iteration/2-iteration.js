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
const upperNames = names.map((name) => n.toLocaleUpperCase())

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

