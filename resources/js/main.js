console.log('hell to start')

const imgMorris = document.getElementById('imgMorris')
const imgAhorra = document.getElementById('imgAhorra')
const about = document.getElementById('about')
const projects = document.getElementById('projects')
const skills = document.getElementById('skils')
const contact = document.getElementById('contact')

let menu = document.getElementsByClassName('menuItem')
console.log(menu)
let menuArray = Array.from(menu)

const menuChanges = () => {
    menuArray.forEach(element => {
        document.getElementById(element.innerHTML.toLowerCase()).style.gridRowStart = 1
        element.onclick = menuChanges()
    });
}



imgMorris.onmouseover = function(event){imgMorris.style.opacity='0.02'} 
imgMorris.onmouseout = function(event){imgMorris.style.opacity='1'} 

imgAhorra.onmouseover = function(event){imgAhorra.style.opacity='0.02'} 
imgAhorra.onmouseout = function(event){imgAhorra.style.opacity='1'} 


