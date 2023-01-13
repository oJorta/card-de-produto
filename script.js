const icons = document.querySelectorAll('.icon')
const iconRotate = document.querySelector('#icon-360')
const iconX = document.querySelector('#icon-x')
const sofaStatic = document.querySelector('#sofa-estatico')
const sofaAnimated = document.querySelector('#sofa-gif')

const iconsArray = Array.from(icons)

function toggleInvisible(element){
    element.classList.toggle('invisible')
}

iconsArray.forEach(icon => {
    icon.addEventListener('click', ()=>{
        toggleInvisible(iconRotate)
        toggleInvisible(iconX)
        toggleInvisible(sofaStatic)
        toggleInvisible(sofaAnimated)
    })    
});
