import LeftSidebar from "../Gor/LeftSidebar/LeftSidebar"
import Header from "../Header/Header"
import SidebarRight from "../SidebarRight/SidebarRight"

const Dashboard = () => {
    return (
        <div style={{ display: 'flex'}}>
            <LeftSidebar />
            {/* <Header /> */}
            <SidebarRight />
        </div>
    )
}

export default Dashboard