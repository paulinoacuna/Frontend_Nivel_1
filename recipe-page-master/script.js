if (window.screen.width < 976) {
    let vector = document.getElementById("svg1")
    vector.setAttribute("width", "60")

}

function validar() {
    var check1 = document.getElementById("1").checked
    var check2 = document.getElementById("2").checked
    var check3 = document.getElementById("3").checked

    if (check1 && check2 && check3) {
        alert("Genial, Tienes los ingredientes completos!")
    }
}

function validar2() {
    var check4 = document.getElementById("4").checked
    var check5 = document.getElementById("5").checked
    var check6 = document.getElementById("6").checked
    var check7 = document.getElementById("7").checked
    var check8 = document.getElementById("8").checked
    var check9 = document.getElementById("9").checked
    var check10 = document.getElementById("10").checked

    if (check4 && check5 && check6 && check7 && check8 && check9 && check10) {
        alert("Genial, Tienes los ingredientes completos!")
    }

}