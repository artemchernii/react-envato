import { useState, useEffect } from 'react';

const WeatherWidget = ({ location, title }) => {
    const [data, setData] = useState(null);
    console.log('data: ', data);
    useEffect(() => {
        if (location) {
            fetch(`http://api.weatherstack.com/current?access_key=bf1119f5aadfbebca4f1f861d34fc032&query=${location}&units=f`).then(res => {
                return res.json()
            }).then(obj => setData(obj));
        }
    }, [location]);

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
            { location && <div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Temp: {data.current.temperature}</li>
                    <li className="list-group-item">{data.current.weather_descriptions[0]}</li>
                    <li className="list-group-item">Wind: {data.current.wind_speed} {data.current.wind_dir}</li>
                    <li className="list-group-item">Humidity: {data.current.humidity}</li>
                </ul>
            </div>}
        </div>
    );
};

export default WeatherWidget;
