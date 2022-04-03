import { Fab, TextField, Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const useStyles = makeStyles({
    parentContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    buttons: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end'
    },
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    errorMessage: {
        color: 'red'
    }

})

interface IAuthenticationProps {
    title: string;
    showSignUpButton?: boolean;
    showLoginButton?: boolean;
    showName?: boolean;
    onSubmitClick: (email: string, password:string, displayName?: string) => Promise<string>;
}


interface IAuthentication {
    name: string;
    email: string;
    password: string;
}

export default function Authentication(props: IAuthenticationProps) {
    const { register, reset, handleSubmit, formState } = useForm<IAuthentication>();
    const [showLoadingSpinner, setLoadingSpinner] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const style = useStyles();
    const history = useNavigate();
    async function onSubmitClick (data: IAuthentication) {
        setLoadingSpinner(true);
        const message = await props.onSubmitClick(data.email, data.password, data.name);
        setLoadingSpinner(false);
        if (message) {
            setErrorMessage(message);
        }
        else {
            history("/Home");
        }
    }
    return (
        <div className={style.parentContainer}>
            <form onSubmit={handleSubmit(onSubmitClick)} className={style.container}>
                <Typography variant="h3" className={style.title}>{props.title}</Typography>
                {props.showName && <TextField variant="outlined" placeholder="Name" {...register("name", {
                    required: true,
                    minLength: { value: 4, message: "Name should be minimum 4 length" }
                })}
                    error={formState.errors?.name != undefined}
                    helperText={formState.errors?.name?.message}
                />}

                <TextField variant="outlined" placeholder="Email" type={"email"} {...register("email", {
                    required: true,
                    pattern: { value: /[\w.]+@\w+\.[\w.]+/, message: "Email is invalid" }
                })}
                    error={formState.errors?.email != undefined}
                    helperText={formState.errors?.email?.message}
                />
                <TextField variant="outlined" placeholder="Password" type={"password"} {...register("password", {
                    required: true,
                    minLength: { value: 6, message: "Password should be minimum 6 length" }
                })}
                    error={formState.errors?.password != undefined}
                    helperText={formState.errors?.password?.message}
                />

                <div className={style.buttons}>
                    <Fab color="primary" variant="extended" type="submit">Submit</Fab>
                    <Fab color="secondary" variant="extended" onClick={() => reset()}>Reset</Fab>
                    <Fab variant="extended" onClick={() => history("/Home")}>Home</Fab>
                    {props.showSignUpButton && <Fab variant="extended" onClick={() => history("/SignUp")}>Sign up</Fab>}
                    {props.showLoginButton && <Fab variant="extended" onClick={() => history("/Login")}>Login</Fab>}
                </div>
                {showLoadingSpinner && <LoadingSpinner showBackdrop={true}/>}
                {errorMessage && <Typography variant="h5" className={style.errorMessage}>{errorMessage}</Typography>}
            </form>
        </div>

    );

}