'use strict'
// NAV BAR
function onClickNavBtn(el) {
    var elLinks = $('[href="#"]')
    elLinks.removeClass('active');
    elLinks.parent().removeClass('active');
    el.classList.toggle('active');
    el.childNodes[0].classList.toggle('active');
}
// CONTINUE READING HOVER
function onMouseOver(elBtn) {
    $(elBtn).children().attr("style", "display:show;")
}
function onMouseOut(elBtn) {
    $(elBtn).children().attr("style", "display:none;")
}
// NAVBAR
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

// read more modal
function toggleModal(){
    document.body.classList.toggle('modal-open');
}