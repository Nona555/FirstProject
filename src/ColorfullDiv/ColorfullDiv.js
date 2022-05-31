import { useState } from 'react';
import './ColorfullDiv.scss';
import CustomButton from './CustomButton/CustomButton';

const colorsArr = ['green', 'red', 'yellow'];
const initialColor = 'blue';
function ColorfullDiv() {
    // const [ state, setState ] = useState({
    //     color: null,
    //     name: 'White'
    // })
    const [ backgroundColor, setBackgroundColor ] = useState(initialColor);
    const [ name, setName ] = useState(initialColor);

    function setState(color) {
        setBackgroundColor(color);
        setName(color);
    }
    return (
        <div className="container">
            <div className='rectangle' style={{backgroundColor: backgroundColor}}>
                {name}
            </div>
            <div className='buttonsContainer'>
                {colorsArr.map((item, index) =>
                <CustomButton
                    key={index}
                    color={item}
                    poxos={() => setState(item)}
                />)}
            </div>
            <CustomButton color={'Reset'} poxos={() => setState(initialColor)}/>
        </div>
    )
}  

export default ColorfullDiv