/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

const str1: string = "Hello";
const str2: string = "Hello";
console.log(str1 === str2);
console.log(str1 !== str2);


const text1: string = "Hello world";
const text2: string = "Hello world";
console.log(text1.toLowerCase()  === text2);


const num1: number= 10;
const num2: number= 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


const x: number = 5;
const y: number = 10;
const z: number = 51;

console.log(x < y && y < z);
console.log(x < y || y > z);
console.log(x > y && y < z);
console.log(x > y || y > z);

const fruits: string[] = ['apple', 'banana', 'orange', 'grapes'];

console.log(fruits.includes('banana'));
console.log(fruits.includes('kiwi'));

const colors: string[] = ['red','green', ' blue', 'yellow'];

console.log(!colors.includes('purple'));
console.log(!colors.includes('green'));

