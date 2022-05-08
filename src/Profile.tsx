import { Fab, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "./UserContext";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    parentContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px'
    }

});


export default function Profile() {
    const style = useStyle();
    const context = useContext(Context);
    const history = useNavigate();
    const onSignOut = () => {
        firebase.auth().signOut();
        history("/Home");
    }
    return (
        <div className={style.parentContainer}>
            <div className={style.container}>
                <Typography variant="h3">Welcome to the profile page</Typography>
                <Typography variant="h5" id="name">{context?.displayName}</Typography>
                <Typography variant="h5" id="email">{context?.email}</Typography>
                <Typography variant="h5" id="uid">{context?.uid}</Typography>
                <div className={style.buttons}>
                    <Fab color="primary" variant="extended" id="signout" onClick={onSignOut}>Signout</Fab>
                    <Fab color="secondary" variant="extended" id="home" onClick={() => history("/Home")}>Home</Fab>
                </div>
            </div>
        </div>
    );
}

// HOMEWORK: (hear after usestyles in profile page)
// check password
// upload profile photo (localphoto to url + updateProfile in signup page)
// change paswowrd, multifactor auth, change email, OTP etc