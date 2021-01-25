import React from "react";

type CounterScreenType = {
    counter: number
    counterMaxValue: number
}

export function CounterScreen(props: CounterScreenType) {

    return (
        <div className={"screen"}>
            <p className={props.counter === props.counterMaxValue ? "lastDigit number" : "number"}>
                {props.counter}
            </p>
        </div>
    )
}