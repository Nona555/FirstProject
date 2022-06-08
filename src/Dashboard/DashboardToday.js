import './Dashboard.scss'
function DashboardToday(props) {
    return (
            <div className="dayInfo">
                <div>
                    <h5>{props.todayInfo}</h5>
                    <h3>{props.todayCount}</h3>
                </div>
                <i className={props.todayIcon} />
            </div>
    )
}

export default DashboardToday