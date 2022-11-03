import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import { getAllProducts } from '../store/slices/products.slice'

const Home = () => {

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllProducts())
    }, [])
    

    console.log(products)

  return (
    <main className='home'>
        <div className='home__container'>
            {
                products?.map(product => (
                    <CardProduct 
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    </main>
  )
}

export default Home