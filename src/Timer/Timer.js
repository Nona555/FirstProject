import React from "react";
// state
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    foo() {
        this.setState({ date: new Date() })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.foo(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    // componentDidUpdate() {
    //     console.log('updated');
    // }
    // componentWillUnmount() {
    //     console.log('Unmount');
    // }
    render () {
        console.log(this.state);
        return (
            <>
                <div>{this.props.name}</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </>
        )
    }
}

export default Timer;