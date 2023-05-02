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

const yas = 17

yas < 18 ? console.log(`oy kullanamaz`) : console.log(`oy kullanabilir`);

const cihaz = `desktop`;

const isMobile = cihaz === `mobil` ? `mobile` : `mobile değil`;
console.log(isMobile);