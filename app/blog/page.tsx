"use client";

import { blogPosts } from "@/constants";
import Link from "next/link";

export default function AllBlogsPage() {
  const latestBlog = blogPosts[0]; // first is the latest
  const otherBlogs = blogPosts.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <h1 className="text-5xl font-bold mb-12">Latest Blog</h1>

      {/* Latest Blog Horizontal */}
      <Link
        href={`/blogs/${latestBlog.id}`}
        className="flex flex-col md:flex-row gap-6 mb-12 cursor-pointer group"
      >
        <div className="md:w-1/2 h-64 md:h-90 relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={latestBlog.image}
            alt={latestBlog.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {latestBlog.title}
            </h2>
            <p className="text-gray-300 mb-4">{latestBlog.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {latestBlog.topics.map((topic) => (
              <span
                key={topic}
                className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            {latestBlog.author} • {latestBlog.date}
          </p>
        </div>
      </Link>

      {/* Other Blogs Grid */}
      <h1 className="mt-20 mb-8 text-4xl font-bold">More blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherBlogs.map((blog) => (
          <Link
            href={`/blogs/${blog.id}`}
            key={blog.id}
            className="flex flex-col cursor-pointer group rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-90 relative overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="py-4 flex flex-col justify-between flex-1">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-400 mb-2">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {blog.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-semibold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                {blog.author} • {blog.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
