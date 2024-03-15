**Import and Export in React:**
1. **Why Use It?** <br/>
    Break down code into reusable modules across multiple files. <br/>
    Improves code maintainability and manageability.
2. **Exporting** <br/>
Makes variables, functions, or values available for other files. <br/>
**Two ways to export:** <br/>
**Default Export (only one per file)** <br/>
Use export default keyword before the value. <br/>
Import with import name from 'path/to/file' (no curly braces). <br/>
**Named Exports (multiple per file)** <br/>
Use export keyword before the variable or function name. <br/>
Import with curly braces: import { name1, name2 } from 'path/to/file'. <br/>
3. **Importing** <br/>
Use import keyword to bring in exported functionalities from other files. <br/>
Syntax depends on export type (default or named). <br/>
4. **Additional Points** <br/>
Use type="module" in script tag for import/export to work (not required in React projects due to build process). <br/>
You can import **group named exports** into an object using import * as utils from 'path/to/file'. <br/>
Use **as** keyword to assign aliases to imported names: import { abc as content } from 'path/to/file'.

**JS Arrow Functions:**
1. **Omitting Parameter List Parentheses:** <br/>
You can skip parentheses only if your arrow function has exactly one parameter. <br/>
Examples: <br/>
Valid: userName => { ... } <br/>
Invalid (no parameters): () => { ... } (use () => { ... } instead) <br/>
Invalid (multiple parameters): userName, userAge => { ... } (use (userName, userAge) => { ... } instead) <br/>

2. **Omitting Function Body Curly Braces:**
You can skip curly braces and the return keyword only if your function has a single expression to return. <br/>
Examples: <br/>
Valid: number => number * 3; <br/>
Invalid (missing return): number => return number * 3; <br/>
Invalid (complex logic): number => if (number === 2) { return 5 }; (use curly braces for complex logic) <br/>

3. **Returning an Object:** <br/>
When using the shortcut from point 2 and returning an object, you must wrap the object in parentheses. <br/>
Example: <br/>
Valid: number => ({ age: number }); <br/>
Invalid: number => { age: number };


**Arrays in JavaScript:**
1. Arrays store ordered lists of values. 
2. Created using square brackets [].
3. Access elements by index, starting from 0 (e.g., hobbies[0]).
4. **Array Methods:** <br/>
.push(item) - Add an item to the end of the array. <br/>
.findIndex(callback) - Finds the index of the first element where the callback function returns true. The callback function receives an element (item) as input and should return true/false. <br/>
5. **Arrow functions** are a concise way to write callback functions for .findIndex, <br/>
.map(callback) - Creates a new array with the results of calling the callback function on every element in the original array.
6. The callback function receives an element (item) as input and should return the transformed value.
7. Arrow functions are commonly used for concise callback functions in .map.

**Destructing:**
1. **Destructuring Arrays:** <br/>
**Purpose:** Extract values from arrays and assign them to variables. <br/>
**Syntax:** Square brackets [] on the left side of the assignment. <br/>
**Example:** <code> const userNameData = ["Max", "Schwarzmuller"]; <br/>
let firstName = userNameData[0]; <br/>
let lastName = userNameData[1]; <br/>
// Destructuring alternative (shorter): <br/>
const [firstName, lastName] = userNameData;  </code> <br/>
**Benefits:** More concise and readable code.
2. **Destructuring Objects:** <br/>
**Purpose:** Extract properties from objects and assign them to variables. <br/>
**Syntax:** Curly braces {} on the left side of the assignment. <br/>
**Example:** <code> const user = { name: "Max", age: 31 }; <br/>
let userName = user.name; <br/>
let age = user.age; <br/>
// Destructuring alternative (shorter): <br/>
const { name: userName, age } = user; // Alias for "name" property </code><br/>
**Key Points:** Property names in the destructured object must match the object's property names. <br/>
Use colons : to assign **aliases** to extracted properties.

