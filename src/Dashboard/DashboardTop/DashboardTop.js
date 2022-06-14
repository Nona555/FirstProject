import './DashboardTop.scss'
// import rocketImg from '../DashboardImages/rocket.webp'
import rocketImg from '../DashBoardImages/rocket.webp'
function DashboardTop() {
    return (
        <div className='dashboardTop'>
            <div className='dashboardTopItem1'>
                <div className='itemOne'>
                    <div>
                        <h4>Build by developers</h4>
                        <h3>Soft UI Dashboard</h3>
                        <p>From colors, cards, typography to complex elements,
                            you will find the full documentation.</p>
                    </div>
                    <a href="#">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className="rocket">
                    <img alt='rocket' src={rocketImg} width="100%" />

                </div>
            </div>
            <div className='dashboardTopItem2'>
                <div className='develop'>
                    <h2>Work with the rockets</h2>
                    <p>Wealth creation is an evolutionarily recent positive-sum game.
                        It is all about who take the opportunity first.</p>
                    <a href="#">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}
export default DashboardTop;