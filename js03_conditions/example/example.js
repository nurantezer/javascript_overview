//*Soru-1 Bir sayının tek mi çift mi olduğunu consola yazdıran koşulu yazınız

const sayi = 33

if (sayi % 2 === 0) {
    console.log(`${sayi} bir çift sayıdır`)
} else if(sayi % 2 === 1 || -1) {
    console.log(`${sayi} bir tek sayıdır`)
}