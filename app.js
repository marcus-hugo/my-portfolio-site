
const body = document.querySelector('body')
const toggleBtn = document.querySelector('.button-toggle--theme-light')
const allBtns = document.querySelectorAll('.button')
const allPs = document.querySelectorAll('p')

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
})
