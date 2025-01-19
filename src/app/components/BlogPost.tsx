'use client';
import Image from 'next/image';
import React from 'react';

export default function LatestNewsBlog() {
  // Mock data for blogs (replace with your dynamic data or API calls)
  const blogs = [
    {
      id: 1,
      date: '10 February 2022',
      title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
      image: '/images/blog1.png', // Replace with your image path
      link: '#',
    },
    {
      id: 2,
      date: '10 February 2022',
      title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
      image: '/images/blog2.png', // Replace with your image path
      link: '#',
    },
    {
      id: 3,
      date: '10 February 2022',
      title: 'Curabitur rutrum velit ac congue malesuada',
      image: '/images/ab1.png', // Replace with your image path
      link: '#',
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-yellow-500 text-lg font-semibold">Blog Post</h3>
          <h2 className="text-4xl font-bold">
            <span className="text-yellow-500">La</span>test News & Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105"
            >
              {/* Blog Image */}
              <div className="w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500} // Set desired width
                  height={192} // Set desired height
                  objectFit="cover"
                />
              </div>
              {/* Blog Content */}
              <div className="p-4">
                <p className="text-yellow-500 text-sm mb-2">{blog.date}</p>
                <h3 className="text-lg font-bold mb-4">{blog.title}</h3>
                <div className="flex items-center justify-between">
                  <a
                    href={blog.link}
                    className="text-yellow-500 font-medium hover:underline"
                  >
                    Learn More
                  </a>
                  <div className="flex space-x-4 text-gray-400">
                    <button className="hover:text-white">
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                    <button className="hover:text-white">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
