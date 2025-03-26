export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          This is where you can share more detailed information about yourself, your background, 
          education, professional journey, and personal interests.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Professional Background</h2>
        <p className="text-lg">
          Discuss your career path, major achievements, and areas of expertise here.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Education</h2>
        <p className="text-lg">
          Share information about your educational background, degrees, certifications, etc.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Personal Interests</h2>
        <p className="text-lg">
          Talk about your hobbies, interests, and what you&apos;re passionate about outside of work.
        </p>
      </div>
    </div>
  );
} 