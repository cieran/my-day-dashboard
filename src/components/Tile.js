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
        unsplash.photos.listPhotos(1, 5, "popular")
            .then(toJson)
            .then(data => {
                this.setState({ imgs: data })
            })
            .catch(err => {
                console.log('error occurred during unsplash api GET', err)
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

const unsplash = new Unsplash({
    applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY
})