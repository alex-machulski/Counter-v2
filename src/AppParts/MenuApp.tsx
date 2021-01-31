import React from "react";
import {SetMenuScreen} from "../Screens/SetMenuScreen";
import {ButtonsMenu} from "../Buttons/ButtonsMenu";

type MenuAppType = {
    inputValueStart: number
    inputValueMax: number
    editMode: boolean
    changeInputStartValue: (startValue: number) => void
    changeInputMaxValue: (maxValue: number) => void
    onClickSetMenu: () => void
}

export function MenuApp(props: MenuAppType) {

    return (
        <div className="Menu">
            <SetMenuScreen
                startInputValue={props.inputValueStart}
                maxInputValue={props.inputValueMax}
                changeStartValue={props.changeInputStartValue}
                changeMaxValue={props.changeInputMaxValue}
            />
            <ButtonsMenu
                OnClickSet={props.onClickSetMenu}
                editMode={props.editMode}
                counterStartValue={props.inputValueStart}
                counterMaxValue={props.inputValueMax}
            />
        </div>
    )
}


