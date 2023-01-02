import { useState, useRef } from 'react';
import WeatherWidget from './WeatherWidgetClass';
// import WeatherWidget from './WeatherWidget';

export default function WeatherApp() {
    const [location, setLocation] = useState('');
    const locationInput = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('loc input: ', locationInput);

        setLocation(locationInput.current.value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card p-5" style={{ width: '20rem' }}>
                    <form className="row row-cols-lg-auto mb-3 align-items-center justify-content-center">
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                ref={locationInput}
                            />
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Get
                            </button>
                        </div>
                    </form>
                    {/* <WeatherWidget location={location} /> */}
                    <WeatherWidget location={location} />
                </div>
            </div>
        </div>
    );
}
