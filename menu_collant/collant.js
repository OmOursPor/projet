var buttonMenu = document.querySelector(".button-menu")
var buttonrect = buttonMenu.getBoundingClientRect()
var buttonTop = buttonrect.y
var buttonWidth = buttonrect.width
var buttonHeight = buttonrect.height

var headerP = document.querySelector("header p")
var headerHeight = headerP.clientHeight
var windowHeight

var onScroll = function () {
    var windowHeight = window.scrollY
    if(headerHeight <= windowHeight && buttonMenu.style.position != "fixed"){
        buttonMenu.style.position = "fixed"
        buttonMenu.style.top = '0'
        buttonMenu.style.width = buttonWidth + "px"
        headerP.style.marginBottom = buttonTop + "px"
    }else if(headerHeight >= windowHeight && buttonMenu.style.position != "relative"){
        buttonMenu.style.position = "relative"
        headerP.style.marginBottom = "0px"
    }
    // nav
    if(pHeight <= windowHeight && windowHeight < limite) {
        console.log(('1'))
        navP.style.position = "fixed"
        droite.style.display = 'block'
        navP.style.top = (buttonHeight + 5) + 'px'
        navP.style.left = pLeft + 'px'
        navP.style.width = pWidth + 'px'
    }else if(windowHeight > limite && droite.style.display != 'flex'){  
        console.log(('2'))
        navP.style.position = "relative"
        droite.style.display = 'flex'
        droite.style.justifyContent = 'flexEnd'
        navP.style.left = 0
        navP.style.top = 0
    }
    else if(pHeight >= windowHeight){
        console.log(('3'))
        navP.style.position = "relative"
        droite.style.display = 'block'
        navP.style.width = 'auto'
        navP.style.top = 0
        navP.style.left = 0
    }
}

var onResize = function() {
    buttonMenu.style.width = "auto"
    buttonMenu.style.position = "relative"
    headerP.style.marginBottom = "0px"
    buttonrect = buttonMenu.getBoundingClientRect()
    buttonTop = buttonrect.y
    buttonWidth = buttonrect.width

    headerP = document.querySelector("header p")
    headerHeight = headerP.clientHeight
    onScroll()
}

// nav collant
var navP = document.querySelector('#pCollant')
var pRect = navP.getBoundingClientRect()
var pHeight = pRect.y - buttonHeight - 10
var pLeft = pRect.x
var pTop = pRect.top
var pWidth = pRect.width

//limite
var droite = navP.parentElement
var droiteRect = droite.getBoundingClientRect()
var droiteBottom = droiteRect.bottom
var limite = droiteRect.bottom - pRect.height - buttonHeight


// listenner
window.addEventListener('scroll', onScroll)
window.addEventListener('resize', onResize)