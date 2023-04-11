let prices = document.querySelectorAll('button')
let span = document.querySelector('.text')
let start = span.innerHTML

prices.forEach(price => {
    price.onclick = () => {
        let key = price.getAttribute('data-price')

        span.innerHTML = +start + +key
    }
})