import { TodayDate } from "./TodayDate";
import './Dashboard.scss'
function DashboardMain() {
    return (
        <main>
            <div className="dayInfoContainer">
                {TodayDate.map((item, index) => <DashboardMain key={index} todayInfo={item.todayInfo} todayCount={item.todayCount} todayIcon={item.todayIcon} />)}
            </div>
        </main>
    )
}
export default DashboardMain;