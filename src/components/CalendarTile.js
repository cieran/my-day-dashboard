import React from 'react'

function CalendarTile() {

    let items = cal.sort((a, b) => a.timeFrom.localeCompare(b.timeFrom)).map(calendar =>
        <div className='uk-flex'>
            <div className='uk-width-1-2 uk-text-left uk-text-emphasis'>
                <p>{calendar.timeFrom + " - " + calendar.timeTo}</p>
            </div>
            <div className='uk-width-1-2 uk-text-right uk-text-warning'>
                <p>{calendar.description}</p>
            </div>
        </div>
    )
    return (
        <div className="uk-padding uk-padding-remove-bottom">
            <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 className="uk-card-title">What's The Plan Today?</h3>
                {items}
            </div>
        </div>
    )
}


let cal = [
    {
        timeFrom: '09:00',
        timeTo: '17:00',
        description: '🧠 Mental Health Ally Training'
    },
    {
        timeFrom: '19:00',
        timeTo: '20:00',
        description: '🛀🏻 Head Home to Relax'
    },
    {
        timeFrom: '18:00',
        timeTo: '18:45',
        description: '📞 HubSpot Video Interview'
    },
    {
        timeFrom: '07:45',
        timeTo: '08:45',
        description: '🚌 Head to Work'
    }

]

export default CalendarTile
