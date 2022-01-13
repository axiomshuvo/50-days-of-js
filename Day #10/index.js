const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
    let result = array.filter(elem => elem.field !== filterField );
    return result;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
