import React, { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import '../css/styles.css'

const ProductDetail = (props) => {
  const { changeProductQuantity,removeProduct} = useContext(ShoppingCartContext)
  
  function modProductQt(p,sign) {
    
    (props.product.qty===0 && sign === "-")? removeProduct(p):changeProductQuantity(p,sign)
    
  }

  return (
    <div className="summaryCard">
      <div >
        <img className="imgDet" src={props.product.img} alt="" />
      </div>
      <div style={{marginLeft:"15px"}}>
       
          <div >{props.product.description}</div>
       
          <div>{props.product.price}</div>
        
        <div className="buttonWrapper">
        
          <button className="buttonMinusPlus" onClick={()=>modProductQt(props.product.id,"-")} >-</button>
          <input value={props.product.qty} disabled={true} style={{width:"15px",textAlign:"center",border:"none"}}/>
          <button className="buttonMinusPlus" onClick={()=>modProductQt(props.product.id,"+")}>+</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
