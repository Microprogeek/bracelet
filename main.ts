input.onButtonPressed(Button.A, function () {
    basic.showNumber(temperatura)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pasos_recibidos)
})
radio.onReceivedValue(function (name, value) {
    if (name == "temp") {
        temperatura = value
    } else if (name == "pasos") {
        pasos_recibidos = value
    }
})
let temperatura = 0
let pasos_recibidos = 0
radio.setGroup(3)
pasos_recibidos = 0
temperatura = 0
let minutos = 0
basic.forever(function () {
    basic.pause(6000)
    minutos += 1
    if (minutos == 15) {
        basic.showString("BEBER AGUA")
        minutos = 0
    }
})
basic.forever(function () {
    if (pasos_recibidos >= 100) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
