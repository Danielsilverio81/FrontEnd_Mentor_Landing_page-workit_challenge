const dataMove = document.querySelectorAll('[data-move]');
const animateClass = 'animate';


function getScrollMove() {
    dataMove.forEach(elem => {
        if(elem.getBoundingClientRect().top < window.innerHeight * 3 / 4) {
            elem.classList.add(animateClass)
        } else {
            elem.classList.remove(animateClass)
        }
    })
}

window.addEventListener('scroll', getScrollMove)
