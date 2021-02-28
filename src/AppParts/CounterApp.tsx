import React from "react";
import {CounterScreen} from "../Screens/CounterScreen";
import {ButtonsCounter} from "../Buttons/ButtonsCounter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

export function CounterApp() {

    let counter = useSelector<AppRootStateType, number>(state => state.counter.currentValue);
    let counterMax = useSelector<AppRootStateType, number>(state => state.counter.maxValue);

    return (
        <div className="App-Counter">
            <CounterScreen
                counter={counter}
                counterMaxValue={counterMax}
            />
            <ButtonsCounter
                counter={counter}
                counterMaxValue={counterMax}
            />
        </div>
    )
}