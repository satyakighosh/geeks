import { TextField, Button, Fab, Typography, CircularProgress, Grid, Card, CardActionArea, CardMedia, CardContent, AppBar, Toolbar, InputBase, makeStyles, Theme } from "@material-ui/core"

const withoutProps = makeStyles<Theme>((theme: Theme) => ({
    searchBox: {
        backgroundColor: 'white'
    }
}));

interface IStyle {
    backgroundColor: string;
}

const withProps = makeStyles<Theme, IStyle>({
    searchBox: { 
        backgroundColor: props => props.backgroundColor
    },
    button: {
        color: 'white'
    }
});

export default function MaterialUi() {
    const style = withoutProps();
    const styleWithProps = withProps({
        backgroundColor: 'white'
    });
    return (
        <>
            <TextField variant="outlined" />
            <Button>Test</Button>
            <Button variant="contained">contained</Button>
            <Fab color="primary" variant="extended">Some text</Fab>
            <Typography variant="h5" >Something</Typography>
            <CircularProgress></CircularProgress>
            <Grid container spacing={5}>
                <Grid item xs={10}>one</Grid>
                <Grid item>two</Grid>
                <Grid item>three</Grid>
            </Grid>
            <Card>
                <CardActionArea>
                    <CardMedia component="img" image="https://reqres.in/img/faces/2-image.jpg">
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5">Janet Weaver</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <AppBar>
                <Toolbar>
                    <InputBase className={withProps({
                        backgroundColor: 'white'
                    }).searchBox} />
                    <InputBase className={withProps({
                        backgroundColor: 'wheat'
                    }).searchBox} />
                    <InputBase className={style.searchBox} />
                    <Button className={styleWithProps.button}>submit</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}