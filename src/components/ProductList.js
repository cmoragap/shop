import React, {useContext} from "react";
import { ShoppingCartContext } from '../contexts/shoppingCartContext'
import Product from './product'
import '../css/styles.css'

const ProductList = () =>{
    const {products} = useContext(ShoppingCartContext)
    
    return (
        <div className="products">
          
                {products.map(product=>{
                    return <Product key={product.id} product={product}/>
                    
                })}
                
         
        </div>
    )
}
export default ProductList