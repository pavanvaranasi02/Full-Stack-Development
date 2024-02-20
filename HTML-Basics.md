# HTML
**What is HTML?**
1. HTML stands for Hyper Text Markup Language
2. HTML describes the structure of a Web page
3. The <<code>!DOCTYPE html</code>> declaration defines that this document is an **HTML5 document**.
4. The <<code>html</code>> element is the **root element** of an HTML page.
5. The <<code>head</code>> element contains **meta information** about the HTML page
6. The <<code>title</code>> element specifies a **title for the HTML page** (which is shown in the browser's title bar or in the page's tab)
7. The <<code>body</code>> element defines the document's body, and is a **container for all the visible contents**, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

**What is an HTML Element?**
1. An HTML element is defined by a start tag, some content, and an end tag:
Example: <<code>p</code>>This is a paragraph      with no extra spaces<<code>/p</code>>
2. Unexpected results and errors may occur if you forget the end tag!
3. HTML elements with no content are called empty elements. The <<code>br</code>> tag defines a line break, and is an empty element without a closing tag.
4. HTML is Not Case Sensitive, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

**HTML Attributes:**
1. HTML attributes provide additional information about HTML elements.
2. Attributes are always specified in the start tag
3. Attributes usually come in name/value pairs like: name="value"
4. The style attribute is used to add styles to an element, such as color, font, size, and more.
5. The lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

**Web Browsers:**
1. The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to **read HTML documents and display them correctly**.

**HTML History:**
1. In 1989, **Tim Berners-Lee** invented **www**(world wide web).
2. In 1991,	Tim Berners-Lee invented **HTML**.

**How to save and run html files:**
*You can use either **.htm or .html** as file extension. There is no difference; it is up to you.*

**HTML Headings:**
1. HTML headings are defined with the <<code>h1</code>> to <<code>h6</code>> tags.
2. <<code>h1</code>> defines the **most important heading**. <<code>h6</code>> defines the **least important heading**.

**HTML Paragraphs:**
1. HTML paragraphs are defined with the <<code>p</code>> tag.
2. *Generally all other tags need ending tag mandatorily but in case of p it is ok to not close sometimes.*

**HTML Links:**
HTML links are hyperlinks. <br/>
Links are found in nearly all web pages. Links allow users to click their way from page to page. <br/>

<pre> By default, links will appear as follows in all browsers:
      An unvisited link is underlined and blue
      A visited link is underlined and purple
      An active link is underlined and red
  <strong>Tip:</strong> Links can of course be styled with CSS, to get another look! </pre>

1. HTML links are defined with the <<code>a</code>> tag.
2. href is used to link either external websites or internal html files. (example for linking google: <a href="www.google.com">google</a>).
3. Link to an Email Address, Use <code>mailto:</code> inside the <code>href</code> attribute to create a link that opens the user's email program (<a href="mailto:someone@example.com">Send email to someone@example.com</a>).
4. To use an HTML button as a link, you have to add some JavaScript code. JavaScript allows you to specify what happens at certain events, such as a click of a button (<<code>button onclick="document.location='default.asp'"</code>>HTML Tutorial<<code>/button</code>>)
5. Link Titles, The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.
(Example <a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>)
6. The target attribute can have one of the following values:
  <pre> <strong>_self</strong> - Default. Opens the document in the same window/tab as it was clicked
  <strong>_blank</strong> - Opens the document in a new window or tab
  <strong>_parent</strong> - Opens the document in the parent frame
  <strong>_top</strong> - Opens the document in the full body of the window. </pre>
7. For getting user assumed colors for a hyper link visit <a href="https://www.w3schools.com/html/html_links_colors.asp">HTML Links - Different Colors</a>
8. To Create a Bookmark in HTML:
<pre>Use the id attribute (id="value") to define bookmarks in a page
Use the href attribute (href="#value") to link to the bookmark or also (href="website.com#value")</pre>

**HTML Images:**
1. HTML images are defined with the <img> tag.
2. The source file (src), alternative text (alt), width, and height are provided as attributes.
<pre><strong>Note:</strong> Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.</pre>
3. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.
4. HTML allows animated GIFs. (just give the path of animated gif to src attribute).
5. Use the CSS float attribute or property to let the image float to the right or to the left of a text.
6. **Image Maps**: The HTML <<code>map</code>> tag defines an image map. An image map is an image with clickable areas. The areas are defined with one or more <<code>area</code>> tags.
7. The only difference from other images is that you must add a **usemap attribute**. The usemap value starts with a hash tag # followed by the name of the image map, and is used to create a relationship between the image and the image map.
<pre>You must define the shape of the clickable area, and you can choose one of these values:
rect - defines a rectangular region
circle - defines a circular region
poly - defines a polygonal region
default - defines the entire region
You must also define some coordinates to be able to place the clickable area onto the image. 
</pre>

