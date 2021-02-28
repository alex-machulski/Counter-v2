import React from "react";
import {ButtonElement} from "./ButtonElement";
import './Buttons.css';
import {useDispatch, useSelector} from "react-redux";
import {increaseCounter, resetCounter, setEditMode} from "../state/counter-reducer";
import {AppRootStateType} from "../state/store";

type ButtonsCounterType = {
    counterMaxValue: number
    counter: number
}

export function ButtonsCounter(props: ButtonsCounterType) {

    const dispatch = useDispatch();
    let inputStartValue = useSelector<AppRootStateType, number>(state => state.counter.inputStartValue);
    let inputMaxValue = useSelector<AppRootStateType, number>(state => state.counter.inputMaxValue);
    let counterMinValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);

    const OnClickInc = () => {
        if (props.counter < props.counterMaxValue)
            dispatch(increaseCounter());
    }
    const OnClickReset = () => dispatch(resetCounter());
    const OnClickSetCounter = () => dispatch(setEditMode(true));

    const isDisabledBInc = inputStartValue >= inputMaxValue ||
        inputStartValue < 0 || props.counter === props.counterMaxValue;
    const isDisabledReset = inputStartValue >= inputMaxValue ||
        inputStartValue < 0 || props.counter === counterMinValue;

    return (
        <div className={"buttons"}>
            <ButtonElement
                name={"inc"}
                buttonFunction={OnClickInc}
                isDisabled={isDisabledBInc}
            />
            <ButtonElement
                name={"reset"}
                buttonFunction={OnClickReset}
                isDisabled={isDisabledReset}
            />
            <ButtonElement
                name={"set"}
                buttonFunction={OnClickSetCounter}
                isDisabled={false}
            />
        </div>
    )
}