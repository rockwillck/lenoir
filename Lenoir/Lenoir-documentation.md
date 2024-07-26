# Lenoir

##  Component Types
- `text`  
    - (text, align="left", color="inherit")  
- `header`  
    - (text, weight, align="center")  
- `spacer`  
    - (height)  
- `image`  
    - (src, alt="An image served by the Lenoir webkit.")  
- `link`  
    - (text, src)  
- `raw`  
    - (html)  
- `markdown`  
    - (markdown, align="center")  
- `button`  
    - (text, action)  
## LenoirPrebuilts
### static imageTextPair(imageUrl, text, imageAlt, orientation=0)
__Creates an image-text pair section__  
`orientation` can be `0` (image on the left, text on the right) or `1` (image on the right, text on the left)  
  
### static image(imageUrl, imageAlt, left=2, width=LenoirAssistant.sections - 4)
__Creates an image-only section__  
  
### static verticalSpacer(height)
__Creates a vertical spacer__  
  
### static header(text, weight=1, align="center")
__Creates a header__  
`weight` translates directly to h1, h2, h3 (1 is h1, 2, is h2, etc.)  
  
### static monologue(texts, left, width, align="left", color="black")
__Creates a solid block of text__  
  
### static link(text, src, left, width)
__Creates a link__  
  
### static markdown(text, left, width, align="center")
__Creates a markdown section__  
  
### static button(text, action, left, width)
__Creates a button__  
`action` will be called as `action()`  
  
## Ultra
### static ultra(page, section)
__Speeds up development by compiling sections and appending to the Page all in one__  
  
## Lenoir
### static registerPage(id, page, url)
__Registers a page__  
  
### static setChildParent(childId, parentId)
__Makes one page a subpage of another__  
`childId` is the id of the subpage.  
`parentId` is the id of the parent page.  
You cannot have a subpage of a subpage.  
  
### static navSettings(color="black", opaque=false)
__Define settings for nav__  
  
### static load(name, favicon="Lenoir/lenoir.png", faviconInNav=true, doc=document.body)
__Loads a site__  
`name` serves as the alt text for the favicon.  
`faviconInNav` defines whether the favicon appears in the navbar.  
`doc` is the element to which the site content is appended. It is not recommended to supply any argument other than `document.body`.  
  
### static bake(name=this.name, favicon=this.favicon, faviconInNav=this.faviconInNav)
__Bakes the dynamically generated site to static files__  
`name`, `favicon`, and `faviconInNav` are the same arguments as in `load`.  
  
## LenoirExtensions
### static registerComponentType(type, method)
__Register a new component type__  
`method` is a user-created function that takes in arguments (provided as a single list) and returns a DOM element.  
  

##  Creating custom components
```javascript  
creator_function(args) {  
    // Create DOM element  
    return dom_element  
}  
LenoirExtensions.registerComponentType("component_name", creator_function)  
```  
## Page
### constructor(description, section, type="hero", backgroundImg="Lenoir/bg.avif", attachmentX=0.5, attachmentY=0.5, parallaxRate=-1)
__Initializes a Page__  
`description` is the content of a meta tag. It will not be visually displayed.  
`section` is the section that will be used as the header.  
`type` is the type of header. The four types are:  
- `hero`, which is a full screen height image  
- `large`, which is a large height image  
- `small`, which is a small height image  
- `title`, which is only the section with no background image  
  
`attachmentX` and `attachmentY` are values from 0 to 1 that define the anchor point of the background image.  
`parallaxRate` is a value from -1 to 1.  
  
### updateBannerImg(src)
__Updates the banner image__  
  
### appendSection(section)
__Adds a section to the page__  
  
## Section
### constructor(align="center")
__Creates a section__  
`align` defines how items are aligned vertically. It can be `top`, `bottom`, or `center`.  
  
### appendPart(part)
__Adds a part to the section__  
  
### compile()
__Compiles a section__  
Every section *must* be compiled before it shows up in a Page.  
  
## Part
### constructor(left, width, align="center")
__Creates a part__  
`left` is the number of units from the left that the Part starts.  
`width` is the width of the part.  
`align` defines the *text align* of the part (not the item align!). It can be `left`, `center`, or `right`.  
  
### appendComponent(component)
__Appends a component to a Part__  
  
## Component
### constructor(type, ...content)
__Creates a component__  
`type` is the type of component, which can be either a built-in type or a component defined using `registerComponentType`.  
`...content` are further arguments. They can be provided sequentially.  
  

##  Theming
To theme, open `../template.css` in the superdirectory. Elements already have some styles, and it is not recommended to override them. Base styles can be seen in `lenoir.css`. If you need an example, open `themes/default.css`.  
