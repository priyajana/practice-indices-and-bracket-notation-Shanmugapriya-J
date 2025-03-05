//Task 1: Create a multi-dimensional array with nine books and/or movies of your choice.

let my2Darray = [
    ['To kill a Mockingbird','Oliver Twist','Bridge to Terebathia'],
    ['Aladdin','Jack Frost','Many lives and Many Masters'],
    ['Titanic','The Monk who sold his Ferrari','Scarlet Pimpernel']
];

//Task 2: Access and log all the elements in the array using bracket notation with numbers.
console.log(my2Darray[0][0]);
console.log(my2Darray[0][1]);
console.log(my2Darray[0][2]);
console.log(my2Darray[1][0]);
console.log(my2Darray[1][1]);
console.log(my2Darray[1][2]);
console.log(my2Darray[2][0]);
console.log(my2Darray[2][1]);
console.log(my2Darray[2][2]);

// Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item
for (let row=0;row<my2Darray.length;row++)
    {
        
        for(let item=0;item<my2Darray[row].length;item++)
        {

                console.log(`Row--> ${row} Column ${item} --> ${my2Darray[row][item]}`);
        }
    }

//Task 4: Write a loop that prints all the items on the second shelf

for(item of my2Darray[1])
    {
        console.log(item);
    }