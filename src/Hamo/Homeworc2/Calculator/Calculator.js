import Button from './Button/Button'
import { useState } from "react"
import './Calculator.scss'


const buttonName = ["+", "Reset", "-"]


let num = 0

function Calculator (e) {
	const [numbr, setnumbr ] = useState(num)
	const onClick = (e) =>{
		if(e.target.className === "+"){
			setnumbr(++num)
		}
		if(e.target.className === "-"){
			setnumbr(--num)
		}
		if(e.target.className === "Reset"){
			setnumbr(num=0)
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