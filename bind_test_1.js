var templateFunction1 = function() {
	console.log("Accesing value : " + this.value1);
}

var instanceOfTemplateFunction1 = new templateFunction1();
instanceOfTemplateFunction1.value1 = "Setting value1 "
instanceOfTemplateFunction1.constructor();

var obj1 = {};
obj1.value1 = 'assigning value1 for obj1';
var bindedFunc1 = templateFunction1.bind(obj1);
bindedFunc1();

