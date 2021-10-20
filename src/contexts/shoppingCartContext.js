import React, { createContext, useState } from "react";
export const ShoppingCartContext = createContext();
const data = require("../data/products.json");

const ShoppingCartContextProvider = (props) => {
  const [products] = useState([...data]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const addSelectedProduct = (newSelected) => {
    if (!selectedProducts.find((prod) => prod.id === newSelected.id)) {
      setSelectedProducts([...selectedProducts, { ...newSelected, qty: 0 }]);
    }
  };
  const removeProduct = (productid) => {
    let newSel = [];
    let currentSelected = selectedProducts;
    currentSelected.forEach((product) => {
      if (product.id !== productid) {
        newSel.push(product);
      }
    });

    setSelectedProducts(newSel);
  };
  const changeProductQuantity = (productid, sign) => {
    let currentSelected = selectedProducts;
    let newSel = [];
    let subTot = 0;

    currentSelected.forEach((product) => {
      if (product.id === productid) {
        product.qty =
          sign === "+"
            ? (product.qty = product.qty + 1)
            : (product.qty = product.qty - 1);
      }

      newSel.push(product);

      subTot = subTot + product.qty * product.price;
    });

    setSelectedProducts(newSel);
    setTotal(subTot);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        selectedProducts,
        addSelectedProduct,
        total,
        changeProductQuantity,
        removeProduct,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartContextProvider;
