import Footer from '../Footer/Footer'
import LeftSidebar from '../Gor/LeftSidebar/LeftSidebar'
import './Billing.scss'
import waifi from '../assets/BillingPot/waifi.svg'
import mastercard from '../assets/BillingPot/mastercard.png'
import salary from '../assets/BillingPot/salary.svg'
import paypal from '../assets/BillingPot/paypal_logo.svg'
import edit from '../assets/BillingPot/edit.png'
import visa from '../assets/BillingPot/visa.webp'
import SidebarRight from '../SidebarRight/SidebarRight'
import { monthtData } from './FakeDate/FakeDate'
import { cardData } from './FakeDate/FakeDate'
import pdf from '../assets/BillingPot/pdf.jpg'
import bucket from '../assets/BillingPot/bucket.svg'
import Transaction from './components/Transactions/Transactions'
import './Billing.scss'
function Billing () {
	return (
		<div>
			<div className='grid_container'>
				<LeftSidebar />
				<div className={'wholeRightSide'} >
					<div className='grid_header'>Header</div>
					<div className='grid_main'>
					<div>
						<img src={waifi} alt="waifi"/>
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
								<img src={mastercard} alt="mastercard"/>
							</div>
							
						</div>
					</div>
					<div className='salary'>
						<div className='img_salary'>
							<img src={salary} alt="salary" />
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
							<img src={paypal} alt="paypal"/>
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
						<div className='invoices_div'>
							<h6>Invoices</h6>
							<button className='view_button'>VIEW ALL</button>
						</div>
						<div>
							{monthtData.map(item => 
								<div className='container_month_info'>
									<div className='month_info'>
										<h5>{item.month}</h5>
										<p>{item.code}</p>
									</div>
									<div className='money_info'>
										<p>{item.money}</p>
										<div style={{display: "flex" ,  alignItems: 'center' }}>
											<img src={pdf} alt="pdf" />
											<span>PDF</span>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div>
						<div className='pay_method'>
							<h6>Payment Method</h6>
							<button>+ ADD NEW CARD</button>
						</div>
						<div className='master_visa'>
							<div className='master'>
									<img src={mastercard} alt="mastercard"/>
									<h6>**** **** **** 7852</h6>
								<img className='edit' src={edit} width={5} alt="edit" />
							</div>
							<div className='visa'>
									<img src={visa} alt="visa"/>
									<h6>**** **** **** 5248</h6>
								<img className='edit' src={edit} width={5} alt="edit"/>
							</div>
						</div>
					</div>
 
					<div>6</div>
					<div>7</div>
			<div>
						<h6 style={{marginBottom: '50px'}}>Billing Information</h6>
						{ cardData.map(item => 
							<div className='user_card_info'>
								<div className='name_info'>
									<h6>{item.name}</h6>
									<div className='buttom_delete_edit'>
										<button className='buttom_delete'>
											<img src={bucket} alt="bucket" />DELETE
										</button>
										<button className='buttom_edit'>
											<img src={edit} alt="edit" />EDIT
										</button>
									</div>
								</div>
								<div>
									<div className='flex'><p>Company Name:</p><span>{item.Company}</span></div>
									<div className='flex'><p>Email Address:</p><span>{item.Email}</span></div>
									<div className='flex'><p>VAT Number:</p><span>FRB1235476 </span></div>
								</div>
							</div>
							) }
					</div>
					<Transaction />
					</div>
					<div className='grid_footer'><Footer /></div>
				</div>
				<SidebarRight />
			</div>
		</div>
	)
}

export default Billing 