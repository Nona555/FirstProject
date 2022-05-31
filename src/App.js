import './App.scss';
// import Timer from './Timer/Timer';
// import Functional from './Functional/Functional';
// import Button from './Button/Button';
// import ColorfullDiv from './ColorfullDiv/ColorfullDiv';
// import HamoApp from './Hamo/HamoApp';
// import ToDo from './ToDoList/ToDo';
import Footer from './Footer/Footer'
import styles from './App.scss';
import HamoApp from './Hamo/HamoApp';
import SignUp from './Hamo/SignUp/SignUp';
import SidebarRight from './Hamo/Homeworc2/SidebarRight/SidebarRight';
import Profile from './Profile/Profile';

function App() {
  const location = window.document.location.pathname;
  return (
    <div className='app'>
      {/* <HamoApp /> */}
      {location === '/SignUp' && <SignUp />}
      {location === '/Profile' && <Profile />}
      {/* <SidebarRight /> */}
      {/* <Footer /> */}
        {/* App */}
    </div>
  );
}

export default App;
