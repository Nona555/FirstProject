import './DashboardMiddle.scss'
import Charts from '../Charts/Charts'
import papers from '../DashBoardImages/papers.svg'
import click from '../DashBoardImages/click.svg'
import sales from '../DashBoardImages/sales.svg'
import puzzle from '../DashBoardImages/puzzle.svg'
function DashboardMiddle() {
    return (
        <div className='DashboardMiddle'>
            <div className='DashboardMiddleItem1'>
                <div className='empty' />
                {/* https://codepen.io/pen */}
                <div className='middleBottom'>
                    <div style={{ margin: '20px 0 0 20px', color: 'rgb(103, 116, 142)' }}>
                        <h4>Active Users</h4>
                        <p><b>(+23%)</b> than last week</p>
                    </div>
                    <div>
                        <div className='ucsi'>
                            <div>
                                <img style={{ background: 'linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128))' }} src={papers} />
                                <span>Users</span>
                            </div>
                            <div>
                                <img style={{ background: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))' }} src={click} />
                                <span>Clicks</span>
                            </div>
                            <div>
                                <img style={{ background: 'linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))' }} src={sales} />
                                <span>Sales</span>
                            </div>

                            <div>
                                <img style={{ background: 'linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))' }} src={puzzle} />
                                <span>Items</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div >
                            <h2>36K</h2>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '60px', height: '3px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '50px' }} />
                                <div style={{ position: 'absolute', width: '35px', height: '6px', background: 'rgb(52, 71, 103)', borderRadius: '50px' }} />
                            </div>
                        </div>
                        <div>
                            <h2>2M</h2>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '60px', height: '3px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '50px' }} />
                                <div style={{ position: 'absolute', width: '50px', height: '6px', background: 'rgb(52, 71, 103)', borderRadius: '50px' }} />
                            </div>
                        </div>
                        <div>
                            <h2>$435</h2>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '60px', height: '3px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '50px' }} />
                                <div style={{ position: 'absolute', width: '20px', height: '6px', background: 'rgb(52, 71, 103)', borderRadius: '50px' }} />
                            </div>
                        </div>
                        <div>
                            <h2>43</h2>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '60px', height: '3px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '50px' }} />
                                <div style={{ position: 'absolute', width: '25px', height: '6px', background: 'rgb(52, 71, 103)', borderRadius: '50px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DashboardMiddleItem2'>
            <div>
                <h3>Sales Overview</h3>
                <p><i style={{marginRight: '5px'}} class="fa-solid fa-arrow-up"></i><b>4% more</b> in 2021</p>
            </div>
                {/* <Charts /> */}
            </div>

        </div>
    )
}

export default DashboardMiddle