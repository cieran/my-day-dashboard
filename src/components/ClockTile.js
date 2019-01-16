import NumberToWords from 'number-to-words'
import date from 'date-and-time'
import { getAMorPM, get24HourFormat, formatMinutes } from '../utils/DateUtils'

import React, { Component } from 'react'

class ClockTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date()
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    tick() {
        this.setState({
            now: new Date()
        })
    }

    render() {
        let day = NumberToWords.toWordsOrdinal(this.state.now.getDay())
        let month = date.format(this.state.now, 'MMMM').toLocaleLowerCase()
        let year = NumberToWords.toWords(this.state.now.getFullYear())

        let minuteFormatted = formatMinutes(this.state.now.getMinutes().toString())

        let minute = minuteFormatted.minute
        let hour = NumberToWords.toWords(get24HourFormat(this.state.now.getHours()))

        if (minuteFormatted.flag) {
            hour = NumberToWords.toWords(
                get24HourFormat(
                    this.state.now.getHours() + 1
                )
            )
        }

        let timeOfDay = getAMorPM(this.state.now)

        let second = this.state.now.getSeconds()

        return (
            <div className="uk-padding uk-padding-remove-bottom" >
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title">Hi, Cieran! Today is..</h3>
                    <div className='date date-month'><strong className='uk-text-success'>{month}</strong></div>
                    <div className='date date-day uk-text-primary'>{day}</div>
                    <div className='date date-year uk-text-danger'>{year.replace(",", " and")}</div>
                    <p>and the time is..</p>
                    <div className='time time-minute uk-text-success'>{minute}</div>
                    <div className='time time-hour uk-text-primary'>{hour}</div>
                    <div className='time time-of-day'>{timeOfDay}</div>


                </div>
            </div>
        )
    }
}

export default ClockTile
