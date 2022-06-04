import './SignUp.scss';
import fac from '../assets/MainPot/facebook-logo-png-4.png'
import apple from '../assets/MainPot/i.webp'
import google from '../assets/MainPot/google-log.webp'
import Header from '../Header/Header';
import CustomCheckbox from '../Custom/CustomCheckbox/CustomCheckbox';

function SignUp() {
	return (
		<div className='containerUp'>
			<div className='bacImg'>
				<Header bgColor={'none'} color={'white'} icon={'white'} buttonBg={true}/>
				<div className='text'>
					<h1>Welcome</h1>
					<p>Use these awesome forms to login or create new account in your project for free.</p>
				</div>
			</div>
			<div className='mainUp'>
				<h4>Register with</h4>
				<div className='icon'>
					<button><img src={fac}></img></button>
					<button><img src={apple}></img></button>
					<button><img src={google}></img></button>
				</div>
				<p>or</p>
				<form>
					<input className='inp' type='text' placeholder='Name'></input>
					<input className='inp' type='email' placeholder='Email'></input>
					<input className='inp' type='password' placeholder='Password'></input>
					{/* <input type='checkbox' style={{ outline: 'none'}}></input> */}
					<div style={{ display: 'flex', marginBottom: 10}}>
						<CustomCheckbox label={'I agree'}/>
						<a href='#' style={{marginLeft: 5}}>Terms and Conditions</a>
					</div>
					<button>SIGN UP</button>
				</form>
				<div className='divsignIn'>
					<span>Already have an account?</span>
					<a href='#'>Sign in</a>
				</div>
				</div>
			<div>
			{/* <Footer /> */}
			</div>
		</div>
	)
	
}

export default SignUp