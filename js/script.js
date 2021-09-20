/*  
Project Name: Auto Text Effect with Controller
Description: Auto Text Effect to use in your hero, banner or on the website anywhere you want. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const title = document.getElementById('title')
const titleText = 'Auto Text Effect with Controller'
const textEl = document.getElementById('textEffect')
const speedEl = document.getElementById('speed')
const textEffect = 'We Love Programming, Do You?'
const play = document.getElementById('play')
const stop = document.getElementById('stop')

let idx = 1
let speed = 300 / speedEl.value
let getTimeout

writeText ()

function writeText() {
    textEl.innerText = textEffect.slice(0, idx)
    title.innerText = titleText.slice(0, idx)
    idx++

    if (idx > textEffect.length || idx > titleText.length) {
        idx = 1
    }

    getTimeout = setTimeout(writeText, speed)
    
}

// Input Number
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

// Play Button
play.addEventListener('click', () => setTimeout(writeText, speed))

// Stop Button
stop.addEventListener('click', () => clearTimeout(getTimeout))
