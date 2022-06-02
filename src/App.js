import './App.scss';
// import Timer from './Timer/Timer';
// import Functional from './Functional/Functional';
// import Button from './Button/Button';
// import ColorfullDiv from './ColorfullDiv/ColorfullDiv';
// import HamoApp from './Hamo/HamoApp';
// import ToDo from './ToDoList/ToDo';
import Footer from './Footer/Footer'
import styles from './App.scss';
// import HamoApp from './Hamo/HamoApp';
import SignUp from './SignUp/SignUp';
import SidebarRight from './SidebarRight/SidebarRight';
import Profile from './Profile/Profile';
import Header from './Header/Header';

function App() {
  const location = window.document.location.pathname;
  return (
    <div className='app'>
      {/* <HamoApp /> */}
      {/* {location === '/SignUp' && <SignUp />} */}
      {/* {location === '/Profile' && <Profile />} */}
      <SidebarRight />
	  {/* <SignUp /> */}
      {/* <Footer /> */}
        {/* App */}
        {/* <Header /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
