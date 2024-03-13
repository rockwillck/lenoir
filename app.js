Lenoir.setSections(26)

// HOME
function home() {
    let headingContent = new Section()
    let title = new Part(12, 2)
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

Lenoir.load("Lenoir")
// Lenoir.bake("Lenoir")