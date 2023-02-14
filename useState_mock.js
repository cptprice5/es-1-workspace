var useSate = function(initialValueStr) {
	this.latestValue = {};
	this.latestValue.value = initialValueStr;
	var setValue = function(newValue) {
		this.latestValue.value = newValue;
	}
	var bindedFunction = setValue.bind(this);
	return [this.latestValue, bindedFunction]
}


var [firstName, setFirstName] = new useSate('Raj');

console.log("firstName.value: " + firstName.value);
setFirstName('Surya')
console.log("firstName.value: " + firstName.value);
