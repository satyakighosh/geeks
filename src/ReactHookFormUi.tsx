import {useForm} from "react-hook-form"

interface IStudent {
    name:string;
    password: string;
    email: string;
}

export default function ReactHookFormUi() {
    const {register, handleSubmit, getValues, formState, reset} = useForm<IStudent>();
    const onSubmit = (data: IStudent) => {
        alert(data.name + "--" + data.password)
        alert(getValues("name"));
    }

    return(
        <form>
            <input type="text" placeholder="name" {...register("name", {
                required: {value: true, message: "name is a required field"},
                minLength: {value:4, message: "name is minimum 4"}
            }
            )} />
            <input type="email" placeholder="email" {...register("email", {
                pattern: {value: /[\w.]+@\w+\.[\w.]+/,  message:"email pattern not matched"}
            })}/>            
            <input type="password" placeholder="password" {...register("password")}/>
            <button onClick={handleSubmit(onSubmit)}>submit</button>
            <button onClick={() => reset}>reset</button>
            {formState.errors?.name?.message && <div>{formState.errors?.name?.message}</div>}
            {formState.errors?.password?.message && <div>{formState.errors?.password?.message}</div>}
            {formState.errors?.email?.message && <div>{formState.errors?.email?.message}</div>}
        </form>
    )
}