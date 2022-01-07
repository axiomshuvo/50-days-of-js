function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    let num = Math.floor( Math.random() * (rangeEnd - rangeStart) + rangeStart);
	return num;
}

console.log(`My random number: ${randomNumberGeneratorInRange(100, 200) , randomNumberGeneratorInRange(10, 50) }`);
