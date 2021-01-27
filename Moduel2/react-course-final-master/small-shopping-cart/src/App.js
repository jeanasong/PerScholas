import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';


function App() {
  // Define product from data
  const { products } = data;
  // Define cartItem and set it to change the value of cartItem from useState
  // The cartItem is an empthy array
  const [cartItems, setCartItems] = useState([]);
  // onAdd is an event handler
  const onAdd = (product) => {
    // exit tries to find the Items that isequals to the id of the products
    const exist = cartItems.find((x) => x.id === product.id);
    // If the product exit I need to increase the quantity of the product
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
        // compare the id of each item in cartItem with the id of products that need to be updated
        // And if it's true I need to put this value instead of current elements.
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // Using array concatenate
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      // remove the quantity from the products
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
