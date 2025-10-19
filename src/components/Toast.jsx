import React, { useEffect } from 'react';

const Toast = ({ message = '', type = 'success', onClose = () => {}, duration = 3000 }) => {
  useEffect(() => {
    const t = setTimeout(() => onClose(), duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  const bg = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed right-4 bottom-6 z-50 ${bg} text-white px-4 py-3 rounded shadow-lg`}> 
      {message}
    </div>
  );
};

export default Toast;
