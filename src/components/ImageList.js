import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.result.map(({description, id, urls}) => {
        return <ImageCard alt={description} key={id} src={urls.regular}/>
    })

    return <div className="image-list">{images}</div>
}

export default ImageList;