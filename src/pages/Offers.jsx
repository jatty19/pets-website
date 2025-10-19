import React from 'react';
import Footer from '../components/footer';
// Header is rendered at the app level (App.js). Do not render it here to avoid duplicate header.

const Offers = ({ onNavigate = () => {} }) => {
  const features = [
    {
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipis elit."
    },
    {
      title: "100% Secure Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipis elit."
    },
    {
      title: "Daily Offers",
      description: "Lorem ipsum dolor sit amet, consectetur adipis elit."
    },
    {
      title: "Quality Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipis elit."
    }
  ];

  return (
  <div className="min-h-screen bg-white">
      {/* Top small bar removed to avoid duplicate header/contact strips */}

  {/* header is rendered by App.js */}

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Footer */}
 <Footer year={new Date().getFullYear()} onNavigate={onNavigate} />
    </div>
  );
};

export default Offers;