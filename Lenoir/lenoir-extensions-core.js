function text(inner) {
    let p = document.createElement("p")
    p.innerText = inner[0]
    p.className = inner.length > 1 ? inner[1] : "left"
    p.style.color = inner.length > 2 ? inner[2] : "inherit"
    return p
}
LenoirExtensions.registerComponentType("text", text)

function heading(contents) {
    let h = document.createElement(`h${contents[1]}`)
    h.innerText = contents[0]
    h.className = contents.length > 2 ? contents[2] : "center"
    return h
}
LenoirExtensions.registerComponentType("header", heading)

function spacing(height) {
    let s = document.createElement("div")
    s.style.height = `${height[0]}px`
    return s
}
LenoirExtensions.registerComponentType("spacer", spacing)

function image(src) {
    let i = document.createElement("img")
    i.src = src[0]
    i.style.width = "100%"
    return i
}
LenoirExtensions.registerComponentType("image", image)