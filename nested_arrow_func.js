var globalvar1 = 'this is globalvar';
var var2 = "Var2 from gloval scope";

var mockLibraryFunction = function() {
	console.log("mockLibraryFunction: this.key1 := " + this.key1);
	console.log("mockLibraryFunction: this.key2 := " + this.key2);
	console.log("mockLibraryFunction: this.key3 := " + this.key3);
}

const outerFunc = function(){
	//this.var1 = "Var1 value from outerFunc";

		
	var innerFunc = function(){
		this.var1 = "Var1 value from innerFunc constructor";
		var var2 = "Var2 from innerFunc";
		console.log("Printing inside innerFunc: this.var1 := " + this.var1);
		console.log("Printing inside innerFunc: var2 := " + var2);
	} 
	var instanceOfInnerFunc = new innerFunc();
	instanceOfInnerFunc.key1 = "Value of Key1"
	instanceOfInnerFunc.key2 = "Value of Key2"
	instanceOfInnerFunc.key3 = "Value of Key3"


	instanceOfInnerFunc.innerFunc2 = function() {
		console.log("Printing inside innerFunc2: this.var1 := " + this.var1);
		console.log("Printing inside innerFunc2: this.dynamicVar1 := " + this.dynamicVar1);
		console.log("Printing inside innerFunc2: var2 := " + var2);
	}

	instanceOfInnerFunc.innerFunc2();
	instanceOfInnerFunc.mockLibraryFunction = mockLibraryFunction;
	mockLibraryFunction.bind(instanceOfInnerFunc);
	instanceOfInnerFunc.mockLibraryFunction();

	console.log("Printing inside outerFunc: this.var1 := " + this.var1);
}
new outerFunc();

// console.log("Global this: " + (this))
// console.log("Checking this and process: " + (this === process))



// function func1() {

// }

// var func2 = function() {

// }