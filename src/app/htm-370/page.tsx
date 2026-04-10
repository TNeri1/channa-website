import Link from "next/link";

export const metadata = {
  title: "HTM 370 Course Documentation - Channa H. Neri",
  description: "Course documentation and reflections for HTM 370: Event Management",
};

export default function HTM370Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 shadow-sm">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline inline-flex items-center gap-2">
          &larr; Back to Home
        </Link>
      </div>

      <header className="mb-12 border-b-2 border-blue-900 pb-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-2 wave-header">Course Documentation: HTM 370</h1>
        <p className="text-xl text-blue-800">Event and Design Management Portfolio</p>
      </header>

      {/* 1. Evidence Map */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">1. Evidence Map: Lā&apos;ie Elementary Family Game Night</h2>
        
        <div className="overflow-x-auto shadow-md rounded-lg mb-8 border border-blue-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="p-4 font-semibold border-b">Project Section</th>
                <th className="p-4 font-semibold border-b">Description</th>
                <th className="p-4 font-semibold border-b">My Contribution</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b hover:bg-blue-50">
                <td className="p-4 font-medium text-blue-900">Event Foundation &amp; Overview</td>
                <td className="p-4">Strategic framing of the event, including mission alignment and core objectives.</td>
                <td className="p-4">Developed the event identity and partnership framework between BYUH and Laie Elementary; defined four key objectives including literacy boosting and community building.</td>
              </tr>
              <tr className="border-b hover:bg-blue-50">
                <td className="p-4 font-medium text-blue-900">Finance &amp; Budgeting</td>
                <td className="p-4">Comprehensive breakdown of Title I funding allocation and event expenses.</td>
                <td className="p-4">Drafted the $2,203 event budget; balanced expenses across categories (books, catering, supplies) to maintain a zero net balance.</td>
              </tr>
              <tr className="border-b hover:bg-blue-50">
                <td className="p-4 font-medium text-blue-900">Procurement &amp; Vendors</td>
                <td className="p-4">Identification of specific vendors and detailed cost estimates.</td>
                <td className="p-4">Researched and secured quotes from BYU-Hawaii Food Services and Scholastic Education Solutions to meet high-volume logistical needs (320 servings/216 books).</td>
              </tr>
              <tr className="border-b hover:bg-blue-50">
                <td className="p-4 font-medium text-blue-900">Marketing &amp; Promotion</td>
                <td className="p-4">Multi-channel communication strategy and audience segmentation.</td>
                <td className="p-4">Developed targeted messaging for parents and students; created a 2-week social media calendar (Facebook/Instagram) to drive RSVPs and event awareness.</td>
              </tr>
              <tr className="border-b hover:bg-blue-50">
                <td className="p-4 font-medium text-blue-900">Stakeholder Communication</td>
                <td className="p-4">Direct correspondence with school leadership and project coordinators.</td>
                <td className="p-4">Managed professional communication with Title I and PCNC coordinators; served as a primary point of contact for event execution and feedback collection.</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="p-4 font-medium text-blue-900">Evaluation &amp; Feedback Integration</td>
                <td className="p-4">Post-event analysis based on client feedback and performance metrics.</td>
                <td className="p-4">Categorized stakeholder feedback into key performance areas: Operational Agility, Leadership, and Professionalism; linked positive principal feedback to successful project outcomes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Course Learning Outcome Reflection */}
      <section className="mb-16 bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-2">2. Course Learning Outcome (CLO) Reflection</h2>
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Introduction</h3>
            <p>
              My experience in HTM 370 has been a journey of moving from just learning about event theory to actually running them 
              in the busy Lā&apos;ie community. By working on both local school projects and BYUH university culture night shows, I have 
              connected what I learned in class with the tough demands of the hospitality and tourism business.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Leadership &amp; Teamwork</h3>
            <p>
              In my role for the Lā&apos;ie Elementary Family Game Night, I shifted from being a participant to a leader. I learned that 
              leadership in event management is not about control, but about empowerment. Managing a team of 7 student volunteers 
              required clear delegation and trust. I realized that team synergy is highest when every member understands the why 
              behind their station. Whether it was coordinating game rotations or managing the game, I focused on maintaining high 
              levels, which directly translated into a more welcoming atmosphere for the families attending.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Project Management &amp; Communication</h3>
            <p className="mb-2">
              Project management was the backbone of my work this semester. Utilizing tools like the Run of Event and detailed Logistics 
              for the Lā&apos;ie Elementary Family Game Night taught me that an event&apos;s success is determined months before the doors open.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Communication:</strong> I practiced &quot;360-degree communication,&quot; ensuring that I was communicating upward to faculty 
                and school administrators, laterally to my peers, and downward to volunteers.
              </li>
              <li>
                <strong>Precision:</strong> My work with the Undergraduate Research Conference (URC) highlighted the necessity of administrative 
                precision. Managing a professional schedule where minutes mattered required assertive yet polite communication to keep presenters on track.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Evaluation &amp; Continuous Improvement</h3>
            <p>
              A significant learning outcome was the shift from &quot;finishing&quot; an event to &quot;evaluating&quot; it. In the past, I viewed the end of an 
              event as the conclusion. HTM 370 taught me that the Post-Event Report is where the most growth happens. By using evaluation tools 
              for the Family Game Night, I was able to identify bottlenecks in the flow of the cafeteria layout. This data-driven approach is what 
              separates an amateur coordinator from a professional event manager. I now understand that feedback, whether from a judge&apos;s rubric at 
              URC or a parent&apos;s comment at the elementary school, is the primary resource for future success.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Conclusion</h3>
            <p>
              HTM 370 has equipped me with a toolkit that is both technical and interpersonal. I am graduating with the confidence to manage budgets, 
              design marketing collateral, and lead teams through the unpredictable nature of live events. I look forward to applying these outcomes as 
              I transition into a career in professional event management, where I will continue to prioritize community impact and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Job Target & Professional Reflection */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Job Target Profile</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">Target Role</h3>
            <p className="text-blue-700 font-semibold text-xl">Community Events &amp; Outreach Coordinator</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">Role Description</h3>
            <p className="text-gray-700 leading-relaxed">
              This role focuses on the strategic planning, marketing, and execution of programs designed to engage specific 
              demographics within a community or organization. It involves managing budgets, coordinating multi-level stakeholders, 
              and conducting post-event evaluations to ensure organizational goals are met.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800">Why it&apos;s a Fit for HTM 370</h3>
            <p className="text-gray-700 leading-relaxed">
              This role is a direct extension of the HTM 370 curriculum, which emphasizes the transition from conceptual planning 
              to operational reality. My coursework required me to manage the exact lifecycle of this role: identifying community 
              needs (Family Game Night), managing large-scale operational logistics (Culture Night), and maintaining professional 
              standards in formal settings (URC).
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Professional Reflection</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Preparation through HTM 370</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                HTM 370 served as a professional bridge between event theory and operational execution. My coursework provided a rigorous framework 
                for Project Management, specifically through the development of &quot;Run of Show&quot; documents and logistics maps. My work with the Undergraduate 
                Research Conference (URC) and Culture Night case studies taught me to anticipate operational bottlenecks such as registration delays or 
                technical failures before they occur. I have been trained to manage the entire event lifecycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800">Strengths in Planning &amp; Delivery</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                My core strength lies in Strategic Communication and Resource Optimization. In event management, I’ve found that success depends on the 
                ability to connect with others. Throughout my projects, I have focused on communicating clearly with my teammates, navigating logistical 
                needs with venue managers, and building strong relationships with community stakeholders and parents.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Future Professional Development</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                I am committed to evolving into a strategic event leader. My immediate goal is to pursue the Certified Meeting Professional (CMP) 
                designation to formalize my expertise. Moving forward, I plan to deepen my mastery of Event Data Analytics to measure ROI and attendee 
                sentiment, delivering high-impact events that drive community growth.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}