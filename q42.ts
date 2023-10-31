/*
42. Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified.
*/
const magiciannames: string[] = ["harry porter","david", "harmione"];

function show_megicians(magicians: string[]):void
{
    for (const megician of magicians){
        console.log(magicians);
    }
}

function make_great (magician: string[]): string[]{
    const greatmagicians : string[] = magician.map(magician=> `the great ${magician}`);
    return greatmagicians;
}

const greatmagicians: string[] = make_great (magiciannames);

console.log("original magicians:");
show_megicians(magiciannames);


console.log("\n Great Magicians:");
show_megicians(greatmagicians);


