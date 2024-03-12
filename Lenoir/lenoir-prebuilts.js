class LenoirPrebuilts {
    static imageTextPair(imageUrl, text, orientation=0) {
        let section = new Section("top")
        let leftSet = new Part(1, Math.floor(LenoirAssistant.sections/2) - 1)
        let rightSet = new Part(Math.floor(LenoirAssistant.sections/2) + 1, LenoirAssistant.sections - Math.floor(LenoirAssistant.sections/2) - 2)
        
        if (orientation == 0) {
            leftSet.appendComponent(new Component("image", imageUrl))
            rightSet.appendComponent(new Component("text", text))
        } else {
            rightSet.appendComponent(new Component("image", imageUrl))
            leftSet.appendComponent(new Component("text", text))
        }
        section.appendPart(leftSet)
        section.appendPart(rightSet)
        return section
    }

    static verticalSpacer(height) {
        let section = new Section("top")
        let part = new Part(1, 1)
        part.appendComponent(new Component("spacer", height))
        section.appendPart(part)
        return section
    }

    static header(text, weight=1) {
        let section = new Section()
        let head = new Part(6, 14)
        head.appendComponent(new Component("header", text, weight))
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
}