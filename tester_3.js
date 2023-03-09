var wel = "Logic playground";
console.log(wel)

/* Palindrome types*/
// String checkers
var gtoStr = "malayalam";
var gtoStr1 = "-1mom1- "
var palCheck = (item) => {
   // In case of Numbers with string method use the temp variable
   // var temp = item.toString();
    var  normal = item.toLowerCase()//.replace(/[^A-Za-z0-9-]/g,'');
    console.log(normal);
    var length = normal.length;
    var max = Math.floor(normal.length/2);
    var Correct = "It is a Palindrome";
    var Incorrect = "The data is not a Palindrome";
    for (let i=0;i < max;i++ ){
        if (normal[i]!==normal[length-1-i]){
            return Incorrect
        }
    }
    return Correct;
};
console.log(palCheck(gtoStr));
console.log(palCheck(gtoStr1));

// Number based checkers

var gto = 1221;
var gto1 = -123;

var numPal = (num) => {
    var temp = num;
    var rnum = 0;
    if (num < 0){ return "Negative number so, It is not a palindrome"}
    while (num > 0) {
        var remin = num % 10;
      //  console.log(`this is for temp== ${temp}`);
        var num = parseInt(num/10);
      // console.log(`THis is for num == ${num}`);
        rnum = rnum*10 + remin;
    //    console.log(`THis is for reversed == ${rnum}`);
    }
    if(rnum == temp) {
        return "It is a Palindrome"
    }
    else { return "It is not a palindrome"}

};
console.log(gto);
console.log(numPal(gto));
console.log(numPal(gto1));