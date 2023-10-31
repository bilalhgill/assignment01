/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re
still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program.
*/
let guestlist: Array<string> = ["bilal","usman","saqib","anwer ali","kamal khan","ali"]

console.log(`i can invite only two people for dinner`)

while(guestlist.length > 2){
    let removeguest = guestlist.pop()
    console.log(`sorry , ${removeguest}, i cant invite you to dinner`)

}

for (let guest of guestlist){
    console.log(`hello ${guest}, you are still invited to dinner!`)
}
guestlist.pop()
guestlist.pop()

console.log(`guest list after dinner:` , guestlist)
