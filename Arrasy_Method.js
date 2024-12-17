var a = ['Aswin','Arun','Ram','David'];
let b = [1,2,3,4,5];
a.push('Raj');
b.push(10);
console.log(a);
console.log(b);
b.pop(); // It will be remove the last number .
console.log(b);
b.shift();
console.log(b);
b.unshift (30);
console.log(b);
console.log(b.length); // To find the array total length from Array .

// Concat()
let c= [11,22,33];
const ss = b.concat(c,a); // The concat() method concatenates(join) two or more arrays . 
console.log(ss);

//toString()
let fruits = ['Apple','Orange','Grapees','Pinapple'];
const fruit = fruits.toString(); // The toString() method return a string with arry values seprated by comms.
// The toString() method does not change the orginal value . 
console.log(fruit);


// at()
let fruty = ['Apple','Orange','Grapees','Pinapple'];
let ff = fruty.at(3);// The at() method return an index element from an array .
console.log(ff);

//join()
let array_join = ['Apple','Orange','Grapees','Pinapple'];
let ar = array_join.join("**") // The join() method also join all array element into a string .
let ac = b.join("$$$")
console.log(ar);
console.log(ac);


//push()
let push_join = ['Apple','Orange','Grapees','Pinapple'];
push_join.push("Kiwi");
console.log(push_join);

//shift()
let shift_join = ['Apple','Orange','Grapees','Pinapple'];
shift_join.shift();// the shift() method with remove the first element from the array .
console.log(shift_join);

//unshift
let unshift_join = ['Apple','Orange','Grapees','Pinapple'];
unshift_join.unshift("Lemon"); // the unshift() method add new element to an array (at a begining ) and "unshift" older element 
console.log(unshift_join);


//splice
let Vehcle = ['Maruthi','jeep','Auto','bus'];
Vehcle.splice(2,0 , 'Bike','Train'); // the splice method adds new item to arrays.
// first parameter (2) define the position where new element added in to array .
console.log(Vehcle);
let Vehcles = ['Maruthi','jeep','Auto','bus'];
Vehcles.splice(0,2) //the second parameter (0) define how many element should be removed .
console.log(Vehcles);











