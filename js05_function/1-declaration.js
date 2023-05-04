// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*****************************************/

//? Declaration
function printHello() {
    console.log("Hello")
}

printHello() //! invoke, call

//* ORNEK2:
//*****************************************/

// function greet(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName}`)
// }

// //? invoke examples
// greet("Sabata", "2288")
// greet("Sercan", 'Yılmaz')
// greet("Nuran", "Tezer")

// const name = prompt("your name:")
// const surname = prompt("your surname")
// greet(name, surname)  //*pass by value değişkenin isminin bir önemi yok
//                       //*önemli olan value
// //? js de fonksiyonlar parameterlere degiskenleri degil onlarin degerlerinin aktarir.
// // !greet(lastName, firstName)

// greet("Ahmet")
// greet("Mehmet")

// //! Bir parametreyi cagirma sirasinda kullanmaz isek onun
// //! yerine default parametre atayabiliriz. Ornekteki lastName
// //! parametresi icin default değer olarak '' atanmistir.
// function greet(firstName, lastName= "") {
    
// }

//* ORNEK3:
//******************************************/

// function calculate(name, yob) {
//     const age = new Date().getFullYear() - yob
//     console.log(`${name}'s age is ${age}`)
// }

// calculate("elif", 2000)


function calculate(name, yob) {
    const age = new Date().getFullYear() - yob
    return`${name}'s age is ${age}`
}
//*return dedim ama bana direk birşey döndürmüyor niye çünkü bir
//*bir değişkene atayıp yazmadım.64,65 satırdaki gibi yazdırabilirim.

//? Ornek olmasi icin yazildi. return programdan ana programa dönmesi
// function x(s1, s2) {
//   return (s1 + s2) / (s1 * s2)
// }

const elif = calculate("elif", 2000)
console.log(elif)
console.log(calculate("Rose", 1990))

//* ORNEK4:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

function oddOrEven(num) {
    return num % 2 ? "ODD" : "EVEN" 
    // return num % 2 === 0 ? "EVEN" : "ODD"
}

  //? Alternative
  // let result
  // if (num % 2 === 0) {
  //   result = "EVEN"
  // } else {
  //   result = "ODD"
  // }
  // return result;
// }
const number = +prompt("Please enter a number to check odd or even")
const oddEven = oddOrEven(number)
console.log(`${number} is ${oddEven}`)
