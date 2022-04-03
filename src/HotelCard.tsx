import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { IHotel } from "./HotelReducer";

const useStyle = makeStyles({
    image: {
        width: 360,
        height: 372
    }
})

export default function HotelCard(props: IHotel) {
    const style = useStyle();
    return (
        <Card key={props.id}>
            <CardActionArea>
                <CardMedia component="img" image={props.featured_image} className={style.image} />
                <CardContent>
                    <Typography variant="h6">{props.name}</Typography>
                    <Typography variant="body2">{props.cuisines}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            
    )
} 