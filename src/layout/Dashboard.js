import React, { Component } from 'react'
import UnsplashTile from '../components/UnsplashTile'
import CalendarTile from '../components/CalendarTile'
import ClockTile from '../components/ClockTile'
import WeatherTile from '../components/WeatherTile'

class Dashboard extends Component {

    render() {
        return (
            <div className='uk-background-muted'>
                <div className='uk-flex uk-grid-match uk-child-width-1-3@s' uk-grid>
                    <ClockTile />
                    <CalendarTile />
                    <WeatherTile />
                </div>

                <UnsplashTile />
            </div >
        )
    }
}

export default Dashboard
