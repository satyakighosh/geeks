import { useRef } from "react"

export default function UseRefEx() {
    const ref = useRef<HTMLInputElement>(null);
    const onClick = () => {
        //access value from a text box
        //1 state
        //2 document.getElementById("input").value
        //3 ref
        alert(ref.current?.id! + ref.current?.value);
    }
    return (
        <>
            <input type="text" ref={ref} id="input" />
            <button onClick={onClick}>submit</button>
        </>
    )
}