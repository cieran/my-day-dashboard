import React, { Component } from 'react'
import Unsplash, { toJson } from 'unsplash-js'


export default class Tile extends Component {
    constructor() {
        super();
        this.state = {
            imgs: '',
            loadingState: true
        };
    }

    componentDidMount() {
        this.getRandomPhoto();
    }

    getRandomPhoto() {
        unsplash.photos.getRandomPhoto({ featured: false })
            .then(toJson)
            .then(data => {
                console.log()
                this.setState({ imgs: data.urls.full })
            })
            .catch(err => {
                console.log('error occurred during unsplash fetch', err)
            })
    }

    render() {
        return (
            <div>
                <div className="main-content">
                    <img src={this.state.imgs} />
                </div>
            </div>
        )
    }
}
/*
const data = axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response))
*/

const unsplash = new Unsplash({
    applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY
})