import dashboardBlackIcon from './assets/icons/dash.png';
import profileBlackIcon from './assets/icons/uss.png';
import signUpBlackIcon from './assets/icons/user.png';
import keyBlackIcon from './assets/icons/keey.png';
import dashWhite from './assets/icons/whiteCircle.svg';
import profileWHite from './assets/icons/whiteUser.svg';
import whiteSignUp from './assets/icons/signup.svg';
import whiteKey from './assets/icons/key.svg';

export const headerData = [
    {
        blackIcon: dashboardBlackIcon,
        whiteIcon: dashWhite,
        iconAlt: 'Dashboard',
        name: 'Dashboard',
        path: '/Dashboard' 
    },
    {
        blackIcon: profileBlackIcon,
        whiteIcon: profileWHite,
        iconAlt: 'Profile',
        name: 'Profile',
        path: '/Profile' 
    },
    {
        blackIcon: signUpBlackIcon,
        whiteIcon: whiteSignUp,
        iconAlt: 'Sign Up',
        name: 'SignUp',
        path: '/SignUp' 
    },
    {
        blackIcon: keyBlackIcon,
        whiteIcon: whiteKey,
        iconAlt: 'Key',
        name: 'Sign In',
        path: '/SignIn' 
    }
]