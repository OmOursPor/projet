var menuBar = document.querySelector("#menuBar")
var childMenu = menuBar.children

var nav = document.querySelector(".nav-bar")
nav.children[2].style.display = 'none'

var body = document.querySelector("body")

var crea = document.querySelector(".creation-nav")
var pcrea = crea.children[1]
var deroulant = document.querySelector(".deroulant")

var onResize = function () {

    if (window.innerWidth <= "936") {
        console.log(window.innerWidth)
        for (var i = 0; i < childMenu.length; i++) {
            childMenu[i].style.display = "none"
        }
        nav.children[2].style.display = 'block'
    } else {
        for (var i = 0; i < childMenu.length; i++) {
            childMenu[i].style.display = "inline"
        }
        nav.children[2].style.display = 'none'
    }
    if (window.innerWidth <= "807") {
        var len = crea.parentElement.children.length
        crea.children[1].style.display = 'none'
        if (len == 2) {
            var see = crea.children[1].cloneNode(true)
            see.style.marginTop = '40px'
            crea.parentElement.appendChild(see)
            // crea.children[1].style.display = 'none'
        } else {
            crea.parentElement.lastChild.style.display = 'block'
        }

    } else {
        crea.children[1].style.display = 'block'
        if (crea.parentElement.children.length == "3") {
            crea.parentElement.lastChild.style.display = 'none'
        }
    }
}
var onMenu = function () {
    for (var i = 0; i < body.children.length; i++) {
        body.children[i].style.display = 'none'
    }
    deroulant.style.display = 'block'
}
var onClose = function () {
    console.log('deroulant')
    for (var i = 0; i < body.children.length; i++) {
        body.children[i].style.display = 'block'
    }
    deroulant.style.display = 'none'
}
onResize()
window.addEventListener('resize', onResize)
nav.children[2].addEventListener('click', onMenu)
deroulant.children[1].addEventListener('click', onClose)
console.log(deroulant.children[1])
