import { useState } from 'react';
import './CustomSwitcher.scss'

function CustomSwitcher() {
    const [ checked, setChecked ] = useState(true);
    const checkHandler = () => {
        setChecked(prev => !prev)
    }
    console.log(checked);
	return (
        <label className="toggle-control">
            <input type="checkbox" checked={checked} onClick={() => checkHandler()} />
            <span className="control"></span>
        </label>
    )	
}

export default CustomSwitcher;