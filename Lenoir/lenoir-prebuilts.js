class LenoirPrebuilts {
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

    static image(imageUrl, imageAlt, left=2, width=LenoirAssistant.sections - 4) {
        let section = new Section()
        let part = new Part(left, width)
        part.appendComponent(new Component("image", imageUrl, imageAlt))
        section.appendPart(part)
        return section
    }

    static verticalSpacer(height) {
        let section = new Section("top")
        let part = new Part(1, 1)
        part.appendComponent(new Component("spacer", height))
        section.appendPart(part)
        return section
    }

    static header(text, weight=1, align="center") {
        let section = new Section()
        let head = new Part(2, LenoirAssistant.sections - 4)
        head.appendComponent(new Component("header", text, weight, align))
        section.appendPart(head)
        return section
    }

    static monologue(texts, left, width, align="left", color="black") {
        let section = new Section()
        let monologue = new Part(left, width)
        for (let text of texts) {
            monologue.appendComponent(new Component("text", text, align, color))
        }
        section.appendPart(monologue)
        return section
    }

    static link(text, src) {
        let section = new Section()
        let part = new Part(8, 10)
        part.appendComponent(new Component("link", text, src))
        section.appendPart(part)
        return section
    }

    static markdown(text, left, width, align="center") {
        let section = new Section()
        let md = new Part(left, width)
        md.appendComponent(new Component("markdown", text, align))
        section.appendPart(md)
        return section
    }
}

function ultra(page, section) {
    section.compile()
    page.appendSection(section)
}