**Spread Operator (...):**
1. **Purpose:** Expands iterables (like arrays or objects) into individual elements when used in a new array or object literal.
2. **Syntax:**
In arrays: [...array1, ...array2, ...etc] <br/>
In objects: { ...object1, ...object2, ...etc } <br/>
**Example (Arrays):** <code> const hobbies = ["Sports", "Cooking"]; <br/>
const newHobbies = ["Reading"]; <br/>
// Merging arrays with nested arrays (incorrect): <br/>
const mergedHobbies = [hobbies, newHobbies]; // Nested arrays <br/>
// Merging arrays with spread operator (correct): <br/>
const mergedHobbies = [...hobbies, ...newHobbies]; // Individual values </code> <br/>
**Example (Objects):** <br/>
<code> const user = { name: "Max" }; <br/>
const extendedUser = { isAdmin: true }; <br/>
// Merging objects with spread operator: <br/>
const fullUser = { ...user, ...extendedUser }; </code>

**setTimeout:**
1. **Purpose:** Schedules a function to be executed after a specified delay (in milliseconds). <br/>
**Syntax:** setTimeout(function, milliseconds) <br/>
Example: <code> function sayHi() { <br/>
  console.log("Hi!"); <br/>
} <br/>
setTimeout(sayHi, 2000); // Execute sayHi after 2 seconds <br/>
function handleTimeout() { <br/>
  console.log("Timed out (function)"); <br/>
} <br/>
// Wrong: Executes `handleTimeout` immediately and passes the return value (undefined) <br/>
setTimeout(handleTimeout(), 1000); <br/>
// Correct: Passes the `handleTimeout` function as an argument <br/>
setTimeout(handleTimeout, 1000); </code>

**Important Methods:**
1. **map()**: creates a new array by applying a function to every element in the original array. <br/>
<code> const numbers = [1, 2, 3, 4, 5]; <br/>
const doubledNumbers = numbers.map(number => number * 2); <br/>
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10] </code> 
2. **filter()**: creates a new array containing only elements that pass a test implemented by the provided function. <br/>
<code> const numbers = [1, 2, 3, 4, 5]; <br/>
const evenNumbers = numbers.filter(number => number % 2 === 0); <br/>
console.log(evenNumbers); // Output: [2, 4] </code>
3. **reduce()**: applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. <br/>
<code> const numbers = [1, 2, 3, 4, 5]; <br/>
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0); <br/>
// Note: Here first statement is the logic and the second statement sepearated by comma (0 in above case) is accumulator initial value. <br/>
console.log(sum); // Output: 15 </code>
4. **find()**: returns the value of the first element in the array that satisfies a test provided by the function. <br/>
<code> const numbers = [1, 2, 3, 4, 5]; <br/>
const firstEvenNumber = numbers.find(number => number % 2 === 0); <br/>
console.log(firstEvenNumber); // Output: 2 </code>
5. **findIndex()**: returns the index of the first element in the array that satisfies a test provided by the function. If no element passes the test, -1 is returned. <br/>
<code> const numbers = [1, 2, 3, 4, 5]; <br/>
const indexOfFirstEvenNumber = numbers.findIndex(number => number % 2 === 0); <br/>
console.log(indexOfFirstEvenNumber); // Output: 1 </code>
6. **concat()**: creates a new array by joining a or more arrays and/or values to the calling array.<br/>
<code> const colors = ["red", "yellow", "blue"]; <br/>
const fruits = ["apple", "banana"]; <br/>
const newColors = colors.concat(fruits); <br/>
console.log(newColors); // Output: ["red", "yellow", "blue", "apple", "banana"] </code>
7. **slice()**: creates a new array by copying a section of an array from a start index to an end index, without modifying the original array. <br/>
<code> const colors = ["red", "yellow", "blue", "green"]; <br/>
const newColors = colors.slice(1, 3); <br/>
console.log(newColors); // Output: ["yellow", "blue"] </code>
8. **splice()**: modifies the calling array by removing elements from a given index, and optionally inserting new elements into that index. The splice method returns a new array containing the deleted elements. <br/>
<code> const colors = ["red", "yellow", "blue", "green"]; <br/>
const removedElement = colors.splice(1, 1, "purple"); <br/>
console.log(colors); // Output: ["red", "purple", "blue", "green"] <br/>
console.log(removedElement); // Output: ["yellow"] </code>
