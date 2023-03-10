var kobj = {
    list:"Name",
    greet() {
        console.log(" \n Hello People");
    }
}

kobj.greet();
console.log(kobj.toString());
// console.log(Object.getPrototypeOf(kobj));
const lobj =new Date();
let pobj = lobj;
console.log(Object.getPrototypeOf(pobj));
const personProt = {
    greet() {
        console.log(`Welcome to the original ${this.name}`)
    },
diamond:"Hennessey",
}
ersonProt.greet();
function Person(name){
    this.name = name;
    // this.greet = personProt.greet;
    // this.diamond = personProt.diamond;
}
Object.assign(Person.prototype,personProt);
// Person.prototype.greet = personProt.greet;
const reuben = new Person ("Reueben")

reuben.greet();
console.log(reuben.diamond);