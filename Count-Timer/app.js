let count = 0

let value = document.querySelector('.counter-value')
let btn = document.querySelectorAll('.btn')
btn.forEach(function(btns) {
    btns.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0
        }

        if (count < 0) {
            $('.counter-value').css('color', 'red')
        } else if (count > 0) {
            $('.counter-value').css('color', 'green')
        } else {
            $('.counter-value').css('color', 'black')
        }

        value.textContent = count
    })
})