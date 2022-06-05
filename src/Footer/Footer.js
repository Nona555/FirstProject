import  './Footer.scss'

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className='footerNavigation'>
                    <a href="#">Company</a>
                    <a href="#">About us</a>
                    <a href="#">Team</a>
                    <a href="#">Product</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                </div>
                <div className='footerSocial'>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-square"></i></a> 
                    <a href="https://www.twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.pinterest.com/" target="_blank"><i className="fa-brands fa-pinterest"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    
                </div>
                <p>Copyright © 2021 Soft by Creative Tim.</p>
            </div>
        </footer>
    )
}
export default Footer;