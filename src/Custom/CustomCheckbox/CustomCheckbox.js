import './CustomCheckbox.scss';

function CustomCheckbox({label}) {
    return (
        // <ul>
            <div>
                <input id="c2" type="checkbox" checked />
                <label for="c2">{label}</label>
            </div>
        // </ul>
    )
}

export default CustomCheckbox;