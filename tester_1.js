var Wel ="Logic playground";
console.log(Wel)

const kilo = [2,5,8,19,1,22,11,1.4];
//Generic way

const doub =(arr) =>
{
for (let i =0;i<arr.length;i++){
    arr[i]=arr[i]*2;
    }
 return arr
}
console.log(doub(kilo));

/*Inbuilt method

const doub = kilo.reduce(((res,normal)=>normal +=res),0);
console.log(doub);

*/

const imb = [
    {firstName:"Mack",lastName:"Tavish",age:43,role:'mercernary'},
    {firstName:"Jack",lastName:"Sparrow",age:33,role:'sniper'},
    {firstName:"Warren",lastName:"Buffet",age:38,role:'assault'},
    {firstName:"Tom",lastName:"Cruise",age:40,role:'sniper'}
]

const vlg = (result,current) =>{
    if(result[current.age]){
        result[current.age] = ++result[current.age];
    }
    else{result[current.age]= 1}
    return vlg
}
console.log(vlg);
const leb = imb.reduce((acc,itemObj)=>{
    if (itemObj.age>39){
     acc[itemObj.age]=itemObj.firstName + " " + itemObj.lastName;
    };
    // vlg(acc,itemObj);
    return acc
},{});
console.log(leb);

const beb = imb.filter((itemObj)=>itemObj.age>39).
map((normal)=>{return normal.age+ ": " +normal.firstName + " " + normal.lastName });
console.log(beb);
/////////////////////////////////////////////////////////
const ste = new Set(['x','v','ci','ca','d']);
console.log(ste);
const ets = new Set([...ste].sort());
console.log(ets);


