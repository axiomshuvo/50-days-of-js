

const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    // var splitString = str.split("");
    // var reverseArray = splitString.reverse(); 
    // var joinArray = reverseArray.join("");
    // return joinArray;
    return str.toString().split("").reverse().join("");

}

console.log(`Reversed string is: ${reverseAString(str)}`)


