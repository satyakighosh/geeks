import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import { started, completed, IHotel } from "./HotelReducer";
import { AppState } from "./AppState";
import LoadingSpinner from "./LoadingSpinner";
import HotelCard from "./HotelCard";

interface IFile {
    restaurant: IHotel
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
            const response = await fetch("/hotel.json");
            const json: IFile[] = await response.json();
            dispatch(completed(json.map(x => x.restaurant)));
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




