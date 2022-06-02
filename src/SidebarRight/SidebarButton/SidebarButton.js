import './SidebarButton.scss'

function SidebarButton(props) {
	return (
		<button className='buttons_col' style={{background:props.background}} ></button>
	)
}

export default SidebarButton