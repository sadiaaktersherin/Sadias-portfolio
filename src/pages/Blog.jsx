import React from 'react';

const blogPosts = [
  {
    title: "Why React is Awesome",
    date: "July 25, 2025",
    description: "React makes it painless to create interactive UIs. Learn how to build your own components easily.",
  },
  {
    title: "How to Build a Portfolio",
    date: "July 20, 2025",
    description: "Step-by-step guide to creating a personal portfolio using React and Tailwind CSS.",
  },
  {
    title: "Understanding useEffect",
    date: "July 15, 2025",
    description: "A clear explanation of how the useEffect hook works and how to use it properly.",
  },
];

function Blog() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
