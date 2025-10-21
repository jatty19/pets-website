// import React from 'react';

// const Footer = ({ year = new Date().getFullYear(), onNavigate = () => {} }) => {
//   return (
//   <footer className="bg-transparent text-gray-700">
//       {/* Features row */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v6H3V3z" /></svg>
//             </div>
//             <h4 className="font-semibold">Free Delivery</h4>
//             <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
//           </div>

//           <div>
//             <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
//             </div>
//             <h4 className="font-semibold">100% Secure Payment</h4>
//             <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
//           </div>

//           <div>
//             <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//             </div>
//             <h4 className="font-semibold">Daily Offers</h4>
//             <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
//           </div>

//           <div>
//             <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z" /></svg>
//             </div>
//             <h4 className="font-semibold">Quality Guarantee</h4>
//             <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer main */}
//       <div className="border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">ALL NATURAL PET TREAT BOX</h3>
//               <p className="text-gray-500">Subscribe to our newsletter to get updates about our grand offers.</p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-500">
//                 <li><button onClick={() => onNavigate('home')} className="hover:text-gray-700">Home</button></li>
//                 <li><button onClick={() => onNavigate('blog')} className="hover:text-gray-700">About Us</button></li>
//                 <li><button className="hover:text-gray-700">Offers</button></li>
//                 <li><button className="hover:text-gray-700">Services</button></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Help Centre</h4>
//               <ul className="space-y-2 text-gray-500">
//                 <li><button className="hover:text-gray-700">Payments</button></li>
//                 <li><button className="hover:text-gray-700">Shipping</button></li>
//                 <li><button className="hover:text-gray-700">Product Returns</button></li>
//                 <li><button className="hover:text-gray-700">FAQs</button></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Our Newsletter</h4>
//               <p className="text-gray-500 mb-4">Subscribe to our newsletter to get updates about our grand offers.</p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email address" 
//                   className="flex-grow min-w-0 px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none"
//                 />
//                 <button className="ml-2 flex-shrink-0 bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-100 mt-8 pt-6 text-center text-gray-400">
//             <p>©{year} All Natural Pet Treat Box. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from 'react';
import Toast from './Toast';

const Footer = ({ year = new Date().getFullYear(), onNavigate = () => {} }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateNewsletter = () => {
    const e = {};
    
    if (!name.trim()) {
      e.name = 'Name is required';
    } else if (name.trim().length < 2) {
      e.name = 'Name must be at least 2 characters';
    }
    
    if (!email) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Please enter a valid email address';
    }
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateNewsletter()) return;
    
    setIsSubmitting(true);
    
    try {
      // Check if backend is running first
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
      
      const response = await fetch(`${backendUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        setToastMessage(`Welcome email sent to ${email}!`);
        setShowToast(true);
        
        // Clear form
        setName('');
        setEmail('');
        setErrors({});
      } else {
        // Show error message
        setToastMessage(data.message || 'Failed to subscribe. Please try again.');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      
      // More helpful error message
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        setToastMessage('Backend server is not running. Please start the server first!');
      } else {
        setToastMessage('Failed to connect to server. Please try again.');
      }
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white text-gray-700">
      {/* Features row */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v6H3V3z" /></svg>
            </div>
            <h4 className="font-semibold">Free Delivery</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>

          <div>
            <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
            </div>
            <h4 className="font-semibold">100% Secure Payment</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>

          <div>
            <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="font-semibold">Daily Offers</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>

          <div>
            <div className="mx-auto w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z" /></svg>
            </div>
            <h4 className="font-semibold">Quality Guarantee</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </div>

      {/* Footer main */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ALL NATURAL PET TREAT BOX</h3>
              <p className="text-gray-500">Subscribe to our newsletter to get updates about our grand offers.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-500">
                <li><button onClick={() => onNavigate('home')} className="hover:text-gray-700">Home</button></li>
                <li><button onClick={() => onNavigate('blog')} className="hover:text-gray-700">About Us</button></li>
                <li><button className="hover:text-gray-700">Offers</button></li>
                <li><button className="hover:text-gray-700">Services</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Help Centre</h4>
              <ul className="space-y-2 text-gray-500">
                <li><button className="hover:text-gray-700">Payments</button></li>
                <li><button className="hover:text-gray-700">Shipping</button></li>
                <li><button className="hover:text-gray-700">Product Returns</button></li>
                <li><button className="hover:text-gray-700">FAQs</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Our Newsletter</h4>
              <p className="text-gray-500 mb-4">Subscribe to our newsletter to get updates about our grand offers.</p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className={`w-full px-4 py-2 text-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-amber-400`}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                  />
                  {errors.name && <div className="text-red-600 text-xs mt-1">{errors.name}</div>}
                </div>
                <div className="flex mb-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className={`flex-grow min-w-0 px-4 py-2 text-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-l-lg focus:outline-none focus:border-amber-400`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-2 flex-shrink-0 bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700 disabled:opacity-60 flex items-center justify-center min-w-[100px]"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    ) : 'Subscribe'}
                  </button>
                </div>
                {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
              </form>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-6 pt-4 text-center text-gray-400">
            <p>©{year} All Natural Pet Treat Box. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
          duration={3000}
        />
      )}
    </footer>
  );
};

export default Footer;