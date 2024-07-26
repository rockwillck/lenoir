class CoreExtensions {
    static text(inner) {
        let p = document.createElement("p")
        p.innerText = inner[0]
        p.className = inner.length > 1 ? inner[1] : "left"
        p.style.color = inner.length > 2 ? inner[2] : "inherit"
        return p
    }
    
    static heading(contents) {
        let h = document.createElement(`h${contents[1]}`)
        h.innerText = contents[0]
        h.className = contents.length > 2 ? contents[2] : "center"
        return h
    }
    
    static spacing(height) {
        let s = document.createElement("div")
        s.style.height = `${height[0]/LenoirAssistant.sections*100}vw`
        return s
    }
    
    static image(src) {
        let i = document.createElement("img")
        i.src = src[0]
        i.style.width = "100%"
        i.alt = src.length > 1 ? src[1] : "An image served by the Lenoir webkit."
        return i
    }
    
    static link(src) {
        let a = document.createElement("A")
        a.innerText = src[0]
        a.href = src[1]
        return a
    }
    
    static raw(args) {
        let div = document.createElement("div")
        div.innerHTML = args[0]
        return div
    }
    
    static markdown(args) {
        let markdown = args[0]
        markdown = "<pre>"+markdown.split("\n").map((x) => x.trim().startsWith("-") ? `<li style="text-indent:${x.match(/^  +/)?.[0].length*5 || 0}px;">${x.trim().slice(1)}</li>` : x.trim()).map((x) => x.startsWith("#") ? `<h${x.match(/^#+/)?.[0].length} style="padding:inherit;">${x.slice(x.match(/^#+/)?.[0].length)}</h${x.match(/^#+/)?.[0].length}>` : x).join(`\n`)+"</pre>"
        const result = document.createElement('div');
        result.className = "markdown"
        result.style.textAlign = args.length > 1 ? args[1] : "center"
    
        let boldRegex = /\*\*(.*?)\*\*/g;
        let italicRegex = /\*(.*?)\*/g;
        let codeRegex = /`(.*?)`/g;
        let codeBlockRegex = /```([a-zA-Z]+)?\n([\s\S]*?)\n```/g;
        let imgRegex = /!\[([^\]]+)\]\(([^)]+)\)/g
        let linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    
        const boldReplace = '<strong>$1</strong>';
        const italicReplace = '<em>$1</em>';
        const codeReplace = '<code>$1</code>';
        const imgReplace = '<img alt="$1" src="$2">'
        const linkReplace = '<a href="$2">$1</a>'
    
        // Replace code blocks
        markdown = markdown.replace(codeBlockRegex, (_, language, code) => {
            return `<pre class="codeblock"><code class="${language}">${code}</code></pre>`
        });
    
        // Replace bold, italic, and inline code
        markdown = markdown.replace(boldRegex, boldReplace)
                           .replace(italicRegex, italicReplace)
                           .replace(codeRegex, codeReplace)
                           .replace(imgRegex, imgReplace)
                           .replace(linkRegex, linkReplace);
    
        result.innerHTML = markdown
    
        return result;
    }
    
    static button(args) {
        let btn = document.createElement("button")
        btn.className = "btn"
        btn.innerText = args[0]
        btn.onclick = args[1]
        return btn
    }
}
LenoirExtensions.registerComponentType("text", CoreExtensions.text)
LenoirExtensions.registerComponentType("header", CoreExtensions.heading)
LenoirExtensions.registerComponentType("spacer", CoreExtensions.spacing)
LenoirExtensions.registerComponentType("image", CoreExtensions.image)
LenoirExtensions.registerComponentType("link", CoreExtensions.link)
LenoirExtensions.registerComponentType("raw", CoreExtensions.raw)
LenoirExtensions.registerComponentType("markdown", CoreExtensions.markdown)
LenoirExtensions.registerComponentType("button", CoreExtensions.button)

/* + Component Types
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
-- */