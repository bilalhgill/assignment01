
/*
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is
printed.
*/
let usernames : string [] = ["admin", ' adil' , ' saqib' , ' bilal'];

function greetusers(usernames : string[]):void {
if (usernames.length === 0) {
    console.log('we nee to find some users');
    return;
}
for (const username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log('hello admin, would you like to see status report');
    } else {
        console.log(`hello ${username}, thank you for logging in again`);
        
    }
    
}

}
console.log(`for non empty username: \n`)
greetusers(usernames);

usernames= [];

console.log(`\n\n for empty username: \n `)
greetusers(usernames);

export{};
