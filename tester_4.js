var wel = "Logic playground";
console.log(wel)


/* Anagram problem */
const amar = ["pan", "PAN", "teachers","Nap","CheatErs","era", "ArE", "hectares"];
var aclean = (arr) =>{
    let mpo = new Map();
    for (let i of arr){
        var splitConjoined = i.toLowerCase().split("").sort().join("");
        mpo.set(splitConjoined,i);
    }

    return (Array.from(mpo.values()));

}

console.log(amar);
console.log(aclean(amar));