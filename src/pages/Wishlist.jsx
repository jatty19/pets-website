import React, { useEffect, useState } from 'react';

const Wishlist = ({ onNavigate = () => {} }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('wishlist');
      setItems(raw ? JSON.parse(raw) : []);
    } catch (e) {
      setItems([]);
    }
  }, []);

  const removeItem = (idx) => {
    const next = items.filter((_, i) => i !== idx);
    setItems(next);
    localStorage.setItem('wishlist', JSON.stringify(next));
  };

  return (
  <div className="min-h-screen bg-transparent py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
        {items.length === 0 ? (
          <div className="text-gray-600">Your wishlist is empty. Browse products and add favorites.</div>
        ) : (
          <div className="space-y-4">
            {items.map((it, i) => (
              <div key={i} className="flex items-center justify-between border p-4 rounded">
                <div>
                  <div className="font-medium">{it.name}</div>
                  {it.price && <div className="text-sm text-gray-500">{it.price}</div>}
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => onNavigate('shop')} className="px-3 py-1 bg-amber-600 text-white rounded">View</button>
                  <button onClick={() => removeItem(i)} className="px-3 py-1 bg-gray-200 rounded">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
