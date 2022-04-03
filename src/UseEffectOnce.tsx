import { useEffect, useState } from "react";

/*
   useEffect(fn, []) ===> fn will be called only once during the component's life cycle
   useEffect(fn, [something]) ====> whenever something fn will be invoked

*/

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean; 
}

export default function UseEffectOnce() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        async function api() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const json: ITodo = await response.json();
            const title = json.title;
            setTitle(title);
        }
        api();
    }, []);
    return (
        <div>{title}</div>
    )
}