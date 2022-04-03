import { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import LoadingSpinner from "./LoadingSpinner";

interface IProps {
    children: React.ReactNode;
}

export const Context = createContext<firebase.User | null>(null);

export default function UserContext(props: IProps) {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [showLoadingSpinner, setLoadingSpinner] = useState<boolean>(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setLoadingSpinner(true);
            setUser(user);          
            setLoadingSpinner(false);  
        })
    }, []);
    return (
        <Context.Provider value={user}>
            {!showLoadingSpinner && props.children}
            {showLoadingSpinner && <LoadingSpinner showBackdrop={false} />}
        </Context.Provider>
    );
}