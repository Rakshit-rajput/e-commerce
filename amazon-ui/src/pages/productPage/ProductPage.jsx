import React from "react";
import "../../styles/ProductPage.css";

function ProductPage() {
  const [product, setProduct] = React.useState(null); // State for product details

  // Simulate API call to fetch product details based on product ID from URL
  React.useEffect(() => {
    // const productId = match.params.id;
    //     const fetchedProduct = [... /* Your product data */].find(
    //       (p) => p.id === productId
    //     );
    //     setProduct(fetchedProduct);
    //   }, [match]
  });

  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div>
      <div className="product-page">
        {/* Header and navigation (similar to HomePage) */}

        <main className="main">
          <section className="product-details">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span className="price">₹{product.price}</span>
              {/* Add buttons for Add to Cart, etc. */}
              {/* Add sections for reviews, specifications, etc. (optional) */}
            </div>
          </section>
        </main>

        {/* Footer (similar to HomePage) */}
      </div>
    </div>
  );
}

export default ProductPage;
