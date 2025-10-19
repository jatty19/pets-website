import React from 'react';
import Footer from '../components/footer';

const Offers = ({ onNavigate = () => {} }) => {
  const features = [
    {
      title: "Free Delivery",
      description: "Get your pets' favorite products delivered straight to your door at no extra cost."
    },
    {
      title: "100% Secure Payment",
      description: "Shop confidently with safe and encrypted payment options for all transactions."
    },
    {
      title: "Daily Offers",
      description: "Enjoy exclusive deals and discounts updated daily to give you the best value."
    },
    {
      title: "Quality Guarantee",
      description: "We ensure top-notch products for your pets, with quality checks on every item."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading & Small Description */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-900">Our Features</h2>
            <p className="text-gray-500 mt-2">
              Discover the benefits of shopping with us. Quality, convenience, and exclusive offers just for you.
            </p>
          </div>

          {/* Features Grid */}
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
