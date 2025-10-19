// import React, { useState } from 'react';
// import Toast from './Toast';

// const Header = ({ page, onNavigate = () => {} }) => {
//   const getNavItems = () => {
//     // Removed 'Contact' from the nav per request
//     return ['Home', 'Shop', 'Blog', 'Offers'];
//   };

//   const navKeyFor = (label) => {
//     const map = {
//       Home: 'home',
//       Shop: 'shop',
//       Blog: 'blog',
//       Offers: 'offers',
//     };
//     return map[label] || 'home';
//   };

//   const [showWishlistToast, setShowWishlistToast] = useState(false);
//   const [wishlistMessage, setWishlistMessage] = useState('');
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const isWhite = ['shop','blog','offers'].includes(page);

//   return (
//   <header className={`w-full ${isWhite ? 'bg-white' : 'bg-transparent'} border-b border-gray-200`}>
//       {/* Top small contact bar removed per request */}

//       {/* Main header: logo, search, icons */}
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="grid grid-cols-3 items-center gap-4">
//           {/* Logo (left on small, center on larger if needed) */}
//           <div className="col-span-1 flex items-center">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">🐾</div>
//               <div>
//                 <div className="font-handwritten text-2xl text-gray-800">ALL NATURAL</div>
//                 <div className="text-xs text-gray-500">Pet Shop</div>
//               </div>
//             </div>
//           </div>

//           {/* Center: search on md+ */}
//           <div className="col-span-1 flex justify-center">
//             <div className="w-full md:max-w-2xl">
//               <div className="hidden md:block">
//                 <input
//                   type="text"
//                   placeholder="Search for more than 10,000 products"
//                   className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-100 bg-white"
//                 />
//               </div>
//               {/* on small screens we keep it minimal */}
//               <div className="md:hidden">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none bg-white"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Icons (right) */}
//           <div className="col-span-1 flex items-center justify-end space-x-6 text-sm text-gray-600">
//             <div className="flex items-center space-x-4">
//               <button onClick={() => onNavigate('register')} className="text-gray-600 hover:text-amber-500">Sign in</button>
//               <button onClick={() => { setWishlistMessage('Viewing wishlist'); setShowWishlistToast(true); onNavigate('wishlist'); }} className="text-gray-600 hover:text-amber-500" aria-label="Wishlist">❤</button>
//               <button onClick={() => onNavigate('shop')} className="relative text-gray-600 hover:text-amber-500" aria-label="Cart">🛒<span className="absolute -top-2 -right-3 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">3</span></button>
//               <div className="md:hidden">
//                 <button aria-label="Open menu" onClick={() => setMobileOpen((s) => !s)} className="p-2">≡</button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//   {/* Navigation row */}
//   <div className={`${isWhite ? 'bg-white' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-end py-3">
//             <div className="flex items-center space-x-6 text-sm text-gray-700">
//               <button
//                 onClick={() => onNavigate('shop')}
//                 className="font-medium"
//               >
//                 Shop By Categories ▼
//               </button>

//               {getNavItems().map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => onNavigate(navKeyFor(item))}
//                   className="text-sm hover:text-amber-600"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//         {showWishlistToast && (
//           <Toast
//             message={wishlistMessage}
//             type="success"
//             onClose={() => setShowWishlistToast(false)}
//             duration={2000}
//           />
//         )}

//       {/* Mobile menu overlay */}
//       {mobileOpen && (
//         <div className="md:hidden fixed inset-0 z-40">
//           <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)} />
//           <div className="absolute top-0 right-0 w-11/12 max-w-sm bg-white h-full shadow-lg p-4 overflow-auto">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center">🐾</div>
//                 <div className="text-lg font-semibold">ALL NATURAL</div>
//               </div>
//               <button onClick={() => setMobileOpen(false)} className="p-2">✕</button>
//             </div>

//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded"
//               />
//             </div>

//             <nav className="space-y-2">
//               {getNavItems().map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => {
//                     onNavigate(navKeyFor(item));
//                     setMobileOpen(false);
//                   }}
//                   className="w-full text-left px-3 py-2 rounded hover:bg-gray-50"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <div className="border-t pt-4 mt-4">
//                 <button onClick={() => { onNavigate('register'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Sign in</button>
//                 <button onClick={() => { onNavigate('wishlist'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Wishlist</button>
//                 <button onClick={() => { onNavigate('shop'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Cart</button>
//               </div>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import Toast from './Toast';

