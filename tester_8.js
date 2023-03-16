//First Occurence

const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;    
    if (haystack.length < needle.length) return -1;        
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {    
      if (haystack[i] === needle[0]) {                
        for (let j = 0; j < needle.length; j++) {     
          if (needle[j] !== haystack[i + j]) {        
            break;                                    
          } else if (j === needle.length - 1){        
            return i;                                 // return the index of the first character of haystack with which we started the loop
          }
        }
      }
    }
    
    return -1;  
};

// Another way

var stStr = function(haystack, needle) {
    if (needle.length == 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let k = i, j = 0;
        while (haystack[k] == needle[j] && j < needle.length) {
            k++, j++;
        }
        if (j == needle.length) return i;
    }
    return -1; 
};

//Another way

var sStr = function(haystack, needle) {
    if (!needle) return 0
    let idx = 0
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] != needle[idx]) {
        i = i-idx
        idx = 0
      } else {
        if (idx == needle.length-1) return i-idx
        idx++
      }
    }
    return -1
  };

  var rStr = function(haystack, needle) {
    const needleLength = needle.length;
    if(needleLength===0) return 0;
    for(let i=0;i<haystack.length;i++){
        if(haystack.substring(i,i+needleLength)===needle){
            return i;
        }
    }
    return -1;
};