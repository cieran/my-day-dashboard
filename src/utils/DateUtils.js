import React from 'react'
import NumberToWords from 'number-to-words'

export function getAMorPM(date) {
    if (date.getHours() < 11) {
        return <p>in the <strong className='uk-text-danger'>morning</strong>.</p>
    } else if (date.getHours() < 17) {
        return <p>in the <strong className='uk-text-danger'>afternoon</strong>.</p>
    } else if (date.getHours() < 20) {
        return <p>in the <strong className='uk-text-danger'>evening</strong>.</p>
    } else {
        return <p>at <strong className='uk-text-danger'>night</strong>.</p>
    }
}

export function get24HourFormat(hour) {
    if (hour === 0) {
        return 12
    } else if (hour > 12) {
        return (hour - 12)
    } else {
        return hour
    }
}

export function formatMinutes(minute) {
    let flag = false

    if (minute === 0) {
        minute = "o'clock"
    } else if (minute < 30 && minute !== 15) {
        minute = NumberToWords.toWords(minute) + ' past'
    } else if (minute === 15) {
        minute = 'quarter past'
    } else if (minute === 30) {
        minute = 'half past'
    } else if (minute > 30 && minute !== 45) {
        minute = Math.abs(60 - minute)
        minute = NumberToWords.toWords(minute) + ' to'
        flag = true
    } else if (minute === 45) {
        minute = 'quarter to'
        flag = true
    }

    let values = {
        minute: minute.replace("-", " "),
        flag
    }

    return values
}


