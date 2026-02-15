"use client";

import { blogPosts } from "@/constants";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();
  const blog = blogPosts.find((b) => b.id === Number(params.id));

  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <p className="text-gray-400 mb-4">
        {blog.author} • {blog.date}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {blog.topics.map((topic) => (
          <span
            key={topic}
            className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold"
          >
            {topic}
          </span>
        ))}
      </div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-300">{blog.description}</p>
      {/* You can expand this with full blog content later */}
    </div>
  );
}
