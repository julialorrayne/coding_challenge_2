//Task 1: Working with Arrays
let products = ['apple','banana','orange','strawberry','grapes'];
products.push('mango'); //added mango to the end of the array

products.pop();//removed the last element of the array(mango)

console.log(products);

//Task 2: Accessing and Modifying Arrays
let scores =[10,9.5,8,6,5];
scores.splice(1,1,4); //replaced 9.5 with 4
average = ((scores[0]+scores[1]+scores[2]+scores[3]+scores[4])/5); //calculated the average of scores

console.log(scores);
console.log(average);
