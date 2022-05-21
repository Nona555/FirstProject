import React from "react";
import Profile from "../Profile/Profile";
import { users } from "./fakeData";

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickHandler: false,
            username: null,
            password: null,
            user: null
        }
        // this.turnOn = this.turnOn.bind(this)
        // this.setName = this.setName.bind(this)
        this.checkInfo = this.checkInfo.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)

    }

    turnOn() {
        // this.setState({clickHandler: !this.state.clickHandler})
        this.setState(prev => ({clickHandler: !prev.clickHandler}))
    }

    // setName(e) {
    //     this.setState({username: e.target.value})
    // }

    // setPassword(e) {
    //     this.setState({password: e.target.value})
    // }

    onChangeHandler(e) {
        // console.log(e.target.id);
        this.setState({[e.target.id]: e.target.value })
    }

    checkInfo() {
        let user = users.find(item => item.username === this.state.username && item.password === this.state.password);
        console.log(user);
        this.setState({user: user})
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {/* <button onClick={() => this.turnOn()}>
                    {this.state.clickHandler ? 'Turn on' : 'Turn off'}
                </button> */}
                {!this.state.user && 
                    <div>
                        <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' onChange={this.onChangeHandler} />
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password'
                    onChange={this.onChangeHandler}/>
                    <button onClick={this.checkInfo}>Sign In</button>
                    </div>
                }
                {this.state.user && <Profile username={this.state.user.username}/>}
            </div>
        )
    }
}

export default Button;