**HTML Horizontal Rules:**
1. The <<code>hr</code>> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
2. The <<code>hr</code>> tag is an empty tag, which means that it has no end tag.

**HTML Line Breaks:**
1. The HTML <<code>br</code>> element defines a line break. (A new line).

**HTML <<code>pre</code>> Element:**
1. The HTML <<code>pre</code>> element defines preformatted text.
2. The text inside a <<code>pre</code>> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

**HTML Styles:**
1. The HTML style attribute is used to add styles to an element, such as color, font, size, and more.
2. Use the style attribute for styling HTML elements
3. Use background-color for background color.
4. Use color for text colors.
5. Use font-family for text fonts.
6. Use font-size for text sizes.
7. Use text-align for text alignment.
8. Use border for giving border to the element.

**HTML Formatting Elements:**
1. Formatting elements were designed to display special types of text:
2. <b> Bold text </b>
3. <strong> Important text </strong>
4. <i> Italic text </i>
5. <em> Emphasized text </em>
6. <mark> Marked text </mark>
7. <small> Smaller text </small> Normal Text
8. <del> Deleted text </del>
9. <ins> Inserted text </ins>
10. <sub> Subscript text </sub> Normal Text
11. <sup> Superscript text </sup> Normal Text

**HTML Quotation and Citation Elements:**
<a href="https://www.w3schools.com/html/html_quotation_elements.asp" target="_blank"> Visit this for reference </a>
1. the <<code>blockquote</code>>,<<code>q</code>>, <<code>abbr</code>>, <<code>address</code>>, <<code>cite</code>>, and <<code>bdo</code>> HTML elements.
2. The HTML <<code>blockquote</code>> element defines a section that is quoted from another source. Browsers usually indent <<code>blockquote</code>> elements.
    cite is the attribute for which the citation need to be provided.
3. The HTML <<code>q</code>> tag defines a short quotation. Browsers normally insert quotation marks around the quotation.
4. The HTML <<code>abbr</code>> tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM". 
    Marking abbreviations can give useful information to browsers, translation systems and search-engines.
    Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element. 
5. The HTML <<code>address</code>> tag defines the contact information for the author/owner of a document or an article.
    The contact information can be an email address, URL, physical address, phone number, social media handle, etc.
    The text in the <<code>address</code>> element usually renders in italic, and browsers will always add a line break before and after the <<code>address</code>> element.
6. The HTML <<code>cite</code>> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).
    Note: A person's name is not the title of a work.
    The text in the <<code>cite</code>> element usually renders in italic.
7. BDO stands for Bi-Directional Override.
    The HTML <<code>bdo</code>> tag is used to override the current text direction.

**HTML Comment Tag:**
1. You can add comments to your HTML source by using the following syntax: <br/>
<<code>!-- Write your comments here --</code>>
2. Notice that there is an exclamation point (!) in the start tag, but not in the end tag.
3. Note: Comments are not displayed by the browser, but they can help document your HTML source code.

**HTML Colors:**
1. HTML colors are specified with predefined color names, or with **RGB, HEX, HSL, RGBA, or HSLA** values.
2. An **RGB** color value represents RED, GREEN, and BLUE light sources. An **RGBA** color value is an extension of RGB with an Alpha channel (opacity).
3. Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255. <br/>
    Note: You can get gray color by mentioning all the rgb values equal, and remember lesser the value more darker tone of gray it would be.
4. For **HEX**, a hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. <br/>
     Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).
5. **HSL** stands for hue, saturation, and lightness. **HSLA** color values are an extension of HSL with an Alpha channel (opacity).

