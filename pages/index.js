import {data} from '../GalleryData.js'

function ArtImage({imageUrl, name}) {
    return (
        <div className='art-img d-flex flex-row justify-content-center align-items-center h-300'>
            <div className='art-img d-flex flex-row justify-content-center align-items-center h-300'>
                <img className='contain-fit' src={imageUrl} width="300" alt={name} />
            </div>
        </div>
    )
}

function ArtInfo({name, description, price}) {
    return (
        <div className='art-info'>
            <div className='box art-info'>
                <div className='text-truncate w-200 art-info h3'>{name}</div>
                <div>{description}</div>
                <div>${price}</div>
            </div>
        </div>
    )
}

function ArtCard({id, name, description, imageUrl, price}) {
    return (
        <div className="col-xs-12 col-ms-12 col-md-6 col-lg-4">
            <div className="card card-height p-4 mt-4">
                <ArtImage imageUrl={imageUrl} name={name} />
                <ArtInfo id={id} name={name} description={description} price={price} />
            </div>
        </div>
    )
}

const IndexPage = () => {
    const {id, name, description, imageUrl, price} = data[0]
    return (
        <div className="container gallery-list">
            <h1>Art Gallery</h1>
            <div className='row'>
                {data.map((art) => {
                    const {id, name, description, imageUrl, price} = art
                    return (
                        <ArtCard id={id} imageUrl={imageUrl} name={name} description={description} price={price} />
                    )
                })}
            </div>
        </div>
    )
}

export default IndexPage