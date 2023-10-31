/*
21. They think of something you could store in a TypeScript Object. Write a program
 that creates Objects containing these items.
 */
 const bouquet :  { }= {
    name: " sprint delight",
    price : 250,
    description : " beautifull arrangment  of spring flowers"
 }

let bouquets : Array < typeof bouquet > = []; 

bouquets.push(bouquet);
bouquets.push({
    name : "summer Bliss",
    price : 350,
    description: "beautifull arrangemnt of summer flowers"
})

let bouquets3 = 
{
    name : "summer Bliss",
    price : 350,
    description: "beautifull arrangemnt of summer flowers"
}

bouquets.push(bouquets3);

console.log(bouquets);

bouquets.push(
    {
        name: "freshness", price : 250, decription : " A beautiful arrangement of white yellow rosses"
    }
);

function displaybouqets ( bouquets: Array < typeof bouquet>)
{
    for (let i of bouquets){
        console.log(`
        title: ${i.name}
        description ${i.description}
        price: ${i.price}
        ____________\n
        `);
        
    }
}
