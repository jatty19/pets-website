// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Search, ShoppingCart, User, Heart } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Contact Bar */}
//         <div className="flex justify-end items-center py-2 text-xs text-gray-500 border-b border-gray-100">
//           <div className="flex items-center space-x-8">
//             <span>📞 +980-34-984-089</span>
//             <span>✉️ allnatural@gmail.com</span>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-orange-200 rounded flex items-center justify-center">
//               <span className="text-orange-600 text-sm">🐾</span>
//             </div>
//             <div>
//               <div className="text-lg font-semibold text-gray-800">
//                 ALL NATURAL PET TREAT BOX
//               </div>
//               <div className="text-xs text-gray-500">Pet Shop</div>
//             </div>
//           </Link>

//           {/* Search Bar */}
//           <div className="hidden lg:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search for more than 10,000 products"
//                 className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
//               />
//               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//             </div>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-6">
//             <Link to="/login">
//               <User className="w-5 h-5 text-gray-600 cursor-pointer" />
//             </Link>
//             <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />
//             <div className="relative">
//               <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
//               <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
//                 3
//               </span>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6 text-gray-700" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex items-center py-4 border-t border-gray-100">
//           <Link
//             to="/"
//             className="text-gray-600 hover:text-orange-600 mr-8 text-sm border-r border-gray-200 pr-8"
//           >
//             Shop By Categories ▼
//           </Link>
//           <div className="flex space-x-8">
//             <Link
//               to="/"
//               className="text-sm text-gray-600 hover:text-orange-600"
//             >
//               Home
//             </Link>
//             <Link
//               to="/shop"
//               className="text-sm text-gray-600 hover:text-orange-600"
//             >
//               Shop
//             </Link>
//             <Link
//               to="/blogs"
//               className="text-sm text-gray-600 hover:text-orange-600"
//             >
//               Blogs
//             </Link>
//             <Link
//               to="/offers"
//               className="text-sm text-gray-600 hover:text-orange-600"
//             >
//               Offers
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
