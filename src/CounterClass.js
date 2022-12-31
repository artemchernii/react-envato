// import React from "react";
import {Component} from "react";
import PropTypes from "prop-types";

export default class CounterClass extends Component {
    static defaultProps = {
        startAt: 0,
        countBy: 1,
    }
    static propTypes = {
        startAt: PropTypes.number,
        countBy: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {
            counter: props.startAt,
            inputVal: ''
        }

        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    countUp(e) {
        this.setState({
            counter: this.state.counter + this.props.countBy
        })
    }
    countDown(e) {
        this.setState({
            counter: this.state.counter - this.props.countBy
        })
    }

    increm =(e) => {
        this.setState({
            inputVal: e.target.value,
        })
    }

    render() {
        return(
            <>
                <h1>Class counter</h1>
                <p>Start at: {this.props.startAt}</p>
                <p>Count by: {this.props.countBy}</p>
                <h4>Counter: {this.state.counter}</h4>
                <button className="btn btn-primary" onClick={this.countUp}>
                    Count Up
                </button>
                <button className="btn btn-danger" onClick={this.countDown}>
                    Count Down
                </button>
                <input type="text" onChange={this.increm} />
                <h6>{this.state.inputVal}</h6>
            </>
        )
    }
}
