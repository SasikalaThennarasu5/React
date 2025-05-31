import React, { useState, useEffect } from 'react';

const Task15 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="task">
      <h2>Task15: Product Listing</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} width="100" />
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task15;
