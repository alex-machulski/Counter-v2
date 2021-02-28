import React from "react";
import {SetMenuScreen} from "../Screens/SetMenuScreen";
import {ButtonsMenu} from "../Buttons/ButtonsMenu";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

export function MenuApp() {

    let inputValueStart = useSelector<AppRootStateType, number>(state => state.counter.inputStartValue);
    let inputValueMax = useSelector<AppRootStateType, number>(state => state.counter.inputMaxValue);

    return (
        <div className="Menu">
            <SetMenuScreen
                startInputValue={inputValueStart}
                maxInputValue={inputValueMax}
            />
            <ButtonsMenu
                counterStartValue={inputValueStart}
                counterMaxValue={inputValueMax}
            />
        </div>
    )
}


