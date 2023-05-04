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

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName}`)
}

//? invoke examples
greet("Sabata", "2288")
greet("Sercan", 'Yılmaz')
greet("Nuran", "Tezer")

const name = prompt("your name:")
const surname = prompt("your surname")
greet(name, surname)  //*pass by value değişkenin isminin bir önemi yok
                      //*önemli olan value
//? js de fonksiyonlar parameterlere degiskenleri degil onlarin degerlerinin aktarir.
// !greet(lastName, firstName)

greet("Ahmet")
greet("Mehmet")

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.
function greet(firstName, lastName= "") {
    
}