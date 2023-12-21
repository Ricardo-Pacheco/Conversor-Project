const conversorButton = document.querySelector(".botao-conversor") // botão
const currencySelect = document.querySelector(".currency-select") // moeda a ser conertida
const convertedSelect = document.querySelector(".converted-select") // moeda na qual converter 


function convertButton() {     // função para converter
    const meuInput = document.querySelector(".input-currency").value // pegar o valor do input
    const valueToConvert = document.querySelector(".dark-to-convert") // valor a ser convertido
    const valueConverted = document.querySelector(".dark") // valor convertido 


    const dolarToday = 4.87
    const realToday = 0.21


    if (currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)

    }

    if (currencySelect.value == "dolar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)
    }
    
    if (convertedSelect.value == "brasil") {

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)
    }

    if (convertedSelect.value == "americano") {

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)
    }

}

function changeConvertedSelect() {
    const currencyImg = document.querySelector(".currency-img")
    const currencyName1 = document.querySelector("#currency-name")

    if (convertedSelect.value == "brasil") {
        currencyName1.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    if (convertedSelect.value == "americano") {
        currencyName1.innerHTML = "Dólar"
        currencyImg.src = "./assets/dollar.png"
    }

    convertButton()
}

function changeSelectCurrency() {
    const currencyImage = document.querySelector("#currency-image")
    const currencyName = document.querySelector("#currencyname")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dollar.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertButton()
}

conversorButton.addEventListener("click", convertButton)
convertedSelect.addEventListener("change", changeConvertedSelect)
currencySelect.addEventListener("change", changeSelectCurrency)