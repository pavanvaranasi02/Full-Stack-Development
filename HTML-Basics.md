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
3. HTML elements with no content are called empty elements. The <br> tag defines a line break, and is an empty element without a closing tag.
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
4. To use an HTML button as a link, you have to add some JavaScript code. JavaScript allows you to specify what happens at certain events, such as a click of a button (<button onclick="document.location='default.asp'">HTML Tutorial</button>)
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


