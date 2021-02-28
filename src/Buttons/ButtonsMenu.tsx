import React from "react";
import {ButtonElement} from "./ButtonElement";
import './Buttons.css';
import {setCounter, setEditMode} from "../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

type ButtonsMenuType = {
    counterStartValue: number
    counterMaxValue: number
}

export function ButtonsMenu(props: ButtonsMenuType) {
    const dispatch = useDispatch();

    let editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode);

    const OnClickSetMenu = () => {
        dispatch(setCounter(props.counterStartValue, props.counterMaxValue));
        dispatch(setEditMode(false));
    }

    const isSetDisabled = props.counterStartValue >= props.counterMaxValue ||
        props.counterStartValue < 0 || !editMode;

    return (
        <div className={"buttons"}>
            <ButtonElement
                name={"set"}
                buttonFunction={OnClickSetMenu}
                isDisabled={isSetDisabled}
            />
        </div>
    )
}