// const Header = ({ page, onNavigate = () => {} }) => {
//   const getNavItems = () => {
//     // Removed 'Contact' from the nav per request
//     return ['Home', 'Shop', 'Blog', 'Offers'];
//   };

//   const navKeyFor = (label) => {
//     const map = {
//       Home: 'home',
//       Shop: 'shop',
//       Blog: 'blog',
//       Offers: 'offers',
//     };
//     return map[label] || 'home';
//   };

//   const [showWishlistToast, setShowWishlistToast] = useState(false);
//   const [wishlistMessage, setWishlistMessage] = useState('');
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="w-full bg-white border-b border-gray-200">
//       {/* Main header: logo, search, icons */}
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="grid grid-cols-3 items-center gap-4">
//           {/* Logo (left on small, center on larger if needed) */}
//           <div className="col-span-1 flex items-center">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">🐾</div>
//               <div>
//                 <div className="font-handwritten text-2xl text-gray-800">ALL NATURAL</div>
//                 <div className="text-xs text-gray-500">Pet Shop</div>
//               </div>
//             </div>
//           </div>

//           {/* Center: search on md+ */}
//           <div className="col-span-1 flex justify-center">
//             <div className="w-full md:max-w-2xl">
//               <div className="hidden md:block">
//                 <input
//                   type="text"
//                   placeholder="Search for more than 10,000 products"
//                   className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-100 bg-white"
//                 />
//               </div>
//               {/* on small screens we keep it minimal */}
//               <div className="md:hidden">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none bg-white"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Icons (right) */}
//           <div className="col-span-1 flex items-center justify-end space-x-6 text-sm text-gray-600">
//             <div className="flex items-center space-x-4">
//               <button onClick={() => onNavigate('register')} className="text-gray-600 hover:text-amber-500">Sign in</button>
//               <button onClick={() => { setWishlistMessage('Viewing wishlist'); setShowWishlistToast(true); onNavigate('wishlist'); }} className="text-gray-600 hover:text-amber-500" aria-label="Wishlist">❤</button>
//               <button onClick={() => onNavigate('shop')} className="relative text-gray-600 hover:text-amber-500" aria-label="Cart">🛒<span className="absolute -top-2 -right-3 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">3</span></button>
//               <div className="md:hidden">
//                 <button aria-label="Open menu" onClick={() => setMobileOpen((s) => !s)} className="p-2">≡</button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Navigation row */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-end py-3">
//             <div className="flex items-center space-x-6 text-sm text-gray-700">
//               <button
//                 onClick={() => onNavigate('shop')}
//                 className="font-medium"
//               >
//                 Shop By Categories ▼
//               </button>

//               {getNavItems().map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => onNavigate(navKeyFor(item))}
//                   className="text-sm hover:text-amber-600"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {showWishlistToast && (
//         <Toast
//           message={wishlistMessage}
//           type="success"
//           onClose={() => setShowWishlistToast(false)}
//           duration={2000}
//         />
//       )}

//       {/* Mobile menu overlay */}
//       {mobileOpen && (
//         <div className="md:hidden fixed inset-0 z-40">
//           <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)} />
//           <div className="absolute top-0 right-0 w-11/12 max-w-sm bg-white h-full shadow-lg p-4 overflow-auto">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center">🐾</div>
//                 <div className="text-lg font-semibold">ALL NATURAL</div>
//               </div>
//               <button onClick={() => setMobileOpen(false)} className="p-2">✕</button>
//             </div>

//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded"
//               />
//             </div>

//             <nav className="space-y-2">
//               {getNavItems().map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => {
//                     onNavigate(navKeyFor(item));
//                     setMobileOpen(false);
//                   }}
//                   className="w-full text-left px-3 py-2 rounded hover:bg-gray-50"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <div className="border-t pt-4 mt-4">
//                 <button onClick={() => { onNavigate('register'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Sign in</button>
//                 <button onClick={() => { onNavigate('wishlist'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Wishlist</button>
//                 <button onClick={() => { onNavigate('shop'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Cart</button>
//               </div>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import Toast from './Toast';

