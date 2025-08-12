
// for (const el of categories) {
//     console.log(`${el.id}. ${el.name}`);
// }

// for (const i in categories) {
//     let el = categories[i];
//     console.log(`${el.id}. ${el.name}`);
// }

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
                children: [
                    {
                        id: 7,
                        name: "lenovo",
                        children: null
                    },
                    {
                        id: 8,
                        name: "asus",
                        children: null
                    }
                ]
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
// TODO:
// complete the undesired nested loop to print out the hierarchical vategories with proper nesting

const printTabs = (count) => "\t".repeat(count)

const showItems = (items, level = 0) => {
    for (const obj of items) {
        console.log(`${printTabs(level)}${obj.id}: ${obj.name}`)
        if (obj.children) {
            showItems(obj.children, level + 1)
        }
    }
}

showItems(categories)