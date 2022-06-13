import DashboardHeader from "../Dashboard/DashboardHeader"
import LeftSidebar from '../Gor/LeftSidebar/LeftSidebar'
import './Dashboard.scss'
import DashboardBottom from "./DashboardBottom/DashboardBottom"
import DashboardMiddle from "./DashboardMiddle/DashboardMiddle"
import DashboardToday from "./DashboardToday/DashboardToday"
import { TodayDate } from './DashboardToday/TodayDate'
import DashboardTop from "./DashboardTop/DashboardTop"
// import SidebarRight from "../SidebarRight/SidebarRight"
const Dashboard = () => {
    return (
        <div>
            <LeftSidebar />
            <main style={{ display: 'grid', gridGap: '20px' }}>
                <DashboardHeader />
                <div className="dayInfoContainer">
                    {TodayDate.map(item => <DashboardToday todayInfo={item.todayInfo} todayCount={item.todayCount} todayIcon={item.todayIcon} />)}
                </div>
                <DashboardTop />
                <DashboardMiddle />
                <DashboardBottom />
            </main>
        </div>
    )
}

export default Dashboard