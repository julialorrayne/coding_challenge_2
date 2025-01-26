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

//Task 3: Working with Objects
let employee = {
    name: 'Julia',
    age: 22,
    department: 'Technology',
    isActive: 'yes'
};  //created employee object
employee.department = 'Finance'; //changed department to Finance

console.log(employee);

//Task 4: Array of Objects

let customers = [
    {
    name: 'Maria', 
    email: 'maria@usf.edu',
    purchaseAmount: 1000
    },
    {
    name : 'Gaby',
    email : 'gaby@usf.edu',
    purchaseAmount : 2000
    },
    {
    name : 'Julia',
    email : 'julia@usf.edu',
    purchaseAmount : 3000
    }
]; //created an array with 3 objects

customers.push(
    {
    name : 'Juliana',
    email : 'juliana@usf.edu',
    purchaseAmount : 4000
    }
) //added a new object to customers array
console.log(customers);
