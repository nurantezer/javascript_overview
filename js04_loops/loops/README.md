                          DÖNGÜ(İTERASYON)
1- for
2- do-while() ve while()
3- for of, for in => Dizi, object ---Data structure--
4- ForEach, map, filter, reduce...

FOR
- Birşeyi ekrana 100 kere bastırmak
for(let i = 1 ; i <= 100 ; i++){
    başlangıç    koşul    artırım,azaltım
    değeri                    miktarı
}

for (let i = 2; i <10; i++){
    if(i >= 4 && i <= 7){
        continue
    }
}

for ()  => adet
while () => tekrar durumu karmaşık bir koşula sahipse mesela kombinin ısıtma derecesi 

WHİLE
while(koşul) {

}

let count = 1 --for daki gibi sayaç oluşturdum--

while(count<=10){
    clg(count)
    count++  --for daki arttırım azaltım miktarı gibi--
}

while(a>b && c>d){

}

DRY => Dont repeat yourself --kodların tekrarını mümkün mertebe azaltmak istiyoruz

DO-WHİLE
-Döngü içerisinde kodun en az bir kere çalışması garanti edilir.Koşul yanlış ise bile bir kere çalışır.While de falsy de çalışmaz. Uygulamanın sonunda mesela confirm koymak burada mantıklı olur.

NESTED LOOPS

for(let i = 0; i<3; i++) {
    for(let j = 0; j<2; j++){

    }
}

rgb 8 8 8
                  1
                 1  2  1
                  