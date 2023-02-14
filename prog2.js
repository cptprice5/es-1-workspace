var obj1 = {
	a: 10,
	b: 20
} 
//Assume its in 100'th address

console.log("obj1: " + JSON.stringify(obj1));

//reference assignment, now obj2 is also pointing to 100.
var obj2 = obj1; 

console.log("obj2: " + JSON.stringify(obj2));

obj2.b = 444;

console.log("obj1: " + JSON.stringify(obj1));


//Clone
var obj3 = JSON.parse(JSON.stringify(o))