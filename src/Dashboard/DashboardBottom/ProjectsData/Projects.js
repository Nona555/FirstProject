import './ProjectData.scss'
function Projects(props) {
    return (
        <div className='proj'>
            <div className='projStart'>
                <img className='icon' alt="iconSrc" src={props.iconSrc} />
                <h3>{props.name}</h3>
            </div>
            <div className='members'>
                <img className='member' alt="members" src={props.members} />
            </div>
            <p>{props.price}</p>
        </div>
    )
}
export default Projects;