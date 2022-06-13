import './DashboardTop.scss'
import rocketImg from '../images/rocket.webp'
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
                    <a href="#">Read More</a>
                </div>
                <div className="rocket">
                    <img src={rocketImg} width="100%" />

                </div>
            </div>
            <div className='dashboardTopItem2'>
                <div className='develop'>
                    <h2>Work with the rockets</h2>
                    <p>Wealth creation is an evolutionarily recent positive-sum game.
                        It is all about who take the opportunity first.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default DashboardTop;