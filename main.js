"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_Shirt(size, message) {
    return (`On ${size} size shirt print ${message}.`);
}
let result = make_Shirt("medium", `"NO WAR SPREAD PEACE"`);
let result2 = make_Shirt("small", `"I'm a programmer"`);
let result3 = make_Shirt("large", `"I know <HTML>"`);
console.log(result);
console.log(result2);
console.log(result3);
