const elements = ["Fire", "Air", "Water"]

let rtaFinal = ""
const separator = "--"
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
}
console.log("for", rtaFinal)

const rta = elements.join("--")
console.log("join", rta)


const title = "Curso de Manipulación de arrays"

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal)

//EJERCICIO

const solution = ((title) => {
    const rta = title.split(" ").join("-").toLowerCase();
    return rta
} )
console.log(solution("La forma de correr Python"));