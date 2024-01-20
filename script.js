const conversorButton = document.querySelector(".botao-conversor")
const selectOne = document.querySelector(".select-one")
const selectTwo = document.querySelector(".select-two")

function convertValues() {
    const myInput = document.querySelector(".my-input").value
    const valueOne = document.querySelector(".value-one")
    const valueTwo = document.querySelector(".value-two")

    const dolarToday = 4.93
    const euroToday = 5.36
    const libraToday = 6.24
    const bitcoinToday = 210598.36
    const francosuiçoToday = 5.71
    const kwanzaToday = 0.0059
    const rubloToday = 0.056
    const rupiaToday = 0.00032
    const ieneToday = 0.033

    // VALORES IGUAIS
    if (selectOne.value === "real" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)
    }

    if (selectOne.value === "dolar" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            // maximumSignificantDigits: 3 (número máximo de casas decimais)
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(myInput)
    }

    if (selectOne.value === "euro" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput)
    }

    if (selectOne.value === "libra" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput)
    }

    if (selectOne.value === "bitcoin" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
        }).format(myInput)
    }

    if (selectOne.value === "francosuiço" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput)
    }

    if (selectOne.value === "kwanza" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput)
    }

    if (selectOne.value === "rublo" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput)
    }

    if (selectOne.value === "rupia" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput)
    }

    if (selectOne.value === "iene" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput)
    }

    // REAL PARA OUTRAS MOEDAS

    // REAL PARA DÓLAR
    if (selectOne.value === "real" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(myInput / dolarToday)
    }

    // DÓLAR PARA REAL
    if (selectOne.value === "dolar" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput * dolarToday)

    }

    // REAL PARA EURO 
    if (selectOne.value === "real" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput / euroToday)
    }

    // EURO PARA REAL
    if (selectOne.value === "euro" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput * euroToday)

    }

    // REAL PARA LIBRA
    if (selectOne.value === "real" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput / libraToday)
    }

    // LIBRA PARA REAL
    if (selectOne.value === "libra" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput * libraToday)

    }

    // REAL PARA BITCOIN
    if (selectOne.value === "real" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput / bitcoinToday)
    }

    // BITCOIN PARA REAL
    if (selectOne.value === "bitcoin" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(myInput * bitcoinToday)

    }

    // REAL PARA FRANCO SUIÇO
    if (selectOne.value === "real" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput / francosuiçoToday)
    }

    //FRANCO SUIÇO PARA REAL
    if (selectOne.value === "francosuiço" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput * francosuiçoToday)

    }

    // REAL PARA KWANZA
    if (selectOne.value === "real" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput / kwanzaToday)
    }

    // KWANZA PARA REAL
    if (selectOne.value === "kwanza" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumSignificantDigits: 5
        }).format(myInput * kwanzaToday)

    }

    // REAL PARA RUBLO
    if (selectOne.value === "real" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput / rubloToday)
    }

    // RUBLO PARA REAL
    if (selectOne.value === "rublo" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumSignificantDigits: 5
        }).format(myInput * rubloToday)

    }

    // REAL PARA RUPIA INDONÉSIA
    if (selectOne.value === "real" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput / rupiaToday)

    }

    // RÚPIA INDONÉSIA PARA REAL
    if (selectOne.value === "rupia" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumSignificantDigits: 5
        }).format(myInput * rupiaToday)

    }

    // REAL PARA IENE
    if (selectOne.value === "real" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput / ieneToday)

    }

    // IENE PARA REAL
    if (selectOne.value === "iene" && selectTwo.value === "real") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumSignificantDigits: 5
        }).format(myInput * ieneToday)

    }

    // DOLAR PARA OUTRAS MOEDAS

    //DOLAR PARA EURO
    if (selectOne.value === "dolar" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput * (dolarToday / euroToday))

    }

    // EURO PARA DOLAR
    if (selectOne.value === "euro" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput * (euroToday / dolarToday))

    }

    // DOLAR PARA LIBRA
    if (selectOne.value === "dolar" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput * (dolarToday / libraToday))

    }

    // LIBRA PARA DOLAR
    if (selectOne.value === "libra" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput * (libraToday / dolarToday))

    }

    // DOLAR PARA BITCOIN 
    if (selectOne.value === "dolar" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (dolarToday / bitcoinToday))

        // DOLAR PARA FRANCO SUIÇO

    }

    // BITCOIN PARA DOLAR

    if (selectOne.value === "bitcoin" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 5
        }).format(myInput * (bitcoinToday / dolarToday))

    }

    // DOLAR PARA FRANCO SUIÇO
    if (selectOne.value === "dolar" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput * (dolarToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA DOLAR
    if (selectOne.value === "francosuiço" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(myInput * (francosuiçoToday / dolarToday))

    }

    // DOLAR PARA KWANZA
    if (selectOne.value === "dolar" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (dolarToday / kwanzaToday))

    }

    // KWANZA PARA DOLAR
    if (selectOne.value === "kwanza" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 5
        }).format(myInput * (kwanzaToday / dolarToday))

    }

    // DOLAR PARA RUBLO
    if (selectOne.value === "dolar" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (dolarToday / rubloToday))

    }

    // RUBLO PARA DOLAR 
    if (selectOne.value === "rublo" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 5
        }).format(myInput * (rubloToday / dolarToday))

    }

    // DOLAR PARA RUPIA INDONESIA 
    if (selectOne.value === "dolar" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (dolarToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA DOLAR
    if (selectOne.value === "rupia" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 5
        }).format(myInput * (rupiaToday / dolarToday))

    }

    // DOLAR PARA IENE
    if (selectOne.value === "dolar" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput * (dolarToday / ieneToday))

    }

    // IENE PARA DOLAR
    if (selectOne.value === "iene" && selectTwo.value === "dolar") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumSignificantDigits: 5
        }).format(myInput * (ieneToday / dolarToday))

    }

    // EURO PARA OUTRAS MOEDAS

    // EURO PARA LIBRA 
    if (selectOne.value === "euro" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput * (euroToday / libraToday))

    }

    // LIBRA PARA EURO 
    if (selectOne.value === "libra" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput * (libraToday / euroToday))

    }

    // EURO PARA BITCOIN
    if (selectOne.value === "euro" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (euroToday / bitcoinToday))

    }

    // BITCOIN PARA EURO 
    if (selectOne.value === "bitcoin" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput * (bitcoinToday / euroToday))

    }

    // EURO PARA FRANCO SUIÇO
    if (selectOne.value === "euro" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput * (euroToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA EURO
    if (selectOne.value === "francosuiço" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
        }).format(myInput * (francosuiçoToday / euroToday))

    }

    // EURO PARA KWANZA
    if (selectOne.value === "euro" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (euroToday / kwanzaToday))

    }

    // KWANZA PARA EURO 
    if (selectOne.value === "kwanza" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
            maximumSignificantDigits: 5
        }).format(myInput * (kwanzaToday / euroToday))

    }

    // EURO PARA RUBLO
    if (selectOne.value === "euro" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (euroToday / rubloToday))

    }

    // RUBLO PARA EURO 
    if (selectOne.value === "rublo" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
            maximumSignificantDigits: 5
        }).format(myInput * (rubloToday / euroToday))

    }

    // EURO PARA RUPIA INDONÉSIA 
    if (selectOne.value === "euro" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (euroToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA EURO 
    if (selectOne.value === "rupia" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
            maximumSignificantDigits: 5
        }).format(myInput * (rupiaToday / euroToday))

    }

    // EURO PARA IENE
    if (selectOne.value === "euro" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput * (euroToday / ieneToday))

    }

    // IENE PARA EURO 
    if (selectOne.value === "iene" && selectTwo.value === "euro") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
            maximumSignificantDigits: 5
        }).format(myInput * (ieneToday / euroToday))

    }

    // LIBRA PARA OUTRAS MOEDAS 

    // LIBRA PARA BITCOIN
    if (selectOne.value === "libra" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (libraToday / bitcoinToday))

    }

    // BITCOIN PARA LIBRA
    if (selectOne.value === "bitcoin" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput * (bitcoinToday / libraToday))

    }

    // LIBRA PARA FRANCO SUIÇO
    if (selectOne.value === "libra" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput * (libraToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA LIBRA
    if (selectOne.value === "francosuiço" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(myInput * (francosuiçoToday / libraToday))

    }

    // LIBRA PARA KWANZA
    if (selectOne.value === "libra" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (libraToday / kwanzaToday))

    }

    // KWANZA PARA LIBRA
    if (selectOne.value === "kwanza" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumSignificantDigits: 5
        }).format(myInput * (kwanzaToday / libraToday))

    }

    // LIBRA PARA RUBLO
    if (selectOne.value === "libra" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (libraToday / rubloToday))

    }

    // RUBLO PARA LIBRA
    if (selectOne.value === "rublo" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumSignificantDigits: 5
        }).format(myInput * (rubloToday / libraToday))

    }

    // LIBRA PARA RUPIA INDONESIA
    if (selectOne.value === "libra" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (libraToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA LIBRA
    if (selectOne.value === "rupia" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumSignificantDigits: 5
        }).format(myInput * (rupiaToday / libraToday))

    }

    // LIBRA PARA IENE 
    if (selectOne.value === "libra" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput * (libraToday / ieneToday))

    }

    // IENE PARA LIBRA
    if (selectOne.value === "iene" && selectTwo.value === "libra") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumSignificantDigits: 5
        }).format(myInput * (ieneToday / libraToday))

    }

    // BITCOIN PARA OUTRAS MOEDAS

    // BITCOIN PARA FRANCO SUIÇO 
    if (selectOne.value === "bitcoin" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
        }).format(myInput * (bitcoinToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA BITCOIN
    if (selectOne.value === "francosuiço" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (francosuiçoToday / bitcoinToday))

    }

    // BITCOIN PARA KWANZA
    if (selectOne.value === "bitcoin" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (bitcoinToday / kwanzaToday))

    }

    // KWANZA PARA BITCOIN
    if (selectOne.value === "kwanza" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (kwanzaToday / bitcoinToday))

    }

    // BITCOIN PARA RUBLO
    if (selectOne.value === "bitcoin" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (bitcoinToday / rubloToday))

    }

    // RUBLO PARA BITCOIN
    if (selectOne.value === "rublo" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (rubloToday / bitcoinToday))

    }

    // BITCOIN PARA RUPIA INDONESIA
    if (selectOne.value === "bitcoin" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (bitcoinToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA BITCOIN
    if (selectOne.value === "rupia" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (rupiaToday / bitcoinToday))

    }

    // BITCOIN PARA IENE
    if (selectOne.value === "bitcoin" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput * (bitcoinToday / ieneToday))

    }

    // IENE PARA BITCOIN
    if (selectOne.value === "iene" && selectTwo.value === "bitcoin") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 5
        }).format(myInput * (ieneToday / bitcoinToday))

    }

    // FRANCO SUIÇO PARA OUTRAS MOEDAS

    //FRANCO SUIÇO PARA KWANZA
    if (selectOne.value === "francosuiço" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (francosuiçoToday / kwanzaToday))

    }

    // KWANZA PARA FRANCO SUIÇO
    if (selectOne.value === "kwanza" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
            maximumSignificantDigits: 5
        }).format(myInput * (kwanzaToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA RUBLO 
    if (selectOne.value === "francosuiço" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (francosuiçoToday / rubloToday))

    }

    // RUBLO PARA FRANCO SUIÇO
    if (selectOne.value === "rublo" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
            maximumSignificantDigits: 5
        }).format(myInput * (rubloToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA RUPIA INDONESIA
    if (selectOne.value === "francosuiço" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (francosuiçoToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA FRANCO SUIÇO
    if (selectOne.value === "rupia" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
            maximumSignificantDigits: 5
        }).format(myInput * (rupiaToday / francosuiçoToday))

    }

    // FRANCO SUIÇO PARA IENE
    if (selectOne.value === "francosuiço" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput * (francosuiçoToday / ieneToday))

    }

    // IENE PARA FRANCO SUIÇO
    if (selectOne.value === "iene" && selectTwo.value === "francosuiço") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("rm-CH", {
            style: "currency",
            currency: "CHF",
            maximumSignificantDigits: 5
        }).format(myInput * (ieneToday / francosuiçoToday))

    }

    // KWANZA PARA OUTRAS MOEDAS

    // KWANZA PARA RUBLO
    if (selectOne.value === "kwanza" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (kwanzaToday / rubloToday))

    }

    // RUBLO PARA KWANZA
    if (selectOne.value === "rublo" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (rubloToday / kwanzaToday))

    }

    // KWANZA PARA RUPIA INDONESIA
    if (selectOne.value === "kwanza" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (kwanzaToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA KWANZA
    if (selectOne.value === "rupia" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (rupiaToday / kwanzaToday))

    }

    // KWANZA PARA IENE
    if (selectOne.value === "kwanza" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            maximumSignificantDigits: 5
        }).format(myInput * (kwanzaToday / ieneToday))

    }

    // IENE PARA KWANZA
    if (selectOne.value === "iene" && selectTwo.value === "kwanza") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("pt-AO", {
            style: "currency",
            currency: "AOA",
        }).format(myInput * (ieneToday / kwanzaToday))

    }

    // RUBLO PARA OUTRAS MOEDAS

    // RUBLO PARA RUPIA INDONESIA
    if (selectOne.value === "rublo" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (rubloToday / rupiaToday))

    }

    // RUPIA INDONESIA PARA RUBLO
    if (selectOne.value === "rupia" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (rupiaToday / rubloToday))

    }

    // RUBLO PARA IENE
    if (selectOne.value === "rublo" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(myInput * (rubloToday / ieneToday))

    }

    // IENE PARA RUBLO
    if (selectOne.value === "iene" && selectTwo.value === "rublo") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
        }).format(myInput * (ieneToday / rubloToday))

    }

    // RUPIA INDONESIA PARA OUTRAS MOEDAS

    // RUPIA INDONESIA PARA IENE
    if (selectOne.value === "rupia" && selectTwo.value === "iene") {

        valueOne.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            maximumSignificantDigits: 5
        }).format(myInput * (rupiaToday / ieneToday))

    }

    // IENE PARA RUPIA INDONESIA
    if (selectOne.value === "iene" && selectTwo.value === "rupia") {

        valueOne.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(myInput)

        valueTwo.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(myInput * (ieneToday / rupiaToday))

    }
}


