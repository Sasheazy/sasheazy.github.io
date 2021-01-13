function setHeight () {
  document.querySelector('.content').style.height = window.innerWidth <= 768
    ? window.innerHeight + 'px'
    : 'auto'
}
setHeight()
window.addEventListener('resize', setHeight)
