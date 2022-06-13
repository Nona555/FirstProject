import './App.scss';
import Footer from './Footer/Footer'
import styles from './App.scss';
// import HamoApp from './Hamo/HamoApp';
import SignUp from './SignUp/SignUp';
import SidebarRight from './SidebarRight/SidebarRight';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import LeftSidebar from './Gor/LeftSidebar/LeftSidebar';
import Billing from './Billing/Billing';

function App() {
  const [ location, setLocation ] = useState('/Dashboard');
  const [ data, setData ] = useState();
  useEffect(() => {
    setLocation(window.document.location.pathname);
    fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then(result => setData(result))
    .catch(err => console.log(err))
  }, [location])
  return (
    <div className='app'>
      {location === '/SignUp' && <SignUp />}
      {location === '/Profile' && <Profile />}
      {(location === '/Dashboard' || location === "/") && <Dashboard />}
      {location === '/billing' && <Billing />}
      {/* {data && data.map(item => <div key={item.id}>{item.login}</div>)} */}
    </div>
  );
}

export default App;
