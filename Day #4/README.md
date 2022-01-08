<h3>INSTRUCTIONS</h3>

# Write a function which can convert the time input given in 12 hours format to 24 hours format
<ul>
    <li>The check for 'AM' and 'PM' can be verified using endsWith String method</li>
    <li>An extra 0 would be needed if the hours have single digit</li>
</ul>

## CHALLENGES (0/6 DONE)
<ul>
    <li>convertTo24HrsFormat("12:10AM") returns "00:10"</li>
    <li>convertTo24HrsFormat("5:00AM") returns "05:00"</li>
    <li>convertTo24HrsFormat("12:33PM") returns "12:33"</li>
    <li>convertTo24HrsFormat("01:59PM") returns "13:59"</li>
    <li>convertTo24HrsFormat("11:8PM") returns "23:08"</li>
    <li>convertTo24HrsFormat("10:02PM") returns "22:02"</li>
</ul>

```js

const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here

    return
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)


```