/* 
15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your
program stating the name of the guest who can’t make it.• Modify your list, replacing the name of the guest who can’t make it with the name of
the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
let guestlist: Array<string> = ["bilal","usman","saqib"];

let guestwhocannotmakeit: string ="numan";
console.log(`${guestwhocannotmakeit} can't make it to dinner`)

let newguest : string = "saqib"
let indexofguestwhocantmakeit: number = guestlist.indexOf(guestwhocannotmakeit)
console.log(indexofguestwhocantmakeit)

if (indexofguestwhocantmakeit !== -1)
{
    guestlist[indexofguestwhocantmakeit] = newguest
}
console.log("second set of invitation messages:")
guestlist.forEach((guest: string) =>{
    console.log(`Dear ${guest}, you are invited to dinner`)
})

