//*Soru-1 Bir sayının tek mi çift mi olduğunu consola yazdıran koşulu yazınız

// const sayi = 33

// if (sayi % 2 === 0) {
//     console.log(`${sayi} bir çift sayıdır`)
// } else if(sayi % 2 === 1 || -1) {
//     console.log(`${sayi} bir tek sayıdır`)
// }

//*Soru-2 Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran
//*ternary yapııyı yazınız

// const sayi = 555

// 0 < sayi && sayi < 100 ?  console.log('sağlar') : console.log('sağlamaz')

//*Soru-3 18 yaşından büyüklerin oy kullanabileceği 18 yaşından küçüklerin
//*oy kullanamayacağını ternary yaıi ile konsola yazdıran kodu yazınız

// const yas = 17

// yas < 18 ? console.log(`oy kullanamaz`) : console.log(`oy kullanabilir`);

// const cihaz = `desktop`;

// const isMobile = cihaz === `mobil` ? `mobile` : `mobile değil`;
// console.log(isMobile);


//* Soru-4 Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirlenen bir sayının hangi güne
//* karşılık geldiğini switch case yapı ile konsola yazdıran kodu yazınız.

//* pazar 0
//* pazartesi 1
//* salı 2
//* çarşamba 3
//* perşembe 4
//* cuma 5
//* cumartesi 6

// const gün = 2

// switch (gün) {
//     case 1:
//         console.log(`pazartes`)
//         break;
//     case 2:
//         console.log(`salı`)
//         break;
//     case 3:
//         console.log(`çarşamba`)
//         break;
//     case 4:
//         console.log(`perşembe`)
//         break;
//     case 5:
//         console.log(`cuma`)
//         break;
//     case 6:
//         console.log(`cumartesi`)
//         break;
//     case 0:
//         console.log(`pazar`)
//         break;

//     default:
//         console.log(`Lütfen doğru bir gün giriniz`)
//         break;
// }

//? Breakler kodun sırasıyla çalışmasını sağlıyor

//*Soru-5 Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız.
//*90'dan büyükse AA,
//*80'den büyük yada 90'a eşit ise AB,
//*70'den büyük yada 80'a eşit ise BB,
//*60'den büyük yada 70'a eşit ise BC,
//*50'den büyük yada 60'a eşit ise CC,
//*40'den büyük yada 50'a eşit ise CD,
//*30'den büyük yada 40'a eşit ise DD,
//*30'den küçük yada eşit ise FF,

// const not = 31

// if (not > 100 || not < 0) {
//     console.log(`Lütfen geçerli bir aralık giriniz`)
// } else if (not >= 90) {
//     console.log(`${not} puan AA`)
// } else if (not >= 80) {
//     console.log(`${not} puan BB`)
// } else if (not >= 70) {
//     console.log(`${not} puan BC`)
// } else if (not >= 60) {
//     console.log(`${not} puan CC`)
// } else if (not >= 50) {
//     console.log(`${not} puan CD`)
// } else if (not >= 40) {
//     console.log(`${not} puan DD`)
// } else if (not >= 30) {
//     console.log(`${not} puan FF`)
// }



//* Soru-6 Artık yıl sorusu
//* Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir.
//* Bu fazladan gün(artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.
//* Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//* Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa
//* ve yıl 400 sayısına tam bölünüyorsa artık yıldır.BU iki şartın dışında yılarda şubat ayı 28 gün
//* artık yıllarda 29 gün olarak belirlenir.

//* Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız

// const yil = +prompt('lütfen bir yıl giriniz')

// if (yil % 400 === 0) {
//     console.log(`${yil} artık yıldır`)
// } else if (yil % 4 === 0 && yil % 100 !== 0) {
//     console.log(`${yil} artık yıldır`)
// } else {
//     console.log(`${yil} artık yıl değildir`)
// }

//*Soru-7  kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız

// const yil = 2023;
// const ay = 1;

// if (ay == 2) {
//   if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) {
//     console.log(`${yil} yılını ${ay} ayı 29 çeker.`);
//   } else {
//     console.log(`${yil} yılını ${ay} ayı 28 çeker.`);
//   }
// } else if (
//   ay == 1 ||
//   ay == 3 ||
//   ay == 5 ||
//   ay == 7 ||
//   ay == 8 ||
//   ay == 10 ||
//   ay == 12
// ) {
//   console.log(`${yil} yılını ${ay} ayı 31 çeker.`);
// } else if (ay == 4 || ay == 6 || ay == 9 || ay == 11) {
//   console.log(`${yil} yılını ${ay} ayı 30 çeker.`);
// }

//*Soru-8 Dört işlem hesap makinesi

// const num1 = Number(prompt("First Number:"))
// let operator = prompt("Operator: +,-,*,/:")
// const num2 = Number(prompt("Second Number:"))
// let result = 0
// if (operator === "+") {
//   result = num1 + num2
// } else if (operator === "-") {
//   result = num1 - num2
// } else if (operator === "*") {
//   result = num1 * num2
// } else if (operator === "/") {
//   result = num1 / num2
// } else {
//   console.log("Incorrect operator selection")
//   operator = null //! Yanlış operatör girilirse operatore null atiyor
// }

// if (operator) {
//   //!Eğer operator truty bir değerse sonucu göster, Null gibi falsy ise gösterme
//   console.log(`${num1} ${operator} ${num2} = ${result}`)
// }


//*Soru-9 Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre
//* çıktı veren kodu switch-case yapısı ile yazınız.

//? Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//? Cuma -> Teamwork
//? Cumartesi ->  InClass + Workshop
//? Pazar -> Self-Study
//? Aksi takdirde -> Yanlis gun girildi.

// const day = prompt("Please select a day: ").toLowerCase() //! girilenleri küçük harfe çevir
// switch (day) {
//   case "monday":
//   case "thuesday":
//   case "wednesday":
//   case "thursday":
//     console.log("Inclass")
//     break
//   case "friday":
//     console.log("Teamwork")
//     break
//   case "saturday":
//     console.log("Inclass and workshop")
//     break
//   case "sunday":
//     console.log("Self study.")
//     break
//   default:
//     console.log("Incorrect day")
// }


