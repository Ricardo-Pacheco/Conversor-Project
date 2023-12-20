const botao = document.querySelector(".botao-conversor") // mapear o botão 
const currencySelect = document.querySelector(".currency-selector") // mapear o select

function convertValues(){ //função para converter os valores
    const inputCurrencyValue = document.querySelector(".input-currency").value // pegar o valor do input
    const currencyValueToConvert = document.querySelector(".dark-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".dark") // Valor convertido

    const dolarToday = 4.87
    const euroToday = 5.34
    const libraToday = 6.17 
    const bitCoinToday = 214.53519  

    if(currencySelect.value == "dolar"){ 
        // se estiver selecionado  o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){ 
        // se estiver selecionado  o valor de euro, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue / bitCoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolár Americano"
        currencyImage.src = "./assets/dollar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
botao.addEventListener("click", convertValues)