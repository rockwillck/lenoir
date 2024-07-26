Lenoir.setSections(26)

// HOME
function home() {
    let headingContent = new Section()
    let title = new Part(10, 6)
    title.appendComponent(new Component("header", "Lenoir", 1))
    title.appendComponent(new Component("text", "A Modern Webkit", "center"))
    headingContent.appendPart(title)
    headingContent.compile()

    // default theme
    let backgroundImgSrc = "bg.gif"
    // notebook theme
    // let backgroundImgSrc = "https://artparts.co/wp-content/uploads/2019/12/Crumpled-Paper.gif"
    let landing = new Page("Lenoir, a modern webkit.", headingContent, "hero", backgroundImgSrc, 0.5, 0.01)

    ultra(landing, LenoirPrebuilts.verticalSpacer(2))
    ultra(landing, LenoirPrebuilts.image("https://www.webdesignmuseum.org/uploaded/timeline/pizza-hut/pizza-hut-1997.png", "Old internet screenshot", 6, 14))
    ultra(landing, LenoirPrebuilts.monologue(["This is what the internet used to be."], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(1))
    ultra(landing, LenoirPrebuilts.image("https://i.ytimg.com/vi/v1jlkKfwHm8/maxresdefault.jpg", "Mew internet screenshot", 6, 14))
    ultra(landing, LenoirPrebuilts.monologue(["This is what the internet is today."], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(1))
    ultra(landing, LenoirPrebuilts.header("The Problem", 2))
    ultra(landing, LenoirPrebuilts.monologue(["The modern web is complex. Not just on the backend, where new technologies \"revolutionize\" the field every day, but on the front end, where the end user expects increasingly more aesthetic and impressive experiences.", "Building websites is now an art, and tools like React, Vue, Bootstrap, and others are your brushes.", "But many of these brushes add bloat to your sites, require backends, are simply overkill for a simple site, or take more effort than the problem they're trying to solve."], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(1))
    ultra(landing, LenoirPrebuilts.header("Meet... Lenoir", 2))
    ultra(landing, LenoirPrebuilts.monologue(["A simple, highly customizable, abstracted web development toolkit that helps you build out static sites as quickly and efficiently as possible.", "Lenoir is highly opinionated while still giving you complete creative freedom, making sure your sites are both beautiful and your own.", "And unlike other more complex libraries, Lenoir creates semantic, readable HTML.", "No learning a new language, no learning a new format. Lenoir relies on familiar UI elements to make creating easier for you."], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(1))
    ultra(landing, LenoirPrebuilts.header("Features", 2))
    ultra(landing, LenoirPrebuilts.monologue(["-Baking-\n\nWhile Lenoir sites can be generated when your site loads (like this one), you can also \"bake\" your sites. Lenoir will generate HTML files for you to download, which contain all of your content with none of the javascript.", "-Full CSS and JS-\n\nLenoir is just a layer on top of your site: you still have full access to the CSS and JS you need. In many ways, Lenoir acts more like a content library than a website generation framework, hence why it's called a webkit.", "-Responsive-\n\nSites generated with Lenoir are, from the very beginning, completely responsive for mobile and desktop.", "-Accessibility-\n\nLenoir has built-in accessibility features, and reminds you to make your site accessible. If you follow Lenoir's guide, your site will contribute to a modern, accessible web.", "-Navigation-\n\nIt seems silly to call it a feature, but Lenoir saves you a lot of time by natively and naturally providing navbars for your site. They're responsive, dynamic, and just as easy to style as any other element."], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(1))
    ultra(landing, LenoirPrebuilts.header("Source Code", 2))
    ultra(landing, LenoirPrebuilts.link("https://github.com/rockwillck/lenoir", "https://github.com/rockwillck/lenoir", 8, 10))
    ultra(landing, LenoirPrebuilts.verticalSpacer(1))

    Lenoir.registerPage("Home", landing, "index.html")
}
home()

function documentation() {
    let headingContent = new Section()
    let title = new Part(12, 2)
    title.appendComponent(new Component("spacer", 1))
    title.appendComponent(new Component("header", "Documentation", 1))
    headingContent.appendPart(title)
    headingContent.compile()

    let docs = new Page("Documentation for Lenoir", headingContent, "title")

    ultra(docs, LenoirPrebuilts.header("Quickstart", 2))
    let quickstart = new Section()
    let quickstartContent = new Part(2, 22)
    quickstartContent.appendComponent(new Component("markdown", `To make your first site, copy the following code into an empty \`app.js\`.
\`\`\`javascript
function home() {
    let headingContent = new Section()
    let title = new Part(2, 4)
    title.appendComponent(new Component("header", "Hello", 1))
    title.appendComponent(new Component("text", "World", "center"))
    headingContent.appendPart(title)
    headingContent.compile()

    let backgroundImgSrc = "https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let landing = new Page("Lenoir, a modern webkit.", headingContent, "hero", backgroundImgSrc, 0.5, 0)

    ultra(landing, LenoirPrebuilts.header("Hello World", 2))
    ultra(landing, LenoirPrebuilts.imageTextPair("https://images.unsplash.com/photo-1709318305042-16d0b74554d1?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "This is your very first site!"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(100))

    Lenoir.registerPage("Home", landing, "index.html")
}
home()

Lenoir.load("Hello World")
\`\`\`
Let's step through this:
\`\`\`javascript
let headingContent = new Section()
let title = new Part(2, 4)
\`\`\`
Sites made in Lenoir are made up of different containers. These are:
1. Pages, the biggest container
2. Sections, containers that stretch across the page
3. Parts, vertical stacks inside of sections
4. Components, DOM elements that stack inside of Parts  

Here, we're creating the section that makes up the hero greeting at the top of the page (the image and text that covers the entire screen). We also create a Part to hold the title text.
\`\`\`javascript
title.appendComponent(new Component("header", "Hello", 1))
title.appendComponent(new Component("text", "World", "center"))
\`\`\`
Here, we "append" a Header and Text component to our title Part. The arguments for Components are \`new Component(type, ...content)\`.  
In the case of the Header component, the type is \`"header"\`, and there are two arguments of content: the text, \`"Hello"\`, and the weight \`1\`. The weight is like a Header 1 or Header 2 in Microsoft Word.
\`\`\`javascript
headingContent.appendPart(title)
headingContent.compile()
\`\`\`
We then "append" the part to the heading Section. The second line, \`headingContent.compile()\`, is important. Until a section is *compiled*, you **cannot** use it. If you add a section to the page before compiling, nothing will be added.
\`\`\`javascript
let backgroundImgSrc = "https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let landing = new Page("Lenoir, a modern webkit.", headingContent, "hero", backgroundImgSrc, 0.5, 0)
\`\`\`
The first line here just declares the \`backgroundImgSrc\` variable, no Lenoir magic there. The next line finally creates the page. The arguments for the page are: \`new Page(description, heading_section, heading_type, ...background)\`. The four heading types are: \`hero\`, \`large\`, \`small\`, and \`title\`. The first three require a background image and attachment positions (the \`0.5\` and \`0\`, where the first 0 is attaching the image completely to the left and 1 is to the right, and likewise for top and bottom). A title is just a large header.
\`\`\`javascript
ultra(landing, LenoirPrebuilts.header("Hello World", 2))
ultra(landing, LenoirPrebuilts.imageTextPair("https://images.unsplash.com/photo-1709318305042-16d0b74554d1?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "This is your very first site!"))
ultra(landing, LenoirPrebuilts.verticalSpacer(100))
\`\`\`
There are two important concepts in these lines: the \`ultra\` function and the \`LenoirPrebuilts\` class.  
Prebuilts are methods that return "prebuilt" sections. Instead of having to create a section, a part, and a component, certain elements can be condensed into one line: \`LenoirPrebuilts.header("Hello World", 2)\`. The \`header\` prebuilt works just like the \`header\` component, while the \`imageTextPair\` prebuilt takes an image (url or path) and a piece of text. The \`verticalSpacer\` prebuilt is just like the \`spacer\` component, except it's all alone in a section and so just gives you vertical space (the height is the only argument).
The \`ultra\` function is another way of condensing code. To add a section, the lines would usually be:
\`\`\`javascript
section.compile()
page.appendSection(section)
\`\`\`
This may not seem like a lot, but with enough sections on enough pages, it adds up. So, the alternative is to use \`ultra\`: all you do is feed in the page object (in this case, \`landing\`) and the section object (\`LenoirPrebuilts.header("Hello World", 2)\` return a section with a header), and it's all done for you.
\`\`\`javascript
Lenoir.registerPage("Home", landing, "index.html")
\`\`\`
This line does what it says: it registers the page (\`landing\`) with the title \`Home\` at the url \`index.html\` (specifically, domain.name/index.html, but that's handled by modern browsers).
I contained all that code in a \`home()\` method, but that's moreso convention that requirement.<br>
\`Lenoir.load("Hello World")\` just initializes the whole website.`, "left"))
    quickstart.appendPart(quickstartContent)
    quickstart.compile()
    docs.appendSection(quickstart)

    ultra(docs, LenoirPrebuilts.verticalSpacer(1))

    Lenoir.registerPage("Documentation", docs, "documentation.html")
}
documentation()

function indepth() {
    let headingContent = new Section()
    let title = new Part(12, 2)
    title.appendComponent(new Component("spacer", 1))
    title.appendComponent(new Component("header", "Full Documentation", 1))
    headingContent.appendPart(title)
    headingContent.compile()

    let reference = new Page("Full Documentation for Lenoir", headingContent, "title")

    ultra(reference, LenoirPrebuilts.header("Full Documentation", 2))
    let quickstart = new Section()
    let quickstartContent = new Part(2, 22)
    quickstartContent.appendComponent(new Component("markdown", `This is a complete reference manual for Lenoir. It is not a tutorial or a guided project. More detailed tutorials are in the works, but all necessary information to build a website using Lenoir is contained within this manual. If you have any questions, please raise an Issue on [Github](https://github.com/rockwillck/lenoir).

# Lenoir

##  Component Types
- \`text\`  
    - (text, align="left", color="inherit")  
- \`header\`  
    - (text, weight, align="center")  
- \`spacer\`  
    - (height)  
- \`image\`  
    - (src, alt="An image served by the Lenoir webkit.")  
- \`link\`  
    - (text, src)  
- \`raw\`  
    - (html)  
- \`markdown\`  
    - (markdown, align="center")  
- \`button\`  
    - (text, action)  
## LenoirPrebuilts
### static imageTextPair(imageUrl, text, imageAlt, orientation=0)
**Creates an image-text pair section**  
\`orientation\` can be \`0\` (image on the left, text on the right) or \`1\` (image on the right, text on the left)  
  
### static image(imageUrl, imageAlt, left=2, width=LenoirAssistant.sections - 4)
**Creates an image-only section**  
  
### static verticalSpacer(height)
**Creates a vertical spacer**  
  
### static header(text, weight=1, align="center")
**Creates a header**  
\`weight\` translates directly to h1, h2, h3 (1 is h1, 2, is h2, etc.)  
  
### static monologue(texts, left, width, align="left", color="black")
**Creates a solid block of text**  
  
### static link(text, src, left, width)
**Creates a link**  
  
### static markdown(text, left, width, align="center")
**Creates a markdown section**  
  
### static button(text, action, left, width)
**Creates a button**  
\`action\` will be called as \`action()\`  
  
## Ultra
### static ultra(page, section)
**Speeds up development by compiling sections and appending to the Page all in one**  
  
## Lenoir
### static registerPage(id, page, url)
**Registers a page**  
  
### static setChildParent(childId, parentId)
**Makes one page a subpage of another**  
\`childId\` is the id of the subpage.  
\`parentId\` is the id of the parent page.  
You cannot have a subpage of a subpage.  
  
### static navSettings(color="black", opaque=false)
**Define settings for nav**  
  
### static load(name, favicon="Lenoir/lenoir.png", faviconInNav=true, doc=document.body)
**Loads a site**  
\`name\` serves as the alt text for the favicon.  
\`faviconInNav\` defines whether the favicon appears in the navbar.  
\`doc\` is the element to which the site content is appended. It is not recommended to supply any argument other than \`document.body\`.  
  
### static bake(name=this.name, favicon=this.favicon, faviconInNav=this.faviconInNav)
**Bakes the dynamically generated site to static files**  
\`name\`, \`favicon\`, and \`faviconInNav\` are the same arguments as in \`load\`.  
  
## LenoirExtensions
### static registerComponentType(type, method)
**Register a new component type**  
\`method\` is a user-created function that takes in arguments (provided as a single list) and returns a DOM element.  
  

##  Creating custom components
\`\`\`javascript  
creator*function(args) {  
    // Create DOM element  
    return dom*element  
}  
LenoirExtensions.registerComponentType("component*name", creator*function)  
\`\`\`  
## Page
### constructor(description, section, type="hero", backgroundImg="Lenoir/bg.avif", attachmentX=0.5, attachmentY=0.5, parallaxRate=-1)
**Initializes a Page**  
\`description\` is the content of a meta tag. It will not be visually displayed.  
\`section\` is the section that will be used as the header.  
\`type\` is the type of header. The four types are:  
- \`hero\`, which is a full screen height image  
- \`large\`, which is a large height image  
- \`small\`, which is a small height image  
- \`title\`, which is only the section with no background image  
  
\`attachmentX\` and \`attachmentY\` are values from 0 to 1 that define the anchor point of the background image.  
\`parallaxRate\` is a value from -1 to 1.  
  
### updateBannerImg(src)
**Updates the banner image**  
  
### appendSection(section)
**Adds a section to the page**  
  
## Section
### constructor(align="center")
**Creates a section**  
\`align\` defines how items are aligned vertically. It can be \`top\`, \`bottom\`, or \`center\`.  
  
### appendPart(part)
**Adds a part to the section**  
  
### compile()
**Compiles a section**  
Every section *must* be compiled before it shows up in a Page.  
  
## Part
### constructor(left, width, align="center")
**Creates a part**  
\`left\` is the number of units from the left that the Part starts.  
\`width\` is the width of the part.  
\`align\` defines the *text align* of the part (not the item align!). It can be \`left\`, \`center\`, or \`right\`.  
  
### appendComponent(component)
**Appends a component to a Part**  
  
## Component
### constructor(type, ...content)
**Creates a component**  
\`type\` is the type of component, which can be either a built-in type or a component defined using \`registerComponentType\`.  
\`...content\` are further arguments. They can be provided sequentially.  
  

##  Theming
To theme, open \`../template.css\` in the superdirectory. Elements already have some styles, and it is not recommended to override them. Base styles can be seen in \`lenoir.css\`. If you need an example, open \`themes/default.css\`.  
`, "left"))
    quickstart.appendPart(quickstartContent)
    quickstart.compile()
    reference.appendSection(quickstart)

    ultra(reference, LenoirPrebuilts.verticalSpacer(1))

    Lenoir.registerPage("Reference", reference, "depth.html")
}
indepth()

Lenoir.setChildParent("Reference","Documentation")

Lenoir.load("Lenoir")
// Lenoir.bake("Lenoir")