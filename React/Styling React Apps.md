**Styling React Applications:**

This section dives into various approaches for styling React components: <br/>

1. **Vanilla CSS:**
- Basic CSS applied to the entire application through a single CSS file.
- Suitable for simple projects but lacks component-specific styling.
2. **CSS Modules:**
- Scopes styles to individual components for better isolation and maintainability.
- You'll learn about scoping in this section.
3. **Styled Components:**
- A popular CSS-in-JavaScript library for styling components directly within code.
- Offers advantages like dynamic styling and improved developer experience.
4. **Tailwind CSS:**
- A utility-first CSS framework for building responsive layouts quickly.
- You'll explore its application for styling React components.

**Scoping Issues with Vanilla CSS in React:**
1. **Problem:**
- Vanilla CSS rules are not inherently scoped to the components that import them.
- This can lead to unintended styles being applied to elements in other components.
2. **Example:**
- The Header.css file contains a rule targeting paragraphs within the header.
- Despite importing Header.css in Header.jsx, the rule can also affect paragraphs in other components (e.g., AuthInputs.jsx).
3. **Reason:**
- CSS styles are injected globally into the HTML head section, regardless of the component importing the CSS file.
4. **Consequences:**
- Difficulty in maintaining styles as the project grows.
- Increased risk of style conflicts between components.
5. **Solution:**
- Use Inline Styles. Style elements with style prop (object with camelCase keys like color, textAlign,..)
- Example <<code>header style={{textAlign: center}} </code>><<code>/header</code>>

**CSS Modules for Scoped Styling in React:**
1. **Problem:** Regular CSS can lead to unintended styles affecting multiple components due to non-scoped selectors.
2. **Solution:** CSS Modules
- Scopes CSS styles to the component file where they are imported.
- Achieved through build process transformation of class names.
3. **How it works:**
- Rename CSS file to [filename].module.css (e.g., header.module.css).
- Import the CSS file and access classes through a generated JavaScript object.(import classes from './header.module.css';)
- Build process transforms class names to unique identifiers. (At runtime if you inspect that element you can com across some randome characters sepearated by underscore attached to the given class name.)
- Example: if our class name was paragraph, in react we would use it as className={classes.paragraph} and at runtime it might be seen as class="_paragraph_svrj_1234".
4. **Advantages:**
- Decoupled CSS and JSX code.
- Scoped styles to component files.
5. **Disadvantages:**
- Requires knowledge of CSS.
- Can lead to many small CSS files for larger projects.


**Styled-Components for Styling React Components:**
1. **Introduction:**
- **Styled-components** is a popular package for styling React components.
- It allows defining styles within JavaScript components using template literals.
2. **Installation:**
- Install using <code>npm install styled-components</code>
3. **Usage:**
- Import styled from styled-components. (import {styled} from 'styled-components')
- Use styled with an HTML elements (e.g., styled.div``)
- Inside the backticks(``), define styles using regular CSS syntax (no camelCase needed).
- Store the styled component in a variable (e.g., let ControlDiv = styled.div` <br/>
display: flex; <br/>
flex-direction: column; <br/>
gap: 0.5rem; <br/>
margin-bottom: 1.5rem <br/>
`).
- Use the styled component like a regular component to replace the original element.
- Example: <code> <<code>div class="controls"</code>> <<code>/div</code>> <br/>
// the above one is same as the below one. <br/>
<<code>ControlDiv</code>><<code>/ControlDiv</code>> </code>
4. **Benefits:**
- Styles are defined within components, improving maintainability.
- Multiline styles are possible using template literals.
5. **Behind the Scenes:**
- Styled-components generates unique CSS class names and injects them into the head section. (some random names are placed in class names when you inspect the element).
- These classes are then applied to the styled component element.
6. **Conditional Styling with Styled-Components:**
- Styled components forward props to the underlying html elements.
- You can use dynamic class names for conditional styling as before.
7. **Conditional Styling with Props:**
- Add a custom prop (e.g., $invalid) to your styled component.
- Use template literals(``${js logic goes here}``) within styled-components to inject props and dynamically set styles.
- Access props using the props object within the template literal function.
- Conditionally apply styles based on prop values (e.g., color: (props.$invalid ?  "red" : "blue)).
8. **Styled-Components: Media Queries, Nested Selectors, and Pseudo Selectors:**
- **Media Queries:** Applying styles conditionally based on screen size.
- **Nested Selectors:** Styling child elements within a styled component.
- **Pseudo Selectors:** Applying styles based on user interaction (e.g., hover).
- How to style the above ones using styled components
- Example: const StyledHeader = styled.header`
font-weight: bold;
text-align: center;

& img { /* applies for header img */
  width: 100px; height: 100px;
}

@media (minwidth:768px) {
 margin-bottom: 4rem; /* applies for header */
 & h1 {
   font-size: 2.25rem;
 }
}

&:hover { /* applies for header:hover */
  color: red;
}
`
**Tailwind CSS:**
1. Install Tailwind CSS and its dependencies using npm or yarn.
2. Configure Tailwind by specifying content paths in the tailwind.config.js file.
3. Include Tailwind directives in your main CSS file (e.g., @tailwind base; @tailwind components; @tailwind utilities;).
4. **Basic Usage:**
- Add Tailwind CSS classes directly to your HTML elements using the class attribute.
- Class names are descriptive and represent the styles they apply (e.g., flex, text-center, mb-4).
- Use autocompletion tools (like Tailwind IntelliSense) for easier class discovery.
5. **Benefits:**
- Rapid prototyping and development due to pre-defined styles.
- Reduced need for custom CSS code.
- Improved code maintainability with clear and descriptive class names.
6. Still we can write some rules in css file and that work well. But if you want to import any google fonts, you need to update tailwind.config.js file.

**Tailwind CSS: Media Queries and Pseudo Selectors:**
1. **Media Queries:**
- Tailwind uses class prefixes to apply styles conditionally based on screen size. <br/>
md: (medium), lg: (large), xl: (extra-large), etc.
2. **Pseudo Selectors:**
- Tailwind supports pseudo selectors like hover and focus using a colon suffix.
- Use hover: prefix before a class to apply styles only on hover state.

<img width="1431" alt="Screenshot 2024-03-19 at 6 05 17 PM" src="https://github.com/nagasaipavan1/Full-Stack-Development/assets/104422334/727830f5-fc70-4412-96b7-0440ab5bc7de">

<img width="1422" alt="Screenshot 2024-03-19 at 6 05 46 PM" src="https://github.com/nagasaipavan1/Full-Stack-Development/assets/104422334/b11fce1a-c412-4969-8514-5cde10dce5e3">





