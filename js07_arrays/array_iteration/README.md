- Js de bir dizi içerisinde iterasyon yapmak için çok farklı yollar kullanılır.

Döngüler ile
- Klasik for, while, do-while döngüsü
- for in döngüsü
- for of döngüsü

- Dizi iterasyon metotları ile(En çok kullanılanlar)
- Array.forEach()
- Array.map()
- Array.filter()
- Array.reduce()
- Array.every()
- Array.some()
- Array.find()
Bunlar orjinal diziyi bozmuyor .sort() mutator bozuyor.


- for döngüleri performanslı ama yazımı zor iterasyonun içinde forlar dönüyor.

FOR IN
for(let i in negatives){ 0 dan başlayacağını biliyor dizinin sonuna kadar gideceğini biliyor

}

for ın array, object
for of array, object, set, Map

FOR OF
(let price of prices)
(let student of students)

FOREACH
numbers.forEach(callback) yazması kolay. Döngüyü kendininz kıramıyorsunuz.(break, countune) Kendi bitip çıkıyor.Zaman olarak yavaş.

MAP
- Map diziyi değiştirir(tansformasyon)Orjinal diziyi değiştirmez. Modifiye ettiği diziyi return eder.

REDUCE
- Bir dizi değil değer döndürür.Toplam çarpım, toplam gibi.
x.reduce((acc,value) => acc + value,0)
acc başlangıç değeri defaul 0 dır.Sonuna versek iyi olur.

y.reduce((a,v) => a * v,1) 1 demezsek default olarak 0 alır.
(a,v,i,arr) alabilir
