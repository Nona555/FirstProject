import './SignIn.scss';
import Header from '../Header/Header';
import CustomCheckbox from '../Custom/CustomCheckbox/CustomCheckbox';
import back from '../assets/signinpot/background.jpg';
import Footer from '../Footer/Footer';

function SignIn(){
    return(
        <div className='signin'>
            <Header />
            <div className='text'>
                <h3>Welcome back</h3>
                <p>Enter your email and password to sign in</p>
                <form>
                    <label for='email'>Email</label>
                    <input className='inp' type='email' placeholder='Email'></input>
                    <label for='password'>Password</label>
                    <input className='inp' type='password' placeholder='Password'></input>
                    <div style={{ display: 'flex', marginBottom: 10}}>
                        <CustomCheckbox label={'Remember me'}/>
                        <a href='#' style={{marginLeft: 5}}></a>
                    </div>
                    <button>SIGN IN</button>
                <div className='divsignUp'>
                    <span>Don't have an account?</span>
                    <a href='#'>Sign up</a>
			    </div>
                </form>
            </div>
            <div className='image'>
                <img src={back} className='backimg' alt='backimg' />
                
            </div>
            

        </div>
    )
}










export default SignIn;