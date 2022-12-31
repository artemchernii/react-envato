import React from "react";
class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('Component did mount', performance.now())
        if (this.props.location) {
            console.log('location exist')
        }
    }


    render() {

        console.log('render NOW', performance.now())
        return (
            <div>Widget</div>
        )
    }
}
export default WeatherWidget;
