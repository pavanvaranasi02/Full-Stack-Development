**React Components:**
1. **Core Concept:** Reusable building blocks for constructing UIs in React applications.
2. **Structure:** Combine HTML, CSS, and JavaScript logic to encapsulate a specific part of the UI.
3. **Benefits:** <br/>
**Maintainability:** Break down complex UIs into smaller, manageable pieces. <br/>
**Reusability:** Use the same component in different parts of the UI with different configurations. <br/>
**Separation of Concerns:** Different components handle distinct UI functionalities. <br/>
**Organized Code:** Group related code (markup, styling, logic) within a single component. <br/>
**Improved Teamwork:** Facilitate collaboration by dividing UI development among multiple developers. <br/>
4. The concept extends beyond React and is found in other front-end frameworks (Angular, Vue, Svelte) and even mobile development frameworks (Flutter).

**React Project Structure:**
1. **index.html:** Contains minimal HTML markup and references the main JavaScript file (usually index.jsx).
2. **src folder:** Houses the main application code, including JavaScript files with .jsx extension.
3. **JSX (JavaScript Syntax Extension):**
<ul>
<li>Allows writing HTML-like markup within JavaScript code.</li>
<li>Not natively supported by browsers; requires <strong>transpilation</strong> before running in the browser.</li>
<li>Provides a convenient way to structure and describe UI components in React.</li>
</ul>

4. **React Components:**
<ul>
  <li>Defined as JavaScript functions starting with an <strong>uppercase character.</strong></li>
<li>Return JSX code representing the UI content to be rendered.</li>
<li>Encapsulate UI logic and markup, promoting reusability and maintainability.</li>
</ul>

**React File Extensions and JSX:**
1. **File Extensions:** <br/>
**.jsx:** Commonly used extension signifying a file containing JSX code. <br/>
**.js:** Can also be used for files with JSX, depending on project setup. <br/>
The build process behind the development server handles JSX code, regardless of the extension.
2. **File Imports:**<br/>
Some projects **require the file extension** in import statements (e.g., import App from './App.jsx'). <br/>
Others **allow omitting the extension** (e.g., import App from './App'). <br/>
3. The choice of extension doesn't affect browser compatibility; both require a build process for JSX.
4. Project setup dictates the preferred extension and import syntax.

**Steps Involved in Transpiling And Rendering:**
1. **JSX Transformation:** During development, JSX code is transformed into regular JavaScript that the browser can understand.
2. **Entry Point (index.jsx):** This file imports the main component (e.g., App.jsx) and renders it using the render method.
3. **Component Import:** The App.jsx file is imported into index.jsx to make its component accessible for rendering.
4. **render Method:** The render method within the App.jsx component returns JSX code representing the desired UI content.
5. **createRoot Method:** The createRoot method is called in index.jsx, taking the root HTML element (e.g., a <div> with id="root") as input.
6. **Component Tree Rendering:** React analyzes the component tree (including custom components), combining their JSX code.
7. **DOM Generation:** Based on the analyzed component tree, React generates the final DOM structure containing only standard HTML elements.
8. **DOM Manipulation:** The generated DOM structure is used to update the content within the root element specified in createRoot.

**Adding Dynamic Content in React Components:**
1. Dynamic content changes based on user interaction, data fetching, or other factors.
2. **Curly braces {}** in JSX allow embedding JavaScript expressions for dynamic output.
3. Expressions within curly braces are evaluated by React and their result is displayed.
4. Block expressions like if, if-else, for-loop,... are not allowed.

**Loading Images Dynamically in React Components:**
1. **Static Image Paths:** Directly referencing image paths in the src attribute can lead to problems during deployment. Bundling processes might ignore such images.
2. **Deployment Consideration:** Deployment involves code transformation, optimization, and bundling. Ignoring image paths during this process can cause missing images on the deployed website.
3. **Recommended Approach:** Use import statements to **import images as JavaScript objects.**
4. **Build Process Integration:** The build process understands these imports and ensures image files are included in the final deployment package.
5. **Dynamic Image Usage:** Employ curly braces {} within the src attribute to reference the imported image object dynamically.
6. **Omitting Quotes:** Important to omit quotes when using dynamic expressions for attribute values in JSX.

**Reusing Components with Props in React:**
1. **Reusable Components:** Components can be built to be used multiple times with different data.
2. **Props Concept:** Props allow passing data from parent components to child components.
3. **Custom Attributes:** Props are defined as custom attributes on component tags in JSX.
4. **Props Object:** Props are consolidated into a single object passed as an argument to the component function.
5. **Accessing Props:** Component functions access prop values using the props object and the corresponding key names.

**Alternate ways to use props:**
1. **Shorthand for Setting Props:** If prop names directly match object property names, use the spread operator within curly braces directly on the component tag (e.g., <CoreConcept {...CORE_CONCEPTS[0]} />).
2. **Destructuring in Parameter List:** Use curly braces in the component function's parameter list to destructure the props object (e.g., function CoreConcept({ title, description, image }) { ... }).
Accessing Destructured Props: Use the destructured variable names directly within the component function.


