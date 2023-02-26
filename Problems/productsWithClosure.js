function inventory(inicialNumComputers, inicialNumPhones, inicialNumBackpacks) {
    
    let computers = inicialNumComputers;
    let phones = inicialNumPhones;
    let backpacks = inicialNumBackpacks;

    let products = [
        {
            product: "Computers",
            stock: computers
        },
        {
            product: "Phones",
            stock: phones
        },
        {
            product: "Backpacks",
            stock: backpacks
        },
    ];

    return function register(numComputers, numPhones, numBackpacks){

        computers += numComputers;
        phones += numPhones;
        backpacks += numBackpacks;

        products = [
            {
                product: "Computers",
                stock: computers
            },
            {
                product: "Phones",
                stock: phones
            },
            {
                product: "Backpacks",
                stock: backpacks
            },
        ]

        return products;
    }
}

const tienda1 = inventory(5, 5, 5);
tienda1(10,10,10);
tienda1(50, 0, 20);

console.table(tienda1(0,0,0));


const tienda2 = inventory(0, 0, 0);
tienda2(10,10,10);
tienda2(50, 50, 50);

console.table(tienda2(0,0,0));
