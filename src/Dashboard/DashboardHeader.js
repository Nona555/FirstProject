import './Dashboard.scss';

function DashboardHeader() {
    return (
        <header>
            <div className='dashLeft'>
                <p><i classNamee="fa-solid fa-house"></i> / Dashboard</p>
                <h4>Dashboard</h4>
            </div>
            <div className='dashRight'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type='text' placeholder='Type here...' />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(52 71 103)',width: '30%',justifyContent: "space-between"}}>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <i className="fa-solid fa-circle-user" style={{ marginRight: '5px' }}></i>
                        <p><b>Sign in</b></p>
                    </div>

                    <i className="fa-solid fa-gear" style={{ color: 'rgb(52 71 103)' }}></i>
                    <i className="fa-solid fa-bell" style={{ color: 'rgb(52 71 103)' }}></i>

                </div>

            </div>
        </header>
    )
};

export default DashboardHeader;