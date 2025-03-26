export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-6 text-blue-900">Resume</h1> */}
      
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">Channa Hem</h2>
          <p className="text-lg text-blue-800">Hospitality and Tourism Management Student</p>
          <div className="mt-2">
            <a href="mailto:hemchanna@go.byuh.edu" className="text-blue-600 hover:underline mr-4">
              hemchanna@go.byuh.edu
            </a>
            <a href="https://www.linkedin.com/in/channa-hem/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>
        <a 
          href="/resume.pdf" 
          download 
          className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all shadow-md"
        >
          Download PDF
        </a>
      </div>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Education</h3>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">Brigham Young University – Hawaii</h4>
            <p>July 2026</p>
          </div>
          <p>B.S. Hospitality and Tourism Management</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Minor: Health and Human Performance</li>
            <li>Minor: Communication, Mass and Culture</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Work Experience</h3>
        
        <div className="mb-6">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">Property Service Specialist</h4>
            <p>Sept 2024 – Present</p>
          </div>
          <p className="italic mb-2">Brigham Young University-Hawaii, Laie, HI</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Performed and coordinated with a team of 10 property specialists for email correspondence, recording work documentation, and daily apartment inspections to ensure enforcement of housing agreement rules and policies</li>
            <li>Participated in weekly training in problem solving, housing policy updates, and feedback with housing leadership and 20 property specialists covering married and single housing</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">Single Student Housing Resident Advisor/Mentor</h4>
            <p>Oct 2023 – Sept 2024</p>
          </div>
          <p className="italic mb-2">Brigham Young University-Hawaii, Laie, HI</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Enforced and monitored over 100 student residents in a team of 4 according to housing rules, regulations, and ensuring safety and security</li>
            <li>Collaborated in teamwork meetings and organizing dormitory programs and activities in a team of 4 weekly</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">Gateway Buffet Server and Greeter</h4>
            <p>Sept 2022 – Oct 2023</p>
          </div>
          <p className="italic mb-2">Polynesian Cultural Center, Laie, HI</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Served and welcomed over 800 guests daily in a team of 40 servers to maintain and enhance customer satisfaction through personable and positive dining choices</li>
            <li>Collaborated in a team of 40 servers monthly to receive problem resolution training and receive feedback of customer satisfaction and improvement which helped increase customer attraction to Gateway buffet by ±10%</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">Cambodia Mission Office Technical Assistant</h4>
            <p>Jul 2021 – Jul 2022</p>
          </div>
          <p className="italic mb-2">The Church of Jesus Christ of Latter-day Saints, Phnom Penh, Cambodia</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provided translation services for church missionary leadership daily for various leadership and missionaries to ensure effective communication</li>
            <li>Advised and organized with church leadership on various missionary tasks daily including missionary activities, events, and providing homecare for kids of church leadership</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">Assistant Teacher</h4>
            <p>Jul 2020 – Dec 2020</p>
          </div>
          <p className="italic mb-2">Khmer & SHINE Children, Business, and Language International Schools, Phnom Penh, Cambodia</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Created interactive approaches to make learning enjoyable for average 50 kids daily and improved the quality of learning experiences and fostering positive interactions in the classroom</li>
            <li>Assisted teachers in various tasks daily including ensuring the wellbeing and safety of on average 50 students</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Skills</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Technical Skills</h4>
            <ul className="list-disc list-inside">
              <li>Microsoft Office Suite</li>
              <li>Customer Service</li>
              <li>Event Planning</li>
              <li>Hospitality Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Languages</h4>
            <ul className="list-disc list-inside">
              <li>English (Fluent)</li>
              <li>Khmer (Native)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">References</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Melania Tukele</p>
            <p>Resident Advisor Supervisor</p>
            <a href="mailto:Melania.Navarro@byuh.edu" className="text-blue-600 hover:underline">
              Melania.Navarro@byuh.edu
            </a>
          </div>
          
          <div>
            <p className="font-medium">Hannah Birsinger</p>
            <p>Housing Operations Manager</p>
            <a href="mailto:Hannah.Birsinger@byuh.edu" className="text-blue-600 hover:underline">
              Hannah.Birsinger@byuh.edu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 