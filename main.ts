input.onButtonPressed(Button.A, function () {
    if (STATO == 0) {
        STATO = 2
        basic.showString("Via!")
    } else {
        if (STATO == 2) {
            STATO = 1
            basic.showString("Pronti")
        } else {
            STATO = 0
            basic.showString("Partenza")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (STATO == 0) {
        STATO = 1
        basic.showString("Partenza")
    } else {
        if (STATO == 1) {
            STATO = 2
            basic.showString("Via!")
        } else {
            STATO = 0
            basic.showString("Pronti")
        }
    }
})
let STATO = 0
STATO = 0
basic.showString("Pronti")
