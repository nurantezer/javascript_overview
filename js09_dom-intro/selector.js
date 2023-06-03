console.log("***** SELECTORS *****")

document.title = "❤️ DOM"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const myHeader = document.getElementById("header")
console.log(myHeader)

myHeader.style.color = "blue"
myHeader.style.backgroundColor = "yellow"

const button = document.getElementById("btn")
const textInput = document.getElementById("input")
button.style.backgroundColor = "black"
button.style.color = "yellow"
button.style.padding = "0.7rem"
button.style.border = "none"
button.style.borderRadius = "10px"
button.style.fontSize = "20px"
textInput.style.padding = "0.7rem"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================