import {render,screen,cleanup} from '@testing-library/react'
import ShoppingCartContext from '../../contexts/shoppingCartContext'
import ProductList from '../../components/ProductList'
afterEach(()=>{
    cleanup()
})
test("Trajo uno de los datos", () => {
    render(
      <ShoppingCartContext.Provider value={{products}}>
        <ProductList />
      </ShoppingCartContext.Provider>
    );
    expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
  });