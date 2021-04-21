// To Make an Empty Array
let students = [];
// An array of strings
let colors = ['red','orange','yellow'];
// An array of numbers
let lottoNums = [19,22,56,12,51];
// A Mixed Array
let stuff = [true,68,'cat',null];

// Note: The above methods of making an array is called Array Literal

let women = new Array();
women = ["Dare","Sola","Ucheoma","Lucy"];

// MODIFYING ARRAYS

let shoppingList = ['Cheddar','Cheese','2% Milk'];
shoppingList[1] = 'whole milk';
shoppingList[2] = 'Ice Cream';

shoppingList[shoppingList.length] = 'Tomatoes';

// Adding and Removing Elements to the end of the Array using Push and Pop
let topSongs = ['First Time Ever I saw your Face',
                'God Only Knowa',
                'A Day in The Life',
                'Life on Mars'];

topSongs.push('Fortunate Son')
topSongs.push('I Love you')

topSongs.pop();

const nextSong = topSongs.pop();

// Adding and Removing Elements to the beginning of the Array using unshift and shift

let dishesToDO = ['bigPlatter']
dishesToDO.unshift('largePlate');
dishesToDO.unshift('smallPlate');
dishesToDO.unshift('crealBowl');
dishesToDO.unshift('mug');
dishesToDO.unshift('dirtySpoon');

dishesToDO.shift();

// CONCAT

let fruits = ['apple','banana',];
let veggies = ['asparagus','brussel sprouts'];
let meats = ['steak', 'chicken breast']

let fruitVeggies = fruits.concat(veggies);
let allFoods = fruits.concat(veggies,meats);

// Includes and IndexOf
// Note: Include returns a boolean value

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
]

ingredients.includes('fish');  //false
ingredients.includes('eel');  //true
ingredients.includes('water',3) // false
//Note indexof searches a value and returns the indes

ingredients.indexOf('eel')  //6

// REVERSE AND JOIN
// Reverse mutates the array by changing the order of it's elements

let letters = ['T','C','E','P','S','E','R'];
letters.reverse();
// ["R", "E", "S", "P", "E", "C", "T"]

letters.join();
// "R,E,S,P,E,C,T"

letters.join('-');
// "R-E-S-P-E-C-T"

// SLICE
// slice does not mutate the array but it raher takes a copy of it
// splice mutates the array by taking actual elements out of the array

let animals = ['shark','salmon','whale','bear','lizard','tortoise'];
 
///animals.unshift('shark','salmon','whale');

let swimmers = animals.slice(0,3);
let mammals = animals.slice(2,4);
let reptiles = animals.slice(4);
let quadruped = animals.slice(-3);
let topBack = animals.slice(-3,-1);
let copy = animals.slice();


// SPLICE
let animalsB = ['shark','salmon','whale','bear','lizard','tortoise'];

animalsB.splice(1,0,'octopus'); // start index - how many items to delete - how many items to insert

animalsB.splice(3,2);

animalsB.splice(3,0,'snake','frog');
animalsB.splice(0,2,'SHARK','OCTOPUS');

// ARRAY SORTING -- The Sort method mutates the array
let peopleX = ['Mrs. Robinson','angie','Jolene','Maggie May','Roxanne'];

let people = ['Andrew','Bill','Clara','Dave','Earl','Floxy'];

people.reverse()
// (6) ["Floxy", "Earl", "Dave", "Clara", "Bill", "Andrew"]
people
// (6) ["Floxy", "Earl", "Dave", "Clara", "Bill", "Andrew"]
people.sort()
// (6) ["Andrew", "Bill", "Clara", "Dave", "Earl", "Floxy"]






