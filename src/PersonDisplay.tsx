import { useEffect, useState } from "react";
import "./App.css";

interface IPerson {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export default function PersonDisplay() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [search, setSearch] = useState<string>("");
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json: { data: IPerson[] } = await response.json();
            setPersons(json.data);
        }
        api();
    }, []);
    const filterPerson = (person: IPerson) => {
        const names = [person.first_name.toLowerCase(), person.last_name.toLowerCase()];
        return names.some(x => x.includes(search.toLowerCase()));
    }
    return (
        <>
            <input type="text" onChange={e => setSearch(e.target.value)} />
            <div className="gridContainer">
                {persons.filter(filterPerson).map(renderPerson)}
            </div>
        </>
    )
}

function renderPerson(person: IPerson, index: number) {
    return (
        <div key={index}>
            <img src={person.avatar} alt={person.first_name} />
            <div>{person.first_name + " " + person.last_name}</div>
        </div>
    )
}