import React, { Component } from 'react'
import axios from 'axios'
import d2d from 'degrees-to-direction'

class WeatherTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            loading: true
        }

        this.getWeatherData = this.getWeatherData.bind(this)
    }

    componentDidMount() {
        this.getWeatherData()
    }

    getWeatherData() {
        const appId = process.env.REACT_APP_WEATHER_API_KEY

        axios.get('http://api.openweathermap.org/data/2.5/forecast?appid=785c3ca28bdd739c22acd18cbd663f2e&id=7778677&units=metric&cnt=2')
            .then(res => {
                const weather = res.data
                console.log(weather)
                this.setState(function () {
                    return {
                        loading: false,
                        weather: weather
                    }
                })
            })
            .catch(err => {
                console.log('error occurred during weather api GET', err)
            })
    }


    render() {
        return this.state.loading === true ?
            <div className="uk-padding uk-padding-remove-bottom" >
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title">Fetching the Weather..</h3>
                </div>
            </div>
            :
            <div className="uk-padding uk-padding-remove-bottom" >
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title">{this.state.weather.city.name} Weather</h3>
                    <img src={'http://openweathermap.org/img/w/' + this.state.weather.list[0].weather[0].icon + '.png'} />
                    <p style={{ textTransform: 'capitalize' }}>{this.state.weather.list[0].weather[0].description}</p>
                    <p>Temperature of {Math.floor(this.state.weather.list[0].main.temp)}<span>&#176;c</span></p>
                    <p>Wind Speed of {Math.floor(this.state.weather.list[0].wind.speed * 3.6)}km/h {d2d(this.state.weather.list[0].wind.deg)}</p>
                </div>
            </div >
    }
}

export default WeatherTile