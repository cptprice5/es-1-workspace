console.log("Mod1_es");

//import Mod2 from './mod2_es.js'
const mod2 = await import('./mod2_es.js');


function sleep(ms) {
  console.log("Sleep start")
  return new Promise((resolve, error) => {
    console.log('(typeof resolve): '+ (typeof resolve));
    console.log('(typeof error): '+ (typeof error));
    console.log("Sleep promise start")
    setTimeout(()=>{

        //resolve('result_val')
        error(new Error('this is custom made error'));
    }, ms);
  });
}

var func1 = async function() {
    console.log("Entered func1")
    try {
        var result = await sleep(5000);
        console.log("result: " + result)
    } catch (e) {
        console.log("Caught error: " + e)
    }

    /*await setTimeout(() => {
        console.log("Settimeout func called")
    }, 5000)*/
    console.log("Exited func1")
}


console.log("Before calling func1");
func1();
console.log("After calling func1");