import React, {useContext} from 'react'
import { ShoppingCartContext } from '../contexts/shoppingCartContext'
import '../css/styles.css'

const Product = (props) =>{
    const {addSelectedProduct} = useContext(ShoppingCartContext)
    function setSelected(p){
        addSelectedProduct(p)
        
        
    }
   
    
    return (
        <div className="card">
                <div className="imgMain">
                <img src={props.product.img} alt="" width="100px"/>
                </div>
                <br/>
                <p className="centerAlign">{`Description ${props.product.description}`}</p>
                <h5 className="centerAlign">{`Price: ${props.product.price}`}</h5>
                
                <div>
                <button className="buttonWhite" onClick={()=>setSelected(props.product)}>Add to cart</button>
                </div>
            
        </div>
    )
}
export default Product

