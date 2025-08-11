const categories =[
    {
        id:1,
        name:"veichles",
    },
    {
        id:2,
        name:"motorcycle",
    },
    {
        id:3,
        name:"pulsar 220",
    }
]

for(const el of categories){
    console.log(`${el.id}. ${el.name}`)
}

for(const i in categories){
    let el = categories[i]
    console.log(`${el.id}. ${el.name}`)
}