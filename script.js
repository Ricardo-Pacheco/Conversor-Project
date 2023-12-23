const conversorButton = document.querySelector(".botao-conversor") // mapear botão
const selectOne = document.querySelector(".select-one") //mapear primeiro select
const selectTwo = document.querySelector(".select-two") // mapear segundo select

function convertValues() { // converter valores 
    const meuInput = document.querySelector(".meu-input").value // pegar valor do input
    const valueOne = document.querySelector(".value-one") // valor a ser convertido
    const valueTwo = document.querySelector(".value-two") // valor convertido   

    const dolarToday = 4.89 // valor do dolar atual
    const euroToday = 5.39 //valor do euro atual
    const libraToday = 6.21 //valor da libra atual

    // VALORES IGUAIS:

    if (selectOne.value === "real" && selectTwo.value === "real") { // real to real

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)
    }

    if (selectOne.value === "dolar" && selectTwo.value === "dolar") { // dolar to dolar

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)
    }

    if (selectOne.value === "euro" && selectTwo.value === "euro") { // euro to euro

        valueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput)
    }

    if (selectOne.value === "libra" && selectTwo.value === "libra") { // libra to libra

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput)
    }

    // REAL PARA OUTROS VALORES:

    // real para dolar

    if (selectOne.value === "real" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput / dolarToday)
    }

    if (selectOne.value === "dolar" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput * dolarToday)
    }

    // REAL PARA EURO 

    if (selectOne.value === "real" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput / euroToday)
    }

    if (selectOne.value === "euro" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput * euroToday)
    }

    // REAL PARA LIBRA 

    if (selectOne.value === "real" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput / libraToday)
    }

    if (selectOne.value === "libra" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(meuInput * libraToday)
    }

    // DOLAR PARA OUTROS VALORES 

    // DOLAR PRA EURO 

    if (selectOne.value === "dolar" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput * (dolarToday / euroToday))
    }

    if (selectOne.value === "euro" && selectTwo.value === "dolar") { // EURO PARA DOLAR

        valueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput * (euroToday / dolarToday))
    }

    if (selectOne.value === "dolar" && selectTwo.value === "libra") { // DOLAR PARA LIBRA

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput * (dolarToday / libraToday))
    }

    if (selectOne.value === "libra" && selectTwo.value === "dolar") { // LIBRA PARA DOLAR

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(meuInput * (libraToday / dolarToday))
    }

    // EURO PARA OUTROS VALORES

    // EURO PRA LIBRA: 

    if (selectOne.value === "euro" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput * (euroToday / libraToday))
    }

    if (selectOne.value === "libra" && selectTwo.value === "euro") { // LIBRA PARA EURO

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(meuInput)

        valueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(meuInput * (libraToday / euroToday))
    }
}

function changeCurrencyOne() {
    const currencyNameOne = document.querySelector(".currency-name-one")
    const currencyImageOne = document.querySelector(".image-one")

    if (selectOne.value === "real") {
        currencyNameOne.innerHTML = "Real Brasileiro"
        currencyImageOne.src = "./assets/real.png"
    }

    if (selectOne.value === "dolar") {
        currencyNameOne.innerHTML = "Dolar Americano"
        currencyImageOne.src = "./assets/dollar.png"
    }

    if (selectOne.value === "euro") {
        currencyNameOne.innerHTML = "Euro"
        currencyImageOne.src = "./assets/euro.png"
    }

    if (selectOne.value === "libra") {
        currencyNameOne.innerHTML = "Libra"
        currencyImageOne.src = "./assets/libra.png"
    }

    convertValues()
}

function changeCurrencyTwo() {
    const currencyNameTwo = document.querySelector(".currency-name-two")
    const currencyImageTwo = document.querySelector(".image-two")

    if (selectTwo.value === "real") {
        currencyNameTwo.innerHTML = "Real Brasileiro"
        currencyImageTwo.src = "./assets/real.png"
    }

    if (selectTwo.value === "dolar") {
        currencyNameTwo.innerHTML = "Dolar Americano"
        currencyImageTwo.src = "./assets/dollar.png"
    }

    if (selectTwo.value === "euro") {
        currencyNameTwo.innerHTML = "Euro"
        currencyImageTwo.src = "./assets/euro.png"
    }

    if (selectTwo.value === "libra") {
        currencyNameTwo.innerHTML = "Libra"
        currencyImageTwo.src = "./assets/libra.png"
    }

    convertValues()
}

conversorButton.addEventListener("click", convertValues)
selectOne.addEventListener("change", changeCurrencyOne)
selectTwo.addEventListener("change", changeCurrencyTwo)