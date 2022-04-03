import { useEffect, useState } from "react";

interface ITodo {
    title: string;
}

export default function UseEffectMultiple() {
    const [index, setIndex] = useState<number>(1);
    const [title, setTitle] = useState('');
    useEffect(() => {
        async function api() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/'+index);
            const json:ITodo  = await response.json();
            setTitle(json.title); 
        }
        api();
    }, [index]);
    return (
        <>
           <input type="text" onChange={e => setIndex(parseInt(e.target.value))} />
           <div>{title}</div>
        </>
    )
}