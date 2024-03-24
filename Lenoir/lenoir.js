class MockDocument {
    constructor(id) {
        this.html = document.createElement("div")
        this.id = id
    }
    appendChild(node) {
        this.html.appendChild(node)
    }
}

class Lenoir {
    static pages = {}
    static ids = {}
    static urls = {}
    static nav
    static name = ""
    static favicon = "https://i.ibb.co/z2yM7D9/ICO-to-PNG-Converter.png"
    static setSections(sections) {
        LenoirAssistant.sections = sections
    }
    static registerPage(id, page, url) {
        this.pages[id] = page
        this.ids[page] = id
        this.urls[id] = url
    }
    static navSettings(color="black", opaque=false) {
        this.navSettings.color = color
        this.navSettings.opaque = opaque
    }
    static load(name, favicon="https://i.ibb.co/z2yM7D9/ICO-to-PNG-Converter.png", faviconInNav=true, doc=document.body) {
        this.name = name
        this.favicon = favicon
        let faviconLink = document.querySelector("link[rel~='icon']");
        if (!faviconLink) {
            faviconLink = document.createElement('link');
            faviconLink.rel = 'icon';
            document.head.appendChild(faviconLink);
        }
        faviconLink.href = favicon;
        this.faviconInNav = faviconInNav
        this.nav = document.createElement("div")
        let foldButton = document.createElement("button")
        foldButton.className = "foldButton"
        foldButton.innerText = "×"
        this.nav.appendChild(foldButton)
        let openButton = document.createElement("button")
        openButton.className = "openButton"
        openButton.innerText = "☰"
        doc.appendChild(openButton)
        foldButton.onclick = (e) => {
            this.nav.style.translate = ""
            openButton.style.translate = ""
        }
        openButton.onclick = (e) => {
            this.nav.style.translate = "0 0"
            openButton.style.translate = "-10vw 0"
        }
        let siteName = document.createElement("div")
        siteName.className = "siteName"
        if (faviconInNav) {
            siteName.innerHTML = `<img src="${favicon}" class="navIcon">${this.name}`
        } else {
            siteName.innerText = this.name
        }
        this.nav.appendChild(siteName)
        let links = document.createElement("div")
        links.className = "links"
        for (let pageId of Object.keys(this.pages)) {
            let link = document.createElement("a")
            link.innerText = pageId
            link.className = "siteLink"
            link.href = this.urls[pageId]
            links.appendChild(link)
        }
        this.nav.appendChild(links)
        doc.appendChild(this.nav)
        let page = this.pages[doc.id]
        document.title = doc.id
        document.querySelector('meta[name="description"]').setAttribute('content', page.description);
        doc.appendChild(page.heading)
        for (let section of page.sections) {
            doc.appendChild(section.div)
        }

        LenoirAssistant.updateNav()
        window.addEventListener("scroll", (e) => {
            LenoirAssistant.updateNav()
        })

        window.addEventListener("resize", (e) => {
            LenoirAssistant.updateNav()
        })
    }

