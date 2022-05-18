import React from 'react';
import Product from './Product';
import './Main.css'

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>All Courses</h2>
      <div className="align-items">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
