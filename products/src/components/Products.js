import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Products = () => {
  const { data } = useSelector(state => state.products)
  return (
    <Fragment>
      {
        data.map((product) => {
          return (
            <div className='card' key={product.id}>
              <Link to={` ${product.id}`}>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
              </Link>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default Products