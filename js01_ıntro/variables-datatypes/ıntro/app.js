console.log("***** Data Types *****");

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

const fs = "Cohort 13"
console.log(fs)

const sayi = 20
console.log(sayi)
console.log(typeof sayi)


const sayi1 = "33" //Tirnak içindekiler string(text) olarak atanır
console.log(sayi1)
console.log(typeof sayi1)


// sayi = 88 //!Assignment to constant variable.


// const pi; //! Missing initializer in const
pi = 3.14
 
const s1 = "hello "
const s2 = "fs13"
console.log(s1 + s2);//? String Concationation
// JS default olarak + operatöründe eğer değişkenlerden en az birisi
//string ise bunları birbirine ekler

const n1 = "5"
const n2 = 10
console.log(n1 + n2);//? String Concationation

//! Ayni alan (scope) icerisinde ayni isimle yeniden degisken tanimlanamaz.
// const n1 = 5;

// n2 = n2 + 1; //! error

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil = "javascript"
console.log(dil);

dil = "java"
console.log(dil);

dil = true
console.log(dil, typeof dil); 

dil = 3.14
console.log(dil, typeof dil);

let cohort;
console.log(cohort); //* undefined(tanımsız, type'ı yok)

cohort = 3
console.log(typeof cohort); //? number

// let cohort = "fs13" //!SyntaxError: Identifier 'cohort' has already been declared (at app.js:60:5)
//! Ayni alan (scope) icerisinde ayni isimle yeniden degisken tanimlanamaz.

