import './Header.scss';

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
                     <a><li> Dashboard</li></a>
                     <a><li>Profile </li></a>
                     <a><li>Sign Up </li></a>
                     <a><li>Sign In </li></a>
                    </ul>
                    <button className='button'>FREE DOWNLOAD</button>
                </div>
            </div>
           
        
    )
}

export default Header;