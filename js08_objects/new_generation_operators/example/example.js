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
// let dizi = []
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