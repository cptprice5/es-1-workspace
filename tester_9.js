//Duplicate removal
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};

// Another way
var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    var k = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            nums[k++] = nums[i];
        }
    }
    return k;
};
// Another way

var removeDuplicates = function (nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set.values())
    return set.size;
};

// Duplicate element removal

var removeElement = function(nums, val) {
    var zeroStartIdx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    return zeroStartIdx; 
};

// Another way

var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    
    return left;
};

// Another way

var removeElement = function(nums, val) {
    while(nums.indexOf(val,0) >= 0) {
    nums.splice(nums.indexOf(val,0), 1);
    }
    return nums.length;
    };

