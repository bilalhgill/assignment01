
/*
44. Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
the function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time.
*/

function makeSandwich(...items:string[]):void
{
    console.log("sandwich summery");

    if(items.length===0){
        console.log(" -You ordered an empty sandwich. please add some items");

    } else{
        items.forEach((item , index)=> {
            console.log(` ${index +  1}.${item}`);
        });
    }

    console.log("\n");

}

makeSandwich("Turkey"," letuce","tomato","mayonies");
makeSandwich("Ham","Chees");
makeSandwich("Peanut butter"," jelly","banana","honey");
