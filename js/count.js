let buy = document.querySelectorAll('.plus')
let sell = document.querySelectorAll('.minus')
let money = document.querySelector('.count')


buy.forEach((button) => {
    button.addEventListener('click', () => {
        let inpt = button.parentElement.querySelector('.count')
        let soni = parseInt(inpt.value)
        inpt.value = soni + 1
    })
})

sell.forEach((button) => {
    button.addEventListener('click', () => {
        let inpt = button.parentElement.querySelector('.count')
        let soni = parseInt(inpt.value)
        if (soni > 0) {
            inpt.value = soni - 1
        }
    })
})