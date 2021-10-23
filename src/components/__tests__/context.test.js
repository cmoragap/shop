import React from "react"
import {render,cleanup,fireEvent} from '@testing-library/react'
import DecoBar from '../../components/decoBar'
import Summary from '../../components/purchaseSummary'
import ProductDet from '../../components/productDetail'

afterEach(()=>{
    cleanup()
})
test("Tiene_el_rótulo_correcto", () => {
    const {getByTestId} = render(<DecoBar/>);
    const headerElement = getByTestId("header")
    expect(headerElement.textContent).toBe("Shopping Cart")
  });

// test("modifica_cantidad",()=> {
//   const {getByTestId} = render(<ProductDet/>)
//   const plus_btn = getByTestId("plus_btn")
  
//   const qty = getByTestId("qty")
//   fireEvent.click(plus_btn)
//   expect(qty.value).toBe(1)


// })
