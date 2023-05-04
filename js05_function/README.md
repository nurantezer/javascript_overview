                 **** FONKSİYONLAR ****
- Tekrar azaltıyor.
- Büyük görevleri alt görevlere bölüyor.
- declaration => calling-invoking.
- RAM e geliyor o da stack alanında saklıyor.
- 1 Function Declaration
function topla(argüman/parametre listesi){
                                                 deklarasyon kısmı
}
topla() => invoke kısmı
- Return : Fonksiyonlar kodları ana programa döndürmek isteyebilir.

funciton topla(s1, s2) {
    const toplam = s1+s2
    return toplam
    return s1+s2  iki şekilde de olur
    clg(age) bunun bir anlamı yok çünkü işlemi ve kendisi ana programa döndürür
}
- return olmazsa çağırdığımda undifened verir.
const x = topla(2,3) Programın alt taraflarında x'i istediğim gibi kullanabilirim.

- 2 Function Expression
İsimsizdir(anonymous) ve bir değişkene atanırlar. Dolayısıyla fonksiyonun bir dönüş değeri olmalıdır.

const topla = function(num1,num2){
    return num1+num2
}
clg(topla(5,7))
Modern js ile geldi.

- 3 Arrow Function
- Js'ye ES6 ile geldi. Otamatik return
const topla = (a,b) => a+b  --Single Statement-- süslü ve return yok

let selamVer = () => alert("Merhaba Arkadaşlar")
selamVer()      boş      clg(selamVer()) -> bu undefined gelir çünkü
                          boş (void function)
const volume = (r, h = 1) => Math.PI * r * r * h   h 'ı girmek istemezsem diye default parametre atadım

Fibonanci
1      1       2
fib1 + fib2 = sum
- Recursive
cont func = () => {
    func()     burada sonsuz döngü oldu
}
func()   recursif = Bir fonksiyonun kendisini çağırması if else ile kısıtlıyoruz.Bizim işimizi kolaylaştırıyor.Hanoi,sıralama algoritmaları(4,3,1,5,4  quick sort) bunlarda recursif olduğu için kodlamak kolay.Matematikteki karmaşık kendi kendini çağıran fonksiyonları yazmayı basitleştirdiği için kullanıyoruz.Bilgisayarın içini zorlaştırıyor.
- ctrl z mesela stackte tutuluyor yoksa stack owerflova düşüp bellek dolu diyebilir.