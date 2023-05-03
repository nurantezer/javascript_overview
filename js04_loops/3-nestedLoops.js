// * ============================================
// *            NESTED LOOPS
// * ============================================
console.log("** NESTED FOR **")

//* 10 x 10 = 100 kere döner
let result 
let line = ""
for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++){
        result = row * col
        line += result + "\t "  //? \t : bir tab bosluk ekle
    }
    line += "\n"    //? \n : yeni bir satira gec
}

console.log(line)