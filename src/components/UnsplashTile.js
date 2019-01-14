import React, { Component } from 'react'
import Unsplash, { toJson } from 'unsplash-js'
import ImageGallery from './ImageGallery';


export default class UnsplashTile extends Component {
    constructor() {
        super();
        this.state = {
            imgs: [],
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
            <div className="uk-child-width-1-1@s uk-grid-match uk-padding" uk-grid>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title">Creative Inspiration</h3>
                    <ImageGallery data={this.state.imgs} />
                </div>
            </div>
        )
    }
}

const unsplash = new Unsplash({
    applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY
})