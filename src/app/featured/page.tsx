export default function Portfolio() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Lā'ie Elementary Family Game Night",
      role: "Lead Logistics",
      context: "A community outreach event for 100+ local families to strengthen the bond between the school and the Lā'ie community.",
      responsibilities: "Designed age-appropriate game activity rotations and managed a 7-person volunteer team.",
      outcomes: "Successfully met attendance targets. Learned how to apply theory in class in a real event in managing people in the team."
    },
    {
      id: 2,
      title: "Undergraduate Research Conference (URC)",
      role: "Session Moderator",
      context: "A formal academic conference requiring professionals in research presentations.",
      responsibilities: "Managed technical setup in the room, enforced strict presentation timing for faculty/students.",
      outcomes: "Maintained 100% schedule compliance, refined professional communication, and improved public speaking."
    },
    {
      id: 3,
      title: "BYU-Hawaii Culture Night",
      role: "Event Room Manager Volunteer",
      context: "A large-scale cultural production involving 20+ performance chapters and 100+ attendees.",
      responsibilities: "Facilitated backstage transitions between performance groups in the dressing room and managed crowd flows smoothly without any facility damage.",
      outcomes: "Gained experience in managing people backstage during operations. Learned the importance of real-time contingency planning in high-pressure environments."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 wave-header">Professional Portfolio</h1>
      <p className="text-xl mb-12 text-blue-800">
        A collection of event highlights, professional roles, and project leadership experiences.
      </p>
      
      <div className="grid grid-cols-1 gap-8">
        {portfolioProjects.map(project => (
          <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-50 hover:shadow-xl transition-shadow p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 pb-4 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-1">{project.title}</h2>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.role}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Project Context</h3>
                <p className="text-gray-700">{project.context}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Key Responsibilities</h3>
                <p className="text-gray-700">{project.responsibilities}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-1 flex items-center">
                  <span className="mr-2">💡</span> Outcomes &amp; Learning
                </h3>
                <p className="text-blue-800">{project.outcomes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 