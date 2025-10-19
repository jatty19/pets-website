import React, { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Offers from './pages/Offers';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import Header from './components/header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null); // Store logged-in user info

  const handleLogin = (email) => {
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} user={user} />;
      case 'shop':
        return <Shop onNavigate={setCurrentPage} user={user} />;
      case 'offers':
        return <Offers onNavigate={setCurrentPage} user={user} />;
      case 'blog':
        return <Blog onNavigate={setCurrentPage} user={user} />;
      case 'login':
        return <Login onNavigate={setCurrentPage} onLogin={handleLogin} />;
      case 'register':
        return <Register onNavigate={setCurrentPage} />;
      case 'wishlist':
        return <Wishlist onNavigate={setCurrentPage} user={user} />;
      default:
        return <Home user={user} />;
    }
  };

  // Hide header on login and register pages
  const showHeader = !['login', 'register'].includes(currentPage);

  return (
    <div className="bg-white">
      {/* Use the Header component as the single source of navigation now. */}
      {showHeader && <Header page={currentPage} onNavigate={setCurrentPage} user={user} onLogout={handleLogout} />}

      <main>
        <div className="min-h-screen bg-white">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;