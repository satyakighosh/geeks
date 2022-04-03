import { useSelector } from "react-redux";
import { AppState } from "./AppState";

export default function ReadReducer() {
    const textReducer = useSelector((x: AppState) => x.TextReducer);
    return <div>{textReducer.name}</div>
}