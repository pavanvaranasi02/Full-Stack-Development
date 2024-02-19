# Day-7:
**What is CSS?**
1. CSS stands for Cascading Style Sheets.
2. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
3. CSS saves a lot of work. It can control the layout of multiple web pages all at once.
4. External stylesheets are stored in CSS files.
<img src="https://www.w3schools.com/css/img_selector.gif" width="100%"/>
5. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces. (h1 is selector in the above img). 

**Three Ways to Insert CSS:** <br/>
There are three ways of inserting a style sheet:
1. External CSS (in head tag use <<code>link rel="stylesheet" href="mystyle.css"</code>>)
2. Internal CSS (in head tag use <<code>style</code>>)
3. Inline CSS (use style attribute).

**Note: Do not add a space between the property value (20) and the unit (px):
Incorrect (space): font-size: 20 px;
Correct (no space): font-size: 20px;**  <br/>

A CSS comment is placed inside the <<code>style</code>> element, and starts with /* and ends with */ <br/>

**CSS Backgrounds:**
1. The CSS background properties are used to add background effects for elements.
2. background-color, image, repeat, attachment are already in HTML.md
3. background-position:	Sets the starting position of a background image. (ex: background-position: right top;)
4. The background-clip property defines how far the background (color or image) should extend within an element.
5. The background-origin property specifies the origin position (the background positioning area) of a background image.

# Day-8
**CSS Borders:**
1. The border-property(like width, color, style) property can have from one to four values (for the top border, right border, bottom border, and the left border).
2. The border-radius property is used to add rounded borders to an element.

**CSS Margins:**
**(Note first 5 points even same for border-property(like width, color, style) as well).**<br/>
1. The margin can also be given 4 values which represent top, right, bottom, left.
2. if only 3 values are given then it means top, right&left, bottom
3. if only 2 values are given then it means top&bottom, left&right.
4. if only 1 value is given then it means top&right&bottom&left.
5. margin	A shorthand property for setting all the margin properties in one declaration<br/>
margin-bottom	Sets the bottom margin of an element<br/>
margin-left	Sets the left margin of an element<br/>
margin-right	Sets the right margin of an element<br/>
margin-top	Sets the top margin of an element.
6. Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins. This does not happen on left and right margins! Only top and bottom margins!
7. Example:
h1 { margin: 0 0 50px 0; }, h2 { margin: 20px 0 0 0; }, <br/>
In this example the h1 element has a bottom margin of 50px and the h2 element has a top margin of 20px. So, the vertical margin between h1 and h2 should have been 70px (50px + 20px). However, due to margin collapse, the actual margin ends up being 50px.

**CSS Padding:**
1. Even padding is also same as border, margins.
2. div { width: 300px; padding: 25px; } <br/>
Here, the <div> element is given a width of 300px. However, the actual width of the <div> element will be 350px (300px + 25px of left padding + 25px of right padding).
3. div { width: 300px; padding: 25px; box-sizing: border-box; } <br/>
Use the box-sizing property to keep the width at 300px, no matter the amount of padding.

**CSS Height, Width and Max-width:**
1. The CSS height and width properties are used to set the height and width of an element.
2. The CSS max-width property is used to set the maximum width of an element.
3. The height and width properties may have the following values:
  <ul>
    <li>auto - This is default. The browser calculates the height and width</li>
    <li>length - Defines the height/width in px, cm, etc.</li>
    <li>% - Defines the height/width in percent of the containing block</li>
    <li>initial - Sets the height/width to its default value</li>
    <li>inherit - The height/width will be inherited from its parent value</li>
  </ul>
4. The max-width property is used to set the maximum width of an element.<br/>
5. max-height	Sets the maximum height of an element<br/>
6. min-height	Sets the minimum height of an element.<br/>
7. min-width	Sets the minimum width of an element<br/>

**The CSS Box Model:**
1. The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model:<br/>
<img width="1087" alt="Screenshot 2024-02-18 at 7 08 24 PM" src="https://github.com/nagasaipavan1/Full-Stack-Development/assets/104422334/568548a0-5700-47ef-9999-25899de60f28">
2. Explanation of the different parts: <br/>
  Content - The content of the box, where text and images appear <br/>
  Padding - Clears an area around the content. The padding is transparent <br/>
  Border - A border that goes around the padding and content <br/>
  Margin - Clears an area outside the border. The margin is transparent. <br/>
