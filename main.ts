input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D C E C F C G ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
loops.everyInterval(100, function () {
    music.playMelody("C - C - - A G C ", 196)
})
