**What is React:**
1. MVC -> Model View Controller
2. React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
3. React is a tool for building UI components.
4. You can write React code directly in HTML, But to use React in production, you need npm which is included with Node.js.

**How does React Work?**
1. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating,
    before making the changes in the browser DOM.
2. React finds out what changes have been made, and changes only what needs to be changed.

**React.JS History:**
1. Current version of React.JS is V18.0.0 (April 2022).
2. Initial Release to the Public (V0.3.0) was in July 2013.
3. React.JS was first used in 2011 for Facebook's Newsfeed feature.
4. Facebook Software Engineer, Jordan Walke, created it.
5. Current version of create-react-app is v5.0.1 (April 2022).
6. **create-react-app includes built tools such as webpack, Babel, and ESLint.**

**What is ES6?**
1. ES6 stands for ECMAScript 6.
2. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.


**Why React?**
1. Fast Responsive.
2. Declarative UI Programming.  (Declarative means -> You define the goal, not the steps);

**Getting Started with React:**
1. Install Node.js on your Operating System.
2. We can now create react apps using **vite@latest** or **create-react-app**.
3. **npm install** is the command used to install all packages used in the react application.
4. For Vite, **npm run dev** is used to run the application.
5. **npm start** is the command for create-react-app.

**Why Do You Need A Special Project Setup?:**
1. Why we can't create a html, and js file and run our code directly, is because we are using **HTML in JS** which is also called **JSX**.
2. The JSX code must be transformed into browser understandable code then only, the browser can execute the JSX code.

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
