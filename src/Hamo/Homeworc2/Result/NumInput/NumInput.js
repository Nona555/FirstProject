import './NumInput.css'

function NumInput(props) {
	return (
		<>
			<label>
				<span>X</span><input type='text' id='x' onChange={props.info}/>
			</label>
			<label>
				<span>Y</span><input type='text' id='y' onChange={props.info} />
			</label>
		</>
	)
}

export default NumInput