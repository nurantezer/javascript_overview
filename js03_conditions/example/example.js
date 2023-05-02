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

const gün = 2

switch (gün) {
    case 1:
        console.log(`pazartes`)
        break;
    case 2:
        console.log(`salı`)
        break;
    case 3:
        console.log(`çarşamba`)
        break;
    case 4:
        console.log(`perşembe`)
        break;
    case 5:
        console.log(`cuma`)
        break;
    case 6:
        console.log(`cumartesi`)
        break;
    case 0:
        console.log(`pazar`)
        break;

    default:
        console.log(`Lütfen doğru bir gün giriniz`)
        break;
}

//? Breakler kodun sırasıyla çalışmasını sağlıyor


//* Soru-5 Artık yıl sorusu
//* Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. 
//* Bu fazladan gün(artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  
//* Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//* Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa
//* ve yıl 400 sayısına tam bölünüyorsa artık yıldır.BU iki şartın dışında yılarda şubat ayı 28 gün
//* artık yıllarda 29 gün olarak belirlenir.

//* Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız
