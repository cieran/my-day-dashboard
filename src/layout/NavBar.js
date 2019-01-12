import React from 'react'
import './NavBar.css'


export default function NavBar() {


    return (
        <React.Fragment>
            <div className='navbar uk-background-secondary'>
                <nav className='uk-light'>
                    <p className="appName">My Day Dashboard</p>
                    <div className='nav-right'>
                        <img src={imgUrl} className='avatar' alt='avatar' />
                        <p className='uk-text-middle'>&#64;cieran</p>
                    </div>
                </nav>
            </div>
        </React.Fragment >

    )
}

const imgUrl = 'https://media.licdn.com/dms/image/C5603AQFI2uRT6Ki5ag/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=0aNCJh3icOoMEEOHncdkivDLyTxTfPIZSLmzyOxZEOs'