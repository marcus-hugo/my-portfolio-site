
const body = document.querySelector('body')
const toggleBtn = document.querySelector('.button-toggle--theme-light')
const allBtns = document.querySelectorAll('.button')
const allPs = document.querySelectorAll('p')
let darkMode = localStorage.getItem('darkMode')

if (darkMode === 'false') {
    
    toggleBtn.classList.contains('light') ? 
    toggleBtn.innerText = 'Light' : 
    toggleBtn.innerText = "Dark"

    body.classList.add('light')
    for (let b of allBtns) {
        b.classList.add('light')
    }

    for (let p of allPs) {
        p.classList.add('light')
    }

   
} else {

    body.classList.remove('light')
    for (let b of allBtns) {
        b.classList.remove('light')
    }

    for (let p of allPs) {
        p.classList.remove('light')
    }

  
}

toggleBtn.addEventListener('click', () => {
    
    body.classList.toggle('light')

    toggleBtn.classList.contains('light') ? 
    toggleBtn.innerText = 'Light' : 
    toggleBtn.innerText = "Dark"

    for (let b of allBtns) {
        b.classList.toggle('light')
    }

    for (let p of allPs) {
        p.classList.toggle('light')
    }

    if (body.classList.contains('light')) {
        localStorage.setItem('darkMode', 'false')
    } else {
        localStorage.setItem('darkMode', 'true')
    }
})
