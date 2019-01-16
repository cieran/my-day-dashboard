import React from 'react'
import Image from './Image'

const ImageGallery = props => {

    const data = props.data
    const images = data.map(
        img => <Image key={img.id} description={img.description} username={img.user.username} likes={img.likes} portfolio={img.user.portfolio_url} src={img.urls.full} />
    )

    return (
        <div className='uk-grid' style={{ margin: '0 auto' }}>
            {images}
        </div >
    )
}

export default ImageGallery
