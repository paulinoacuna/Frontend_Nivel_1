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

    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
    document.getElementById("total").innerHTML = total.toFixed(2)


}


function sumarPrecios(s) {
    let suma = 0
    let items = document.getElementsByClassName(s)

    for (let i = 0; i < items.length; i++) {
        let element = items[i]
        let priceStringValue = element.innerHTML.substring(1)
        let priceIntValue = parseFloat(priceStringValue, 10)
            // console.log(priceIntValue)
        suma += parseFloat(priceIntValue, 10);

    }
    return suma
}


//fix this function
function cantidad(s) {

    switch (s) {
        case "0-":

            if (parseFloat(document.getElementsByClassName("item-price")[0].innerHTML.substring(1), 10) <= 0) {
                break;
            }

            let item0 = document.getElementsByClassName("item-price")[0]
            let priceStringValue0 = item0.innerHTML.substring(1)
            let priceIntValue0 = parseFloat(priceStringValue0, 10)
            let newPrice0 = priceIntValue0 - unitaryPrice0
            newPrice0 = newPrice0.toFixed(2)

            //restar precio de una unidad
            document.getElementsByClassName("item-price")[0].innerHTML = "$" + newPrice0

            //restar unidades
            let unidades0 = document.getElementsByClassName("item-quantity")[0].innerHTML
            document.getElementsByClassName("item-quantity")[0].innerHTML = --unidades0


            break;
        case "0+":


            let item1 = document.getElementsByClassName("item-price")[0]
            let priceStringValue1 = item1.innerHTML.substring(1)
            let priceIntValue1 = parseFloat(priceStringValue1, 10)
            let newPrice1 = priceIntValue1 + unitaryPrice0
            newPrice1 = newPrice1.toFixed(2)

            //sumar precio de una unidad
            document.getElementsByClassName("item-price")[0].innerHTML = "$" + newPrice1

            //aumentar unidades
            let unidades1 = document.getElementsByClassName("item-quantity")[0].innerHTML
            document.getElementsByClassName("item-quantity")[0].innerHTML = ++unidades1



            break;
        case "1-":

            if (parseFloat(document.getElementsByClassName("item-price")[1].innerHTML.substring(1), 10) <= 0) {
                break;
            }

            let item2 = document.getElementsByClassName("item-price")[1]
            let priceStringValue2 = item2.innerHTML.substring(1)
            let priceIntValue2 = parseFloat(priceStringValue2, 10)
            let newPrice2 = priceIntValue2 - unitaryPrice1
            newPrice2 = newPrice2.toFixed(2)

            //restar precio de una unidad   
            document.getElementsByClassName("item-price")[1].innerHTML = "$" + newPrice2

            //restar unidades
            let unidades2 = document.getElementsByClassName("item-quantity")[1].innerHTML
            document.getElementsByClassName("item-quantity")[1].innerHTML = --unidades2

            break;
        case "1+":

            let item3 = document.getElementsByClassName("item-price")[1]
            let priceStringValue3 = item3.innerHTML.substring(1)
            let priceIntValue3 = parseFloat(priceStringValue3, 10)
            let newPrice3 = priceIntValue3 + unitaryPrice1
            newPrice3 = newPrice3.toFixed(2)

            //sumar precio de una unidad
            document.getElementsByClassName("item-price")[1].innerHTML = "$" + newPrice3

            //aumentar unidades
            let unidades3 = document.getElementsByClassName("item-quantity")[1].innerHTML
            document.getElementsByClassName("item-quantity")[1].innerHTML = ++unidades3

            break;
        default:


            break;
    }

    loadCompras()

}


function validarForm() {

    var todoCorrecto = true;

    var formulario = document.formulario;

    for (var i = 0; i < formulario.length; i++) {



        if (formulario[i].type == 'text') {

            if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)) {

                todoCorrecto = false;
            }
        }

    }

    if (todoCorrecto == true) {
        alert("Los datos son validos")
        return true;
    } else {
        alert('Existen campos invalidos, por favor verifique la informacion');
        return false;
    }

}