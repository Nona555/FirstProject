import './Timer.scss'
import { useState } from 'react'

let tim1 = "0";
let tim2 = "0";
let tim3 = "0";
let tim4 = "0";
let tim5 = "0";
let tim6 = "0";
let start = "start"
let green = "green"
let id = null
let disabled = "disabled"

function Timer() {
	const [tim, settim ] = useState(null)
	const num = () => {
			settim(tim6++)
			if(tim6 === 10) {
				tim6 = 0
				settim(++tim5)
			}
			if(tim5 === 6){
				tim5 = 0
				settim(++tim4)
			}
			if(tim4 === 10) {
				tim4 = 0
				settim(++tim3)
			}
			if(tim3 === 6){
				tim3 = 0
				settim(++tim2)
			}
			if(tim2 === 10) {
				tim2 = 0
				settim(++tim1)
			}
			if(tim1 === 2 && tim2 === 4){
				tim1 = 0;
				tim2 = 0;
				tim3 = 0;
				tim4 = 0;
				tim5 = 0;
				tim6 = 0
			}
			if( start === "start" ){
				start = "stop"
				green = "red"
			}
	}
	return (
		<div className='container3'>
			<div className='back'>
				<div className='tamdiv'>
					{tim1}{tim2}:{tim3}{tim4}:{tim5}{tim6}
				</div>
				<div className='butdiv'>
					<button className='butRes' disabled = {disabled} onClick = {() => {
						settim(tim1 = "0")
						settim(tim2 = "0")
						settim(tim3 = "0")
						settim(tim4 = "0")
						settim(tim5 = "0")
						settim(tim6 = "0")
					}} >Reset</button>
					<button className='batStart'style={{backgroundColor:green}} onClick={()=>{
						if(id){
							settim(clearInterval(id))
							start = "start"
							green = "green"
							id = null
							disabled = ""
						}else{
							id = setInterval(num, 1000)
							disabled = "disabled"
						}
					}}>{start}</button>
				</div>
			</div>
		</div>
	)
	
}


export default Timer