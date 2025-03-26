export default function Blog() {
  // Example blog posts - replace with your own
  const blogPosts = [
    {
      id: 1,
      title: "My First Blog Post",
      date: "April 15, 2024",
      excerpt: "This is a brief excerpt from my first blog post discussing an interesting topic...",
      slug: "my-first-blog-post"
    },
    {
      id: 2,
      title: "Thoughts on Recent Industry Trends",
      date: "April 10, 2024",
      excerpt: "In this post, I explore some of the emerging trends in the industry and share my insights...",
      slug: "industry-trends"
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p className="text-lg mb-8">
        Welcome to my blog where I share my thoughts, experiences, and insights.
      </p>
      
      <div className="space-y-8">
        {blogPosts.map(post => (
          <div key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 