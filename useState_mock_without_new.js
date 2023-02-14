var useSate = function(initialValueStr) {
	var latestValue = {};
	latestValue.value = initialValueStr;
	var setValue = function(newValue) {
		latestValue.value = newValue;
	}
	return [latestValue, setValue]
}


var [firstName, setFirstName] = useSate('Raj');

console.log("firstName.value: " + firstName.value);
setFirstName('Surya')
console.log("firstName.value: " + firstName.value);


var [firstName, setFirstName] = useSate('Thanos');
console.log("firstName.value: " + firstName.value);


var func1 = function(input1, input2) {
	var internalObj = {};
	internalObj.v1 = input1;
	internalObj.v2 = input2;
	return internalObj;
}

var instanceResult = func1('raj', 'surya');
console.log("instanceResult:" + instanceResult);
console.log("instanceResult.internalObj.v1: " + instanceResult.v1);