import React from "react";
import { useNavigate } from "react-router-dom";
import GeekButton from "./GeekButton";

export default function SimpleState() {
    const [count, setCount] = React.useState<number>(0);
    const history = useNavigate();
    return (
        <>
            <GeekButton name="count" label={count.toString()} onClick={() => setCount(count + 1)} />
            <button onClick={() => history("/RouteA/sachin")}>go to route A</button>
        </>
    )
}