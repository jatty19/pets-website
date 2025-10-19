import React from 'react';
import Footer from '../components/footer';

const Blog = ({ onNavigate = () => {} }) => {
  const blogPosts = [
    {
      date: "22 Feb",
      title: "10 Reasons To Be Helpful Towards Any Animals",
      excerpt: "At the core of our practice is the idea that cities are the incubator of our greatest achievements, and that has hope for a sustainable future.",
      link: "READ MORE",
      image: "/assets/date.png"
    },
    {
      date: "21 Feb",
      title: "How To Know Your Pet Is Hungry",
      excerpt: "At the core of our practice is the idea that cities are the incubator of our greatest achievements, and that has hope for a sustainable future.",
      link: "READ MORE",
      image: "/assets/date1.png"
    },
    {
      date: "20 Feb",
      title: "Blog Post Title",
      excerpt: "At the core of our practice is the idea that cities are the incubator of our greatest achievements, and that has hope for a sustainable future.",
      link: "READ MORE",
      image: "/assets/date2.png"
    }
  ];

  const galleryImages = [
    "/assets/ig.png",
    "/assets/ig1.png",
    "/assets/ig2.png",
    "/assets/ig3.png",
    "/assets/ig4.png",
    "/assets/ig5.png",
    "/assets/ig6.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">Latest Blog Posts</h2>
            <button
              onClick={() => onNavigate('blog')}
              className="text-sm border border-gray-200 px-4 py-2 rounded"
            >
              READ ALL
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((post, index) => {
              const [day, month] = post.date.split(" ");
              return (
                <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  {/* Blog Image */}
                  <div className="relative w-full pb-[100.25%] bg-gray-100">
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white rounded shadow px-3 py-2 text-center z-10">
                      <div className="text-sm font-bold text-amber-600">{day}</div>
                      <div className="text-xs text-gray-500">{month}</div>
                    </div>

                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-lg" />
                    )}
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                    <button
                      onClick={() => onNavigate('blog')}
                      className="text-amber-600 font-semibold"
                    >
                      {post.link}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Horizontal Gallery */}
          <div className="overflow-x-auto py-6">
            <div className="flex items-center space-x-4 px-2">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-40 rounded-lg shadow-sm overflow-hidden bg-gray-100"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
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
