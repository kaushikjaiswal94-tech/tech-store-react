function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">

        <div className="product-card">
          <img src="https://picsum.photos/300/200?1" alt="Phone" />
          <h3>iPhone 16</h3>
          <p>₹79,999</p>
        </div>

        <div className="product-card">
          <img src="https://picsum.photos/300/200?2" alt="Laptop" />
          <h3>MacBook Air</h3>
          <p>₹99,999</p>
        </div>

        <div className="product-card">
          <img src="https://picsum.photos/300/200?3" alt="Headphones" />
          <h3>AirPods Pro</h3>
          <p>₹14,999</p>
        </div>

      </div>
    </section>
  );
}

export default Products;