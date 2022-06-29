const pets = ["cat", "dog", "bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === "dog"){
        includeInArray = true;
        break;
    }
}
console.log("for", includeInArray)

const rta2 = pets.includes("dog")
console.log("includes", rta2)


//EJERCICIO
const solution = ((words, query) => {
    const rta = words.filter(words => words.includes(query))
    return rta
})
console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));
console.log(solution(["ana", "santi", "nico", "anastasia"], "xyz"));