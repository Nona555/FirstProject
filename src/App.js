import './App.scss';
import Footer from './Footer/Footer'
import styles from './App.scss';
// import HamoApp from './Hamo/HamoApp';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/signin';
import SidebarRight from './SidebarRight/SidebarRight';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import LeftSidebar from './Gor/LeftSidebar/LeftSidebar';
import Billing from './Billing/Billing';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, isLoged } from './redux/action';

function App() {
  const [ location, setLocation ] = useState('/Dashboard');
  const [ data, setData ] = useState();
  const dispatch = useDispatch();
  // const count = useSelector(state => state.counterReducer);
  // const loged = useSelector(state => state.logReducer);
  const { counterReducer, logReducer } = useSelector(state => state)
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
      {location === '/SignIn' && <SignIn />}
      {location === '/Profile' && <Profile />}
      {(location === '/Dashboard' || location === "/") && <Dashboard />}
      {location === '/billing' && <Billing />}
      {/* {data && data.map(item => <div key={item.id}>{item.login}</div>)} */}
      {/* Counter {counterReducer}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(isLoged())}>Log out</button> */}
    </div>
  );
}

export default App;
