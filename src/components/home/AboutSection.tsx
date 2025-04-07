"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="content-fade-in rounded-xl shadow-lg p-8 bg-white bg-opacity-80">
          <h1 className="text-3xl font-bold mb-6 text-blue-900 wave-header">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <p className="mb-4">
                Born and raised in Cambodia, I developed a deep appreciation for hospitality from an early age. 
                Watching how tourism positively impacted local communities inspired me to pursue a career in this field.
              </p>
              
              <p className="mb-4">
                At Brigham Young University-Hawaii, I&apos;m expanding my knowledge of hospitality management, sustainable 
                tourism practices, and cross-cultural communication. I&apos;m particularly interested in how tourism can 
                be leveraged as a force for good in developing economies.
              </p>
              
              <p className="mb-4">
                In my free time, I enjoy exploring Hawaii&apos;s beautiful beaches, volunteering in community projects, 
                and trying new cuisine from around the world.
              </p>
              
              <h2 className="text-xl font-semibold mb-2 mt-6 text-blue-800">My Vision</h2>
              <p>
                I aim to bridge cultural gaps through exceptional hospitality experiences. I believe that 
                thoughtful tourism can foster cultural appreciation, economic development, and global 
                understanding.
              </p>
            </div>
            
            <div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-3 text-blue-800">Quick Facts</h2>
                <ul className="space-y-2">
                  <li><strong>Location:</strong> Laie, Hawaii</li>
                  <li><strong>University:</strong> BYU-Hawaii</li>
                  <li><strong>Major:</strong> Hospitality & Tourism Management</li>
                  <li><strong>Languages:</strong> English, Khmer</li>
                  <li><strong>Interests:</strong> Cultural exchange, sustainable tourism, service excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
