import React, {useState} from 'react';
import './App.css';
import './Screens/Screens.css';
import {CounterScreen} from "./Screens/CounterScreen";
import {ButtonsCounter} from "./Buttons/ButtonsCounter";
import {SetMenuScreen} from "./Screens/SetMenuScreen";
import {ButtonsMenu} from "./Buttons/ButtonsMenu";
import {restoreState, saveState} from "./localStorage";

function App() {

    //initial states
    const savedStartValue = restoreState("startValue", 0);
    const savedMaxValue = restoreState("maxValue", 5);
    const [counterStart, setCounterStart] = useState<number>(savedStartValue);
    const [counterMax, setCounterMax] = useState<number>(savedMaxValue);

    //inputs' states
    const [inputValueStart, setInputStartValue] = useState<number>(savedStartValue);
    const [inputValueMax, setInputMaxValue] = useState<number>(savedMaxValue);
    const [counter, setCounter] = useState<number>(inputValueStart);
    const [editMode, setEditMode] = useState<boolean>(false);

    //functions
    const OnClickInc = () => {
        if (counter < counterMax)
            setCounter(counter + 1);
    }
    const OnClickReset = () => setCounter(counterStart);
    const OnClickSetMenu = () => {
        setCounterStart(inputValueStart);
        setCounterMax(inputValueMax);
        setCounter(inputValueStart);
        saveState("startValue", inputValueStart);
        saveState("maxValue", inputValueMax)
        setEditMode(false);
    }
    const OnClickSetCounter = () => {
        setEditMode(true);
    }
    const ChangeInputStartValue = (startValue: number) => {
        setInputStartValue(startValue);
        setEditMode(true);
    }
    const ChangeInputMaxValue = (maxValue: number) => {
        setInputMaxValue(maxValue);
        setEditMode(true);
    }

    return (
        <div>
            {editMode && <div className="Menu">
                <SetMenuScreen
                    startInputValue={inputValueStart}
                    maxInputValue={inputValueMax}
                    changeStartValue={ChangeInputStartValue}
                    changeMaxValue={ChangeInputMaxValue}
                />
                <ButtonsMenu
                    OnClickSet={OnClickSetMenu}
                    editMode={editMode}
                    counterStartValue={inputValueStart}
                    counterMaxValue={inputValueMax}
                />
            </div>}
            {!editMode && <div className="App-Counter">
                <CounterScreen
                    counter={counter}
                    counterMaxValue={counterMax}
                />
                <ButtonsCounter
                    counter={counter}
                    OnClickInc={OnClickInc}
                    OnClickReset={OnClickReset}
                    OnClickSetCounter={OnClickSetCounter}
                    counterMinValue={counterStart}
                    counterMaxValue={counterMax}
                    inputStartValue={inputValueStart}
                    inputMaxValue={inputValueMax}
                />
            </div>}
        </div>
    );
}

export default App;
