
/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */
const magiciannames: string[] = ["harry porter","david", "harmione"];

{
    function show_magicians (magicians : string[]): void {
        for(const magician of magicians)
        console.log(magicians);
    }
}
function make_great(magicians : string[]): string[]{
    const greatmagicians: string[] = magicians.map(magicians => `the great ${magicians}`);
    return greatmagicians;
}

const greatmagicians : string[] = make_great (magiciannames);

console.log("original magicians:");
show_megicians(magiciannames);

console.log("\n Great Magicials:");
show_megicians(greatmagicians);