**HTML Styles - CSS:**
Cascading Style Sheets (CSS) is used to format the layout of a webpage. <br/>
With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more! <br/>
1. Use the HTML style attribute for inline styling
2. Use the HTML <<code>style</code>> element to define internal CSS
3. Use the HTML <<code>link</code>> element to refer to an external CSS file
4. Use the HTML <<code>head</code>> element to store <<code>style</code>> and <<code>link</code>> elements
5. Use the CSS color property for text colors
6. Use the CSS font-family property for text fonts
7. Use the CSS font-size property for text sizes
8. Use the CSS text-decoration property to remove bold, italic, underline...
9. Use the CSS border property for borders
10. Use the CSS **padding** property for space inside the border
11. Use the CSS **margin** property for space outside the border

# Day-2
**HTML Images Continuation:**
1. To add a background image on an HTML element, use the HTML style attribute and the CSS background-image property.
2. If you want the entire page to have a background image, you must specify the background image on the <body> element.
3. If the background image is smaller than the element, the image will repeat itself, horizontally and vertically, until it reaches the end of the element.
4. To avoid the background image from repeating itself, set the background-repeat property to no-repeat.
5. If you want the background image to cover the entire element, you can set the background-size property to cover.
6. Also, to make sure the entire element is always covered, set the background-attachment property to fixed, This way, the background image will cover the entire element, with no stretching (the image will keep its original proportions)
7. If you want the background image to stretch to fit the entire element, you can set the background-size property to 100% 100%, Try resizing the browser window, and you will see that the image will stretch, but always cover the entire element.
8. The HTML <<code>picture</code>> element allows you to display different pictures for different devices or screen sizes.
9. The <<code>picture</code>> element contains one or more <<code>source</code>> elements, each referring to different images through the <code>srcset</code> attribute. This way the browser can choose the image that best fits the current view and/or device.
10. Each <<code>source</code>> element has a <code>media</code> attribute that defines when the image is the most suitable. <br/>

**Note:** Always specify an <<code>img</code>> element as the last child element of the <<code>picture</code>> element. The <<code>img</code>> element is used by browsers that do not support the <<code>picture</code>> element, or if none of the <<code>source</code>> tags match.

**HTML Tables:**
1. HTML tables allow web developers to arrange data into rows and columns.
2. **Table Rows:** Each table row starts with a <<code>tr</code>> and ends with a <<code>/tr</code>> tag. tr stands for **table row.**
3. You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row. There are times when a row can have less or more cells than another.
4. **Table Cells:** Each table cell is defined by a <<code>td</code>> and a <<code>/td</code>> tag. td stands for **table data.**
5. **Note:** A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.
6. **Table Headers:** Sometimes you want your cells to be table header cells. In those cases use the <<code>th</code>> tag instead of the <<code>td</code>> tag: th stands for **table header.**
7. By default, the text in <<code>th</code>> elements are **bold and centered**, but you can change that with CSS.
8. HTML tables can have **borders of different styles and shapes**, To add a border, use the CSS border property on table, th, and td elements.
9. **Collapsed Table Borders:** To avoid having double borders set the CSS **border-collapse property to collapse**.
    Example:
         table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
         }
10. If you set a background color of each cell, and give the border a white color (the same as the document background), you get the impression of an invisible border.
11. With the **border-radius property**, the borders get rounded corners.
12. With the **border-style property**, you can set the appearance of the border, below are some examples:
      **dotted
      dashed
      solid
      double
      groove
      ridge
      inset
      outset
      none
      hidden**
14. With the **border-color property**, you can set the color of the border.
15. HTML tables can have different sizes for each column, row or the entire table. Use the <code>style</code> attribute with the <code>width</code> or <code>height</code> properties to specify the size of a table, row or column.
16. Cell padding is the space between the cell edges and the cell content. By default the padding is set to 0, You can change it using CSS.
17. Cell spacing is the space between each cell. By default the space is set to 2 pixels. To change the space between table cells, use the CSS border-spacing property on the table element.
18. HTML tables can have cells that span over multiple rows and/or columns. <br/>
      To make a cell span over multiple columns, use the <code>colspan attribute.</code> <br/>
      **Note: The value of the colspan attribute represents the number of columns to span.** <br/>
      To make a cell span over multiple rows, use the <code>rowspan attribute</code> <br/>
      **Note: The value of the rowspan attribute represents the number of rows to span.**

Some other useful tags of table are:
1. <<code>caption</code>> Defines a table caption. <br/>
Note: The <caption> tag should be inserted immediately after the <table> tag.
2. <<code>colgroup</code>> Specifies a group of one or more columns in a table for formatting.
3. <<code>col</code>> Specifies column properties for each column within a <<code>colgroup</code>> element.
4. <<code>thead</code>> Groups the header content in a table.
5. <<code>tbody</code>> Groups the body content in a table.
6. <<code>tfoot</code>> Groups the footer content in a table.


