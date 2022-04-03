import { useContext } from "react";
import { UserContext } from "./WriteContext";

export default function ReadContext() {
    const data = useContext(UserContext);
    return <div>{data.email}</div>
}