import { useDispatch } from "react-redux"
import ReadReducer from "./ReadReducer";
import { write } from "./TextReducer";

export default function WriteReducer() {
    const dispatch = useDispatch();
    return (
        <>
            <input type="text" onChange={e => dispatch(write(e.target.value))} />
            <ReadReducer />
        </>
    )
}