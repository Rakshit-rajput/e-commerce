import React from "react";
import "../../styles/SearchPage.css";

function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState(""); // State for search term
  const [products, setProducts] = React.useState([]); // State for search results

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // // Simulate API call to fetch products based on search term
    // const filteredProducts = [... /* Your product data */].filter((product) =>
    //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setProducts(filteredProducts);
  };
  return (
    <div>
      {" "}
      <div className="search-page">
        {/* Header and navigation (similar to HomePage) */}

        <main className="main">
          <section className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
          </section>

          <section className="search-results">
            <h2>Search Results</h2>
            {products.length > 0 ? (
              <div className="product-grid">
                {/* {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))} */}
              </div>
            ) : (
              <p>No results found for "{searchTerm}".</p>
            )}
            {/* Add pagination elements if needed */}
          </section>
        </main>

        {/* Footer (similar to HomePage) */}
      </div>
    </div>
  );
}

export default SearchPage;