**HTML Table - Zebra Stripes, Horizontal Dividers, Hoverable Table:**
<a href="https://www.w3schools.com/html/html_table_styling.asp" target="_blank"> Visit this page </a> <br/>

**HTML Table Colgroup:**
<a href="https://www.w3schools.com/html/html_table_colgroup.asp" target="_blank"> Visit this page </a> <br/>

# Day-3
**HTML Lists:**
1. <<code>ul</code>>	Defines an unordered list (The list items will be marked with bullets (small black circles) by default.) <br/>
      The list items will be marked with bullets (small black circles) by default:<br/>
         i. disc	      Sets the list item marker to a bullet (default)<br/>
         ii. circle	Sets the list item marker to a circle<br/>
         iii. square	Sets the list item marker to a square<br/>
         iv. none	      The list items will not be marked<br/>
2. <<code>ol</code>>	Defines an ordered list
      The type attribute of the <<code>ol</code>> tag, defines the type of the list item marker<br/>
      type="1"	The list items will be numbered with numbers (default) <br/>
      type="A"	The list items will be numbered with uppercase letters<br/>
      type="a"	The list items will be numbered with lowercase letters<br/>
      type="I"	The list items will be numbered with uppercase roman numbers<br/>
      type="i"	The list items will be numbered with lowercase roman numbers<br/>
      By default, an ordered list will start counting from, If you want to start counting from a specified number, you can use the start attribute <br/>

3. <<code>li</code>>	Defines a list item
4. <<code>dl</code>>	Defines a description list
5. <<code>dt</code>>	Defines a term in a description list
6. <<code>dd</code>>	Describes the term in a description list

<pre>Note: A list item (<<code>li</code>>) can contain a new list, and other HTML elements, like images and links, etc.</pre>

**Horizontal List with CSS: (for creating nav bars)**
1. Use the CSS property <code>float:left</code> to display a list horizontally.

**HTML Block and Inline Elements:**
1. Every HTML element has a default display value, depending on what type of element it is. The two most common display values are **block and inline.**
2. A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
3. Two commonly used block elements are: <<code>p</code>> and <<code>div</code>>.
4. An inline element does not start on a new line. An inline element only takes up as much width as necessary.
5. <<code>span</code>> is the best example of inline elements.
6. You can check out all block and inline elements <a href="https://www.w3schools.com/html/html_blocks.asp" target="_blank">here</a>.
7. <strong>Note:</strong> An inline element cannot contain a block-level element!
8. The div element is a block-level and is often used as a container for other HTML elements.
9. The span element is an inline container used to mark up a part of a text, or a part of a document.
10. Both inline and block elements have no attributes but we use class, id, and style.

**HTML Div Elements:**
1. If you have a <<code>div</code>> element that is not 100% wide, and you want to center-align it, **set the CSS <code>margin</code> property to auto.**
2. Aligning <div> elements side by side: The CSS **<code>float</code>** property is used for positioning and formatting content and allow elements float next to each other instead of on top of each other.
3. If you change the <<code>div</code>> element's display property from block to <code>display:inline-block</code>, the <<code>div</code>> elements will no longer add a line break before and after, and will be displayed side by side instead of on top of each other.
4. The CSS Flexbox Layout Module was introduced to make it easier to design flexible responsive layout structure without using float or positioning. <br/>
To make the CSS flex method work, surround the div elements with another div element and give it the status as a flex container. <br/>
i.e., in style tag under div use display: flex;
5. The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. <br/>
Sounds almost the same as flex, but has the ability to define more than one row and position each row individually. <br/>
The CSS grid method requires that you surround the div elements with another div element and give the status as a grid container, and you must specify the width of each column. <br/>
example: inside of style tag and div it should be like this: <br/>
      display: grid; <br/>
      grid-template-columns: 33% 33% 33%; <br/>

**HTML Classes:**
1. The HTML class attribute specifies one or more class names for an element
2. Classes are used by CSS and JavaScript to select and access specific elements
3. The class attribute can be used on any HTML element
4. The class name is case sensitive
5. Different HTML elements can point to the same class name
6. JavaScript can access elements with a specific class name with the getElementsByClassName() method.
7. To define multiple classes, separate the class names with a space, e.g. <<code>div class="city main"</code>>. The element will be styled according to all the classes specified.
8. In the following example, the first h2 element belongs to both the city class and also to the main class, and will get the CSS styles from both of the classes


