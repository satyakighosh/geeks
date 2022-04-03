import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { IPerson, write } from "./UsersReducer";

export default function ReducerUi() {
    const dispatch = useDispatch();
    const usersReducer = useSelector((x: AppState) => x.UsersReducer);
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json: { data: IPerson[] } = await response.json();
            dispatch(write(json.data));
        }
        api();
    }, [dispatch]);
    return (
        <>
            {usersReducer.map(renderUser)};
        </>
    )
}

function renderUser(person: IPerson, index: number) {
    return (
        <div key={index}>
            <img src={person.avatar} alt={person.first_name} />
            <div>{person.first_name + " " + person.last_name}</div>
        </div>
    );
}