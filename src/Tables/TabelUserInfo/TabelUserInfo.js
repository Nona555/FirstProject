import classNames from 'classnames'
import { tablesInfo } from '../../Billing/FakeDate/FakeDate'

function TabelUserInfo() {
	return (
		<div >
			{tablesInfo.map(item =>
				<div className='tables_user_info'>
					<div className='tables_img_user'>
						<img src={ item.img } alt={ item.img } />
						<div>
							<h5>{ item.name }</h5>
							<p>{ item.creative }</p>
						</div>
					</div>
					<div className='tables_info_user'>
						<div style={{width:'20%'}}>
							<h6>{ item.stat }</h6>
							<p>{ item.job }</p>
						</div>
						<div className={classNames('bgstatus', {
							'bgstatusonline': item.status === 'ONLINE',
							'bgstatusOffline': item.status === 'OFFLINE'
						})}>{ item.status }</div>
						<p>{ item.data }</p>
						<a href='#'>Edit</a>
					</div>
				</div> 
			)}
		</div>
	)
}

export default TabelUserInfo