**HTML Id:**
1. The id attribute is used to specify a unique id for an HTML element
2. The value of the id attribute must be unique within the HTML document
3. The id attribute is used by CSS and JavaScript to style/select a specific element
4. The value of the id attribute is case sensitive
5. The id attribute is also used to create HTML bookmarks
6. JavaScript can access an element with a specific id with the getElementById() method


**HTML Iframes:**
1. An HTML iframe is used to display a web page within a web page.
2. Use the height and width attributes to specify the size of the iframe.
3. By default, an iframe has a border around it. To remove the border, add the style attribute and use the CSS border property.
4. An iframe can be used as the **target frame for a link**. The target attribute of the link must refer to the name attribute of the iframe.

# Day-4
**HTML JavaScript:**
1. JavaScript makes HTML pages more dynamic and interactive.
2. The HTML <<code>script</code>> tag is used to define a client-side script (JavaScript). The <script> element either contains script statements, or it points to an external script file through the src attribute.
3. The HTML <<code>noscript</code>> tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts.

**HTML Head:**
1. The HTML head element is a container for the following elements: title, style, meta, link, script, and base.
2. The <code>title</code> element: defines a title in the browser toolbar, provides a title for the page when it is added to favorites, displays a title for the page in search engine-results
3. The <code>style</code> element is used to define style information for a single HTML page.
4. The <code>link</code> element defines the relationship between the current document and an external resource.
5. The <code>meta</code> element is typically used to specify the character set, page description, keywords, author of the document, refresh, and viewport settings.
6. Refresh document every 30 seconds: <<code>meta http-equiv="refresh" content="30"</code>>
7. Setting the viewport to make your website look good on all devices: <<code>meta name="viewport" content="width=device-width, initial-scale=1.0"</code>>
8. The <code>width=device-width</code> part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
9. The <code>initial-scale=1.0</code> part sets the initial zoom level when the page is first loaded by the browser.
10. The <<code>base</code>> element specifies the base URL and/or target for all relative URLs in a page.


**HTML Layout Elements:**
1. <<code>header</code>> - Defines a header for a document or a section.
2. <<code>nav</code>> - Defines a set of navigation links
3. <<code>section</code>> - Defines a section in a document
4. <<code>article</code>> - Defines an independent, self-contained content
5. <<code>aside</code>> - Defines content aside from the content (like a sidebar)
6. <<code>footer</code>> - Defines a footer for a document or a section
7. <<code>details</code>> - Defines additional details that the user can open and close on demand
8. <<code>summary</code>> - Defines a heading for the <<code>details</code>> element
<img width="218" alt="Screenshot 2024-02-14 at 5 36 55 PM" src="https://github.com/nagasaipavan1/Full-Stack-Development/assets/104422334/1b3fd6d0-431b-451f-8e1e-4889390046cf">

**HTML Layout Techniques:**
There are four different techniques to create multicolumn layouts. Each technique has its pros and cons: <br/>
CSS framework <br/>
CSS float property <br/>
CSS flexbox <br/>
CSS grid <br/>

**HTML ComputerCode:**
The <<code>kbd</code>> element defines keyboard input <br/>
The <<code>samp</code>> element defines sample output from a computer program <br/>
The <<code>code</code>> element defines a piece of computer code <br/>
The <<code>var</code>> element defines a variable in programming or in a mathematical expression <br/>
The <<code>pre</code>> element defines preformatted text<br/>

**Note: Emojis are characters from the UTF-8 character set: 😄 😍 💗 and they can be used with values <a href="https://www.w3schools.com/html/html_emojis.asp?goalId=c7746e01-0f92-486c-bf6a-291d740c81b6" target="_blank">check it out.</a>**

**HTML Forms:**
1. An HTML form is used to collect user input. The user input is most often sent to a server for processing.
2. The "form" element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.
3. The HTML "input" element is the most used form element. An "input" element can be displayed in many ways, depending on the type attributes like: <br/>
text, radio, checkbox, **submit**, button, email, **password**, file, **hidden**, image, number, **reset**, url, date(you can also use the min and max attributes to add restrictions to dates:).
4.  The characters in a password field are masked (shown as asterisks or circles).
5.  Notice that each input field must have a name attribute to be submitted. If the name attribute is omitted, the value of the input field will not be sent at all.

