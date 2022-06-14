import '../Dashboard.scss'
function DashboardToday(props) {
    console.log(props.isGrow);
    return (
        <div className="dayInfo">
            <div>
                <h5>{props.todayInfo}</h5>
                <div className='digitals'>
                    <h3>{props.todayCount}</h3>
                    <p style={{color: `${props.isGrow}`}}>{props.todayGrow}</p>
                </div>
            </div>
            <img alt='grow'  src={props.todayIcon} />
        </div>
    )
}

export default DashboardToday