Lenoir.setSections(26)

// HOME
function home() {
    let headingContent = new Section()
    let title = new Part(10, 6)
    title.appendComponent(new Component("header", "Lenoir", 1))
    title.appendComponent(new Component("text", "The Easy Site Maker", "center"))
    headingContent.appendPart(title)
    headingContent.compile()

    let backgroundImgSrc = "https://i.pinimg.com/originals/3f/5d/85/3f5d85871b2eef01adf77c09b67f25f5.gif"
    let landing = new Page("Lenoir, a modern webkit.", headingContent, "hero", backgroundImgSrc, 0.5, 0)

    ultra(landing, LenoirPrebuilts.header("The Internet", 2))
    ultra(landing, LenoirPrebuilts.imageTextPair("https://i.ibb.co/jk8X6Rd/http-info-cern-ch.jpg", "When the Internet was first invented, websites looked like this. Plain, simple, and really ugly.", "Old internet screenshot"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(100))
    ultra(landing, LenoirPrebuilts.imageTextPair("https://i.ytimg.com/vi/v1jlkKfwHm8/maxresdefault.jpg", "Now, it looks like this. Beautiful and modern, yet startlingly complex and a nightmare to upkeep.", "New internet screenshot", 1))
    ultra(landing, LenoirPrebuilts.verticalSpacer(100))
    ultra(landing, LenoirPrebuilts.header("Meet... Lenoir", 2))
    ultra(landing, LenoirPrebuilts.monologue(["A simple, highly customizable, abstracted web development toolkit that helps you build out static sites as quickly and efficiently as possible.", "Lenoir is highly opinionated while still giving you complete creative freedom, making sure your sites are both beautiful and your own.", "And unlike other more complex libraries, Lenoir creates semantic, readable HTML."], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(100))
    ultra(landing, LenoirPrebuilts.header("Features", 2))
    ultra(landing, LenoirPrebuilts.monologue(["Baking static site files", "Full customizability", "Built-in navigation features"], 8, 10, "center"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(100))
    ultra(landing, LenoirPrebuilts.header("Source Code", 2))
    ultra(landing, LenoirPrebuilts.link("https://github.com/rockwillck/Lenoir", "https://github.com/rockwillck/lenoir"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(50))

    Lenoir.registerPage("Home", landing, "index.html")
}
home()

function documentation() {
    let headingContent = new Section()
    let title = new Part(12, 2)
    title.appendComponent(new Component("spacer", 100))
    title.appendComponent(new Component("header", "Documentation", 1))
    headingContent.appendPart(title)
    headingContent.compile()

    let docs = new Page("Lenoir, a modern webkit.", headingContent, "title")

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
    
        let backgroundImgSrc = "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    let backgroundImgSrc = "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let landing = new Page("Lenoir, a modern webkit.", headingContent, "hero", backgroundImgSrc, 0.5, 0)
    \`\`\`
    The first line here just declares the \`backgroundImgSrc\` variable, no Lenoir magic there. The next line finally creates the page. The arguments for the page are: \`new Page(description, heading_section, heading_type, ...background)\`. The four heading types are: \`hero\`, \`large\`, \`small\`, and \`title\`. The first three require a background image and attachment positions (the \`0.5\` and \`0\`, where the first 0 is attaching the image completely to the left and 1 is to the right, and likewise for top and bottom). A title is just a large header.
    \`\`\`javascript
    ultra(landing, LenoirPrebuilts.header("Hello World", 2))
    ultra(landing, LenoirPrebuilts.imageTextPair("https://images.unsplash.com/photo-1709318305042-16d0b74554d1?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "This is your very first site!"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(100))
    \`\`\`
    There are two important concepts in these lines: the \`ultra\` function and the \`LenoirPrebuilts\` class.  
    Prebuilts are methods that return "prebuilt" sections. Instead of having to create a section, a part, and a component, certain elements can be condensed into one line: \`LenoirPrebuilts.header("Hello World", 2)\`.   
    The \`ultra\` function is another way of condensing code. To add a section, the lines would usually be:
    \`\`\`javascript
    section.compile()
    page.appendSection(section)
    \`\`\`
    This may not seem like a lot, but with enough sections on enough pages, it adds up. So, the alternative is to use the \`ultra\`: all you do is feed in the page object (in this case, \`landing\`) and the section object (\`LenoirBuilts.header("Hello World", 2)\` return a section with a header), and it's all done for you.
    \`\`\`javascript
    Lenoir.registerPage("Home", landing, "index.html")
    \`\`\`
    This line does what it says: it registers tha page (\`landing\`) with the title \`Home\` at the url \`index.html\` (specifically, domain.name/index.html, but that's handled by modern HTML renderers).
    I contained all that code in a \`home()\` method, but that's moreso convention that requirement.
    \`Lenoir.load("Hello World")\` just initializes the whole website.`, "left"))
    quickstart.appendPart(quickstartContent)
    quickstart.compile()
    docs.appendSection(quickstart)

    ultra(docs, LenoirPrebuilts.verticalSpacer(100))

    Lenoir.registerPage("Documentation", docs, "documentation.html")
}
documentation()

Lenoir.load("Lenoir")
// Lenoir.bake("Lenoir")