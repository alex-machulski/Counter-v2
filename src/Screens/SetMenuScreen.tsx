import React, {ChangeEvent} from "react";
import '../App.css';
import {InputElement} from "./InputElement";
import {useDispatch} from "react-redux";
import {changeInputMaxValue, changeInputMinValue} from "../state/counter-reducer";

type SetMenuScreenType = {
    startInputValue: number
    maxInputValue: number
}

export function SetMenuScreen(props: SetMenuScreenType) {

    const dispatch = useDispatch();

    const menuError = props.startInputValue >= props.maxInputValue;
    const startValueError = props.startInputValue < 0;

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputMaxValue(parseInt(e.currentTarget.value)));
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputMinValue(parseInt(e.currentTarget.value)));
    }

    const maxValueClass = `${menuError ? "inputError" : ""} setMenuInput`;
    const startValueClass = `${menuError || startValueError ? "inputError" : ""} setMenuInput`;

    return (
        <div className={"screen"}>
            <div>
                <span>max value: </span>
                <InputElement
                    finalClassName={maxValueClass}
                    onChange={onChangeMaxValue}
                    inputCounterValue={props.maxInputValue}
                />
            </div>
            <div>
                <span>start value: </span>
                <InputElement
                    finalClassName={startValueClass}
                    onChange={onChangeStartValue}
                    inputCounterValue={props.startInputValue}
                />
            </div>
        </div>
    )
}