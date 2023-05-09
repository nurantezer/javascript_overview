// //* ======================================================
// //*  DESTRUCTURING (OBJECT)
// //* ======================================================

// // const myH2 = document.getElementsByTagName("h2")
// // myH2[0].style.color = "red"

// console.log("****** NEW OPERATORS *******")

// //* ======================================================
// //*  DESTRUCTURING (OBJECT)
// //* ======================================================
// const car = {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//     colors: ["blue", "purple"],
//   }
  
//   //* 1.YONTEM (Classical)

// const name1 = car.name
// const model1 = car["model"]
// console.log(name1)

// //* 2.YONTEM: DESTRUCTURING

// const { name, model, colors } = car //? destructre
// console.log(name, model)
// // ? Objelerin value'larini aktaracagimiz degisken isimlerini
// //? objenin property(key) 'lerine esit olmasi gerekir

// let { engine: motor } = car //? isim degisikligi bu sekilde yapilablir
// console.log(motor)
// motor = 2.0
// console.log(motor, car)

// car.engine = 2.2
// console.log(car)

// //* EXAMPLE: NESTED
// const cars = {
//     car1: {
//       name: "BMW",
//       model: 1990,
//       engine: 1.6,
//     },
//     car2: {
//       name: "Mercedes",
//       model: 2022,
//       engine: 2.0,
//     },
// }
  
// const { car1, car2 } = cars
// console.log(car1, car2)
// console.log(car1.name, car2.engine)

// const {name:nameCar1, engine:engineCar1} = car1
// const { name: nameCar2, engine: engineCar2 } = car2
// console.log(nameCar1, engineCar2)

//? Nested destructre
// const {
//   car1: { name, engine },
//   car2: { model },
// } = cars

// const model2 = cars.car1.model
// console.log(model2)

//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "Josh",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
]

//* Classical
team.forEach((t, i) => {
    console.log(i + 1 + ".NAME:", t.name)
    console.log("SURNAME:", t.surname)
    console.log("JOB:", t.job)
    console.log("AGE:", t.age)
    console.log("*************")
  })

//* destructre
team.forEach((person, i) => {
    const { name, surname, job, age } = person
    console.log(i + 1 + ".NAME:", name)
    console.log("SURNAME:", surname)
    console.log("JOB:", job)
    console.log("AGE:", age)
    console.log("*************")
})

//* functionun dondurdugu obje dogrudan dest. yapilabilir

const getInfo = () => {
    return {
        id: new Date().getTime(),
        productName: "MacBook",
        price: 50000,
    }
}

console.log(getInfo())

const { productName, price } = getInfo()
console.log("PRİCE:",price)

const calculate = ({price, name}) => {
    console.log("NAME:", name)
    console.log("PRICE:", price * 1.2)
}

calculate({ price: 50000, name: "macbook" })


// const check = ({ a, b, c }) => { //? yolda destr.
//   console.log(a, b, c)
// }

const check = (data) => {
    const { a, b, c } = data //? icerde destr
    console.log(a, b, c)
  }
  
  const data = {
    a: 1,
    b: 2,
    c: 3,
  }
  
  check(data)

