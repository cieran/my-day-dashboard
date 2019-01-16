import React from 'react'

const Image = props => (
    <div className='img-wrap uk-width-1-5'>
        <a href={props.portfolio} target='_blank'><img className='unsplash-img' src={props.src} alt={props.description} /></a>
        <div className='overlay'>
            <a className='text uk-link-heading' href={props.portfolio} target='_blank'>&#64;{props.username}</a>
            <p className='text uk-link-heading'><span role='img' aria-label='red heart emoji'>❤️</span>{props.likes}</p>
        </div>
    </div>
)



export default Image
