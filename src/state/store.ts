import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../localStorage";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
})