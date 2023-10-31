
/*
27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the
appropriate color alien.
*/

let alien_color: string = "green";

if (alien_color == 'green'){
    console.log("congratulations! you just earned 5 points for shooting the alien")
}
else if(alien_color=== ' yellow')
{
    console.log("congratulations! you just earned 10 points for shooting the alien")
} else if(alien_color === 'red'){
    console.log("congratulations! you just earned 15 points for shooting the alien")
}
else{ 
    console.log('unknown alien color');
}

//second version

alien_color = "yellow";

if (alien_color == 'green'){
    console.log("congratulations! you just earned 5 points for shooting the alien")
}
else if(alien_color=== ' yellow')
{
    console.log("congratulations! you just earned 10 points for shooting the alien")
} else if(alien_color === 'red'){
    console.log("congratulations! you just earned 15 points for shooting the alien")
}
else{ 
    console.log('unknown alien color');
}


// third version
alien_color = "red";

if (alien_color == 'green'){
    console.log("congratulations! you just earned 5 points for shooting the alien")
}
else if(alien_color=== ' yellow')
{
    console.log("congratulations! you just earned 10 points for shooting the alien")
} else if(alien_color === 'red'){
    console.log("congratulations! you just earned 15 points for shooting the alien")
}
else{ 
    console.log('unknown alien color');
}