3. The total width of an element should be calculated like this: <br/>
  Total element width = width + left padding + right padding + left border + right border <br/>
  The total height of an element should be calculated like this: <br/>
  Total element height = height + top padding + bottom padding + top border + bottom border <br/>

**CSS Outline:**
1. An outline is a line drawn outside the element's border.
2. Note: Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.
3. The outline-width property specifies the width of the outline.
4. The outline-color property is used to set the color of the outline.
5. The outline property is a shorthand property for setting the following individual outline properties: <br/>
outline-width <br/>
outline-style (required) <br/>
outline-color <br/>
The outline property is specified as one, two, or three values from the list above. The order of the values does not matter. <br/>
6. **CSS Outline Offset:** The outline-offset property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.

**CSS Text:**
1. The **color** property is used to set the color of the text.
2. **Text Alignment** and Text Direction Properties: <br/>
  text-align: The text-align property is used to set the horizontal alignment of a text. A text can be left or right aligned, centered, or justified. <br/>
  text-align-last: The text-align-last property specifies how to align the last line of a text. <br/>
  direction, unicode-bidi: The direction and unicode-bidi properties can be used to change the text direction of an element <br/>
  vertical-align: The vertical-align property sets the vertical alignment of an element.(baseline, text-top, text-bottom, sub, sup) <br/>
3. **Text Decoration**: shorthand property for below properties (line property is required and rest all are optional) <br/>
text-decoration-line: The text-decoration-line property is used to add a decoration line to text.(overline, line-through, underline) <br/>
text-decoration-color: The text-decoration-color property is used to set the color of the decoration line. <br/>
text-decoration-style: The text-decoration-style property is used to set the style of the decoration line. <br/>
text-decoration-thickness: The text-decoration-thickness property is used to set the thickness of the decoration line. <br/>
text-decoration: none; is used to remove all properties from from text. <br/>
4. **Text Transformation** is used to specify uppercase and lowercase letters or capitalize the first letter of each word in a text.
5. The CSS **Text Spacing** Properties: <br/>
letter-spacing	Specifies the space between characters in a text <br/>
line-height	Specifies the line height <br/>
text-indent	Specifies the indentation of the first line in a text-block <br/>
white-space	Specifies how to handle white-space inside an element <br/>
word-spacing	Specifies the space between words in a text <br/>
6. The **text-shadow** property adds shadow to text. In its simplest use, you only specify the horizontal shadow (2px) and the vertical shadow (2px) and the blur (5px) and then color (red).
7. We can combine 1 or more text shadows seperated with commas(,) <br/>
Example: text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

**CSS Fonts:**
1. See about <a href="https://www.w3schools.com/css/css_font.asp" target="blank">**font family**</a> values used to set the type of fonts.
2. **Web safe fonts** are fonts that are universally installed across all browsers and devices. **Fallback Fonts** However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.
3. This means that you should add a list of similar "backup fonts" in the font-family property. If the first font does not work, the browser will try the next one, and the next one, and so on. Always end the list with a generic font family name.
4. We can also use google fonts, if we feel normal fonts are boring. Google also allowed enabling **font effects**.
5. The **font-style** property is mostly used to specify italic text. This property has three values: normal, italic, oblique.
6. The **font-weight** property specifies the weight of a font. (values can be normal, bold, lighter).
7. The **font-variant** property specifies whether or not a text should be displayed in a small-caps font. In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.
8. The **font-size** property sets the size of the text. (units can be in px, em=px/16, %, **vw**: which means the "viewport width". That way the text size will follow the size of the browser window).
9. Viewport is the browser window size. 1vw = 1% of viewport width.

**CSS Links:**
1. Links can be styled with any CSS property. links can be styled differently depending on what state they are in. The four links states are: <br/>
**a:link** - a normal, unvisited link <br/>
**a:visited** - a link the user has visited <br/>
**a:hover** - a link when the user mouses over it <br/>
**a:active** - a link the moment it is clicked <br/>
2. When setting the style for several link states, there are some order rules: <br/>
a:hover MUST come after a:link and a:visited <br/>
a:active MUST come after a:hover <br/>
3. The text-decoration property is mostly used to remove underlines from links

