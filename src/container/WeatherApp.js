import React, { Component } from 'react'; 
import { getWeatherInfo } from './../API'; 
import Toast from './../components/Toast'; 

export default class WeatherApp extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            city: '',
            weather: {}
        }; 
    }

    handleChangeInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value }); 
    }

    searchApi = async () => {
        const { city } = this.state;
        const { data } = await getWeatherInfo(city); 
        this.setState({ weather: data }); 
        console.log('Request Ajax', data); 
    }

    render() {
        const { city, weather } = this.state;
        return (
            <div>
                <input 
                    type="text"
                    name="city" 
                    placeholder="Enter City Name" 
                    value={city} 
                    onChange={this.handleChangeInput}/>

                <button 
                    type="button" 
                    onClick={this.searchApi}>Search</button>

                <hr />
                <Toast message="Toast Example" />
                { weather && weather.current ? 
                    <div className="weather-info">
                        <h2>{weather.current.weather_descriptions[0]}</h2>
                        <img src={weather.current.weather_icons} />
                        <h4>{weather.current.temperature} &#8451;</h4>
                    </div>    
                    : <p>Not Yet</p>                                        
                }    
            </div>
        ); 
    }

}