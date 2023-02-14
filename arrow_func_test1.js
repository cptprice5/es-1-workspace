const user = {
	userName: "jayanth",
	getUserName: function () {
		console.log("getUserName called");
		return this.userName;
	}
}


const getName = user.getUserName;

console.log("(typeof getName): " + (typeof getName))
console.log("(getName instanceof Function): " + (getName instanceof Function))
console.log("(typeof getName.prototype): " + (getName.prototype))

var var2 = {};
var2.userName = 'var2username'

var bindedFunc = getName.bind(user)
console.log(bindedFunc())