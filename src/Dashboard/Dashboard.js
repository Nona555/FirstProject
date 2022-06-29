import './Dashboard.scss'
import DashboardHeader from "../Dashboard/DashboardHeader"
import LeftSidebar from '../Gor/LeftSidebar/LeftSidebar'
import DashboardBottom from "./DashboardBottom/DashboardBottom"
import DashboardMiddle from "./DashboardMiddle/DashboardMiddle"
import DashboardToday from "./DashboardToday/DashboardToday"
import { TodayDate } from './DashboardToday/TodayDate'
import DashboardTop from "./DashboardTop/DashboardTop"
import DashboardFooter from './dashboardFooter/DashboardFooter'
import Charts from "./Charts/Charts"

// import SidebarRight from "../SidebarRight/SidebarRight"
const Dashboard = () => {
    return (
        <div>
            <LeftSidebar />
            <main style={{ display: 'grid', gridGap: '20px' }}>
                <DashboardHeader />
                <div className="dayInfoContainer">
                    {TodayDate.map(item => <DashboardToday isGrow={item.isGrow === true ? 'rgb(130, 214, 22)' : 'rgb(234, 6, 6)'} todayGrow={item.todayGrow} todayInfo={item.todayInfo} todayCount={item.todayCount} todayIcon={item.todayIcon} />)}
                </div>
                <DashboardTop />
                <DashboardMiddle />
                <DashboardBottom />
                <DashboardFooter />
            </main>
        </div>
    )
}

export default Dashboard