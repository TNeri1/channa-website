import ContactForm from "./form";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg mb-8">
        I&apos;d love to hear from you! Please use the form below or reach out via email or social media.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <ContactForm />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
          
          <div className="space-y-3">
            <p>
              <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
            </p>
            
            <p>
              <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourusername</a>
            </p>
            
            <p>
              <strong>Twitter:</strong> <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@yourusername</a>
            </p>
            
            {/* Add more social media or contact methods as needed */}
          </div>
        </div>
      </div>
    </div>
  );
} 