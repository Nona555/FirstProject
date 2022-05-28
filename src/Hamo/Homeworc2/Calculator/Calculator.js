import Button from './Button/Button'
import { useState } from "react"
import './Calculator.css';
import React from 'react';


const buttonName = ["+", "Reset", "-"]

function Calculator () {
	const [ num, setNum ] = useState(0);
	const onClick = (e) =>{
		if(e.target.className === "+"){
			setNum(num + 1)
		}
		if(e.target.className === "-"){
			setNum(num - 1)
		}
		if(e.target.className === "Reset"){
			setNum(0)
		}
	}
	return (
		<div className='container1'>
			<div className='number'>
				{num}
			</div>
			<div className='buttdiv'>
			{buttonName.map((item,index) => <Button name={item} key={index} onClick={onClick} />)}
			</div>
		</div>
	)

}

export default Calculator