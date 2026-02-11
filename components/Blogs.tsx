"use client";

import { blogPosts } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  return (
    <section className=" py-24 space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-lg">
            Thoughts on engineering, architecture, design systems, and the
            intersection between creativity and technology.
          </p>
        </div>

        <Link
          href="/blog"
          className="self-start md:self-auto px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          See all blogs →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-16">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group space-y-6"
          >
            {/* Image */}
            <div className="relative h-100 w-full overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="
                    object-cover
                    grayscale
                    group-hover:grayscale-0
                    transition-all
                    duration-500
                    group-hover:scale-[1.03]
                "
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <div className="text-sm text-muted-foreground">
                {post.date} · {post.author}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {post.description}
              </p>

              <span className="inline-block pt-2 text-sm underline group-hover:text-primary transition-colors">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
