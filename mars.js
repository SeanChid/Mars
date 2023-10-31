alert('Beginning Mars Journey..');
alert('Booting Up Systems..');
alert('Fueling Rocket...');

const username = prompt("Hello There! What's your name?");
alert(`Hi, ${username}! Welcome to your Mars Adventure!`);
alert('Yesterday, you received a call from your good friend from NASA. ');
alert("They need someone to go to Mars this weekend, and You've been chosen!!");

let excited = prompt('Are you excited? Type Y or N');
excited = excited.toUpperCase();
if (excited === 'Y') {
    alert("I'm happy to hear that! You'll have a blast on Mars!");
}
if (excited === 'N') {
    alert("Too Bad, You're going!");
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = Number(numSuitcases);
if (numSuitcases > 2) {
    alert("That's too many, you should pack more lightly.");
} else {
    alert("Excellent, Your stuff will fit!");
}

alert("You're allowed to bring one companion animal with you.");
const companionType = prompt('What type of companion animal would you like to bring?');
let companionName = prompt("What is your companion's name?");
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;
alert(`Awesome, you're bringing ${companionName} the ${companionType}.`);

alert('Due to a budget surplus, you can decorate your space ship!');
let decorChoice = prompt(`There are a few options for you to choose from. These include:
A 90's Taco Bell
B Vintage Farmhouse
C Musty Subaru
`);
let decor;
if (decorChoice === 'A') {
    decor = `90's Taco Bell`;
} else if (decorChoice === 'B') {
    decor = `Vintage Farmhouse`;
} else if (decorChoice === 'C') {
    decor = `Musty Subaru`;
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

let timer = 5;
while (timer > 0) {
    alert(`${timer}...`);
    timer -= 1;
}
alert('*** LIFTOFF ***');