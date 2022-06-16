const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
console.log("original", orders)
const rta = orders.map((item) => item.total)
console.log("rta", rta)

// const rta2 = orders.map(item =>  {
//     item.tax = 0.19;
//     return item
// })
// console.log("rta2", rta2)
// console.log("original", orders)

const rta3 = orders.map((item) =>  {
    return {
        ...item,
        tax: 0.19
    }
})

console.log("rta3", rta3)
console.log("original", orders)


//EJERCICIO

function solution(array){
    const newArray = array.map((item) => {
        taxes = Math.floor(item.price * 0.19) 
        return{
        ...item,
        taxes,
        }
    })
    return console.log(newArray)
}
solution([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ]);