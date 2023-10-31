/*
22. Intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the
program.
*/
function createfruit(name:string , color : string, taste : string)
{
    return {
        name,
        color,
        taste,
    };
}

const fruits = [
    createfruit("apple","red","sweet"),
    createfruit("banana","yellow","sweet"),
    createfruit("orange","orange","citrusy"),
    createfruit("grapes","green","sweet"),
    createfruit("strawberry","red","sweet"),
];
const invalidindex = 10;
console.log(`Fruits at index ${invalidindex}:`, fruits [invalidindex]);

export{};

