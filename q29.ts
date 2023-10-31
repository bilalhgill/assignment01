
/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your
array. If the fruit is in your array, the if block should print a statement, such as You really
like bananas!
*/
const favorite_fruits: string[] = ["apple", "banana","orange"];

if (favorite_fruits.includes("apple")){
    console.log("i like apples");
}
if (favorite_fruits.includes("banana")){
    console.log("i love bananas");
}
if (favorite_fruits.includes("orange")){
    console.log("oranges are dilicious");
}
if (favorite_fruits.includes("apple")){
    console.log("i like apples");
}
if (favorite_fruits.includes("grapes")){
    console.log("grapes are tasty");
}
if (favorite_fruits.includes("mango")){
    console.log("mangos are my favorite");
}
