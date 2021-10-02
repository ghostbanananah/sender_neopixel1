radio.onReceivedNumber(function (receivedNumber) {
    program = receivedNumber
    basic.showNumber(program)
})
input.onButtonPressed(Button.A, function () {
    if (program < 11) {
        program += 1
        radio.sendNumber(program)
        basic.showNumber(program)
    }
})
input.onButtonPressed(Button.B, function () {
    if (program >= 1) {
        program += -1
        radio.sendNumber(program)
        basic.showNumber(program)
    }
})
let program = 0
program = 0
radio.setGroup(42)
basic.showNumber(program)
basic.forever(function () {
	
})
