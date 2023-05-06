//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******")
//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33]

//let i = 0 indis 0 dan başlar
let sum = 0
for (let i = 0; i < grades.length; i++){
    sum += grades[i]
}
console.log((sum / grades.length).toFixed(2))

//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.