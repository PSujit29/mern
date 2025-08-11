const categories = [
    {
        id: 1,
        name: "Electronics",
        children: [
            {
                id: 2,
                name: "Mobile Phones",
                children: null
            },
            {
                id: 3,
                name: "Laptops",
                children: null
            }
        ]
    },
    {
        id: 4,
        name: "Clothing",
        children: [
            {
                id: 5,
                name: "Men",
                children: null
            },
            {
                id: 6,
                name: "Women",
                children: null
            }
        ]
    }
];

for (const el of categories) {
    console.log(`${el.id}. ${el.name}`);
}

for (const i in categories) {
    let el = categories[i];
    console.log(`${el.id}. ${el.name}`);
}

// TODO:
// complete the undesired nested loop to print out the hierarchical vategories