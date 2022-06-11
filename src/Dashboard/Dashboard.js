import LeftSidebar from "../Gor/LeftSidebar/LeftSidebar"
import DashboardHeader from "./DashboardHeader"
import DashboardMain from "./DashBoardMain"

const Dashboard = () => {
    return (
        <div style={{ display: 'flex',background: '#f8f9fa',height: '100vh'}}>
            <LeftSidebar />
            <div style={{ display: 'flex',flexDirection: 'column',width: '78%',overflow:'auto'}}>
                <DashboardHeader />
                <DashboardMain />
            </div>
            {/* <SidebarRight /> */}
        </div>
    )
}

export default Dashboard