// Task 1

console.error("Sorry, something went wrong");
console.info("Here is some more information for you");
console.warn("There is a warning to be considered");
console.count();

let myName = {
    name: 'Kate',
    surname: 'Kalinina'
};
console.table(myName);


// Task 2.1 (the easier one)

let num1 = +prompt('Enter a number', '');
let num2 = +prompt('Enter another number, please', '');
let num3 = +prompt('Enter another number the very last time... please', '');
console.log(Math.round( (num1 + num2 + num3) / 3) );


// Task 2.2 (the harder one)

let userNum = prompt('Enter a few numbers separating them with a comma', '');
let sepNums = userNum.split(',').map( a => Number(a));
let average = sepNums.reduce( (a, b) => a + b) / sepNums.length;
console.log(average.toFixed(1));


// Task 3

let yearOfBirth = +prompt('Enter the year of your birth', '');
let today = new Date();
console.log(today.getFullYear() - yearOfBirth);


// The task at the class (even though I did it during the class)

let randomNum = Math.round(Math.random() * 10);
let userNumber = +prompt('Enter a number up to 10', '');
console.log(randomNum === userNumber);