const Header = ({ page, onNavigate = () => {}, user = null, onLogout = () => {} }) => {
  const getNavItems = () => {
    // Removed 'Contact' from the nav per request
    return ['Home', 'Shop', 'Blog', 'Offers'];
  };

  const navKeyFor = (label) => {
    const map = {
      Home: 'home',
      Shop: 'shop',
      Blog: 'blog',
      Offers: 'offers',
    };
    return map[label] || 'home';
  };

  const [showWishlistToast, setShowWishlistToast] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);

  // Debug: log user state
  console.log('Header user:', user);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    setShowLogoutToast(true);
    setTimeout(() => {
      setShowLogoutToast(false);
      onLogout();
      onNavigate('login');
    }, 1500);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Main header: logo, search, icons */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Logo (left on small, center on larger if needed) */}
          <div className="col-span-1 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">🐾</div>
              <div>
                <div className="font-handwritten text-2xl text-gray-800">ALL NATURAL</div>
                <div className="text-xs text-gray-500">Pet Shop</div>
              </div>
            </div>
          </div>

          {/* Center: search on md+ */}
          <div className="col-span-1 flex justify-center">
            <div className="w-full md:max-w-2xl">
              <div className="hidden md:block">
                <input
                  type="text"
                  placeholder="Search for more than 10,000 products"
                  className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-100 bg-white"
                />
              </div>
              {/* on small screens we keep it minimal */}
              <div className="md:hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none bg-white"
                />
              </div>
            </div>
          </div>

          {/* Icons (right) */}
          <div className="col-span-1 flex items-center justify-end space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hidden md:inline">{user.email}</span>
                  <button onClick={handleLogoutClick} className="text-gray-600 hover:text-amber-500">Logout</button>
                </div>
              ) : (
                <button onClick={() => onNavigate('register')} className="text-gray-600 hover:text-amber-500">Sign in</button>
              )}
              <button onClick={() => { setWishlistMessage('Viewing wishlist'); setShowWishlistToast(true); onNavigate('wishlist'); }} className="text-gray-600 hover:text-amber-500" aria-label="Wishlist">❤</button>
              <button onClick={() => onNavigate('shop')} className="relative text-gray-600 hover:text-amber-500" aria-label="Cart">🛒<span className="absolute -top-2 -right-3 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">3</span></button>
              <div className="md:hidden">
                <button aria-label="Open menu" onClick={() => setMobileOpen((s) => !s)} className="p-2">≡</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation row */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-end py-3">
            <div className="flex items-center space-x-6 text-sm text-gray-700">
              <button
                onClick={() => onNavigate('shop')}
                className="font-medium"
              >
                Shop By Categories ▼
              </button>

              {getNavItems().map((item, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(navKeyFor(item))}
                  className="text-sm hover:text-amber-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {showWishlistToast && (
        <Toast
          message={wishlistMessage}
          type="success"
          onClose={() => setShowWishlistToast(false)}
          duration={2000}
        />
      )}

      {showLogoutToast && (
        <Toast
          message="Logged out successfully"
          type="success"
          onClose={() => setShowLogoutToast(false)}
          duration={1500}
        />
      )}

      {/* Logout confirmation dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="text-sm text-gray-600 mb-6">Do you want to logout from your account?</p>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowLogoutConfirm(false)} className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50">Cancel</button>
              <button onClick={confirmLogout} className="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700">Yes, logout</button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-11/12 max-w-sm bg-white h-full shadow-lg p-4 overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded flex items-center justify-center">🐾</div>
                <div className="text-lg font-semibold">ALL NATURAL</div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2">✕</button>
            </div>

            {user && (
              <div className="mb-4 p-3 bg-amber-50 rounded">
                <p className="text-sm text-gray-600">Logged in as:</p>
                <p className="text-sm font-medium text-gray-800">{user.email}</p>
              </div>
            )}

            <div className="mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-3 pr-3 py-2 border border-gray-200 rounded"
              />
            </div>

            <nav className="space-y-2">
              {getNavItems().map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(navKeyFor(item));
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}

              <div className="border-t pt-4 mt-4">
                {user ? (
                  <button onClick={() => { handleLogoutClick(); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Logout</button>
                ) : (
                  <button onClick={() => { onNavigate('register'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Sign in</button>
                )}
                <button onClick={() => { onNavigate('wishlist'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Wishlist</button>
                <button onClick={() => { onNavigate('shop'); setMobileOpen(false); }} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">Cart</button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;