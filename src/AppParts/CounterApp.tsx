import React from "react";
import {CounterScreen} from "../Screens/CounterScreen";
import {ButtonsCounter} from "../Buttons/ButtonsCounter";

type CounterAppType = {
    counter: number
    counterStart: number
    counterMax: number
    inputValueStart: number
    inputValueMax: number
    onClickInc: () => void
    onClickReset: () => void
    onClickSetCounter: () => void
}

export function CounterApp(props: CounterAppType) {

    return (
        <div className="App-Counter">
            <CounterScreen
                counter={props.counter}
                counterMaxValue={props.counterMax}
            />
            <ButtonsCounter
                counter={props.counter}
                OnClickInc={props.onClickInc}
                OnClickReset={props.onClickReset}
                OnClickSetCounter={props.onClickSetCounter}
                counterMinValue={props.counterStart}
                counterMaxValue={props.counterMax}
                inputStartValue={props.inputValueStart}
                inputMaxValue={props.inputValueMax}
            />
        </div>
    )
}