import './Button.scss'

function Button (props) {
	return (
		<button className={props.name} onClick={props.onClick} >
			{props.name}
		</button>
	)
}

export default Button