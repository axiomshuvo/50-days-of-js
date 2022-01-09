<h3>INSTRUCTIONS</h3>

# Write a function to remove array element based on object property?
<ul>
    <li>How to remove array element based on object property?</li>
</ul>

## CHALLENGES (0/3 DONE)
<ul>
    <li>removeArrayElement("money") returns the array without the money object</li>
    <li>removeArrayElement("id") returns the array without the id object</li>
    <li>removeArrayElement("cStatus") returns the array without the cStatus object</li>
</ul>

```js

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here

    return
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)

```