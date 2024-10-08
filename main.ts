input.onButtonPressed(Button.A, function () {
    basic.showNumber(8)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(7)
})
basic.showNumber(7)
basic.pause(200)
basic.showNumber(909)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # . . . #
    . # # # .
    `)
basic.showString("TERRANATOR LA BESTIA MAS SALVAJE DE LA JUNGLA")
basic.forever(function () {
    basic.showNumber(7)
    basic.pause(200)
    basic.showNumber(909)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        . # # # .
        `)
    basic.showString("TERRANATOR LA BESTIA MAS SALVAJE DE LA JUNGLA")
})
