function func1(input) {
	console.log("func1 called input: " + input)
	if (input == 10) {
		console.log("Base case reached");
	} else {
		var newInput = input+1;
		func1(newInput);
		console.log("Finished executing for " + newInput);
	}
}

func1(1);


/*
	[func1-2] - input - 3
	[func1-1] - input - 2
	[func1-0] - input - 1
*/