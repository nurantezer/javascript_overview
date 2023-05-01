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

// n2 = n2 + 1
console.log(n2); //!Asignment to constant variable.
 

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

let num1 = 5
let num2 = 10
let result = num1 + num2
console.log(++result);

//! JS ilk kez görmüş olduğu countu bir değişken olarak tanımladı
count = 55  //! var olarak tanımladı
console.log(count);
count = 22
console.log(count);

//? ===================  VAR ===========================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.

var x = 11
console.log(x);

//? Cesitli blok (scope) ornekleri
// if () {
//     let x = 5
// } else {
//     x
// }

// for () {
//     const y=4
// }
// console.log(y);


//? Bir block oluşturduk. Blok denilince if-else,
//? switch-case, fonksiyon vb. yapilarin ic alani dusunulebilir.
{
   //! Burası local bir alandır
    let a = 2
    const b = 3
    console.log(a,b);
}
//! a ve b alanda tanımlı değildir
// console.log(a, b); //! error

{
   //! Burası local bir alandır
    var c = 99 //? var ile tanımlanan bir değişken hep global olur
    console.log(c);
    
}
console.log(c);

//? Her hangi bir bloğun dışı global alandir
var varNumber = 1; //* Global degiskenler
let letNumber = 2;

{
  varNumber = 11; //* Global degiskenlere veri yaziyoruz
  letNumber = 22;
}
//* Global degiskenleri okuyoruz.
console.log(varNumber, letNumber);

console.log("**********************");

//*Global degiskenler
var varNumber1 = 3;
let letNumber1 = 4;
{
  var varNumber1 = 33;
  let letNumber1 = 44; //! yeni bir local degisken olsuturduk
  console.log(letNumber1); //! local degiskeni okuduk
}

//* Global degiskenleri okuyoruz
console.log(varNumber1, letNumber1);