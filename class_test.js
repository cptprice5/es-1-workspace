class Class1 {
    constructor(inputc1) {
        console.log("Class1 constructor: inputc1: " + inputc1);
        this.propertyFromClass1 = "propFromClass1";
    }

    print() {
        console.log("Print inside Class1");
    }

    errorPrint() {
        console.log("errorPrint inside Class1");
    }
}


class Class2 extends Class1 {
    constructor(input1, input2) {
        super(input1);
        console.log("Class2 constructor: input2: " + input2);
    }

    print() {
        super.errorPrint();
        console.log("Print inside Class2");
        console.log("this.propertyFromClass1: " + this.propertyFromClass1);
    }
}

//var c1 = new Class1("Class1 input");
var c2 = new Class2("inp1", "inp2");
c2.print();