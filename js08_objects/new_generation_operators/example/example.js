const carData = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      color: "Silver",
      mileage: 25000,
      engine: {
        type: "V6",
        horsepower: 300,
        cylinders: 6,
      },
    },
    {
      id: 2,
      make: "Honda",
      model: "Accord",
      year: 2019,
      color: "White",
      mileage: 20000,
      engine: {
        type: "V4",
        horsepower: 140,
        cylinders: 4,
      },
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      year: 2018,
      color: "Red",
      mileage: 15000,
      engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8,
      },
    },
    {
      id: 4,
      make: "Chevrolet",
      model: "Camaro",
      year: 2017,
      color: "Black",
      mileage: 10000,
      engine: {
        type: "V4",
        horsepower: 200,
        cylinders: 4,
      },
    },
    {
      id: 5,
      make: "Dodge",
      model: "Challenger",
      year: 2016,
      color: "Blue",
      mileage: 5000,
      engine: {
        type: "V6",
        horsepower: 250,
        cylinders: 6,
      },
    },
    {
      id: 6,
      make: "BMW",
      model: "3 Series",
      year: 2015,
      color: "Silver",
      mileage: 35000,
      engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8,
      },
    },
    {
      id: 7,
      make: "Audi",
      model: "A4",
      year: 2014,
      color: "Black",
      mileage: 30000,
      engine: {
        type: "V4",
        horsepower: 220,
        cylinders: 4,
      },
    },
    {
      id: 8,
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2013,
      color: "White",
      mileage: 25000,
      engine: {
        type: "V6",
        horsepower: 280,
        cylinders: 6,
      },
    },
    {
      id: 9,
      make: "Volkswagen",
      model: "Golf",
      year: 2012,
      color: "Red",
      mileage: 20000,
      engine: {
        type: "V4",
        horsepower: 180,
        cylinders: 4,
      },
    },
    {
      id: 10,
      make: "Tesla",
      model: "Model S",
      year: 2011,
      color: "Silver",
      mileage: 15000,
      engine: {
        type: "V4",
        horsepower: 260,
        cylinders: 4,
      },
    },
];
  
//*Soru-1 Rengi gümüş olan arabaları bir listeye ata.
// let dizi = [] //forEach kullanıcaksam birşey döndürmediği için önce boş diziye aktarmam lazım.
// carData.forEach((car)=> car.color.toLowerCase() === "silver" ? dizi.push(car) : null)
// console.log(dizi)

const dizi1 = carData.filter((car) => car['color'] === "Silver")
console.log(dizi1.forEach((c) => console.log((c.make))))

//*Soru-2 2015 yılından sonra üretilmiş arabaları bir listeye ata.
const newList = carData.filter(c => c.year > 2015)
console.log(newList)

//*Soru-3 Arabaların ortalama kilometre değerini hesapla.
// let sum = 0
// const newList1 = carData.map((car, i, dizi) => (sum += car.mileage))
// console.log(sum / carData.length)

const newList1 = carData.reduce((acc, cur) => acc + cur.mileage, 0)
console.log(newList1 / carData.length)

//*Soru-4 8 silindirli araçları listele
const eightCylinderCars = carData.filter((car) => car.engine.cylinders === 8);
console.log(eightCylinderCars);

//*Soru-5 Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır.
//* Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Y
//* eterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa,
//*  değerlerin geri kalanını yok sayın.
//* keys = ['a', 'b', 'c', 'd']
// *values = [1, 2, 3]
//* createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

const createDict = (keys, values) => {
    const dict = {}
    keys.forEach((key, index) => {
        dict[key] = values[index] || null
    })
    return dict
}

//*Soru-6 Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve
//*value'lar key'ler olmalıdır.
//* Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
//* Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.
let obj = { a: 1, b: 2, c: 3 };
function reverseDict(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(reverseDict(obj));

//*Soru-7 Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
//* Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
//* örnekler
//* {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
//* {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
//* {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
let results = { Java: 10, Ruby: 80, Python: 95 };
function myLanguages(results) {
  let filteredObj = {};
  let arr = [];
  for (let key in results) {
    if (results[key] >= 60) {
      filteredObj[key] = results[key];
    }
  }
  arr = Object.values(filteredObj).sort((a, b) => b - a);
  let sortedObj = {};
  arr.forEach((value) => {
    for (let key in filteredObj) {
      if (filteredObj[key] === value) {
        sortedObj[key] = value;
      }
    }
  });
  return sortedObj;
}
console.log(myLanguages(results));