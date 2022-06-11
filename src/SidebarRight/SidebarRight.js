import { useState } from 'react'
import './SidebarRight.scss'
import sett from'../assets/SidebarRoghet/unnamed.jpg'
import SidebarButton from './SidebarButton/SidebarButton'
import CustomSwitcher from '../Custom/CustomSwitcher/CustomSwitcher'
import star from '../assets/SidebarRoghet/star.webp'
import twitt from '../assets/SidebarRoghet/twitter.png'
import fblog from '../assets/SidebarRoghet/logo-fb.png'

function SidebarRight() {
	const ButtomColor = [
		'linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128))',
		'linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))',
		'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))',
		'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))',
		'linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))',
		'linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))' ]
	const [ wit , setwit ] = useState("-350px")
	const [ col , setcol ] = useState("active")

	const click = (e) => {
		if (e.target.className === 'setting') {
			setwit('0%')
		}else if (e.target.className === 'close') {
			setwit('-350px')
		}
	}

	return (
		<div className='SideRight'>
			<div className='info' style={{right:wit}} >
				<div className='pad'>
					<div className='button_close'>
						<div>
							<h3>Soft UI Configurator</h3>
							<p>See our dashboard options.</p>
						</div>
						<button className='close' onClick={click}>X</button>
					</div>
					<hr className='row'></hr>
					<h3>Sidenav Colors</h3>
					<div className='buttons_div'>
						{ButtomColor.map((item , index) => <SidebarButton key={index} background={item} />)}
					</div>
					<div>
						<h3>Sidenav Type</h3>
						<p>Choose between 2 different sidenav types.</p>
					</div>
					<div className='div_but_tramsparent'>
						<button className={`but_tramsparent ${col} ${col === 'transparent' && 'active'} `} onClick={() => setcol("transparent") } >TRANSPARENT</button>
						<button className={`but_tramsparent ${col === 'white' && 'active'} `} onClick={() => setcol("white") }>WHITE</button>
					</div>
					<div className='inRadio'>
						<h3>Navbar Fixed</h3>
						<CustomSwitcher />
					</div>
					<div className='buttom_frii'>
						<button className='frii_download' >FREE DOWNLOAD</button>
						<button className='vlew_documentation'>VLEW DOCUMENTATION</button>
					</div>
					<div className='star'>
						<a href='#'  className='starimg'><img src={star} />Star</a>
						<a href='#'>150</a>
					</div>
					<h6>Thank you for sharing!</h6>
					<div className='buttom_twit_fb'>
						<button className='buttom_twit'><img src={twitt} /> <span>TWEET</span></button>
						<button><img src={fblog} /> <span>SHARE</span> </button>
					</div>
				</div>
			</div>
			<button className='butt_setting'onClick={click}>
				<img src={sett} className='setting' alt='setting'/>
			</button>
		</div>
		
	)
	
}

export default SidebarRight