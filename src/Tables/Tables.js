import Footer from '../Footer/Footer';
import LeftSidebar from '../Gor/LeftSidebar/LeftSidebar';
import SidebarRight from '../SidebarRight/SidebarRight';
import './Tables.scss';
import tam1 from '../assets/TablesPhoto/team-1.jpg';
import tam2 from '../assets/TablesPhoto/team-2.jpg';
import tam3 from '../assets/TablesPhoto/team-3.jpg'
import { tablesInfo } from '../Billing/FakeDate/FakeDate'
import { tablesProject } from '../Billing/FakeDate/FakeDate'
import TabelUserInfo from './TabelUserInfo/TabelUserInfo';
import TableProjects from './TableProjects/TableProjects';
import Header from '../Header/Header';

function Tables () {
	return (
		<div className='tables_container'>
			<LeftSidebar />
			<div className='tables_main_container'>
				<Header />
				<div className='main_container_user'>
					<h5>Authors table</h5>
					<div className='tables_title'>
						<div style={{width:'40%'}}>
							<p>AUTHOR</p>
						</div>
						<div className='tables_title_div'>
							<p>FUNCTION</p>
							<p style={{width:'20%'}}>STATUS</p>
							<p>EMPLOYED</p>
							<p>ACTION</p>
						</div>
					</div>
					<TabelUserInfo />
				</div>
				<div className='main_container_user'>
				<div className='tabels_project'>
						<h5>Projects table</h5>
						<div className='tabels_project_title'>
							<p>PROJECT</p>
							<div className='budget_status'>
								<p>BUDGET</p>
								<p>STATUS</p>
							</div>
							<p>COMPLETION</p>
							<p>ACTION</p>
						</div>
						<TableProjects />
					</div>
					</div>
				<div className='footer_container'>
					<Footer />
				</div>
			</div>
			<SidebarRight />
		</div>
	)
}

export default Tables