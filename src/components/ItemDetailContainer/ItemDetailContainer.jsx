import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductByCategory, getProductById } from '..//NavBar/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductByCategory()
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })

}, [])

return (
    <div className='ItemDetailContainer bg-body-secondary p-3'>
        <ItemDetail {...product} />
    </div>
    )
}

export default ItemDetailContainer