const number = '+919876543210';

function validateMobile(number) {
    // write your solution here
    // let s=number+"";
    // if(s.substring(0,3)==="+91"||s.charAt(0)==="0"||s.length==10)
    //     return true;
    // else
    //     return false;
    const numRegex = /^(\+91|0)?\s?\d{10}$/
    
    let result = numRegex.test(number);
    return result;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)