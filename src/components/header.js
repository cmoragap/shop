import React, {useContext}  from 'react'
import '../css/styles.css'
import '../scss/app.scss'
import { ShoppingCartContext } from '../contexts/shoppingCartContext'

export default function Header() {
    const {selectedProducts} = useContext(ShoppingCartContext)
    return (
       
        <>
        <div className="blackBar"></div>
        <div data-testid="header-1" className="whiteBar"><img src="images/cartBlack.jpg" alt="logo" className="logoImg" /><span className="badge badge--small">{selectedProducts.length}</span></div>
        </>
    )
}
