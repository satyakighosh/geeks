import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import { started, completed, IHotel } from "./HotelReducer";
import { AppState } from "./AppState";
import LoadingSpinner from "./LoadingSpinner";
import HotelCard from "./HotelCard";

interface IFile {
    data:{hotels:IHotel[]};
}

const useStyle = makeStyles({
    grid: {
        marginTop: '50px'
    }
})

export default function Home() {
    const [searchString, setSearchString] = useState<string>("");
    const style = useStyle();
    const dispatch = useDispatch();
    const HotelReducer = useSelector((x: AppState) => x.HotelReducer);
    useEffect(() => {
        async function api() {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "query": "{\n  hotels{\n    id\n    name\n    cuisines,\n    featured_image\n  }\n}\n"
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw
            };
            const response = await fetch("https://cryptic-sands-30678.herokuapp.com/graphql", 
            requestOptions);
            const json: IFile = await response.json();
            dispatch(completed(json.data.hotels));
        }
        dispatch(started());
        api();
    }, [dispatch]);

    return (
        <>
            <TopBar searchString={searchString} setSearchString={setSearchString}/>
            {HotelReducer.isLoading && <LoadingSpinner showBackdrop={true}/>}
            <Grid container spacing={8} className={style.grid}>
                {!HotelReducer.isLoading && HotelReducer.hotels.filter(x => x.name.toLowerCase().includes(searchString?.toLowerCase())).map(x => <Grid item><HotelCard {...x} /> </Grid>)}
            </Grid>
        </>
    )

}




