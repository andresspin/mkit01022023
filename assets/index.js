//Referencias HTML

let input = document.querySelector("input")
let texto = document.querySelector("h4")
const boton = document.querySelector("button")
boton.addEventListener("click", (event) => {
        input = document.querySelector("input").value
        console.log(input)
        texto.textContent = input
    })