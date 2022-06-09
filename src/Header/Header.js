import './Header.scss';
import profile from '../assets/icons/user.png'
import user from '../assets/icons/uss.png'
import key from '../assets/icons/key1.png'
import dash from '../assets/icons/dash.png'

import userEvent from '@testing-library/user-event';

function Header() {
    return (
        <div className='header'>
            <div className='inner_header'>
                <div className='logo_container'>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                    <p> Soft UI Dashbord </p>
                    </div>
                    <ul className='navigation'>
                     <a><li>
                     <img style={{width: 18, marginRight: 5}} src={dash}/>
                        Dashboard
                        </li></a>
                     <a><li>
                        <img style={{width: 18, marginRight: 5}} src={profile}/>
                        Profile
                    </li></a>
                     <a><li>
                       <img style={{width:18,marginRight:5}} src={user}/>
                        Sign Up 
                        </li></a>
                     <a><li>
                     <img style={{width:18,marginRight:5}} src={key}/>
                        
                        Sign In 
                        
                        </li></a>
                    </ul>
                    <button className='button'>FREE DOWNLOAD</button>
                </div>
            </div>
           
        
    )
}

export default Header;