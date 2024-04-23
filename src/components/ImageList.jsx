import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({images}){
    const renderImage = image.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })

    return(
        <div className='image-list'>
            {renderImage}
        </div>
    )
}

export default ImageList
