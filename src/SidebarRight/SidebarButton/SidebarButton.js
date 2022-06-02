import './SidebarButton.scss'

function SidebarButton(props) {
	return (
		<button className='buttons_col' style={{backgroundColor:props.backgroundColor}} ></button>
	)
}

export default SidebarButton