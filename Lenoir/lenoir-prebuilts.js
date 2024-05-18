class LenoirPrebuilts {
    /* ++ Creates an image-text pair section
    `orientation` can be `0` (image on the left, text on the right) or `1` (image on the right, text on the left)
    -- */
    static imageTextPair(imageUrl, text, imageAlt, orientation=0) {
        let section = new Section("top")
        let leftSet = new Part(1, Math.floor(LenoirAssistant.sections/2) - 1)
        let rightSet = new Part(Math.floor(LenoirAssistant.sections/2) + 1, LenoirAssistant.sections - Math.floor(LenoirAssistant.sections/2) - 2)
        
        if (orientation == 0) {
            leftSet.appendComponent(new Component("image", imageUrl, imageAlt))
            rightSet.appendComponent(new Component("text", text))
        } else {
            rightSet.appendComponent(new Component("image", imageUrl, imageAlt))
            leftSet.appendComponent(new Component("text", text))
        }
        section.appendPart(leftSet)
        section.appendPart(rightSet)
        return section
    }

    /* ++ Creates an image-only section
    -- */
    static image(imageUrl, imageAlt, left=2, width=LenoirAssistant.sections - 4) {
        let section = new Section()
        let part = new Part(left, width)
        part.appendComponent(new Component("image", imageUrl, imageAlt))
        section.appendPart(part)
        return section
    }

    /* ++ Creates a vertical spacer
    -- */
    static verticalSpacer(height) {
        let section = new Section("top")
        let part = new Part(1, 1)
        part.appendComponent(new Component("spacer", height))
        section.appendPart(part)
        return section
    }

    /* ++ Creates a header
    `weight` translates directly to h1, h2, h3 (1 is h1, 2, is h2, etc.)
    -- */
    static header(text, weight=1, align="center") {
        let section = new Section()
        let head = new Part(2, LenoirAssistant.sections - 4)
        head.appendComponent(new Component("header", text, weight, align))
        section.appendPart(head)
        return section
    }

    /* ++ Creates a solid block of text
    -- */
    static monologue(texts, left, width, align="left", color="black") {
        let section = new Section()
        let monologue = new Part(left, width)
        for (let text of texts) {
            monologue.appendComponent(new Component("text", text, align, color))
        }
        section.appendPart(monologue)
        return section
    }
    
    /* ++ Creates a link 
    -- */
    static link(text, src, left, width) {
        let section = new Section()
        let part = new Part(left, width)
        part.appendComponent(new Component("link", text, src))
        section.appendPart(part)
        return section
    }

    /* ++ Creates a markdown section
    -- */
    static markdown(text, left, width, align="center") {
        let section = new Section()
        let md = new Part(left, width)
        md.appendComponent(new Component("markdown", text, align))
        section.appendPart(md)
        return section
    }

    /* ++ Creates a button
    `action` will be called as `action()`
    -- */
    static button(text, action, left, width) {
        let section = new Section()
        let part = new Part(left, width)
        part.appendComponent(new Component("button", text, action))
        section.appendPart(part)
        return section
    }
}

class Ultra {
    /* ++ Speeds up development by compiling sections and appending to the Page all in one
    -- */
    static ultra(page, section) {
        section.compile()
        page.appendSection(section)
    }
}
function ultra(page, section) {
    Ultra.ultra(page, section)
}