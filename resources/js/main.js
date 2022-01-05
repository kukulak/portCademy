console.log('hell to start')

const imgMorris = document.getElementById('imgMorris')
const imgAhorra = document.getElementById('imgAhorra')

console.log(imgMorris)
imgMorris.onmouseover = function(event){imgMorris.style.opacity='0.02'} 
imgMorris.onmouseout = function(event){imgMorris.style.opacity='1'} 

imgAhorra.onmouseover = function(event){imgAhorra.style.opacity='0.02'} 
imgAhorra.onmouseout = function(event){imgAhorra.style.opacity='1'} 


// imgMorris.onmouseover = function(event){imgMorris.style.marginTop='100px'} 
