import LeftSidebar from "../Gor/LeftSidebar/LeftSidebar";
import home from './assets/home.svg';
import search from './assets/search.svg';
import user from './assets/user1.svg';
import setting from './assets/setting.svg';
import bell from './assets/bell.svg';
import gjuk from './assets/gjuk.jpg';
import box from './assets/box.svg';
import message from './assets/message.svg';
import settings from './assets/settings.svg';
import "./Profile.scss";


function Profile() {
    return (
        <div className="Profile">
            <LeftSidebar />
            <div className="ProfilePage">
                <div className="ProfileHearder">
                    <div className="LeftPart">
                        <span>
                            <a href="/Dashboard">
                                <img src={home} />
                            </a>
                            <p>
                                / Profile
                            </p>
                        </span>
                        <h3 style={{color:"white"}}>Profile</h3>
                    </div>
                    <div className="RightPart">
                        <div className="InputDiv">
                            <img src={search} />
                            <input  type={Text} placeholder="Type here . .">

                            </input>
                        </div>
                        <a style={{display: "flex", alignItems: "center"}} href="/SignIn">
                            <img src={user} />
                            <p>
                                Sign In 
                            </p>
                        </a>
                        <a href="#">
                            <img src={setting}  alt="setting"/>
                        </a>
                        <a href="#">
                            <img src={bell}  alt="bell"/>
                        </a>
                    </div>
                </div>
                <div className="ProfyleTitle">
                    <div className="UserDiv">
                        <img src={gjuk} />
                        <div>
                            <h3>Alex Thompson</h3>
                            <p>CEO / Co-Founder</p>
                        </div>
                    </div>
                    <div className="UserLinks">
                        <a href="#">
                            <img src={box} />
                            App
                        </a>
                        <a href="#">
                            <img src={message} />
                            Message
                        </a>
                        <a href="#">
                            <img src={settings} />
                            Settings
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;