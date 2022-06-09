import Footer from '../Footer/Footer'
import LeftSidebar from '../Gor/LeftSidebar/LeftSidebar'
import './Billing.scss'
import waifi from '../assets/BillingPot/waifi.svg'
import mastercard from '../assets/BillingPot/mastercard.png'
import salary from '../assets/BillingPot/salary.svg'
import paypal from '../assets/BillingPot/paypal_logo.svg'
import edit from '../assets/BillingPot/edit.png'
import visa from '../assets/BillingPot/visa.webp'

function Billing () {
	return (
		<div>
			<div className='grid_container'>
				<div className='grid_header'>Header</div>
				<div className='grid_said'><LeftSidebar /></div>
				<div className='grid_main'>
					<div>
						<img src={waifi} />
						<h5>4562   1122   4594   7852</h5>
						<div className='card'>
							<div className='card_info'>
								<div>
									<p>Card Holder</p>
									<h6>Jack Peterson</h6>
								</div>
								<div>
									<p>Expires</p>
									<h6>11/22</h6>
								</div>
							</div>
							<div>
								<img src={mastercard} />
							</div>
							
						</div>
					</div>
					<div className='salary'>
						<div className='img_salary'>
							<img src={salary} />
						</div>
						<div className='salary_info'>
							<h6>Salary</h6>
							<p>Belong Interactive</p>
						</div>
						<hr className='row'></hr>
						<div><h5>+$2000</h5></div>
					</div>
					<div className='paypal'>
						<div className='img_salary'>
							<img src={paypal} />
						</div>
						<div className='salary_info'>
							<h6>Paypal</h6>
							<p>Freelance Payment</p>
						</div>
						<hr className='row'></hr>
						<div><h5>$455.00</h5></div>
					</div>
					<div>4</div>
					<div>
						<div className='pay_method'>
							<h6>Payment Method</h6>
							<button>+ ADD NEW CARD</button>
						</div>
						<div className='master_visa'>
							<div className='master'>
									<img src={mastercard} />
									<h6>**** **** **** 7852</h6>
								<img className='edit' src={edit} width={5}/>
							</div>
							<div className='visa'>
									<img src={visa} />
									<h6>**** **** **** 5248</h6>
								<img className='edit' src={edit} width={5}/>
							</div>
						</div>
					</div>
					<div>6</div>
					<div>7</div>
				</div>
				<div className='grid_footer'><Footer /></div>
			</div>
		</div>
	)
}

export default Billing 