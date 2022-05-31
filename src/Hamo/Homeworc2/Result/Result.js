import CalcButto from "./CalcButto/CalcButto";
import NumInput from "./NumInput/NumInput";
import './Result.scss'
import { useState } from "react"

const FooButton = ["+", "-", "/", "*"];

// let num = 0;
// let num1 = 0;
// let num2 = 0;

function Result () {
	const [ num1, setnum1 ] = useState(0);
	const [ num2, setnum2 ] = useState(0);
	const [ result, setResult ] = useState(0);
	const [ error, setError ] = useState(false);

	const sum = (e) => {
		if( +num1 + +num2 || (+num1 && +num2) === 0 ){
			if(e.target.id === "+"){
				setResult(+num1 + +num2)
			}else if(e.target.id === "-"){
				setResult(+num1 - +num2)
			}else if(e.target.id === "/"){
				setResult(+num1 / +num2)
			}else if(e.target.id === "*"){
				setResult(+num1 * +num2)
			}
		}else {
			setError(true) 
			setResult(0)
		}
		
	};
	
	const info = (e) => {
		setError(false);
		if(e.target.id === "x"){
			setnum1(e.target.value)
		}
		if(e.target.id === "y"){
			setnum2(e.target.value)
		}
	}

		return (
		<div className="container2">
			<div className="res">
				Result {result}
			</div>
			{error && <div className="errtext">Error: X and Y must be Numbers</div>}
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