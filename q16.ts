/* 16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest
to the end of your list. • Print a new set of invitation messages, one for each person in
your list.
*/

let guestlist: Array<string> = ["bilal","usman","saqib"];

for (let guest of guestlist){

    console.log(`Hello, ${guest},we found a bigger dinner table`)
}
let newguestatbegining: string = "anwer ali"
guestlist.unshift(newguestatbegining)

console.log(guestlist)

let newguestinmiddle : string = "kamal khan"
let middelindex : number = Math.floor(guestlist.length/2)

guestlist.splice (middelindex , 0 , newguestinmiddle) 

let newguestatend : string = "ali"
guestlist.push(newguestatend)
console.log(guestlist)

console.log("new set of invitation messages:")
for(let guest of guestlist) {
    console.log(`Dear ${guest}, you are invited to dinner `)
}