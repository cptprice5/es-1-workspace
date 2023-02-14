function* genFunc1(startValue) {
	console.log("Begining of genFunc1");
	let v1 = startValue;
	console.log("V1 declared");
	yield v1;
	
	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;

	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;
	
	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;
	
	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;
	
	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;
	
	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;
	
	v1 += 5;
	console.log("V1 incremented to: " + v1);
	yield v1;
	
}

const instanceOFGenFun1 = genFunc1(3);
console.log("Calling using instanceOFGenFun1.next().value: " + instanceOFGenFun1.next().value)
console.log("Calling using instanceOFGenFun1.next().value: " + instanceOFGenFun1.next().value)
console.log("Calling using instanceOFGenFun1.next().value: " + instanceOFGenFun1.next().value)
console.log("Calling using instanceOFGenFun1.next().value: " + instanceOFGenFun1.next().value)

const instance2OfGenFun1 = genFunc1(50);
var result = instance2OfGenFun1.next();
while(!result.done) {
	console.log("result.value: " + result.value);
	result = instance2OfGenFun1.next();
}
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);
console.log("instance2OfGenFun1.next().value: " + instance2OfGenFun1.next().value);


console.log("===============================================")
const genFuncIns1 = genFunc1(1);
const genFuncIns2 = genFunc1(3);
console.log("genFuncIns1.next().value: " + genFuncIns1.next().value);
console.log("genFuncIns2.next().value: " + genFuncIns2.next().value);
console.log("genFuncIns1.next().value: " + genFuncIns1.next().value);
console.log("genFuncIns2.next().value: " + genFuncIns2.next().value);
console.log("genFuncIns1.next().value: " + genFuncIns1.next().value);
console.log("genFuncIns2.next().value: " + genFuncIns2.next().value);









