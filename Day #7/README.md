<h3>INSTRUCTIONS</h3>

# Create a regular expression to validate if the given input is valid Indian mobile number or not
<ul>
    <li>Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits</li>
    <li>test method of regular expression can be used to validate if the mobile number pattern matches or not</li>
</ul>

## CHALLENGES (0/5 DONE)
<ul>
    <li>validateMobile('+919876543210') returns true</li>
    <li>validateMobile('+91 9876543210') returns true</li>
    <li>validateMobile('09876543210') returns true</li>
    <li>validateMobile('9876543210') returns true</li>
    <li>validateMobile('99876543210') returns false</li>
</ul>

```js

const number = '+919876543210';

function validateMobile(number) {
    // write your solution here

    return
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)


```