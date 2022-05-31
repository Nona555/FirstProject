import { useState } from 'react'
import './SidebarRight.scss'
import sett from'../../assa/SidebarRoghet/unnamed.jpg'
import SidebarButton from './SidebarButton/SidebarButton'

function SidebarRight() {
	const ButtomColor = ['rgb(255, 0, 128)', 'rgb(58, 65, 111)', 'rgb(33, 212, 253)', 'rgb(152, 236, 45)', 'rgb(251, 207, 51)', 'rgb(255, 102, 124)' ]
	const [ wit , setwit ] = useState("0px")
	const [ col , setcol ] = useState("")
	const click = (e) => {
		if (e.target.className === 'setting') {
			setwit('350px') 
			console.log(5);
		}else if (e.target.className === 'close') {
			setwit('0px')
		}
	}

	const clickcolor = (e) => {

	}

	return (
		<div className='SideRight'>
			<div className='info' style={{width:wit}} >
				<div className='pad'>
					<div className='button_close'>
						<div>
							<h3>Soft UI Configurator</h3>
							<p>See our dashboard options.</p>
						</div>
						<button className='close' onClick={click}>X</button>
					</div>
					<div className='line_div'></div>
					<h3>Sidenav Colors</h3>
					<div className='buttons_div'>
						{ButtomColor.map((item , index) => <SidebarButton key={index} backgroundColor={item} />)}
					</div>
					<div>
							<h3>Sidenav Type</h3>
							<p>Choose between 2 different sidenav types.</p>
					</div>
					<div className='div_but_tramsparent'>
						<button className='but_tramsparent' onClick={ clickcolor } >TRANSPARENT</button>
						<button className='but_tramsparent' onClick={ clickcolor } >WHITE</button>
					</div>
					<div className='inRadio'>
						<h3>Navbar Fixed</h3>
					</div>

				</div>
			</div>
			<button className='setting butt_setting'onClick={click}><img src={sett} className='setting' onClick={click}></img> </button>
		</div>
		
	)
	
}

export default SidebarRight