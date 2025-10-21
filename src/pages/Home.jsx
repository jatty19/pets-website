// import React from 'react';
// import Footer from '../components/footer';
// // Header is rendered at the app level (App.js)

// const Home = ({ onNavigate = () => {} }) => {
//   return (
//   <div className="min-h-screen">
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: content */}
//           <div className="order-2 lg:order-1">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
//               ALL NATURAL PET TREAT BOX
//             </h1>
//             <p className="text-lg text-gray-700 max-w-prose mb-8">
//               Curated treats for your furry friends — organic, healthy, and delicious. Hand-selected to
//               keep tails wagging and purrs coming.
//             </p>

//             <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
//               <button
//                 onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
//                 className="w-full sm:w-auto inline-block bg-[#ff7a18] hover:bg-[#ff6a00] text-white px-8 py-3 rounded-lg font-medium shadow-md text-center"
//               >
//                 Shop Now
//               </button>

//               <button
//                 onClick={() => window.scrollTo({ top: 1400, behavior: 'smooth' })}
//                 className="w-full sm:w-auto inline-block bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium text-center"
//               >
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right: image */}
//           <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md lg:max-w-full">
//               <div className="absolute -left-8 -top-8 w-40 h-40 bg-[#fff7ef] rounded-full opacity-80 blur-2xl pointer-events-none hidden lg:block"></div>
//               <div className="rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src={process.env.PUBLIC_URL + '/assets/hero.jpg'}
//                   alt="All Natural Pet Treats"
//                   className="w-full h-80 sm:h-96 md:h-[520px] object-cover bg-gray-100"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/1200x900?text=Pet+Treats'; }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Categories */}
//         <section className="mt-16">
//           <h2 className="text-2xl font-semibold mb-6">Shop by category</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {[
//               { emoji: '🦴', title: 'Chews', bg: 'bg-[#fff7ef]', color: 'text-[#ff7a18]' },
//               { emoji: '🍪', title: 'Biscuits', bg: 'bg-[#f0f8ff]', color: 'text-[#1e6fff]' },
//               { emoji: '❄️', title: 'Freeze-dried', bg: 'bg-[#f7fff0]', color: 'text-[#19a34a]' },
//               { emoji: '🦷', title: 'Dental', bg: 'bg-[#fff0f6]', color: 'text-[#d6336c]' },
//             ].map((c) => (
//               <button key={c.title} onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })} className="bg-white p-6 rounded-lg flex flex-col items-center gap-4 hover:shadow-md transition">
//                 <div className={`w-20 h-20 rounded-full ${c.bg} flex items-center justify-center text-2xl ${c.color} font-bold`}>{c.emoji}</div>
//                 <div className="text-sm font-medium">{c.title}</div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Sale banner */}
//         <section className="mt-12">
//           <div className="rounded-lg bg-gradient-to-r from-[#fff7f0] via-[#fff0e6] to-[#fff7ef] text-gray-900 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100">
//             <div>
//               <h3 className="text-2xl font-bold">Limited time: 20% off our Treat Box</h3>
//               <p className="mt-2 text-sm opacity-80">Use code NATURAL20 at checkout. Free shipping over $50.</p>
//             </div>
//             <div>
//               <button className="bg-[#ff7a18] hover:bg-[#ff6a00] text-white px-6 py-3 rounded-md font-semibold">Grab the Deal</button>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Footer - use shared component for consistency and responsiveness */}
//       <Footer year={new Date().getFullYear()} onNavigate={onNavigate} />
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import Footer from '../components/footer';
// Header is rendered at the app level (App.js)

const Home = ({ onNavigate = () => {} }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with beige background */}
      <div className="bg-[#f5ebe0] pb-0">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/doggy.png"
                    alt="All Natural Pet Treats"
                  />
                </div>
              </div>
            </div>
            {/* Right: content */}
            <div className="order-2 lg:order-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
                ALL NATURAL PET TREAT BOX
              </h1>
              <p className="text-lg text-gray-700 max-w-prose mb-8">
                Curated treats for your furry friends — organic, healthy, and delicious. 
                Hand-selected to keep tails wagging and purrs coming.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="w-full sm:w-auto inline-block bg-[#ff7a18] hover:bg-[#ff6a00] text-white px-8 py-3 rounded-lg font-medium shadow-md text-center"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 1400, behavior: 'smooth' })}
                  className="w-full sm:w-auto inline-block bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All content below hero is on white background */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          {/* Categories */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Shop by category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { img: '/assets/dog.png', title: 'dog food', bg: 'bg-[#fff7ef]' },
                { img: '/assets/cat.png', title: 'cat food', bg: 'bg-[#f0f8ff]' },
                { img: '/assets/mixed.png', title: 'Mixed>', bg: 'bg-[#f7fff0]' },
              ].map((c) => (
                <button
                  key={c.title}
                  onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                  className="bg-white border border-gray-100 p-6 rounded-lg flex flex-col items-center gap-4 hover:shadow-md transition"
                >
                  <div className={`w-20 h-20 rounded-full ${c.bg} flex items-center justify-center`}>
                    <img src={c.img} alt={c.title} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="text-sm font-medium">{c.title}</div>
                </button>
              ))}
            </div>
          </section>

          {/* Clearance Sale Banner */}
          <section className="mt-12">
            <div className="flex flex-col lg:flex-row items-center justify-between bg-[#fdf4ec] rounded-2xl p-8 lg:p-12 shadow-sm">
              {/* Left: Text */}
              <div className="flex-1 lg:pr-12 text-center lg:text-left">
                <p className="text-[#d78c47] font-medium mb-2 text-lg">Up to 40% Off</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#2b2b2b] leading-tight mb-4">
                  CLEARANCE<br />SALE !!!
                </h2>
                <p className="text-gray-600 mb-6">
                  Limited edition treats for your furry friends — grab them before they're gone!
                </p>
                <button className="bg-[#ff7a18] hover:bg-[#ff6a00] text-white px-6 py-3 rounded-md font-semibold transition">
                  Shop All →
                </button>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-sm lg:max-w-md">
                  <div className="absolute inset-0 w-72 h-72 bg-[#f8eede] rounded-full blur-sm -z-10 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0"></div>
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-[#fdf4ec]">
                    <img
                      src="/assets/doggy1.png"
                      alt="Cute dog sale"
                      className="w-full h-[420px] object-contain mx-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/300x300?text=Dog';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

    {/* Testimonial Section (clean version) */}
<section className="flex flex-col items-center text-center py-20 mt-12 bg-white">
  <div className="max-w-3xl px-6">
    <div className="text-[90px] text-[#f3e7da] leading-none font-serif select-none mb-2">
      &ldquo;
    </div>
    <p className="text-gray-700 text-lg italic mb-4">
      At the core of our practice is the idea that cities are the incubators of our greatest achievements,
      and the best hope for a sustainable future.
    </p>
    <p className="text-gray-500 text-sm">– Joshina Lin</p>

    {/* Dots navigation (decorative) */}
    <div className="flex justify-center gap-2 mt-6">
      <span className="w-2.5 h-2.5 bg-gray-700 rounded-full"></span>
      <span className="w-2.5 h-2.5 border border-gray-400 rounded-full"></span>
      <span className="w-2.5 h-2.5 border border-gray-400 rounded-full"></span>
    </div>
  </div>
</section>



        </div>
      </div>

      {/* Footer */}
      <Footer year={new Date().getFullYear()} onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
