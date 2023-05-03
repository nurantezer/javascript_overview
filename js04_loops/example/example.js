//* Soru-1 1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları
//* konsola yazınız

// for (let i = 1000; i < 2000; i++) {

//   if (i % 13 === 3) {
//     console.log(i);
//   }
// }

//*Soru-2) Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız.

// let sayac = 0
// let sum = 0
// while (sayac < 5) {
//     const sayi = Number(prompt("bir sayı giriniz"))
//     sum += sayi
//     sayac++
// }

// console.log(sum/5)

//*Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar
//*toplayan ve konsola yazdıran kodu yazınız.

// let sum = 0;
// let flag = true;

// while (flag) {
//   const sayi = +prompt("bir sayi giriniz");
//   if (sayi < 0) {
//     flag = false;
//   } else {
//     sum += sayi;
//   }
// }
// console.log(sum);

// let sum = 0
// while (true) {
//     const sayi = +prompt("bir sayi giriniz")

//     if (sayi < 0) {
//         break
//     }
//     sum += sayi
// }

// console.log(sum)

//* Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir
//*Ancak 3'ün katlarına gelince "fizz", 5'in katlarına gelince "buzz"
//*Hem 3'ün hemde 5'in katlarına gelince "fizzbuzz" yazdırmanız istenmektedir.

// for (let i = 1; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

//*Soru-5 bir sayının (number) basamak sayısını yazdıran kodu yazınız.

// let sayi = 123456789;
// let basamak = 0;

// while (true) {
//   sayi = Math.floor(sayi / 10);
//   basamak++;
//   if (sayi === 0) {
//     break;
//   }
// }
// console.log(basamak);

//*Soru-6
// *****
// *****
// *****
// *****
// *****

// let result = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

//*Soru-7 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini konsola yazdırınız ?  //0 1 1 2 3 5 8 13

// let n = Number(prompt('Sayı giriniz'))
// let n1 = 0
// let n2 = 1
// let count = 2
// let n3
// let result = ''
// result += n1
// result += ' ' + n2
// for (let i = 2; i < n; i++) {
//   n3 = n1 + n2
//   result += ' ' + n3
//   n1 = n2
//   n2 = n3
//   count++
// }

// console.log(result)

//*Soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
// O
// OO
// OOO
// OOOO
// OOOOO
// OOOOOO
// OOOOOOO
// let str = ''
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += 'O'
//   }
//   str += '\n'
// }
// console.log(str)

//*Soru-9 Aşağıdaki çıktıyı konsola yazdırınız ?
//    O
//   OOO
//  OOOOO
// OOOOOOO
// let str = ''
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i + j >= 8) {
//       str += 'O'
//     } else {
//       str += ' '
//     }
//   }
//   str += '\n'
// }
// console.log(str)

//*Soru-10 Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalmasini hesaplayarak yazdirmalidir.
// const n = Number(prompt("How many number will be inputted:"))
// let avarage

// for (let i = 1; i <= n; i++) {
//   const number = Number(prompt(`Please enter ${i}. number:`))
//   avarage += number
// }

// console.log(`Avarage: ${avarage / n}`)

//*Soru-11 Console'dan girilen taban ve pozitif us degerlerine gore
//* uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

const num = Number(prompt("Please enter the num:"))
const pow = Number(prompt("Please enter the positive power:"))
let result = 1

for (let i = 0; i < pow; i++) {
  result *= num
}

console.log(`${num}^${pow} = ${result}`)

