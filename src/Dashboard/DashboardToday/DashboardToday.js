import '../Dashboard.scss'
function DashboardToday(props) {
    return (
        <div className="dayInfo">
            <div>
                <h5>{props.todayInfo}</h5>
                <div className='digitals'>
                    <h3>{props.todayCount}</h3>
                    <p style={{color: `${props.isGrow}`}}>{props.todayGrow}</p>
                </div>
            </div>
            <i class={props.todayIcon}></i>
        </div>
    )
}

export default DashboardToday