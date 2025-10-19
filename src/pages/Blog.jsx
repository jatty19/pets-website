import React from 'react';
import Footer from '../components/footer';
// Header is rendered at the app level (App.js). Do not render it here to avoid duplicate header.

const Blog = ({ onNavigate = () => {} }) => {
  const blogPosts = [
    {
      date: "22 Feb",
      title: "10 Reasons To Be Helpful Towards Any Animals",
      excerpt: "At the core of our practice is the idea that cities are the incubator of our greatest achievements, and that has hope for a sustainable future.",
      link: "READ MORE"
    },
    {
      date: "21 Feb",
      title: "How To Know Your Pet Is Hungry",
      excerpt: "At the core of our practice is the idea that cities are the incubator of our greatest achievements, and that has hope for a sustainable future.",
      link: "READ MORE"
    },
    {
      date: "20 Feb",
      title: "Blog Post Title",
      excerpt: "At the core of our practice is the idea that cities are the incubator of our greatest achievements, and that has hope for a sustainable future.",
      link: "READ MORE"
    }
  ];

  return (
  <div className="min-h-screen bg-white">
      {/* header is rendered by App.js */}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">Latest Blog Posts</h2>
            <button onClick={() => onNavigate('blog')} className="text-sm border border-gray-200 px-4 py-2 rounded">READ ALL</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((post, index) => {
              const [day, month] = post.date.split(' ');
              return (
                <article key={index} className="relative bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <div className="absolute left-4 top-4 bg-white rounded shadow px-3 py-2 text-center">
                      <div className="text-sm font-bold text-amber-600">{day}</div>
                      <div className="text-xs text-gray-500">{month}</div>
                    </div>
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="w-11/12 h-5/6 bg-gray-200 rounded-lg" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                    <button onClick={() => onNavigate('blog')} className="text-amber-600 font-semibold">READ MORE</button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* horizontal gallery */}
          <div className="overflow-x-auto py-6">
            <div className="flex items-center space-x-4 px-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-36 bg-gray-100 rounded-lg shadow-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Footer */}
   <Footer year={new Date().getFullYear()} onNavigate={onNavigate} />
    </div>
  );
};

export default Blog;