<pre>
      Input Restrictions
Here is a list of some common input restrictions:

Attribute	Description
---------------------------------
checked	Specifies that an input field should be pre-selected when the page loads (for                         type="checkbox" or type="radio")
disabled	Specifies that an input field should be disabled
max	      Specifies the maximum value for an input field
maxlength	Specifies the maximum number of character for an input field
min	      Specifies the minimum value for an input field
pattern	Specifies a regular expression to check the input value against
readonly	Specifies that an input field is read only (cannot be changed)
required	Specifies that an input field is required (must be filled out)
size	      Specifies the width (in characters) of an input field
step	      Specifies the legal number intervals for an input field
value	      Specifies the default value for an input field
</pre>

6. The action attribute defines the action to be performed when the form is submitted. If the action attribute is omitted, the action is set to the current page.
7. The target attribute specifies where to display the response that is received after submitting the form.
<pre>
The target attribute can have one of the following values:

Value	      Description
----------------------------------
_blank	The response is displayed in a new window or tab
_self	      The response is displayed in the current window
_parent	The response is displayed in the parent frame
_top	      The response is displayed in the full body of the window
framename	The response is displayed in a named iframe
      
The default value is _self which means that the response will open in the current window.
</pre>
8. The method attribute specifies the HTTP method to be used when submitting the form data. The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post"). The default HTTP method when submitting form data is GET.
9. The autocomplete attribute specifies whether a form should have autocomplete on or off. When autocomplete is on, the browser automatically complete values based on values that the user has entered before.
10. The novalidate attribute is a boolean attribute. When present, it specifies that the form-data (input) should not be validated when submitted.

<pre>
      List of All <form> Attributes
Attribute	      Description
-------------------------------------------
accept-charset	Specifies the character encodings used for form submission
action	      Specifies where to send the form-data when a form is submitted
autocomplete	Specifies whether a form should have autocomplete on or off
enctype	      Specifies how the form-data should be encoded when submitting it to the server                         (only for method="post")
method	      Specifies the HTTP method to use when sending form-data
name	            Specifies the name of the form
novalidate	      Specifies that the form should not be validated when submitted
rel	            Specifies the relationship between a linked resource and the current document
target	      Specifies where to display the response that is received after submitting the form
</pre>

<pre>
      The HTML <form> Elements
The HTML form element can contain one or more of the following form elements:
**
input
label
select (*for drop-down list*, to select different option other than first use selected attribute and size attribute specifies how many you can see at a time, if you want to allow multiple selections use multiple attribue(hold ctrl key while selecting).)
textarea (The rows attribute specifies the visible number of lines in a text area. The cols attribute specifies the visible width of a text area.)
button
fieldset (is used to group related data in a form.)
legend (defines a caption for the fieldset element.)
datalist (specifies a list of pre-defined options for an <input> element.)
output (represents the result of a calculation (like one performed by a script).)
option
optgroup**
</pre>
11. The input **<code>autofocus</code>** attribute specifies that an input field should automatically get focus when the page loads.

# Day-5:
**HTML Canvas:**
1. The HTML <<code>canvas</code>> element is used to draw graphics on a web page, via JavaScript.
2. It is only a container(has no border and no content) for graphics. You must use JavaScript to actually draw the graphics.
3. Canvas has several methods for drawing **paths, boxes, circles, text, and adding images.**
4. **Note: Always specify an id attribute (to be referred to in a script), and a width and height attribute to define the size of the canvas. To add a border, use the style attribute.**
5. <<code>canvas id="canvasId" width="200" height="100" style="border: 2px solid black;"</code>>

**HTML SVG Graphics:**
1. SVG stands for Scalable Vector Graphics.
2. SVG is used to define vector-based graphics for the Web
3. SVG defines graphics in XML format
4. Each element and attribute in SVG files can be animated
5. SVG is a W3C recommendation
6. SVG integrates with other standards, such as CSS, DOM, XSL and JavaScript
7. The HTML svg element is a container for SVG graphics. SVG has several methods for drawing paths, boxes, circles, text, and graphic images.


**HTML Multimedia:**
1. Multimedia on the web is sound, music, videos, movies, and animations.
2. Multimedia files have formats and different extensions like: .wav, .mp3, .mp4, .mpg, .wmv, .avi, .mov, .ogg, .webM, .aac
3. For Videos **Note: Only MP4, WebM, and Ogg video are supported by the HTML standard.**
4. For Audios **Note: Only MP3, WAV, and Ogg audio are supported by the HTML standard.**

