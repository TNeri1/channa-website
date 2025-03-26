import Image from "next/image";

export default function Featured() {
  // Example featured items - replace with your own
  const featuredItems = [
    {
      id: 1,
      title: "Featured in Publication Name",
      description: "Brief description of how you were featured or what the article was about.",
      imageUrl: "/placeholder-featured-1.jpg",
      link: "https://example.com/feature1"
    },
    {
      id: 2,
      title: "Interview with Organization",
      description: "Details about an interview or spotlight on your work.",
      imageUrl: "/placeholder-featured-2.jpg",
      link: "https://example.com/feature2"
    },
    // Add more featured items as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Featured By</h1>
      <p className="text-lg mb-8">
        A collection of places where my work has been featured, interviews I've given, 
        and recognition I've received.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredItems.map(item => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 w-full">
              <Image 
                src={item.imageUrl} 
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 