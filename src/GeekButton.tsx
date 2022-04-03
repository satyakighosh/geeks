import "./GeekButton.css";

interface IProps {
    name: string;
    label: string;
    onClick: () => void
}

export default function GeekButton(props: IProps) {
    const onButtonClick = () => {
   //     alert("GeekButton is invoked");
        props.onClick();
    }
    return (
        <button name={props.name} className="button" onClick={onButtonClick}>{props.label}</button>
    );
}