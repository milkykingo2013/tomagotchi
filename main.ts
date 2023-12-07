input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.showIcon(IconNames.Surprised)
    basic.pause(500)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.showString("hey I was sleeping:[")
    basic.pause(200)
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("wanna go out?")
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showString("ok:]")
    basic.pause(500)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("do you want breakfast?")
    basic.showLeds(`
        # # . # #
        . # . . #
        # # . # #
        . . . . .
        # # # # #
        `)
    basic.showString("ok:[")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showString("ok...")
})
