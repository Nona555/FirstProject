import './LeftSidebar.scss';
import logo from './assets/logo.png'
import shop from './assets/shop.svg'
import building from './assets/building.svg'
import bankCard from './assets/bank-card.svg'
import rocket from './assets/rocket.svg'
import signing from './assets/signing.svg'
import profile from './assets/profile.svg'
import star from './assets/star.svg';
import { useSelector } from 'react-redux';

function LeftSidebar () {
    const backgroundColor = useSelector(state => state.colorReducer);
    console.log(backgroundColor);
    return(
        <div className="LeftSidebar">
            <div className='title'>
                <a href='/Dashboard'>
                    <span>                    
                        <img  src={logo} />
                        Soft UI Dashborad
                    </span>
                </a>
            </div>
            <hr />
            <ul>
                <li>
                    <a href='/Dashboard' className='links'>
                        <div>
                            <img src={shop} />
                        </div>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href='/tables' className='links'>
                        <div>
                            <img src={building} />
                        </div>
                        Tables
                    </a>
                </li>
                <li>
                    <a href='/billing' className='links'>
                        <div>
                            <img src={bankCard} />
                        </div>
                        Billing
                    </a>
                </li>
                <span className='accaunts-title'>ACCAUNT PAGES</span>
                <li>
                    <a href='/Profile' className='links'>
                        <div>
                            <img src={profile} />
                        </div>
                        Profile
                    </a>
                </li>
                <li>
                    <a href='/SignIn' className='links'>
                        <div>
                            <img src={signing} />
                        </div>
                        Sign In
                    </a>
                </li>
                <li>
                    <a href='/SignUp' className='links'>
                        <div>
                            <img src={rocket} />
                        </div>
                        Sign Up
                    </a>
                </li>
            </ul>
            <div className='documentation-card' style={{background: backgroundColor}}>
                <div className='card'>
                    <div className='star'>
                        <img src={star} />
                    </div>
                    <span>Need help?</span>
                    <p>Please check our docs</p>
                    <div className='documentation-button'>
                        DOCUMENTATION
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default LeftSidebar;