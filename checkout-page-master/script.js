let subtotal = 0
let total = 0
let unitaryPrice0 = 54.99
let unitaryPrice1 = 74.99


function loadCheckout() {
    document.getElementById("email").focus()
    loadCompras()
}

function loadCompras() {

    subtotal = sumarPrecios("del")
    total = sumarPrecios("item-price")

    console.log(subtotal)
    console.log(total)

    document.getElementById("subtotal").innerHTML = subtotal
    document.getElementById("total").innerHTML = total



}


function sumarPrecios(s) {
    let suma = 0
    let items = document.getElementsByClassName(s)

    for (let i = 0; i < items.length; i++) {
        let element = items[i]
        let priceStringValue = element.innerHTML.substring(1)
        let priceIntValue = parseFloat(priceStringValue, 10)
            // console.log(priceIntValue)
        suma += parseFloat(priceIntValue, 10)
    }
    return suma
}


//fix this function
function cantidad(s) {

    switch (s) {
        case "0-":

            if (document.getElementsByClassName("item-price")[0].innerHTML == "$0") {
                break;
            }

            let item0 = document.getElementsByClassName("item-price")[0]
            let priceStringValue0 = item0.innerHTML.substring(1)
            let priceIntValue0 = parseFloat(priceStringValue0, 10)
            let newPrice0 = priceIntValue0 - unitaryPrice0

            document.getElementsByClassName("item-price")[0].innerHTML = "$" + newPrice0.toString()

            break;
        case "0+":
            let item1 = document.getElementsByClassName("item-price")[0]
            let priceStringValue1 = item1.innerHTML.substring(1)
            let priceIntValue1 = parseFloat(priceStringValue1, 10)
            let newPrice1 = priceIntValue1 + unitaryPrice0

            document.getElementsByClassName("item-price")[0].innerHTML = "$" + newPrice1.toString()


            break;
        case "1-":
            // let item = document.getElementsByClassName("item-price")[1]


            break;
        case "1+":
            // let item = document.getElementsByClassName("item-price")[1]


            break;
        default:


            break;
    }

}