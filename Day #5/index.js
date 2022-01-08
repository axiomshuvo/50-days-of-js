const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    let firstIndex = str.indexOf('X');
    let lastIndex = str.lastIndexOf('X');
    if( firstIndex === -1 ){
        return -1;
    }else if ( firstIndex === lastIndex ){
        return 0;
    } else{
        return lastIndex - firstIndex;
    }
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
