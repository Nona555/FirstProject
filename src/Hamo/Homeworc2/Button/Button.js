import './Button.css'

function Button (props) {
	return (
		<button className={props.name} onClick={props.onClick} >
			{props.name}
		</button>
	)
}

export default Button