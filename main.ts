let h = 0
let m = 0
let s = 0
input.onButtonPressed(Button.A, function () {
    if (h < 23) {
        h += 1
    } else {
        h = 0
    }
    basic.showNumber(h)
})
input.onButtonPressed(Button.AB, function () {
    h = 0
    m = 0
    s = 0
})
input.onButtonPressed(Button.B, function () {
    if (m < 59) {
        m += 1
    } else {
        h = 0
    }
    basic.showNumber(m)
})
