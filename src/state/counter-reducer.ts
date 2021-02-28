const INCREASE_COUNTER = "INCREASE_COUNTER";
const CHANGE_INPUT_MAX_VALUE = "CHANGE_INPUT_MAX_VALUE";
const CHANGE_INPUT_MIN_VALUE = "CHANGE_INPUT_MIN_VALUE";
const SET_EDIT_MODE = "SET_EDIT_MODE";
const SET_COUNTER = "SET_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";

let initialState = {
    startValue: 0,
    maxValue: 5,
    inputStartValue: 0,
    inputMaxValue: 5,
    currentValue: 0,
    editMode: false
};

export type CounterStateType = typeof initialState;

type ActionsType = IncreaseCounterActionType |
    ChangeInputMaxValueActionType |
    ChangeInputMinValueActionType |
    SetEditModeActionType |
    SetCounterActionType |
    ResetCounterActionType;

export function counterReducer(state: CounterStateType = initialState, action: ActionsType): CounterStateType {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {...state, currentValue: state.currentValue + 1};
        case CHANGE_INPUT_MAX_VALUE:
            return {...state, inputMaxValue: action.inputMaxValue};
        case CHANGE_INPUT_MIN_VALUE:
            return {...state, inputStartValue: action.inputMinValue};
        case SET_EDIT_MODE:
            return {...state, editMode: action.editMode};
        case SET_COUNTER:
            return {...state, startValue: action.startValue, maxValue: action.maxValue, currentValue: action.startValue}
        case RESET_COUNTER:
            return {...state, currentValue: state.startValue}
        default:
            return state;
    }
}

export const increaseCounter = () => {
    return {type: INCREASE_COUNTER} as const
};

export const changeInputMaxValue = (inputMaxValue: number) => {
    return {type: CHANGE_INPUT_MAX_VALUE, inputMaxValue} as const
};

export const changeInputMinValue = (inputMinValue: number) => {
    return {type: CHANGE_INPUT_MIN_VALUE, inputMinValue} as const
};

export const setEditMode = (editMode: boolean) => {
    return {type: SET_EDIT_MODE, editMode} as const
};

export const setCounter = (startValue: number, maxValue: number) => {
    return {type: SET_COUNTER, startValue, maxValue} as const
};

export const resetCounter = () => {
    return {type: RESET_COUNTER} as const
};

type IncreaseCounterActionType = ReturnType<typeof increaseCounter>;
type ChangeInputMaxValueActionType = ReturnType<typeof changeInputMaxValue>;
type ChangeInputMinValueActionType = ReturnType<typeof changeInputMinValue>;
type SetEditModeActionType = ReturnType<typeof setEditMode>;
type SetCounterActionType = ReturnType<typeof setCounter>;
type ResetCounterActionType = ReturnType<typeof resetCounter>;

