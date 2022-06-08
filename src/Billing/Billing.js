import Footer from '../Footer/Footer'
import LeftSidebar from '../Gor/LeftSidebar/LeftSidebar'
import './Billing.scss'

function Billing () {
	return (
		<div>
			<div className='grid_container'>
				<div className='grid_header'>Header</div>
				<div className='grid_said'><LeftSidebar /></div>
				<div className='grid_main'>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
				</div>
				<div className='grid_footer'><Footer /></div>
			</div>
		</div>
	)
}

export default Billing 