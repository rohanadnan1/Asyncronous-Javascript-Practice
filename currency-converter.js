async function currencyConverter(fromCurrency, toCurrency, amount) {
    let url = await fetch(`https://v6.exchangerate-api.com/v6/3d13279b94a6774ef36c7ec3/latest/USD`)
    let data = await url.json()
    to = data.conversion_rates[toCurrency]
    from = data.conversion_rates[fromCurrency]
    let total = (to / from) * amount
    console.log(`${amount} ${fromCurrency} = ${total.toFixed(2)} ${toCurrency}`)
}

currencyConverter('INR', 'PKR', 100)