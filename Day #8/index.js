const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    let dateDiff = Math.abs(Date.parse(dateText2) - Date.parse(dateText1));
    dateDiff= dateDiff/DAY_IN_MILLISECONDS
    return dateDiff;
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2019')}`)