function changeOne() {
    const nameOne = document.querySelector(".currency-name-one")
    const imgOne = document.querySelector(".image-one")

    if (selectOne.value === "real") {
        nameOne.innerHTML = "Real"
        imgOne.src = "./img/real.png"
    }

    if (selectOne.value === "dolar") {
        nameOne.innerHTML = "Dólar"
        imgOne.src = "./img/dollar.png"
    }

    if (selectOne.value === "euro") {
        nameOne.innerHTML = "Euro"
        imgOne.src = "./img/euro.png"
    }

    if (selectOne.value === "libra") {
        nameOne.innerHTML = "Libra"
        imgOne.src = "./img/libra.png"
    }

    if (selectOne.value === "bitcoin") {
        nameOne.innerHTML = "BitCoin"
        imgOne.src = "./img/bitcoin.png"
    }

    if (selectOne.value === "francosuiço") {
        nameOne.innerHTML = "Franco Suiço"
        imgOne.src = "./img/franco-suiço.png"
    }

    if (selectOne.value === "kwanza") {
        nameOne.innerHTML = "Kwanza"
        imgOne.src = "./img/kwanza.png"
    }

    if (selectOne.value === "rublo") {
        nameOne.innerHTML = "Rublo"
        imgOne.src = "./img/rublo.png"
    }

    if (selectOne.value === "rupia") {
        nameOne.innerHTML = "Rúpia Indonésia"
        imgOne.src = "./img/rupia-indonesia.png"
    }

    if (selectOne.value === "iene") {
        nameOne.innerHTML = "Iene"
        imgOne.src = "./img/yen.png"
    }

    convertValues()
}

