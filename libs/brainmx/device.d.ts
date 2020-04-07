declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;

    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const MA1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const MA2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D10)
    const MB1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D11)
    const MB2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D12)
    const MC1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const MC2: PwmPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const DIN: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const BCLK: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D9)
    const LRCLK: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPin(PIN_D17)
    const NEO: DigitalInOutPin;

/*    const RX: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_TX)
    const TX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCL)
    const SCL: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SDA)
    const SDA: DigitalInOutPin;*/

}

