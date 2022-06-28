const items = [1, 3, 2, 3, 3, 1, 10]

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    }else{
        obj[item] += 1
    }
    return obj;
}, {});

console.log(rta)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    }else{
        obj[item] += 1
    }
    return obj;
}, {})

console.log(rta1)


//reto

const numeros = [2,4,1,6,7,7,5,9,8,10]

const rta2 = numeros.reduce((acumulador, item) => {

    if(item <= 5){
        acumulador["1-5"] += 1
    } else if(item >= 6 && item <= 8){
        acumulador["6-8"] += 1
    } else {
        acumulador["9-10"] += 1
    }
    return acumulador
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0.
})

console.log(rta2)