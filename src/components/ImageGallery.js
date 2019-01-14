import React from 'react'
import Image from './Image'

const ImageGallery = props => {

    const data = props.data
    const images = data.map(
        img => <Image key={img.id} src={img.urls.small} />
    )

    return (
        <div>
            {images}
        </div >
    )
}

export default ImageGallery
