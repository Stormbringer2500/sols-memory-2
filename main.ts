let status = 0
function box3() {
    
}

function moveForward(time: number) {
    iBIT.Motor2(ibitMotor.Forward, 47, 41)
    basic.pause(time)
}

function turnright(time2: number) {
    stop()
    iBIT.Spin(ibitSpin.Right, 50)
    basic.pause(time2)
    stop()
}

function box2() {
    goaftertrack(200)
    turnleft(330)
    goaftertrack(200)
    turnright(330)
    down()
    moveForward(500)
    stop()
    Grip()
    backwards(800)
    turnleft(660)
    goaftertrack(200)
    turnleft(330)
    goaftertrack(200)
    stop()
    up()
    turnright(165)
    down2()
    put()
    up()
    turnleft(495)
}

function up() {
    iBIT.Servo(ibitServo.SV2, 20)
    basic.pause(300)
}

function stop() {
    iBIT.MotorStop()
    basic.pause(100)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    box1()
    box2()
    stop()
})
function goaftertrack(time3: number) {
    
    status = 0
    moveForward(1)
    while (status == 0) {
        if (iBIT.ReadADC(ibitReadADC.ADC2) < 2140) {
            moveForward(1)
        } else if (iBIT.ReadADC(ibitReadADC.ADC0) < 2312) {
            iBIT.Turn(ibitTurn.Right, 40)
        } else if (iBIT.ReadADC(ibitReadADC.ADC4) < 2205) {
            iBIT.Turn(ibitTurn.Left, 40)
        }
        
        if (iBIT.ReadADC(ibitReadADC.ADC0) < 2312 && iBIT.ReadADC(ibitReadADC.ADC4) < 2205) {
            status = 1
        }
        
    }
    moveForward(time3)
}

function down2() {
    iBIT.Servo(ibitServo.SV2, 90)
    basic.pause(300)
}

function Grip() {
    iBIT.Servo(ibitServo.SV1, 60)
    basic.pause(300)
}

function put() {
    iBIT.Servo(ibitServo.SV1, 140)
    basic.pause(300)
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(iBIT.ReadADC(ibitReadADC.ADC0))
    basic.pause(5000)
    basic.showNumber(iBIT.ReadADC(ibitReadADC.ADC2))
    basic.pause(5000)
    basic.showNumber(iBIT.ReadADC(ibitReadADC.ADC4))
    basic.pause(5000)
})
function backwards(time4: number) {
    iBIT.Motor2(ibitMotor.Backward, 47, 41)
    basic.pause(time4)
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Grip()
    stop()
})
function down() {
    iBIT.Servo(ibitServo.SV2, 110)
    basic.pause(300)
}

function box1() {
    moveForward(300)
    goaftertrack(200)
    turnleft(330)
    goaftertrack(200)
    goaftertrack(200)
    turnleft(330)
    down()
    moveForward(500)
    stop()
    Grip()
    backwards(800)
    turnleft(330)
    goaftertrack(200)
    turnleft(330)
    goaftertrack(200)
    turnright(165)
    put()
    up()
    turnleft(495)
}

function turnleft(time5: number) {
    stop()
    iBIT.Spin(ibitSpin.Left, 50)
    basic.pause(time5)
    stop()
}

