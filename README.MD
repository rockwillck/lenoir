# Lenoir
A modern, concise web development toolkit
## A (Very) Brief History
Lenoir is named after the first engine with a sparkplug. Lenoir was created for use by my web development agency, Sparkplug.Page. I am clever. Lenoir was written in a weekend and is currently being expanded, with documentation being... appropriately procrastinated upon. Cheers!  
## Features
- Baking: Instead of dynamically generating content every time your site loads, you can "bake" your files and generate them just once.
- Customizable themes: Lenoir's styling is just a base style sheet, which can be overriden, added to, and extended.
- Built-in navigation tools: with automatically generated and base-styled navbar and side menus, Lenoir takes care of the painful part for you.
- Responsive design: Lenoir-generated websites are responsive from the very beginning, ready for any platform at any resolution.
- Accessibility-focused: With accessibility features built into every component that requires one, Lenoir-powered sites help advance a more accessible web.
- SEO-friendly: Using Lenoir's *Bake* feature, your sites won't be dynamically loaded at runtime and confused web crawlers. Instead, you'll serve static HTML and rank higher in SEO.
## Set-Up
### Download
Clone this GitHub repository using
```bash
gh repo clone rockwillck/Lenoir
```
or
```bash
git clone https://github.com/rockwillck/Lenoir.git
```
### File Structure
Open the repository you just cloned. If you serve the files on a private server right now, you'll get the Lenoir demo site. Everything inside the `Lenoir` folder are package files: you don't need to touch them. `theme.css` is your theme file: it dictates how your site looks. If you want to create your own file from scratch, duplicate `template.css` and rename it to `theme.css`.
### Usage
There is near-complete documentation at [Lenoir > Lenoir-documentation.md](https://github.com/rockwillck/lenoir/blob/main/Lenoir/Lenoir-documentation.md). A guide and more comprehensive documentation is in progress.
### Quickstart
To make your first site, copy the following code into an empty `app.js`.
```javascript
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
```
Let's step through this:
```javascript
let headingContent = new Section()
let title = new Part(2, 4)
```
Sites made in Lenoir are made up of different containers. These are:
1. Pages, the biggest container
2. Sections, containers that stretch across the page
3. Parts, vertical stacks inside of sections
4. Components, DOM elements that stack inside of Parts  

Here, we're creating the section that makes up the hero greeting at the top of the page (the image and text that covers the entire screen). We also create a Part to hold the title text.
```javascript
title.appendComponent(new Component("header", "Hello", 1))
title.appendComponent(new Component("text", "World", "center"))
```
Here, we "append" a Header and Text component to our title Part. The arguments for Components are `new Component(type, ...content)`.  
In the case of the Header component, the type is `"header"`, and there are two arguments of content: the text, `"Hello"`, and the weight `1`. The weight is like a Header 1 or Header 2 in Microsoft Word.
```javascript
headingContent.appendPart(title)
headingContent.compile()
```
We then "append" the part to the heading Section. The second line, `headingContent.compile()`, is important. Until a section is *compiled*, you **cannot** use it. If you add a section to the page before compiling, nothing will be added.
```javascript
let backgroundImgSrc = "https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let landing = new Page("Lenoir, a modern webkit.", headingContent, "hero", backgroundImgSrc, 0.5, 0)
```
The first line here just declares the `backgroundImgSrc` variable, no Lenoir magic there. The next line finally creates the page. The arguments for the page are: `new Page(description, heading_section, heading_type, ...background)`. The four heading types are: `hero`, `large`, `small`, and `title`. The first three require a background image and attachment positions (the `0.5` and `0`, where the first 0 is attaching the image completely to the left and 1 is to the right, and likewise for top and bottom). A title is just a large header.
```javascript
ultra(landing, LenoirPrebuilts.header("Hello World", 2))
ultra(landing, LenoirPrebuilts.imageTextPair("https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "This is your very first site!"))
ultra(landing, LenoirPrebuilts.verticalSpacer(100))
```
There are two important concepts in these lines: the `ultra` function and the `LenoirPrebuilts` class.  
Prebuilts are methods that return "prebuilt" sections. Instead of having to create a section, a part, and a component, certain elements can be condensed into one line: `LenoirPrebuilts.header("Hello World", 2)`. The `header` prebuilt works just like the `header` component, while the `imageTextPair` prebuilt takes an image (url or path) and a piece of text. The `verticalSpacer` prebuilt is just like the `spacer` component, except it's all alone in a section and so just gives you vertical space (the height is the only argument).  
The `ultra` function is another way of condensing code. To add a section, the lines would usually be:
```javascript
section.compile()
page.appendSection(section)
```
This may not seem like a lot, but with enough sections on enough pages, it adds up. So, the alternative is to use `ultra`: all you do is feed in the page object (in this case, `landing`) and the section object (`LenoirPrebuilts.header("Hello World", 2)` return a section with a header), and it's all done for you.
```javascript
Lenoir.registerPage("Home", landing, "index.html")
```
This line does what it says: it registers the page (`landing`) with the title `Home` at the url `index.html` (specifically, domain.name/index.html, but that's handled by modern browsers).
I contained all that code in a `home()` method, but that's moreso convention that requirement.
`Lenoir.load("Hello World")` just initializes the whole website.
## Roadmap
- [x] Core library
- [x] Baking
- [x] Favicons
- [x] Button component
- [x] Raw HTML component
- [x] Markdown component
- [x] Full Documentation
    - [x] Quickstart
    - [x] Baking
    - [x] Theming
    - [x] Lenoir Class
    - [x] LenoirExtensions
        - [x] Class
        - [x] Core extensions
        - [x] Creating extensions
    - [x] Page Class
    - [x] Section Class
    - [x] Part Class
    - [x] Component Class
    - [x] LenoirPrebuilts Class
- [ ] Guide to create a full site
- [ ] Themes
    - [x] Default
    - [x] Notebook
    - [x] Glass
    - [ ] Neumorph
    - [ ] Pop
- [x] Subpages
## View Live
A demo site is available [here](https://www.rockwill.dev/lenoir).
## Support Lenoir
Lenoir is a solo developed, open-source project. Any support is welcomed but is only that - support. Lenoir will always be free and available on GitHub.  
  
<a href="https://www.buymeacoffee.com/rockwill"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=rockwill&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
## License
This software is licensed under the Bok Choy General Software License. The full text of the license should be included below. If not, more information can be found at https://www.rockwill.dev/Bok-Choy-License/.
```
Bok Choy General Software License

Copyright (c) 2024 William Choi-Kim

This software and associated files (the "Software") may be used commercially, privately, and publicly. The Software may be modified in any way, without limitation. It may be distributed free of charge as is, but not distributed commerically without modifications to its functionality. Any distributed version of the Software must provide attribution to the Software in some way. Any distributed unmodified copy of the Software must abide by and include this license. The user is free to use, modify, and distribute the software under the aforementioned conditions.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
