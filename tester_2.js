var wel = "Logic playground";
console.log(wel)


// Two sum
const nums = [2,4,5,11,7,0,3,15];
let target = 9;

/* var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
*/
///////////
/* var twoSum = function(nums, target) {
    const indices = new Map();
    //const blank=[];

    for (let index = 0; index < nums.length; index++) {
        const remainder = target - nums[index];

        if (indices.has(remainder)) {
            // blank.push([indices.get(remainder), index]);
           //console.log(indices.size);
            return [indices.get(remainder), index];
        }
        indices.set(nums[index], index)
    }
   // return blank
};
 */
/////////////
/*   Fastest runtime optimized code  */
ar twoSum = (nums,target) =>{
    let contr = {};
    // The following is not needed if else statement is given
    // nums.forEach((element,index)=> {
    //     contr[element]=index;
    //  });
    //console.log(contr);
    for (let i=0;i<nums.length;i++){
        const rem = target -nums[i];
        if ((typeof contr[rem]!=='undefined')&&(contr[rem]!==i)){
            return [contr[rem],i];
        }else {
            contr[nums[i]]=i;
        }
    }
    return [] //or null
};
console.log(twoSum(nums,target));

//////////////////////////

/*  Secondary method    */
 const twinSum = (nums,target)=>{
     console.log(nums);
     const store=new Map();
     const striker =[];
     for (let i=0;i<nums.length;i++){
         const remai = target - nums[i];
         if(store.has(remai)){
              striker.push([store.get(remai),i])
         }
         store.set(nums[i],i)
     }
     return striker
 }
 console.log(twinSum(nums,target));

/*  var twinSum = function (nums, target) {
      let obj = {};

      for (let i = 0; i < nums.length; i++) {
          if (obj.hasOwnProperty(target - nums[i])) {
              return [obj[target - nums[i]], i];
          }
          obj[nums[i]] = i;
      }
      return []
  };*/

   var twinSumme = function(nums, target) {
       let hashMap = new Map();

       for(const [index,number] of nums.entries())
       {
           const compliment = target - number;

           if(hashMap.has(compliment)){
               return [hashMap.get(compliment), index];
           };

           hashMap.set(number, index);
       };
       return []
   };
   console.log(twinSumme(nums,target));
