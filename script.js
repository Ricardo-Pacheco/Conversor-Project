const botao = document.querySelector(".botao-conversor")
const currencySelect = document.querySelector(".currency-selector")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".dark-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".dark") // outras moedas

    const dolarToday = 4.87
    const euroToday = 5.34

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

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
botao.addEventListener("click", convertValues)