**HTML Video:**
1. There are three supported video formats: MP4, WebM, and Ogg
2. The HTML <<code>video</code>> element is used to show a video on a web page.
3. The <code>controls</code> attribute adds video controls, like play, pause, and volume.
4. It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.
5. The <<code>source</code>> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.
6. To start a video automatically, use the autoplay attribute
7. Add muted after autoplay to let your video start playing automatically (but muted).
8. The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.
9. Example: <<code>video width="520" height="400" controls autoplay muted>
                  <<code>source src="movie.mp4" type="video/mp4"</code>>
                  <<code>source src="movie.ogg" type="video/ogg"</code>>
                  The video will not work with this browser, switch to another browser and try again,
             </video </code>>

10. The HTML DOM defines methods, properties, and events for the video element. This allows you to load, play, and pause videos, as well as setting duration and volume. There are also DOM events that can notify you when a video begins to play, is paused, etc.

**HTML Audio:**
1. There are three supported audio formats: MP3, WAV, and OGG.
2. The HTML <<code>audio</code>> element is used to play an audio file on a web page.
3. The <code>controls</code> attribute adds audio controls, like play, pause, and volume.
4. The <<code>source</code>> element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.
5. The text between the <<code>audio</code>> and <<code>/audio</code>> tags will only be displayed in browsers that do not support the <<code>audio</code>> element.
6. To start an audio file automatically, use the <code>autoplay</code> attribute
7. Add muted after autoplay to let your audio file start playing automatically (but muted).
8. <<code>audio controls autoplay muted</code>> <br/>
  <<code>source src="horse.ogg" type="audio/ogg"</code>> <br/>
  <<code>source src="horse.mp3" type="audio/mp3"</code>><br/>
Your browser does not support the audio element.<br/>
<<code>/audio</code>>
8. The HTML DOM defines methods, properties, and events for the audio element. This allows you to load, play, and pause audios, as well as set duration and volume. There are also DOM events that can notify you when an audio begins to play, is paused, etc.

**HTML Plug-ins:**
1. Plug-ins were designed to be used for many different purposes: <br/>
To run Java applets <br/>
To run Microsoft ActiveX controls <br/>
To display Flash movies <br/>
To display maps <br/>
To scan for viruses <br/>
To verify a bank id.
2. **Note: Java Applets, ActiveX controls and Shockwave flash are now not supported by most of the browsers.**
3. The <<code>object</code>> element is supported by all browsers. It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages, but can also be used to include HTML in HTML: <br/>
Example: <<code>object width="100%" height="500px" data="snippet.html"</code>><<code>/object</code>>
4. The <<code>embed</code>> element also defines an embedded object within an HTML document. Web browsers have supported the <<code>embed</code>> element for a long time. However, it has not been a part of the HTML specification before HTML5.
5. Note that the **<embed> element does not have a closing tag**. It can not contain alternative text.<br/><br/>

**HTML Youtube Videos:**
1. The easiest way to play videos in HTML, is to use YouTube.
2. To play your video on a web page, do the following: <br/>
Upload the video to YouTube <br/>
Take a note of the video id <br/>
Define an <iframe> element in your web page <br/>
Let the src attribute point to the video URL <br/>
Use the width and height attributes to specify the dimension of the player <br/>
Add any other parameters to the URL (see below)
2. Add mute=1 after autoplay=1 to let your video start playing automatically (but muted).
3. dd loop=1 to let your video loop forever.
4. Add controls=0 to not display controls in the video player.


**Learn About API's in W3 Schools:** <a href="https://www.w3schools.com/html/html5_geolocation.asp?goalId=c7746e01-0f92-486c-bf6a-291d740c81b6" target="_blank">API's</a>

**Learn about Browser Events:** <a href="https://www.youtube.com/watch?v=_ALUMTa8BAE" target="_blank">Browser Events</a>




**Important Questions:**
1. Name any 5 semantic tags and inline elements.
2. what is difference between inline and block elements?
3. what is difference between tag and element in HTML?
4. can we set height and width for inline elements?
5. is image tag an inline HTML element or not ? If so how is it possible to set height and width for image tag? (Rephrased Elements)
6. Difference between canvas and svg html elements?
7. 
