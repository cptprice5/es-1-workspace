const arrowFunc = () => {
	console.log("Called arrow func");
}

const normalFunc = function() {
	console.log("Called normal func");
}

console.log("(typeof arrowFunc): " + (typeof arrowFunc))
console.log("(typeof normalFunc): " + (typeof normalFunc))
console.log("(typeof arrowFunc.prototype): " + (arrowFunc.prototype))
console.log("(typeof normalFunc.prototype): " + (normalFunc.prototype))