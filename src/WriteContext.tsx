import { createContext, useState } from "react";
import ReadContext from "./ReadContext";

interface IUserDetails {
    email: string;
}

export const UserContext = createContext<IUserDetails>({email: ''});

export default function WriteContext() {
    const [email, setEmail] = useState<string>('');
    return (
        <>
        <input type="text" onChange={e => setEmail(e.target.value)} />
         <UserContext.Provider value={{email: email}}>
                <ReadContext />
         </UserContext.Provider>
        </>
    )
}