**CSS Mouse Over Text:**
1. This example demonstrates the different types of cursors (can be useful for links):
2. <span style="cursor:auto">auto</span><br>
<span style="cursor:crosshair">crosshair</span><br>
<span style="cursor:default">default</span><br>
<span style="cursor:e-resize">e-resize</span><br>
<span style="cursor:help">help</span><br>
<span style="cursor:move">move</span><br>
<span style="cursor:n-resize">n-resize</span><br>
<span style="cursor:ne-resize">ne-resize</span><br>
<span style="cursor:nw-resize">nw-resize</span><br>
<span style="cursor:pointer">pointer</span><br>
<span style="cursor:progress">progress</span><br>
<span style="cursor:s-resize">s-resize</span><br>
<span style="cursor:se-resize">se-resize</span><br>
<span style="cursor:sw-resize">sw-resize</span><br>
<span style="cursor:text">text</span><br>
<span style="cursor:w-resize">w-resize</span><br>
<span style="cursor:wait">wait</span><br> 

**CSS Lists:**
1. The list-style-type property specifies the type of list item marker.
2. The list-style-image property specifies an image as the list item marker.
3. The list-style-position property specifies the position of the list-item markers (bullet points). "list-style-position: outside;" means that the bullet points will be outside the list item. "list-style-position: inside;" means that the bullet points will be inside the list item.


# Day-9:
**CSS Tables:**
1. Already many of the css techniques are discussed in html please refer that.
2. **vertical-align** property sets the vertical alignment (like top, bottom, or middle) of the content in th or td. By default, the vertical alignment of the content in a table is middle (for both <th> and <td> elements).
3. A responsive table will display a horizontal scroll bar if the screen is too small to display the full content: <br/>
Add a container element (like <div>) with **overflow-x:auto** around the <table> element to make it responsive. <br/>
Example: <<code>div style="overflow-x:auto;"</code>>
4. The **caption-side** property specifies the placement of a table caption. (top, bottom)
5. The **empty-cells** property sets whether or not to display borders on empty cells in a table.(show, hide) <br/>
**Note: This property has no effect if border-collapse is "collapse".**
6. The **border-spacing** property sets the distance between the borders of adjacent cells. (horizontal and vertical spacing length are given as values).

**CSS Display:**
1. The default display value for most elements is block or inline.
2. The **display property** is used to change the default display behavior of HTML elements. <br/>
<pre>
inline	            Displays an element as an inline element
block	              Displays an element as a block element
contents	          Makes the container disappear, making the child elements children of the element the next level up in the DOM
flex	              Displays an element as a block-level flex container
grid	              Displays an element as a block-level grid container
inline-block	      Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values
inline-flex	        Displays an element as an inline-level flex container
inline-grid	        Displays an element as an inline-level grid container
inline-table	      The element is displayed as an inline-level table
list-item	          Let the element behave like a <li> element
run-in	            Displays an element as either block or inline, depending on context
table	              Let the element behave like a <table> element
table-caption	      Let the element behave like a <caption> element
table-column-group	Let the element behave like a <colgroup> element
table-header-group	Let the element behave like a <thead> element
table-footer-group	Let the element behave like a <tfoot> element
table-row-group	    Let the element behave like a <tbody> element
table-cell	        Let the element behave like a <td> element
table-column	      Let the element behave like a <col> element
table-row	          Let the element behave like a <tr> element
none	              The element is completely removed
initial	            Sets this property to its default value
inherit	            Inherits this property from its parent element. </pre>
3. To hide elements we use **dispaly: none** and when we want to show them we use **display: block**.
4. **Note: Setting the display property of an element only changes how the element is displayed, NOT what kind of element it is. So, an inline element with display: block; is not allowed to have other block elements inside it.**
5. Hiding an element can be done by setting the **display property to none**. The element will be hidden, and the page will be displayed as if the element is not there. <br/>
or **visibility:hidden;** also hides an element. However, the element will still take up the same space as before. The element will be hidden, but still affect the layout

**CSS Layout - The position Property:**
1. The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
2. Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.
3. **Static** positioned elements are not affected by the top, bottom, left, and right properties.
4. An element with **position: relative;** is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
5. An element with **position: fixed;** is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
6. An element with **position: absolute;** is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling. <br/>
**Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.**
7. An element with position: sticky; is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

**CSS Layout - The z-index Property:**
1. The **z-index property** specifies the stack order of an element.
2. The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others). An element can have a positive or negative stack order.
3. **Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).**
4. If two positioned elements overlap each other **without a z-index specified,** the element defined last in the HTML code will be shown on top.
5. 












