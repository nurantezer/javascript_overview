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