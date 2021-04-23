const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}

//Note: All keys areautomatically converted to strings except for symbols which we haven't covered yet

const numbers = {
    100 : 'one hundred',
    16: 'sixteen',
    '10 cullets': 'inspiring song rendition'
}
// numbers.100
// VM239:1 Uncaught SyntaxError: Unexpected number
numbers[100]
// "one hundred"

//We use the square identifier when working with invalid javascript identifiers. '10 cullets' is an invalid identifier

// Another reason for using square brackets is that it returns the value from the object

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

let mysteryColor = 'blue';
console.log(`The specified  color is  ${palette[mysteryColor]} `);
// The specified  color is  #30336b ... The key is supplied and the value is returned


// ADDING PROPERTIES TO AND UPDATING OBJECTS
const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;


// Nested Arrays  -- Array of objects

const shoppingCart = [
   {
       product: 'Jenga Classic',
       price: 6.88,
       quantity : 1
   },
   {
    product: 'Echo Dot',
    price: 29.99,
    quantity : 3
   },
   {
    product: 'Fire Stick',
    price: 39.99,
    quantity : 2
   }

]

// Nested Objects -- array and object inside an object

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music','Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

let examAverage = (student.exams.midterm + student.exams.final)/2

console.log(midtermAverage);

// ARRAY EQUALITY

let nums = [1,2,3];
let mystery = [1,2,3]

// nums === mystery
// is false because the comparison is between the refence names and not the values in the array

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    Notification: []
};

if(user.Notification === []){
    console.log('NO NEW NOTIFICATIONS!')
}
else{
    console.log('condition evaluated to false');
}

// Above code dos not work because in comparing arrays. Javascript does not
// compare the values in the array but the references
// based on the above user.Notification and [] are refering to two new arrays
// Hence they a re not equal

if(user.Notification.length > 0){
    console.log('NO NEW NOTIFICATIONS!');
}

// Better Implementation

if(!user.Notification.length){  //checking that length is not zero
    console.log('NO NEW NOTIFICATIONS')
}











