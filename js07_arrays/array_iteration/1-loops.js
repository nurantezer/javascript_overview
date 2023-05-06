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
const arr = [-5, 15, 22, -4, 45, 78]

let negatives = []
let positives = []
for (let j = 0; j < arr.length; j++){
    if (arr[j] < 0) {
        negatives.push(arr[j])
    } else {
        positives.push(arr[j])
    }
}
console.log(negatives)
console.log(positives)
console.log(arr)


//* =========================================
//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
]

const findStudent = (name) => {
    let counter = 0
    for (let i in students) {
        if (name.toLowerCase() === students[i]) {
            counter++
        }
    }
    if (!counter) {
        return `${name} cannot be found`
    } else {
        return `${name} found ${counter} times`
    }
} 

console.log(findStudent("MeHmet"))
console.log(findStudent("ismet"))
console.log(findStudent("feyza"))


