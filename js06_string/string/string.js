//*Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.

const str1 = `clarusway`
const str2 = ` hello`
const str3 = `world`

console.log(typeof str1)
const str4 = str1 + str2
console.log(str4)

console.log(str4.concat(str3)) //*birleştirme yapar clarusway helloworld
const str5 = new String(`Non-primitive String`)//object
console.log(str5, typeof str5)
//*Normalde primitive veri tiplerinin property veya metodu olmaz. Ancak
//*javascript otomatik olarak primitive stringler için object wrapper
//*oluşturur.

//!concat()-immutable
const s1 = "hello"
const s2 = "world"
const s3 = s1.concat(s2)
console.log(s3) //helloworld
console.log(s3.concat("clarusway", str2, "merhaba"))//helloworldclarusway hellomerhaba
console.log(s2, s3)

//!charAt
console.log(s3.charAt())//0.indexi getirdi -h-
console.log(s3.charAt(4))//o
console.log(s3.charAt(s3.length - 1))//d

//!includes() - case sensetive
const word = "to be or not to be, this is the question"
console.log(word.includes("to be"))//true
console.log(word.includes("That"))//false
console.log(word.includes(""))//true
console.log(word.includes(`to be`, 13))//true 13ten sonra to be

//!indexOf() lastIndexOf() - case sensetive
const tobeIndex = word.indexOf(`or`) 
console.log(tobeIndex)//6
console.log(word.indexOf(`be`))//baş -3-
console.log(word.lastIndexOf(`be`))//en son 16
console.log(word.lastIndexOf(`BE`))//-1 bulamadığı zaman döndürüyor

//!startWith(), endWith() - case sensetive
const word2 = "Salına salına sinsice :!"
console.log(word2.startsWith("sa"))//false
console.log(word2.startsWith("sa", 7))//true
console.log(word2.endsWith(`!`))//true

//!replace(searchFor, replaceWith) -- immutable
//*let oku = `Oku Baban gibi ,saf olma`;
//* oku = oku.replace(`saf olma`,`akıllı ol`) let ile yeniden atama yapıp değiştirebilirim.
let oku = "Oku Baban gibi, saf olma"
console.log(oku.replace("saf olma", `akıllı ol`))//Oku Baban gibi, akıllı ol
oku = oku.replace(`saf olma`, `akilli ol`)
console.log(oku)//Oku Baban gibi, akilli ol

//*detaylı değiştirme alternatifleri için regex kullanılabilir
console.log(oku.replace(/AKILLI/i, `Zeki`))//Oku Baban gibi, Zeki ol

//!slice(beginIndex[, endIndex])
//!substring(beginIndex,[, endIndex])
//!substr(depreaced)
//!bunlarda immutable

const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece.."
const sliced = veysel.slice(33)
console.log(sliced, typeof sliced)//gündüz gece.. string

console.log(veysel.slice(17, 30))//dayım yürüyor
console.log(veysel.slice(-10))//düz gece..  -1den başlıyor
//*substring negatif index kullanmaz.
console.log(veysel.substring(17, 30))//dayım yürüyor

//!split([sep [,limit]])
const tarkan = "gel gündüzle gece olalım"
const splited = tarkan.split(` `)
console.log(splited, typeof splited)//Boşluklara göre ayırdı ve arraya çevirdi
// (4) ['gel', 'gündüzle', 'gece', 'olalım'] 'object'
const gece = splited[2]
console.log(gece)//gece indisleme ile değer okunabilir

const chars = tarkan.split('')
console.log(chars)// null karakterine göre harfleri ayırarak bir char
//dizisi oluşturdu (24) ['g', 'e', 'l', ' ', 'g', 'ü', 'n', 'd', 'ü', 'z', 'l', 'e', ' ', 'g', 'e', 'c', 'e', ' ', 'o', 'l', 'a', 'l', 'ı', 'm']

const copyTarkan = tarkan.split()
console.log(copyTarkan)//string'i tek elemanlı array haline getirdi.
//['gel gündüzle gece olalım']

//!trim()
const ramazan = "       Hoş geldin ya şehri Ramazan"
console.log(ramazan.length)//34
console.log(ramazan.trim().length)//27 boşlukları kaldırdı.