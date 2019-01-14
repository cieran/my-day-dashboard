import React from 'react'
import './NavBar.css'


export default function NavBar() {

    const imgUrl = 'https://media.licdn.com/dms/image/C5603AQFI2uRT6Ki5ag/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=0aNCJh3icOoMEEOHncdkivDLyTxTfPIZSLmzyOxZEOs'

    return (
        <React.Fragment>
            <nav className="uk-light uk-background-secondary" uk-navbar="boundary-align: true; align: center;">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="https://github.com/cieran/my-day-dashboard" target="_blank">MY DAY DASHBOARD</a>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="http://twitter.com/cieranneeson" target="_blank">@cieran</a>
                        </li>
                        <li>
                            <a href="http://linkedin.com/in/cieranneeson" target="_blank"><img src={imgUrl} className='avatar' alt='avatar' /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>

    )
}

