import React from 'react';

class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    fetchData() {
        fetch(`http://api.weatherstack.com/current?access_key=bf1119f5aadfbebca4f1f861d34fc032&query=${this.props.location}&units=f`).then(res => {
            return res.json()
        }).then(data => this.setState({data: data}));
    }

    componentDidMount() {
        if (this.props.location) {
            console.log('request made in componentDidMount');
            this.fetchData()
        }
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        if (prevProp.location !== this.props.location) {
            console.log('request made in componentDidUpdate');
            this.fetchData()
        }
    }

    render() {
        const data = this.state.data;

        if (!data) {
            return <></>;
        }

        return (
            <div className="card">
                <img src={data.current.weather_icons[0]} />
                <div className="card-body">
                    <h5 className="card-title">
                        {data && data.location.name}
                    </h5>
                </div>
                <div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Temp: {data.current.temperature}</li>
                        <li className="list-group-item">{data.current.weather_descriptions[0]}</li>
                        <li className="list-group-item">Wind: {data.current.wind_speed} {data.current.wind_dir}</li>
                        <li className="list-group-item">Humidity: {data.current.humidity}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default WeatherWidget;
