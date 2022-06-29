import Members from './Members';
import './ProjectData.scss'
function Projects(props) {
    return (
        <div className='proj'>
            <div className='projStart'>
                <img className='icon' alt="iconSrc" src={props.iconSrc} />
                <h3>{props.name}</h3>
            </div>
            <div className='members'>
                {props.members.map(item => <Members imgSrc={item} />)}
            </div>
            <p>{props.price}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '140px', height: '3px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '50px' }} />
                <div className={props.progressItem2} />
            </div>
        </div>
    )
}
export default Projects;