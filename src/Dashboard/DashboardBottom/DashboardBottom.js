import './DashboardBottom.scss'
import { OrdersDate } from './Orders/OrdersDate'
import Projects from './ProjectsData/Projects'
import { ProjectsData } from './ProjectsData/ProjectsData'
import OrdersMap from './Orders/OrdersMap'
function DashboardBottom() {
    return (
        <div className='DashboardBottom'>
            <div className='DashboardBottomItem1'>
                <div className="item1Head">
                    <div className='headTop'>
                        <h3>Projects</h3>
                        <p><i class="fa-solid fa-check"></i> 30 done this month</p>
                    </div>
                    <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
                </div>
                <div style={{ color: 'rgb(131, 146, 171)', display: 'flex', justifyContent: 'space-between', padding: '10px 15px' }}>
                    <h6>COMPANIES</h6>
                    <div style={{ display: 'flex', width: '58%', justifyContent: 'space-around' }}>
                        <h6>MEMBERS</h6>
                        <h6>BUDGET</h6>
                        <h6>COMPLETION</h6>
                    </div>
                </div>
                {ProjectsData.map((item, index) => <Projects progressItem2={item.progressItem2} iconSrc={item.iconSrc} name={item.name} members={item.members} price={item.price} key={index} />)}
            </div>
            <div className='DashboardBottomItem2'>
                <h2>Orders overview</h2>
                <p><i style={{ marginRight: '5px' }} class="fa-solid fa-arrow-up"></i><b>24%</b> this month</p>
                {OrdersDate.map((item, index) => <OrdersMap key={index} orderName={item.orderName} orderIcon={item.orderIcon} orderDate={item.orderDate} />)}
            </div>
        </div>
    )
}

export default DashboardBottom