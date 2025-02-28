
function stringChop(str,n){
    let arr = []
    if(str.length<n) {
     return arr
    }
    else if(str.length>n){
      for(let i=0; i<str.length; i=i+n){
          let val = str.substring(i,i+n);
          arr.push(val);
      }  
      return arr
    }
    return arr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));



