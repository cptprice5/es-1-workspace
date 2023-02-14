console.log("js_funda_test1")

function heading(heading) {
console.log("\n===================================")
console.log(heading)
console.log("===================================")	
}
heading("Primary types")
console.log((typeof null)) //--> Bug in js
console.log((typeof undefined))
console.log((typeof object))
console.log((typeof string))
console.log((typeof number))
console.log((typeof boolean))

function printProps(prefix, inputObj) {
	console.log("\n---------------------------------")	
	console.log("Details of: " + prefix)
	console.log(inputObj);
	console.log("typeof inputObj: " + (typeof inputObj));
	console.log("JSON.stringify(inputObj): " + JSON.stringify(inputObj));


	console.log("Properties start")
	if (inputObj) {
		Object.keys(inputObj).forEach((prop)=> console.log(prop));
	} else {
		console.log("inputObj is undefined so no props")
	}
	console.log("Properties end")
	console.log("---------------------------------")	
}

//Object delcaration:
//Declartive form
var obj1 = {
	firstName: "Jane",
	lastName: "Foster"
}

//De-constructed form
var obj2 = Object.create(null); //--> Proper empty object, where __proto__ is itself is not there
var obj3 = new Object(); //--> Also empty object but, __proto__ will be empty object like {}

heading("Type of obj2 and obj3")
console.log("typeof obj2: " + (typeof obj2))
console.log("typeof obj3: " + (typeof obj3))

heading("getPrototypeOf obj2 and obj3")
console.log("Object.getPrototypeOf(obj2): " + Object.getPrototypeOf(obj2))
console.log("Object.getPrototypeOf(obj3): " + Object.getPrototypeOf(obj3))

heading("prototype property obj2 and obj3")
console.log("obj2.prototype: " + obj2.prototype)
console.log("obj3.prototype: " + obj3.prototype)

heading("Details obj2 and obj3")
printProps("obj2", obj2)
printProps("obj2.__proto__", obj2.__proto__)

//obj3.__proto__.key1 = "val1";

printProps("obj3", obj3)
printProps("obj3.__proto__", obj3.__proto__)


class Vehicle {
	drive() {
		console.log("Drive called");
	}
}

var car = new Vehicle();
printProps("car", car)

var function1 = function() {
	console.log("Drive called");
}





