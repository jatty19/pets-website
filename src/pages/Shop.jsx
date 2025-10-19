import React, { useState } from 'react';
import Toast from '../components/Toast';
import Footer from '../components/footer';
// Header is rendered at the app level (App.js). Do not render it here to avoid duplicate header.

const Shop = ({ onNavigate = () => {} }) => {
  const [showCartToast, setShowCartToast] = useState(false);
  const [cartMessage, setCartMessage] = useState('');

  const products = [
    { name: "Takers And Best Good Dog Grub (Gluten-Free)", price: "P 428.00", oldPrice: "P 480.00", onSale: true, image: "/assets/product1.png" },
    { name: "Eggs And Dice Good Dog Grub (Gluten-Free)", price: "P 348.00", image:"/assets/product2.png" },
    { name: "Winner Chicken Dinner Cat Foods 500g", rating: "★★★★★", price: "P 288.00", image: "/assets/p3.png"},
    { name: "Black Thick Jacket", rating: "★★★★★", price: "$18.00", image: "/assets/p4.png" },
    { name: "Grey Hoodie", rating: "★★★★★", price: "$18.00", image: "/assets/p5.png" },
    { name: "Happy Jeans Pant", rating: "★★★★★", price: "$18.00", image: "/assets/p6.png" }
  ];

  const bestSelling = [
    { name: "Red Cream", price: "$18.00", image: "/assets/p11.png" },
    { name: "Rubbishic Ice Cream, Plain IZaca Dog And Cat Treat", rating: "★★★★★", price: "$18.00", image: "/assets/p7.png" },
    { name: "Happy Jeans Pant", rating: "★★★★★", price: "$18.00", image: "/assets/p8.png" },
    { name: "Tight Hair T-Shirt", rating: "★★★★★", price: "$18.00", image: "/assets/p9.png" },
    { name: "Black Thick Jacket", rating: "★★★★★", price: "$18.00", image: "/assets/p10.png" }
  ];

  const [showWishlistToast, setShowWishlistToast] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState('');

  const readWishlist = () => {
    try {
      const raw = localStorage.getItem('wishlist');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  };

  const addToWishlist = (product) => {
    const current = readWishlist();
    // avoid duplicates by name
    if (!current.find((p) => p.name === product.name)) {
      const next = [...current, product];
      localStorage.setItem('wishlist', JSON.stringify(next));
      setWishlistMessage(`${product.name} added to wishlist`);
      setShowWishlistToast(true);
    } else {
      setWishlistMessage(`${product.name} is already in wishlist`);
      setShowWishlistToast(true);
    }
  };

  const readCart = () => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  };

  const addToCart = (product) => {
    const current = readCart();
    const found = current.find((p) => p.name === product.name);
    let next;
    if (found) {
      next = current.map((p) => p.name === product.name ? { ...p, qty: p.qty + 1 } : p);
    } else {
      next = [...current, { ...product, qty: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(next));
    setCartMessage(`${product.name} added to cart`);
    setShowCartToast(true);
  };

  return (
  <div className="min-h-screen bg-white">
      {/* header is rendered by App.js */}

      {/* Pet Categories */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Pet Foodies</h2>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-600 hidden sm:block">Show: <button className="ml-2 text-amber-600">All</button></div>
              <button onClick={() => onNavigate('shop')} className="text-sm border border-gray-200 px-3 py-1 rounded">SHOP ALL</button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <article key={index} className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm relative">
                <div className="relative" style={{ paddingBottom: '100%' }}>
                  {product.onSale && (
                    <span className="absolute left-3 top-3 bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">SALE</span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    ) : (
                      <div className="w-3/4 h-3/4 bg-gray-200 rounded-md" />
                    )}
                  </div>

                  {/* quick overlay removed per request */}
                </div>

                <div className="p-4">
                  <h3 className="text-sm text-gray-800 font-medium mb-1 truncate">{product.name}</h3>
                  {product.rating && <div className="text-amber-500 text-xs mb-2">{product.rating}</div>}
                  <div className="flex items-center justify-between">
                    <div>
                      {product.oldPrice && <div className="text-xs text-gray-400 line-through">{product.oldPrice}</div>}
                      <div className="text-sm font-semibold text-gray-900">{product.price}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => addToCart(product)} className="text-xs bg-amber-600 text-white px-3 py-1 rounded hover:opacity-95">ADD</button>
                      <button onClick={() => addToWishlist(product)} aria-label={`Add ${product.name} to wishlist`} className="w-8 h-8 bg-gray-100 border rounded flex items-center justify-center hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-rose-500"><path d="M12 21s-7-4.35-9-7.5C-1 8.5 3 4 7 6c2 1 3 3 5 3s3-2 5-3c4-2 8 2.5 4 7.5C19 16.65 12 21 12 21z" stroke="currentColor" strokeWidth="0" fill="currentColor"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Best Selling Products</h2>
            <button onClick={() => onNavigate('shop')} className="text-sm border border-gray-200 px-3 py-1 rounded">SHOP ALL</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {bestSelling.map((product, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm p-3 text-center">
                <div className="mx-auto mb-3 w-28 h-28 bg-gray-200 rounded-md flex items-center justify-center">
                  {product.image ? <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" /> : null}
                </div>
                <h3 className="text-sm text-gray-800 font-medium mb-1 truncate">{product.name}</h3>
                <div className="text-sm font-semibold text-gray-900">{product.price}</div>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <button onClick={() => addToCart(product)} className="text-xs bg-amber-600 text-white px-3 py-1 rounded hover:opacity-95">ADD</button>
                  <button onClick={() => addToWishlist(product)} aria-label={`Add ${product.name} to wishlist`} className="w-8 h-8 bg-gray-100 border rounded flex items-center justify-center hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-rose-500"><path d="M12 21s-7-4.35-9-7.5C-1 8.5 3 4 7 6c2 1 3 3 5 3s3-2 5-3c4-2 8 2.5 4 7.5C19 16.65 12 21 12 21z" stroke="currentColor" strokeWidth="0" fill="currentColor"/></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

  {/* Footer */}
    <Footer year={new Date().getFullYear()} onNavigate={onNavigate} />

    {/* Toasts */}
    {showCartToast && (
      <Toast
        message={cartMessage}
        type="success"
        onClose={() => setShowCartToast(false)}
        duration={2500}
      />
    )}
    {showWishlistToast && (
      <Toast
        message={wishlistMessage}
        type="success"
        onClose={() => setShowWishlistToast(false)}
        duration={2000}
      />
    )}
  </div>
);
};
export default Shop;