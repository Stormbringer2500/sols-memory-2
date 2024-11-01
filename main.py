status = 0
def box3():
    pass
def moveForward(time: number):
    iBIT.motor2(ibitMotor.FORWARD, 47, 41)
    basic.pause(time)
def turnright(time2: number):
    stop()
    iBIT.spin(ibitSpin.RIGHT, 50)
    basic.pause(time2)
    stop()
def box2():
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
def up():
    iBIT.servo(ibitServo.SV2, 20)
    basic.pause(300)
def stop():
    iBIT.motor_stop()
    basic.pause(100)

def on_button_pressed_a():
    box1()
    box2()
    stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def goaftertrack(time3: number):
    global status
    status = 0
    moveForward(1)
    while status == 0:
        if iBIT.read_adc(ibitReadADC.ADC2) < 2140:
            moveForward(1)
        elif iBIT.read_adc(ibitReadADC.ADC0) < 2312:
            iBIT.turn(ibitTurn.RIGHT, 40)
        elif iBIT.read_adc(ibitReadADC.ADC4) < 2205:
            iBIT.turn(ibitTurn.LEFT, 40)
        if iBIT.read_adc(ibitReadADC.ADC0) < 2312 and iBIT.read_adc(ibitReadADC.ADC4) < 2205:
            status = 1
    moveForward(time3)
def down2():
    iBIT.servo(ibitServo.SV2, 90)
    basic.pause(300)
def Grip():
    iBIT.servo(ibitServo.SV1, 60)
    basic.pause(300)
def put():
    iBIT.servo(ibitServo.SV1, 140)
    basic.pause(300)

def on_button_pressed_ab():
    basic.show_number(iBIT.read_adc(ibitReadADC.ADC0))
    basic.pause(5000)
    basic.show_number(iBIT.read_adc(ibitReadADC.ADC2))
    basic.pause(5000)
    basic.show_number(iBIT.read_adc(ibitReadADC.ADC4))
    basic.pause(5000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def backwards(time4: number):
    iBIT.motor2(ibitMotor.BACKWARD, 47, 41)
    basic.pause(time4)

def on_button_pressed_b():
    Grip()
    stop()
input.on_button_pressed(Button.B, on_button_pressed_b)

def down():
    iBIT.servo(ibitServo.SV2, 110)
    basic.pause(300)
def box1():
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
def turnleft(time5: number):
    stop()
    iBIT.spin(ibitSpin.LEFT, 50)
    basic.pause(time5)
    stop()