//*Soru-1 Yetkisiz kullanıcılardan korunmak için e-posta adreslerinin gizlemek için bir javascript
//*fonksiyonu yazınız
//*Test verisi: console.log(procect_email("robin_singh@example.com"));
//*"robin_si...@example.com"

//! console.log(email.split('@')[0]) //@ çıkarttı ve geriye kalanı döndürdü
//! console.log(emailName.slice(0,4))

let email = "robin_singh@example.com"

function emailValidate(email) {
    let emailName = email.split('@')[0]
    return emailName.slice(0, emailName.length - 3) + '...@' + email.split('@')[1]
}
console.log(emailValidate(email))

//*Soru-2 Bir dizideki tüm elemanların ortalmasını hesaplayan bir javascript
//*fonksiyonu yazınız. Test Verisi: console.log(average([1,2,3,4,5,])) 3

let dizi = [1, 2, 3, 4, 5]

function average(dizi) {
    let sum = 0
    dizi.forEach((num) => (sum += num))
    return sum / dizi.length
}
console.log(average(dizi))