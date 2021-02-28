import React from 'react';
import './App.css';
import './Screens/Screens.css';
import {MenuApp} from "./AppParts/MenuApp";
import {CounterApp} from "./AppParts/CounterApp";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

function App() {

    let editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode);

    return (
        <div>
            {editMode ? <MenuApp/> : <CounterApp/>}
        </div>
    );
}

export default App;
