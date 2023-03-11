let bank = document.querySelector('.bank')
let number = document.querySelector('.number')
let lename = document.querySelector('.name')
let date = document.querySelector('.date')
let paymentSys = document.querySelector('.payment')

let card = document.querySelector('.card')

let elBanko = document.querySelector('.elBanko')
let elNumero = document.querySelector('.elNumero')
let elNombre = document.querySelector('.elNombre')
let elFecha = document.querySelector('.elFecha')
let elSisDePago = document.querySelector('.elSisDePago')
let cards = document.querySelector('.cards')
let cardElements;

let img

bank.addEventListener("input", (e) => {
    elBanko.textContent = e.target.value
    img = elBanko.textContent
    switch(img){
        case "Сбербанк":
            img = "https://designnews.ru/upload/information_system_35/1/4/9/item_1491/sber-designnews-ru.jpg"
                break;
        case "ВТБ":
            img = "https://cdn.dribbble.com/users/6823216/screenshots/15106872/vtb_bank_logo_redesign.jpg"
                break;
        case "Альфабанк":
            img = "https://alfabank.ru/f/media/logo-ogp.png"
            break;
        case "Tinkoff":
            img = "https://3dnews.ru/assets/external/illustrations/2022/05/23/1066465/636.png"
                break;
        case "QIWI":
            img = "https://oborot.ru/wp-content/uploads/2022/12/qiwi-logotip-1024x683.jpg"
            break;
            
        case "QIWI":
            img = "https://oborot.ru/wp-content/uploads/2022/12/qiwi-logotip-1024x683.jpg"
            break;
            

    }
    card.style.backgroundImage = `url(${img})`
})

let imgSys
paymentSys.addEventListener("input", (e) => {
    imgSys = e.target.value
    switch(imgSys){
        case "VISA":
            imgSys = "https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png"
                break;
        case "Mastercard":
            imgSys = "https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                break;
        case "Мир":
            imgSys = "https://rg.ru/uploads/images/196/13/69/Bez_imeni-1.jpg"
            break
    }
    elSisDePago.style.backgroundImage = `url(${imgSys})`
})

number.addEventListener("input", (e) => {
    elNumero.textContent = e.target.value
})

lename.addEventListener("input", (e) => {
    elNombre.textContent = e.target.value
})

date.addEventListener("input", (e) => {
    elFecha.textContent = e.target.value
}) 

form = document.querySelector(".cardInf")

form.addEventListener("reset", ()=>{
    card.style.backgroundImage = ''
    elBanko.textContent = ''
    elFecha.textContent = ''
    elNombre.textContent = ''
    elSisDePago.textContent = ''
    elNumero.textContent = ''
})


form.addEventListener('submit', e => {
    e.preventDefault()
    let arr = []
    for(let i = 0; i < form.elements.length; i++){
        let el = form.elements[i].value
        arr.push(el)
    }
    cards.innerHTML += `
    <div class="card" style="background-image: url(${img});">
    <div class="elBanko">${arr[0]}</div>
    <div class="elNumero">${arr[1]}</div>
    <div class="elNombre">${arr[2]}</div>
    <div class="elFecha">${arr[3]}</div>
    <div class="elSisDePago"  style="background-image: url(${imgSys})"></div>
    </div>
    `

    elBanko.textContent = e.target.value
    elNumero.textContent = e.target.value
    elNombre.textContent = e.target.value
    elFecha.textContent = e.target.value
    elSisDePago.textContent = e.target.value
    card.style.backgroundImage = `none`
})