function changeTwo() {
    const nameTwo = document.querySelector(".currency-name-two")
    const imgTwo = document.querySelector(".image-two")

    if (selectTwo.value === "real") {
        nameTwo.innerHTML = "Real"
        imgTwo.src = "./img/real.png"
    }

    if (selectTwo.value === "dolar") {
        nameTwo.innerHTML = "Dólar"
        imgTwo.src = "./img/dollar.png"
    }

    if (selectTwo.value === "euro") {
        nameTwo.innerHTML = "Euro"
        imgTwo.src = "./img/euro.png"
    }

    if (selectTwo.value === "libra") {
        nameTwo.innerHTML = "Libra"
        imgTwo.src = "./img/libra.png"
    }

    if (selectTwo.value === "bitcoin") {
        nameTwo.innerHTML = "BitCoin"
        imgTwo.src = "./img/bitcoin.png"
    }

    if (selectTwo.value === "francosuiço") {
        nameTwo.innerHTML = "Franco Suiço"
        imgTwo.src = "./img/franco-suiço.png"
    }

    if (selectTwo.value === "kwanza") {
        nameTwo.innerHTML = "Kwanza"
        imgTwo.src = "./img/kwanza.png"
    }

    if (selectTwo.value === "rublo") {
        nameTwo.innerHTML = "Rublo"
        imgTwo.src = "./img/rublo.png"
    }

    if (selectTwo.value === "rupia") {
        nameTwo.innerHTML = "Rúpia Indonésia"
        imgTwo.src = "./img/rupia-indonesia.png"
    }

    if (selectTwo.value === "iene") {
        nameTwo.innerHTML = "Iene"
        imgTwo.src = "./img/yen.png"
    }

    convertValues()
}

conversorButton.addEventListener("click", convertValues)
selectOne.addEventListener("change", changeOne)
selectTwo.addEventListener("change", changeTwo)