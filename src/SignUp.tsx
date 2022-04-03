import Authentication from "./Authentication";
import firebase from "firebase/app";

export default function SignUp() {
    const onSubmitClick = async (email: string, password: string, displayName?: string) => {
        try {
            const account = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await account?.user?.updateProfile({ displayName });
            return;
        } catch (e: any) {
            console.error(e);
            return e.message;
        }
    }
    return (
        <Authentication title="Welcome to SignUp Page"
            showSignUpButton={false} showLoginButton={true} showName={true} onSubmitClick={onSubmitClick}/>
    )
}