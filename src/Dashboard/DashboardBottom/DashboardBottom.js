import './DashboardBottom.scss'
import Projects from './ProjectsData/Projects'
import { ProjectsData } from './ProjectsData/ProjectsData'
function DashboardBottom() {
    return (
        <div className='DashboardBottom'>
            <div className='DashboardBottomItem1'>
                <div className="item1Head">
                    <div className='headTop'>
                        <h3>Projects</h3>
                        <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
                    </div>
                    <p><i class="fa-solid fa-check"></i> 30 done this month</p>
                </div>
                {ProjectsData.map((item,index) => <Projects iconSrc={item.iconSrc} name={item.name} members={item.members} price={item.price} key={index}  />)}
            </div>
            <div className='DashboardBottomItem2'></div>
        </div>
    )
}

export default DashboardBottom