// import React, { useState } from 'react';
// import Toast from '../components/Toast';

// const Register = ({ onNavigate = () => {} }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const [showToast, setShowToast] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const e = {};
//     if (!email || !email.includes('@')) e.email = 'Please enter a valid email';
//     if (!password || password.length < 6) e.password = 'Password must be at least 6 characters';
//     if (password !== confirmPassword) e.confirmPassword = "Passwords don't match";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (!validate()) return;
//     setShowConfirm(true);
//   };

//   const performRegistration = () => {
//     setShowConfirm(false);
//     setIsSubmitting(true);
//     // simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//         onNavigate('login');
//       }, 1100);
//     }, 900);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
//       {/* left decorative paw */}
//       <svg className="absolute left-8 top-12 opacity-10 w-40 h-40 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#F7EFE9"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>

//       {/* right decorative paw */}
//       <svg className="absolute right-8 bottom-12 opacity-10 w-40 h-40 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#F7EFE9"><circle cx="54" cy="52" r="6"/><circle cx="42" cy="56" r="5"/><circle cx="30" cy="52" r="6"/><ellipse cx="42" cy="36" rx="14" ry="10"/></g></svg>

//       <div className="w-full max-w-sm">
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-1 text-gray-900">Create your account</h2>
//           <p className="text-sm text-gray-600">Sign up to save favorites, checkout faster, and get special offers.</p>
//         </div>

//         <form onSubmit={handleSubmit} noValidate>
//           <div className="mb-3">
//             <input
//               id="register-email"
//               type="email"
//               placeholder="Enter Your Email Address"
//               className={`w-full bg-white px-3 py-2 border border-gray-200 rounded-sm placeholder-gray-500 focus:outline-none ${errors.email ? 'border-red-300' : ''}`}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <div className="text-red-600 text-sm mt-2">{errors.email}</div>}
//           </div>

//           <div className="mb-3">
//             <input
//               id="register-password"
//               type="password"
//               placeholder="Create A Password"
//               className={`w-full bg-white px-3 py-2 border border-gray-200 rounded-sm placeholder-gray-500 focus:outline-none ${errors.password ? 'border-red-300' : ''}`}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <div className="text-red-600 text-sm mt-2">{errors.password}</div>}
//           </div>

//           <div className="mb-4">
//             <input
//               id="register-confirm"
//               type="password"
//               placeholder="Repeat Password"
//               className={`w-full bg-white px-3 py-2 border border-gray-200 rounded-sm placeholder-gray-500 focus:outline-none ${errors.confirmPassword ? 'border-red-300' : ''}`}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             {errors.confirmPassword && <div className="text-red-600 text-sm mt-2">{errors.confirmPassword}</div>}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-[#353434] text-white py-3 rounded-sm tracking-wider hover:opacity-95 transition duration-150 disabled:opacity-60 flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
//             ) : 'REGISTER IT NOW'}
//           </button>
//         </form>

//         <div className="mt-4 text-center text-sm text-gray-600">
//           Already have an account? <button onClick={() => onNavigate('login')} className="text-amber-600 hover:underline">LOGIN</button>
//         </div>
//       </div>

//       {showToast && <Toast message="Registration successful — please login" type="success" duration={1200} onClose={() => setShowToast(false)} />}

//       {showConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
//             <p className="text-sm text-gray-600 mb-6">Create an account with <strong>{email}</strong>? You will be redirected to login after registering.</p>
//             <div className="flex justify-end space-x-3">
//               <button onClick={() => setShowConfirm(false)} className="px-4 py-2 rounded border">Cancel</button>
//               <button onClick={performRegistration} className="px-4 py-2 rounded bg-amber-600 text-white">Yes, register</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import Toast from '../components/Toast';

const Register = ({ onNavigate = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [showToast, setShowToast] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    
    // Email validation
    if (!email) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!password) {
      e.password = 'Password is required';
    } else if (password.length < 6) {
      e.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])/.test(password)) {
      e.password = 'Password must contain at least one lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      e.password = 'Password must contain at least one uppercase letter';
    } else if (!/(?=.*\d)/.test(password)) {
      e.password = 'Password must contain at least one number';
    }
    
    // Confirm password validation
    if (!confirmPassword) {
      e.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      e.confirmPassword = "Passwords don't match";
    }
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setShowConfirm(true);
  };

  const performRegistration = () => {
    setShowConfirm(false);
    setIsSubmitting(true);
    // simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        onNavigate('login');
      }, 1100);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#f5ebe0] flex items-center justify-center p-6 relative overflow-hidden">
      {/* left decorative paw */}
      <svg className="absolute left-8 top-12 opacity-10 w-40 h-40 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#d4c4b0"><circle cx="10" cy="12" r="6"/><circle cx="22" cy="8" r="5"/><circle cx="34" cy="12" r="6"/><ellipse cx="22" cy="28" rx="14" ry="10"/></g></svg>

      {/* right decorative paw */}
      <svg className="absolute right-8 bottom-12 opacity-10 w-40 h-40 pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#d4c4b0"><circle cx="54" cy="52" r="6"/><circle cx="42" cy="56" r="5"/><circle cx="30" cy="52" r="6"/><ellipse cx="42" cy="36" rx="14" ry="10"/></g></svg>

      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Get <span className="text-amber-600">20% Off</span> On First Purchase</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input
              id="register-email"
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

          <div className="mb-4">
            <input
              id="register-password"
              type="password"
              placeholder="Create A Password"
              className={`w-full bg-white px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded placeholder-gray-400 focus:outline-none focus:border-amber-400`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: '' });
              }}
            />
            {errors.password && <div className="text-red-600 text-sm mt-1 ml-1">{errors.password}</div>}
          </div>

          <div className="mb-6">
            <input
              id="register-confirm"
              type="password"
              placeholder="Repeat Password"
              className={`w-full bg-white px-4 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} rounded placeholder-gray-400 focus:outline-none focus:border-amber-400`}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
              }}
            />
            {errors.confirmPassword && <div className="text-red-600 text-sm mt-1 ml-1">{errors.confirmPassword}</div>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#353434] text-white py-3 rounded tracking-wider hover:opacity-90 transition duration-150 disabled:opacity-60 flex items-center justify-center font-medium"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
            ) : 'REGISTER IT NOW'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <button onClick={() => onNavigate('login')} className="text-amber-600 hover:underline font-medium">LOGIN</button>
        </div>
      </div>

      {showToast && <Toast message="Registration successful — please login" type="success" duration={1200} onClose={() => setShowToast(false)} />}

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="text-sm text-gray-600 mb-6">Create an account with <strong>{email}</strong>? You will be redirected to login after registering.</p>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowConfirm(false)} className="px-4 py-2 rounded border">Cancel</button>
              <button onClick={performRegistration} className="px-4 py-2 rounded bg-amber-600 text-white">Yes, register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;