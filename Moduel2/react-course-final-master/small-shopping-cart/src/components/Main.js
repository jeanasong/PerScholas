import React from 'react';
import Product from './Product';
// export a function that accept props
export default function Main(props) {
  // Getting products from props
  const { products, onAdd } = props;
  return (
    // The className conatins two of three share up the width size of the screen
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          // Defined a component and set it to Product
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
