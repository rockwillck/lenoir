// HOME
function home() {
    let headingContent = new Section()
    let title = new Part(3, 2)
    title.appendComponent(new Component("header", "Lenoir", 1))
    title.appendComponent(new Component("text", "The Easy Site Maker"))
    headingContent.appendPart(title)
    headingContent.compile()

    let backgroundImgSrc = "https://images.unsplash.com/photo-1564730465543-e732e7fc9c10?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let landing = new Page(headingContent, "hero", backgroundImgSrc, 0.5, 0)

    // LenoirExtensions.applyModifier("blur", backgroundImgSrc)
    //     .then(dataURL => {
    //         landing.updateBannerImg(dataURL)
    //     }) 
    //     .catch(error => {
    //         console.error(error);
    //     });

    let firstSection = new Section()
    let head1 = new Part(1, 6)
    head1.appendComponent(new Component("spacer", 30))
    head1.appendComponent(new Component("header", "Sites Made Simple", 2))
    head1.appendComponent(new Component("spacer", 30))
    firstSection.appendPart(head1)
    firstSection.compile()
    landing.appendSection(firstSection)
    Lenoir.registerPage("Home", landing, "index.html")
}
home()

// ABOUT
function about() {
    let headingContent = new Section()
    let title = new Part(3, 2)
    title.appendComponent(new Component("header", "About Us", 1))
    title.appendComponent(new Component("text", "The Team Behind Lenoir"))
    headingContent.appendPart(title)
    headingContent.compile()

    let backgroundImgSrc = "https://images.unsplash.com/photo-1564730465543-e732e7fc9c10?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let landing = new Page(headingContent, "hero", backgroundImgSrc, 0.5, 0)

    // LenoirExtensions.applyModifier("blur", backgroundImgSrc)
    //     .then(dataURL => {
    //         landing.updateBannerImg(dataURL)
    //     }) 
    //     .catch(error => {
    //         console.error(error);
    //     });

    let firstSection = new Section()
    let head1 = new Part(1, 6)
    head1.appendComponent(new Component("spacer", 30))
    head1.appendComponent(new Component("header", "Our Story", 2))
    head1.appendComponent(new Component("spacer", 30))
    firstSection.appendPart(head1)
    firstSection.compile()
    landing.appendSection(firstSection)
    Lenoir.registerPage("About Us", landing, "about.html")
}
about()

Lenoir.load("Lenoir")
Lenoir.bake()