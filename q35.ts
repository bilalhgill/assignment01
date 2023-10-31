/*
35. Animals: Think of at least three different animals that have a common
characteristic. Store the names of these animals in a list, and then use a for loop
to print out the name of each animal. • Modify your program to print a statement
about each animal, such as A dog would make a great pet. • Add a line at the end
of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!
*/
const animals: string[] = ['cat','dog','goat'];

console.log("list of animals:");
for (const i of animals){
console.log(animals);
}

console.log("\n statements about each animals:");

for (const animal of animals){
if (animal === 'dog'){
    console.log(` A ${animal} is a nice pet`);
} else if (animal === 'cat'){
    console.log(`A ${animal} would be a good companion at home`);
} else if ( animal === 'goat'){
    console.log(animal === 'goat') 
        console.log(`A ${animal} is an adorable pet that also give us milk`);
    }
}

console.log("\n What theme animals habe in comon");
console.log("Any of them animas would make great pet");

