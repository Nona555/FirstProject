import './CalcButto.css'

function CalcButto(props) {
	return (
		<button className='but1' id={props.name} onClick={props.sum} >{props.name}</button>
	)
}

export default CalcButto