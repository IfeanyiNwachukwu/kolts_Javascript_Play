// // FOR LOOPS

// for(let i = 1; i <= 10; i ++){
//     console.log('Hello :', i);
// }

// for(let num =1; num <= 20; num++){
//     console.log(`${num} x ${num} = ${num * num}`)
// }

// for(let i = 50; i >= 0; i -= 10){
//     console.log(i);
// }

// for(let i = 200; i >= 0; i-= 25){
//     console.log(i);
// }

const examScores = [98,77,84,91,57,66];

for (let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i])
}

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    }


]
for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

const word = 'stressed';
for(let i = word.length - 1; i >= 0; i--){
    console.log(word[i]);
}

// NESTED LOOPS

for(let i= 1; i <= 10; i++){
    console.log('OUTER LOOP:', i);
    for(let j = 10; j >= 0; i-=2){
        console.log('    INNER LOOP', j);
    }
}

const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [8,32,16,4],
    [2,8,4,2]
]

for(let i = 0; i < gameBoard.length; i++){
    // console.log(`number of rows: ${gameBoard.length}`);
    // let game = gameBoard
    console.log(gameBoard[i])

    // for(let j = 0;)

}