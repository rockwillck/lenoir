function text(inner) {
    let p = document.createElement("p")
    p.innerText = inner[0]
    p.style.color = inner.length > 1 ? inner[1] : "inherit"
    return p
}
LenoirExtensions.registerComponentType("text", text)

function heading(contents) {
    let h = document.createElement(`h${contents[1]}`)
    h.innerText = contents[0]
    return h
}
LenoirExtensions.registerComponentType("header", heading)

function spacing(height) {
    let s = document.createElement("div")
    s.style.height = `${height}px`
    return s
}
LenoirExtensions.registerComponentType("spacer", spacing)