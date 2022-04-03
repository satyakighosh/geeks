import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    backdrop: {
        zIndex: 100
    }
})

interface IProps {
    showBackdrop: boolean;
}

export default function LoadingSpinner(props: IProps) {
    const style = useStyle();
    const renderLoadingSpinner = () => {
        return (
            <div className={style.container}>
                <CircularProgress />
            </div>
        )
    }
    if (props.showBackdrop) {
        return (
            <Backdrop open={props.showBackdrop} className={style.backdrop}>
                {renderLoadingSpinner()}
            </Backdrop>
        )
    }
    return renderLoadingSpinner();

}