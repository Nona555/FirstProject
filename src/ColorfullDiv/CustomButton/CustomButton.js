import "./CustomButton.scss";
const CustomButton = ({ color, poxos }) => {
    return (
        <button
        style={{backgroundColor: color}}
        onClick={poxos}
        >{color}</button>
    )
}

export default CustomButton;