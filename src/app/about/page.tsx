export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 wave-header">Professional Profile</h1>
      
      <div className="space-y-8 text-gray-800">
        <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
          <p className="text-lg leading-relaxed mb-6">
            Aloha! I am Channa Hem Neri, an aspiring <strong>Community Events &amp; Outreach Coordinator</strong> currently pursuing my Bachelor of Science in Hospitality and Tourism Management at Brigham Young University-Hawaii.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Born and raised in Cambodia, I developed a deep appreciation for the profound impact that hospitality, tourism, and community gatherings can have on local populations. Watching these positive impacts firsthand inspired my commitment to a career where I can bridge cultural gaps and foster robust community networks through exceptional event experiences.
          </p>
          <p className="text-lg leading-relaxed">
            I specialize in the strategic planning, marketing, and execution of programs designed to engage diverse demographics. From managing dynamic multicultural events like the BYUH Culture Night to organizing educational initiatives like the Lā&apos;ie Elementary Family Game Night, I thrive on turning conceptual strategy into operational reality.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b border-blue-200 pb-2">Professional Philosophy</h2>
            <p className="leading-relaxed">
              I firmly believe that an event&apos;s success is determined long before the doors open. My core strength lies in <strong>Strategic Communication and Resource Optimization</strong>. Whether it involves balancing budgets, mitigating facility bottlenecks, or communicating precisely with multifaceted stakeholders, I bring a data-driven and proactive approach to problem-solving.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b border-blue-200 pb-2">Future Aspirations</h2>
            <p className="leading-relaxed">
              Committed to evolving as a strategic event leader, my immediate professional goal is to acquire my <strong>Certified Meeting Professional (CMP)</strong> designation. I am passionate about integrating Event Data Analytics to measure return on investment (ROI) and attendee satisfaction, allowing me to continuously optimize performance and deliver globally standard events.
            </p>
          </section>
        </div>

        <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Education &amp; Expertise</h2>
          <ul className="list-disc pl-6 space-y-3 mt-4 text-lg">
            <li><strong>Degree:</strong> B.S. in Hospitality &amp; Tourism Management, Brigham Young University-Hawaii</li>
            <li><strong>Minors:</strong> Health &amp; Human Performance | Communication, Mass &amp; Culture</li>
            <li><strong>Core Competencies:</strong> Large-Scale Event Logistics, Volunteer Team Leadership, Stakeholder Relations, Strategic Marketing, and Operational Contingency Planning.</li>
          </ul>
        </section>

      </div>
    </div>
  );
} 