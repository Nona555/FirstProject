import LeftSidebar from "../Gor/LeftSidebar/LeftSidebar"
import Header from "../Header/Header"
import SidebarRight from "../SidebarRight/SidebarRight"
import Charts from "./Charts/Charts"

const Dashboard = () => {
    return (
        <div style={{ width: '100%', display: 'flex'}}>
            <LeftSidebar />
            {/* <Header /> */}
            <div style={{ marginLeft: 300}}>
                <Charts />
            </div>
            <SidebarRight />
        </div>
    )
}

export default Dashboard