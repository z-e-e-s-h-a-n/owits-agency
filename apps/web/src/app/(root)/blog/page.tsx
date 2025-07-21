import React from "react";

const posts = [
  { title: "Top 10 Destinations for 2024", summary: "Discover the must-visit places for your next adventure.", date: "2024-05-01" },
  { title: "How to Plan a Hassle-Free Trip", summary: "Tips and tricks for smooth travel planning.", date: "2024-04-15" },
  { title: "Luxury Travel on a Budget", summary: "Enjoy premium experiences without breaking the bank.", date: "2024-03-28" },
];

const BlogPage = () => (
  <section className="flex flex-col gap-8 py-12 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-4">Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, i) => (
        <div key={i} className="bg-card rounded-2xl shadow p-6 flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-muted-foreground">{post.summary}</p>
          <button className="text-link underline w-fit mt-2">Read More</button>
        </div>
      ))}
    </div>
  </section>
);

export default BlogPage; 