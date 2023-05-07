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

