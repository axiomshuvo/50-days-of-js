function fibonacci(n) {
	// write your solution here
    n = parseInt(n);
    if(n <= 1){
        return n;
    }

    let nextNum, fn = 0, fn2= 1;
    for(let i=1; i<n; i++){
        nextNum = fn + fn2;
        fn=fn2;
        fn2=nextNum;
    }
    return nextNum;

}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)