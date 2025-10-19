// import React, { useState } from 'react';
// import Toast from '../components/Toast';

// const Login = ({ onNavigate = () => {} }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [showToast, setShowToast] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const e = {};
//     if (!email.includes('@')) e.email = 'Please enter a valid email';
//     if (!password) e.password = 'Please enter your password';
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (!validate()) return;
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//         onNavigate('home');
//       }, 800);
//     }, 900);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
//       {/* decorative paw prints */}
//       <svg className="absolute left-12 top-16 opacity-10 w-36 h-36 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#F7EFE9"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>
//       <svg className="absolute right-12 top-28 opacity-10 w-36 h-36 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#F7EFE9"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>

//       <div className="w-full max-w-sm">
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-1 text-gray-900">Welcome back</h2>
//         </div>

//         <form onSubmit={handleSubmit} noValidate>
//           <div className="mb-3">
//             <input
//               id="login-email"
//               type="email"
//               placeholder="Enter Your Email Address"
//               className={`w-full bg-white px-3 py-2 border border-gray-200 rounded-sm placeholder-gray-500 focus:outline-none ${errors.email ? 'border-red-300' : ''}`}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <div className="text-red-600 text-sm mt-2">{errors.email}</div>}
//           </div>

//           <div className="mb-4">
//             <input
//               id="login-password"
//               type="password"
//               placeholder="Password"
//               className={`w-full bg-white px-3 py-2 border border-gray-200 rounded-sm placeholder-gray-500 focus:outline-none ${errors.password ? 'border-red-300' : ''}`}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <div className="text-red-600 text-sm mt-2">{errors.password}</div>}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-[#353434] text-white py-3 rounded-sm tracking-wider hover:opacity-95 transition duration-150 disabled:opacity-60 flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
//             ) : 'LOGIN'}
//           </button>
//         </form>
//       </div>

//       {showToast && <Toast message="Login successful" type="success" duration={800} onClose={() => setShowToast(false)} />}
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import Toast from '../components/Toast';

// const Login = ({ onNavigate = () => {} }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [showToast, setShowToast] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const e = {};
//     if (!email.includes('@')) e.email = 'Please enter a valid email';
//     if (!password) e.password = 'Please enter your password';
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (!validate()) return;
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//         onNavigate('home');
//       }, 800);
//     }, 900);
//   };

//   return (
//     <div className="min-h-screen bg-[#f5ebe0] flex items-center justify-center p-6 relative overflow-hidden">
//       {/* decorative paw prints */}
//       <svg className="absolute left-12 top-16 opacity-10 w-36 h-36 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#d4c4b0"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>
//       <svg className="absolute right-12 top-28 opacity-10 w-36 h-36 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#d4c4b0"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>

//       <div className="w-full max-w-sm">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Welcome! Please Login</h2>
//         </div>

//         <form onSubmit={handleSubmit} noValidate>
//           <div className="mb-4">
//             <input
//               id="login-email"
//               type="email"
//               placeholder="Enter Your Email Address"
//               className={`w-full bg-white px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded placeholder-gray-400 focus:outline-none focus:border-amber-400`}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <div className="text-red-600 text-sm mt-2">{errors.email}</div>}
//           </div>

//           <div className="mb-6">
//             <input
//               id="login-password"
//               type="password"
//               placeholder="Password"
//               className={`w-full bg-white px-4 py-3 border ${errors.password ? 'border-red-300' : 'border-gray-200'} rounded placeholder-gray-400 focus:outline-none focus:border-amber-400`}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <div className="text-red-600 text-sm mt-2">{errors.password}</div>}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-[#353434] text-white py-3 rounded tracking-wider hover:opacity-90 transition duration-150 disabled:opacity-60 flex items-center justify-center font-medium"
//           >
//             {isSubmitting ? (
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
//             ) : 'LOGIN'}
//           </button>
//         </form>

//         <div className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account? <button onClick={() => onNavigate('register')} className="text-amber-600 hover:underline font-medium">REGISTER</button>
//         </div>
//       </div>

//       {showToast && <Toast message="Login successful" type="success" duration={800} onClose={() => setShowToast(false)} />}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import Toast from '../components/Toast';

const Login = ({ onNavigate = () => {}, onLogin = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    
    // Email validation
    if (!email) {
      e.email = 'Email is required';
    } else if (!email.includes('@')) {
      e.email = 'Please enter a valid email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Invalid email format';
    }
    
    // Password validation
    if (!password) {
      e.password = 'Password is required';
    } else if (password.length < 6) {
      e.password = 'Password must be at least 6 characters';
    }
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      // Pass email to parent component
      onLogin(email);
      setTimeout(() => {
        setShowToast(false);
        onNavigate('home');
      }, 800);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#f5ebe0] flex items-center justify-center p-6 relative overflow-hidden">
      {/* decorative paw prints */}
      <svg className="absolute left-12 top-16 opacity-10 w-36 h-36 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#d4c4b0"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>
      <svg className="absolute right-12 top-28 opacity-10 w-36 h-36 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#d4c4b0"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>

      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Welcome! Please Login</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input
              id="login-email"
              type="email"
              placeholder="Enter Your Email Address"
              className={`w-full bg-white px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded placeholder-gray-400 focus:outline-none focus:border-amber-400`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
            />
            {errors.email && <div className="text-red-600 text-sm mt-1 ml-1">{errors.email}</div>}
          </div>

          <div className="mb-6">
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              className={`w-full bg-white px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded placeholder-gray-400 focus:outline-none focus:border-amber-400`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: '' });
              }}
            />
            {errors.password && <div className="text-red-600 text-sm mt-1 ml-1">{errors.password}</div>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#353434] text-white py-3 rounded tracking-wider hover:opacity-90 transition duration-150 disabled:opacity-60 flex items-center justify-center font-medium"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
            ) : 'LOGIN'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <button onClick={() => onNavigate('register')} className="text-amber-600 hover:underline font-medium">REGISTER</button>
        </div>
      </div>

      {showToast && <Toast message="Login successful" type="success" duration={800} onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default Login;