Lenoir.setSections(26)

// HOME
function home() {
    let headingContent = new Section()
    let title = new Part(12, 2)
    title.appendComponent(new Component("header", "Lenoir", 1))
    title.appendComponent(new Component("text", "The Easy Site Maker"))
    headingContent.appendPart(title)
    headingContent.compile()

    let backgroundImgSrc = "https://images.unsplash.com/photo-1564730465543-e732e7fc9c10?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    ultra(landing, LenoirPrebuilts.link("https://github.com/rockwillck/Lenoir", "https://github.com/rockwillck/Lenoir"))
    ultra(landing, LenoirPrebuilts.verticalSpacer(50))

    Lenoir.registerPage("Home", landing, "index.html")
}
home()

Lenoir.load("Lenoir")