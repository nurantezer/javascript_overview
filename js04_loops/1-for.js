// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

//? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz.

// const n = Number(prompt("Enter a number"))

// let sum = 0      //*toplayacağımız değişkenleri aktarmak için

// for (let i = 1; i <= n; i++){
//     sum += i
// }
// console.log("SUM:", sum)

//? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

const num = Number(prompt("Enter a number"))

for (let j = 1; j <= num; j++) {
    const randomNumber = Math.round(Math.random() * 100)
    console.log(`${j}. random number:${randomNumber}`)
}
