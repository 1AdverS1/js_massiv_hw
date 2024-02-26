//TASK 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//TASK 2


const animals = ['monkey', 'dog', 'cat'];

console.log(animals.at(-1))

//TASK 3

const numbers = [5, 43, 63, 23, 90];

//V1
numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers);

//V2

const numbers2 = [5, 43, 63, 23, 90];

numbers2.pop();
numbers2.pop();
numbers2.pop();
numbers2.pop();
numbers2.pop();

console.log(numbers2)

//TASK 4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

//TASK 5

const cats = ['Gachito', 'Tom', 'Batman'];

//for

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

//for...of

for (let item of cats) {
    console.log(item)
}


//TASK 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const mixedMassiv = evenNumbers.concat(oddNumbers);

console.log(mixedMassiv);

let number8 = mixedMassiv.indexOf(8);

console.log(number8);

//TASK 7

const binary = [0, 0, 0, 0];

let str = binary.join('1'); 

console.log(str);





 






