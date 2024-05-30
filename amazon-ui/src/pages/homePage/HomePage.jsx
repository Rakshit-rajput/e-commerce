import React from "react";
import "../../styles/HomePage.css";
function HomePage() {
  return (
    <>
      <div className="homepage">
        <header className="header">
          <img src="amazon-logo.png" alt="Amazon Logo" className="logo" />
          <nav className="navigation">
            <ul>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">Sell on Amazon</a>
              </li>
              <li>
                <a href="#">Today's Deals</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input" />
            <button type="button" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </header>
        <main className="main">
          <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
              {/* Add product card components here */}
            </div>
          </section>
          <section className="departments">
            <h2>Shop by Department</h2>
            <div className="department-list">
              <ul>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Home & Kitchen</a>
                </li>
                {/* Add more department links as needed */}
              </ul>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>Copyright &copy; 2024 Amazon.com, Inc. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