    static bake(name=this.name, favicon=this.favicon, faviconInNav=this.faviconInNav) {
        let bakedDocs = []
        for (let page of Object.keys(this.pages)){
            let fakeDoc = new MockDocument(page)
            this.load(name, favicon, faviconInNav, fakeDoc)
            bakedDocs.push(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>${page}</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="description" content="${this.pages[page].description}" />
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/rockwillck/Lenoir@cacd349bec3db0924aa65ffb6d3cfa5a319e5e79/Lenoir/lenoir.css" />
                <link rel="stylesheet" type="text/css" href="theme.css" />
                <link rel="icon" href="${favicon}">
            </head>
            <body>
                ${fakeDoc.html.innerHTML}
                <script>
                window.addEventListener("scroll", (e) => {
                    try {
                        document.getElementsByClassName("bannerImg")[0].style.top = \`\$\{${this.pages[page].attachmentY} * 100 + (window.scrollY/window.innerHeight*(1 - ${this.pages[page].attachmentX}))*100*${this.pages[page].parallaxRate}\}%\`
                    } catch (e) {

                    }
                })
                nav = document.getElementsByClassName("nav")[0]
                function updateNav() {
                    if (window.innerHeight > window.innerWidth) {
                        nav.className = "nav verticalNav"
                    } else {
                        if (window.scrollY/window.innerHeight > 0.1) {
                            nav.className = "nav scrolledNav"
                        } else {
                            nav.className = "nav unscrolledNav"
                        }
                    }
                }
                updateNav()
                window.addEventListener("scroll", (e) => {
                    updateNav()
                })
                window.addEventListener("resize", (e) => {
                    updateNav()
                })
                foldButton = document.getElementsByClassName("foldButton")[0]
                openButton = document.getElementsByClassName("openButton")[0]
                foldButton.onclick = (e) => {
                    nav.style.translate = ""
                    openButton.style.translate = ""
                }
                openButton.onclick = (e) => {
                    nav.style.translate = "0 0"
                    openButton.style.translate = "-100vw 0"
                }
                </script>
            </body>
            </html>`)
        }
        console.log(bakedDocs)

        bakedDocs.forEach(function(string, index) {
            // Create a blob from the string content
            var blob = new Blob([string], { type: 'text/plain' });

            // Create a temporary anchor element
            var a = document.createElement('a');
            document.body.appendChild(a);
            
            // Set the anchor's attributes
            a.href = window.URL.createObjectURL(blob);
            a.download = 'Lenoir_' + index + '.html';
            
            // Trigger a click event to download the file
            a.click();
            
            // Clean up
            document.body.removeChild(a);
        });
    }
}

class LenoirExtensions {
    static componentTypes = {}
    static modifiers = {}
    static registerComponentType(type, method) {
        this.componentTypes[type] = method
    }
    static renderComponentType(type, content) {
        return this.componentTypes[type](content)
    }

    static registerModifier(type, method) {
        this.modifiers[type] = method
    }
    static applyModifier(type, ...input) {
        return this.modifiers[type](input)
    }
}

class LenoirAssistant {
    static sections = 8
    static getSpacer(widthBySection) {
        let spacer = document.createElement("div")
        spacer.className = "spacer"
        spacer.style.width = `${widthBySection/this.sections*100}vw`
        return spacer
    }

    static updateNav() {
        if (window.innerHeight > window.innerWidth) {
            Lenoir.nav.className = "nav verticalNav"
        } else {
            if (window.scrollY/window.innerHeight > 0.1) {
                Lenoir.nav.className = "nav scrolledNav"
            } else {
                Lenoir.nav.className = "nav unscrolledNav"
            }
        }
    }
}

class Page {
    constructor(description, section, type="hero", backgroundImg="https://images.unsplash.com/photo-1709891798937-fd431bd7e10b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", attachmentX=0.5, attachmentY=0.5, parallaxRate=0.8) {
        this.sections = []
        this.heading = document.createElement("div")
        this.description = description
        this.attachmentX = attachmentX
        this.attachmentY = attachmentY
        this.parallaxRate = parallaxRate
        switch(type) {
            case "hero":
            case "large":
            case "small":
                this.heading.className = `heading banner ${type}`
                this.banner = document.createElement("img")
                this.banner.alt = "Banner image"
                this.banner.src = backgroundImg
                this.banner.className = "bannerImg"
                this.banner.style.left = `${attachmentX*100}%`
                this.banner.style.top = `${attachmentY*100}%`
                this.banner.style.translate = `-${attachmentX*100}% -${attachmentY*100}%`
                this.heading.appendChild(this.banner)
                window.addEventListener("scroll", (e) => {
                    this.banner.style.top = `${attachmentY * 100 + (window.scrollY/window.innerHeight*(1 - attachmentY))*100*parallaxRate}%`
                })
                section.div.style.backgroundColor = "transparent"
                break
            default:
                this.heading.className = "heading title"
                break
        }
        this.heading.appendChild(section.div)
    }
    updateBannerImg(src) {
        this.banner.src = src
    }
    appendSection(section) {
        this.sections.push(section)
    }
}

class Section {
    constructor(align="center") {
        if (align == "top") {
            align = "start"
        }
        if (align == "bottom") {
            align = "end"
        }
        this.parts = []
        this.div = document.createElement("div")
        this.div.className = "section"
        this.div.style.alignItems = align
    }
    appendPart(part) {
        this.parts.push(part)
        this.parts.sort((a, b) => {
            return a.left - b.left
        })
    }
    compile() {
        let compiled = [LenoirAssistant.getSpacer(this.parts[0].left)]
        for (let i = 0; i < this.parts.length; i++) {
            let part = this.parts[i]
            let nextPart = (i + 1 < this.parts.length) ? this.parts[i+1] : {left:LenoirAssistant.sections}
            compiled.push(part.div)
            compiled.push(LenoirAssistant.getSpacer(nextPart.left - part.right))
        }

        this.div.innerHTML = ""
        for (let el of compiled) {
            this.div.appendChild(el)
        }
        return this.div
    }

}

class Part {
    constructor(left, width, align="center") {
        this.left = left
        this.right = this.left + width
        this.align = align
        this.div = document.createElement("div")
        this.div.className = "part"
        this.div.style.width = `${width/LenoirAssistant.sections*100}vw`
        this.innerDiv = document.createElement("div")
        this.innerDiv.className = `vstack ${align}`
        this.div.appendChild(this.innerDiv)
    }
    appendComponent(component) {
        this.innerDiv.appendChild(component.div)
    }
}

class Component {
    constructor(type, ...content) {
        this.type = type
        this.content = content
        this.render()
    }
    render() {
        this.div = LenoirExtensions.renderComponentType(this.type, this.content)
        return this.div
    }
}