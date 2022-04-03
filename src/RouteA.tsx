import { useNavigate, useParams } from "react-router-dom"

export default function RouteA() {
    const params = useParams<{ name: string }>();
    const history = useNavigate();
    return (
        <>
            <div>{"hello " + params.name}</div>
            <button onClick={() => history(-1)}  >take me back</button>
        </>
    )
}