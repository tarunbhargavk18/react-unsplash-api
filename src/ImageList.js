import React from 'react'

const ImageList = (props) => {
    return props.result.map((image) => {
        return <img key={image.id} src={image.urls.regular}/>
    })
}




export default ImageList;