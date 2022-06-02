import './SignUp.scss';
import allocation from '../assets/HeadrPot/allocation.png'
import user from '../assets/HeadrPot/user.png'
import user1 from '../assets/HeadrPot/user_(1).png'
import key from '../assets/HeadrPot/key.png'
import fac from '../assets/MainPot/facebook-logo-png-4.png'
import apple from '../assets/MainPot/i.webp'
import google from '../assets/MainPot/google-log.webp'
import Footer from '../Footer/Footer';

function SignUp() {
	return (
		<div className='containerUp'>
			<div className='bacImg'>
				<div className='headerUp'>
					<a href='#'>Soft UI Dashboard</a>
					<div className='navBar'>
						<a href='/Dashboard'> <img src={allocation}></img> <span>Dashboard</span></a>
						<a href='/Profile'> <img src={user}></img> <span>Profile</span> </a>
						<a href='/SignUp'> <img src={user1}></img> <span>Sign</span> Up</a>
						<a href='/SignIn'> <img src={key}></img> <span>Sign In</span></a>
					</div>
					<button>Free Download</button>
				</div>
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
					<input type='text' placeholder='Name'></input>
					<input type='email' placeholder='Email'></input>
					<input type='password' placeholder='Password'></input>
					<label>
					<input type='checkbox'></input>
					<span>I agree the</span>
					<a href='#'>Terms and Conditions</a>
					</label>
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