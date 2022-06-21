import { tablesProject } from '../../Billing/FakeDate/FakeDate'
import show from '../../assets/TablesPhoto/projectsPhoto/show.svg'

function TableProjects() {
	return(
		<>
			{tablesProject.map( item => 
				<div className='project_main'>
					<div className='tabels_project_img'>
						<img src={item.img} />
						<span>{ item.name }</span>
					</div>
					<div style={{ width: '10%'}}> { item.budget } </div>
					<div style={{ width: '10%'}}> { item.status } </div>
					<div className='project_completion_canteiner'>
						<span> { item.completion } </span> 
						<div className='project_completion'>
							<div className='project_completion_lod' style={{ width: item.completion , background: item.background }}></div>
						</div>
					</div>
						<img src={show} />
				</div>
				)}
		</>
	)
	
}

export default TableProjects
