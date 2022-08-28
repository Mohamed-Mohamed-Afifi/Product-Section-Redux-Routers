import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
function SingleProduct() {
    const { productId } = useParams()
    const data = useSelector(state => state.products.data)
    const product = data.find((el) => el.id == productId)
    console.log(product)
    console.log(productId)
    return (
        <div>
            <div className='card'>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <Link to='/products' >Back</Link>
            </div>
        </div>
    )
}

export default SingleProduct