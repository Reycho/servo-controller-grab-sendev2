let truecompass = 0
radio.setGroup(42)
basic.forever(function () {
    truecompass = input.compassHeading()
    serial.writeValue("d", input.compassHeading())
    led.toggle(4, 4)
    basic.pause(30)
    if (input.compassHeading() <= 360 && input.compassHeading() >= 270) {
        truecompass = 0
    } else if (input.compassHeading() <= 270 && input.compassHeading() >= 180) {
        truecompass = 180
    }
    radio.sendValue("name", truecompass)
})
