import './scss/app.scss'
import ProductContextProvider from './contexts/shoppingCartContext'
import ProductList from './components/ProductList'
import Header from './components/header'
import PurchaseSummary from './components/purchaseSummary'
import DecoBar from './components/decoBar'

function App() {
  return (
    <div className="App">
      
      <ProductContextProvider>
        <Header/>
        <ProductList/>
        <DecoBar/>
        <Header/>
        <PurchaseSummary/>
      </ProductContextProvider>
      
    </div>
  );
}

export default App;
