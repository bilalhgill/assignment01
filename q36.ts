
/*
36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a
message that should be printed on the shirt. The function should print a sentence
summarizing the size of the shirt and the message printed on it. Call the function.
*/
const makeshirt = (Size: string, message: string): void=> 
{
    console.log(`size ${Size}, message: ${message}`);
     
}

let size: string= "medium";
let message1 : string= "Hello World";

makeshirt(size, message);


makeshirt("large", " Hello World");

