class Personal {
     introduceSelf() {
        console.log(`hello my name is`);
     };
    age= "23";

    }
class Student {
        name;
        introduceSelf() {
         console.log(`My name is ${this.name} and I am in the year ${this.year} and ${this.age} years old`);
        };
        constructor(name,year){
            this.name = name;
            this.year = year;
        };
        endQuery() {
            console.log(`${this.name} will be terminated`);
        }
}

var mike = new Student("Mike", 3);
console.log(mike.year);
mike.introduceSelf();


//// Numeronym
const miniInput = "Every developer needs atleast one simple gesture to make em happy";

const numerChecker = (word) =>
 word[0]+(word.length - 2)+word[word.length -1];
 miniInput.split("").map(function (letter){
    if (letter.length >= 4){
    return numerChecker(letter);
    }
    return letter;
 }).join("");