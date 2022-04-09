import { AppBar, Button, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./UserContext";

interface IProps {
    searchString: string;
    setSearchString: (searchString: string) => void;
}

const useStyle = makeStyles({
    button: {
        color: 'white'
    },
    searchContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        color: 'white',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'right'
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchIcon: {
        margin: '0 15px'
    },
    searchBox: {
        color: 'white',
        width: '100%'

    }
})

export default function TopBar(props: IProps) {
    const style = useStyle();
    const history = useNavigate();
    const context = useContext(Context);
    const isUserExist = context && context.uid;
    return (
        <AppBar>
            <Toolbar className={style.toolBar}>
                <div className={style.searchContainer}>
                    <SearchIcon className={style.searchIcon} />
                    <InputBase className={style.searchBox} placeholder={"Search Hotel..."} value={props.searchString}
                        onChange={(e) => props.setSearchString(e.target.value)} />
                </div>
                {!isUserExist && <Button className={style.button} onClick={() => history("/Login")} >Login</Button>}
                {!isUserExist && <Button className={style.button} onClick={() => history("/SignUp")}>Sign Up</Button>}
                {isUserExist && <Button className={style.button} onClick={() => history("/Profile")}>Profile</Button>}
            </Toolbar>
        </AppBar>
    )

}

