const images = ['img/phones.png', 'img/USSR.svg', 'img/Lapa.svg']
let currentImage = 0
let phones = document.querySelector('.phones')
const imageNode = phones.querySelector('img')
const dotNodes = phones.querySelectorAll('li')

dotNodes.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
        imageNode.classList.add('transparent')
        dotNodes.forEach(function (el) {
            el.classList.remove('active-point')
        })
        dot.classList.add('active-point')

        setTimeout(function () {
            imageNode.src = images[i]
            currentImage = i
            imageNode.classList.remove('transparent')
        })
    })
})