import React,{useContext} from 'react'
import { ShoppingCartContext } from '../contexts/shoppingCartContext'
import ProductDetail from './productDetail'
import '../css/styles.css'

const PurchaseSummary = () =>{
    const {total,selectedProducts} = useContext(ShoppingCartContext)
    function showTotal(){
        console.log("total",total)
        console.log("prod seleccionados",selectedProducts)
    }
   
    return (
        <div className="summaryContainer">
            <div className="summaryProducts">
                {selectedProducts.map((product,index)=>{
                    return <ProductDetail key={index} product={product}/>
                    
                })}
                
            </div>
            <div className="summaryTotal">
                <h4>Order Summary</h4>
                <p>{` Sub Total: ${total}`}</p>
                <button className="buttonBlack" onClick={()=>showTotal()}>ChekOut</button>
            </div>
            
        </div>
    )
}
export default PurchaseSummary
