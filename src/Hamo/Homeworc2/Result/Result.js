import CalcButto from "./CalcButto/CalcButto";
import NumInput from "./NumInput/NumInput";
import './Result.scss'
import { useState } from "react"

const FooButton = ["+", "-", "/", "*"];

let num = 0;
let num1 = 0;
let num2 = 0;
let errText = false

function Result () {
	const [numbr, setnumbr ] = useState(num)
	const [Text, setText ] = useState(errText)



	const sum = (e) => {
		if( +num1 + +num2 || (+num1 && +num2) === 0 ){
			if(e.target.id === "+"){
				setnumbr(num = +num1 + +num2)
			}else if(e.target.id === "-"){
				setnumbr(num = +num1 - +num2)
			}else if(e.target.id === "/"){
				setnumbr(num = +num1 / +num2)
			}else if(e.target.id === "*"){
				setnumbr(num = +num1 * +num2)
			}
		}else {
			setText( errText = "Error: X and Y must be Numbers" ) 
			setnumbr( num = 0)
		}
		
	};
	
	const info = (e) => {
		if(e.target.id === "x"){
			num1 = e.target.value
		}
		if(e.target.id === "y"){
			num2= e.target.value
		}
	}

		return (
		<div className="container2">
			<div className="res">
				Result {num}
			</div>
			<div className="errtext">{errText}</div>
			<div className="input">
				<NumInput info={info} />
			</div>
			<div className="buttdiv1">
				{FooButton.map((item ,index) => <CalcButto name={item} key={index} sum={sum} />)}
			</div>
		</div>
	)
}

export default Result