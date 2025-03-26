"use client";

import Image from "next/image";
import Link from "next/link";
import Resume from "./resume/page";
import { useEffect, useState } from "react";
import ProfileImage from "../components/ProfileImage";
import OceanBackground from "../components/OceanBackground";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const toggleCase = (index: number) => {
    if (expandedCase === index) {
      setExpandedCase(null);
    } else {
      setExpandedCase(index);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Ocean Background Animation */}
      <OceanBackground />
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/channa-hem/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0077b5" />
        </a>
        <a href="https://www.instagram.com/_channahem/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} size="lg" color="#E4405F" />
        </a>
        <a href="https://www.youtube.com/@Channa_and_TJ" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faYoutube} size="lg" color="#FF0000" />
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-8 py-4">
        <div className="content-fade-in rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto mt-8 bg-white bg-opacity-80">
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-2 text-blue-900 flex items-center justify-center">
                <span className="hibiscus-icon mr-4" aria-hidden="true">🌺</span>
                Aloha, I'm Channa H. Neri
                <span className="hibiscus-icon ml-4" aria-hidden="true">🌺</span>
              </h1>
              <p className="text-lg text-blue-800 italic">Hospitality and Tourism Management Student</p>
            </div>
            
            {/* Use the ProfileImage component */}
            <ProfileImage />
            
            <div className="max-w-2xl text-center">
              <p className="mb-6">
                Welcome to my personal website! I'm a passionate Hospitality and Tourism Management student 
                at Brigham Young University-Hawaii with a love for cultural experiences and exceptional service.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Link href="#about" className="bg-blue-100 p-6 rounded-lg shadow-md transition-all text-center ocean-card">
              <h2 className="font-semibold text-xl mb-2 text-blue-900">About Me</h2>
              <p>Learn more about my journey and passions</p>
            </Link>
            
            <Link href="#resume" className="bg-blue-100 p-6 rounded-lg shadow-md transition-all text-center ocean-card">
              <h2 className="font-semibold text-xl mb-2 text-blue-900">Resume</h2>
              <p>View my qualifications and experience</p>
            </Link>
            
            <Link href="mailto:hemchanna@go.byuh.edu" className="bg-blue-100 p-6 rounded-lg shadow-md transition-all text-center ocean-card">
              <h2 className="font-semibold text-xl mb-2 text-blue-900">Email Me</h2>
              <p>hemchanna@go.byuh.edu</p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  At Brigham Young University-Hawaii, I'm expanding my knowledge of hospitality management, sustainable 
                  tourism practices, and cross-cultural communication. I'm particularly interested in how tourism can 
                  be leveraged as a force for good in developing economies.
                </p>
                
                <p className="mb-4">
                  In my free time, I enjoy exploring Hawaii's beautiful beaches, volunteering in community projects, 
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

      {/* Featured Work Section */}
      <section id="featured-work" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="content-fade-in rounded-xl shadow-lg p-8 bg-white bg-opacity-80">
            <h1 className="text-3xl font-bold mb-6 text-blue-900 wave-header">Featured Work</h1>
            
            <div className="space-y-8">
              {/* Featured Work 1 - Egypt */}
              <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
                <div 
                  className="cursor-pointer ocean-card"
                  onClick={() => toggleCase(0)}
                >
                  <div className="relative h-64 w-full">
        <Image
                      src="/egypt.jpg" 
                      alt="Egypt Tourism" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-blue-800">
                      Sustainable Tourism Research: Addressing Overtourism in Hurghada, Egypt
                    </h2>
                    <span className="text-blue-600 text-xl font-bold ml-4 flex-shrink-0">
                      {expandedCase === 0 ? '▲' : '▼'}
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedCase === 0 ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-blue-100">
                    <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
                    <p className="mb-4">
                      This research project examined the impacts of overtourism in Hurghada, Egypt, and proposed 
                      sustainable alternatives to alleviate tourism pressure while maintaining economic benefits.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Overtourism in Hurghada: Impacts on Environment, Culture, and Society</h3>
                    
                    <h4 className="font-medium mb-2">Environmental Impacts</h4>
                    <p className="mb-4">
                      Hurghada's rapid tourism growth has led to environmental concerns, particularly affecting its marine ecosystems. 
                      The expansion of coastal tourism has resulted in localized pollution, habitat loss, and resource depletion, 
                      threatening the health of coral reefs and marine biodiversity.
                    </p>
                    
                    <h4 className="font-medium mb-2">Socio-Cultural Impacts</h4>
                    <p className="mb-4">
                      The influx of tourists has strained Hurghada's infrastructure, leading to overcrowding and challenges in waste management. 
                      Additionally, the dominance of tourism has impacted local cultural practices, with traditional lifestyles adapting to 
                      meet tourist demands, potentially diluting cultural authenticity.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Aqaba, Jordan: A Sustainable Alternative</h3>
                    <p className="mb-4">
                      Aqaba offers similar attractions to Hurghada, including pristine beaches and rich marine life, making it an ideal 
                      alternative for tourists seeking Red Sea experiences. Notably, Aqaba is recognized for being more relaxed and 
                      cost-effective compared to neighboring destinations, providing a balanced environment for both tourists and locals.
                    </p>
                    
                    <h4 className="font-medium mb-2">Environmental Stewardship</h4>
                    <p className="mb-4">
                      Jordan has been proactive in promoting sustainable tourism, implementing policies to protect natural resources and 
                      minimize environmental footprints. This commitment ensures the preservation of marine ecosystems, offering tourists 
                      a pristine environment while safeguarding biodiversity.
                    </p>
                    
                    <h4 className="font-medium mb-2">Socio-Cultural Preservation</h4>
                    <p className="mb-4">
                      Aqaba's tourism development emphasizes community involvement, ensuring that local cultures and traditions are respected 
                      and integrated into the tourism experience. This approach not only enriches the visitor experience but also empowers 
                      local communities, fostering economic and social benefits.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Recommendations for Sustainable Tourism Promotion</h3>
                    <p className="mb-2">
                      To effectively position Aqaba as a sustainable alternative to Hurghada, the following strategies are recommended:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                      <li><span className="font-medium">Targeted Marketing Campaigns:</span> Highlight Aqaba's unique offerings, such as its relaxed atmosphere and affordability, to attract tourists seeking similar experiences to Hurghada.</li>
                      <li><span className="font-medium">Infrastructure Development:</span> Invest in sustainable infrastructure that accommodates tourists without compromising environmental integrity or local lifestyles.</li>
                      <li><span className="font-medium">Community Engagement:</span> Involve local communities in tourism planning and decision-making processes to ensure that tourism development aligns with their needs and preserves cultural heritage.</li>
                      <li><span className="font-medium">Environmental Education:</span> Educate tourists on sustainable practices and the importance of preserving natural and cultural resources, fostering responsible tourism behaviors.</li>
        </ol>

                    <h3 className="font-semibold text-lg mb-3">Conclusion</h3>
                    <p>
                      Addressing overtourism in Hurghada requires a multifaceted approach that includes promoting alternative destinations like Aqaba. 
                      By focusing on sustainable tourism practices, Aqaba can offer similar experiences to tourists while mitigating the negative 
                      impacts associated with overtourism. This strategy not only preserves environmental and cultural assets but also ensures 
                      the long-term viability of tourism in the region.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Featured Work 2 - Boracay */}
              <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
                <div 
                  className="cursor-pointer ocean-card"
                  onClick={() => toggleCase(1)}
                >
                  <div className="relative h-64 w-full">
            <Image
                      src="/boracay.png" 
                      alt="Boracay Beach" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-blue-800">
                      Destination Marketing: Promoting Boracay as the Ultimate Family Vacation Destination
                    </h2>
                    <span className="text-blue-600 text-xl font-bold ml-4 flex-shrink-0">
                      {expandedCase === 1 ? '▲' : '▼'}
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedCase === 1 ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-blue-100">
                    <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
                    <p className="mb-4">
                      Developed a comprehensive marketing strategy and vacation package to promote Boracay, Philippines 
                      as an ideal destination for family travel, highlighting its unique attractions and creating 
                      customized experiences for multi-family groups.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Why Choose Boracay?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li><span className="font-medium">World-Renowned White Sand Beaches:</span> Boracay's White Beach is consistently ranked among the top beaches in the world. Its powdery white sand and crystal-clear waters provide the perfect setting for a relaxing getaway.</li>
                      <li><span className="font-medium">Family-Friendly Activities:</span> From water sports and island hopping to cultural experiences and relaxation, Boracay caters to all age groups.</li>
                      <li><span className="font-medium">Luxury and Comfort:</span> The island offers a range of accommodations, from budget-friendly stays to high-end resorts, ensuring comfort for every family.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-3">Customized Itinerary for Families</h3>
                    
                    <h4 className="font-medium mb-2">Day 1: Arrival and Relaxation</h4>
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li>Warm welcome at Caticlan Airport and private boat transfer to Boracay</li>
                      <li>Check-in at a beachfront resort with family suites</li>
                      <li>Sunset beachside dinner at a local seafood restaurant</li>
                    </ul>
                    
                    <h4 className="font-medium mb-2">Day 2: Adventure and Exploration</h4>
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li>Morning: Island hopping tour (Puka Beach, Crystal Cove, Magic Island for cliff diving)</li>
                      <li>Afternoon: Helmet diving and banana boat ride</li>
                      <li>Evening: Buffet dinner with a fire dance show</li>
                    </ul>
                    
                    <h4 className="font-medium mb-2">Day 3: Cultural and Leisure Activities</h4>
                    <ul className="list-disc list-inside ml-4 mb-3">
                      <li>Morning: Visit to D'Talipapa Market for a local shopping experience</li>
                      <li>Afternoon: Henna tattoo and souvenir shopping at D'Mall</li>
                      <li>Evening: Private family bonfire with storytelling by the beach</li>
                    </ul>
                    
                    <h4 className="font-medium mb-2">Day 4: Relaxation and Departure</h4>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>Morning: Family spa session and beach yoga</li>
                      <li>Afternoon: Free time for swimming and taking last-minute photos</li>
                      <li>Transfer back to the airport with a farewell gift for each family</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-3">Package Highlights</h3>
                    <p className="mb-4">
                      The package includes roundtrip airfare and transfers, luxury beachfront accommodations, 
                      all meals, guided activities, and a professional family photoshoot session. It prioritizes 
                      safety and convenience with private transfers while offering a perfect balance of adventure 
                      and relaxation for all family members.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Results</h3>
                    <p>
                      This marketing campaign successfully positioned Boracay as more than just a vacation spot—but 
                      a paradise where families can create lifelong memories. The customized package approach resulted 
                      in increased bookings from family groups and positive feedback on the tailored experiences.
                    </p>
                  </div>
                </div>
        </div>

              {/* Featured Work 3 - Economic Concepts */}
              <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
                <div 
                  className="cursor-pointer ocean-card"
                  onClick={() => toggleCase(2)}
                >
                  <div className="relative h-64 w-full">
          <Image
                      src="/tourism.jpg" 
                      alt="Tourism Economics" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-blue-800">
                      Economic Analysis: Key Economic Concepts in Hospitality and Tourism
                    </h2>
                    <span className="text-blue-600 text-xl font-bold ml-4 flex-shrink-0">
                      {expandedCase === 2 ? '▲' : '▼'}
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedCase === 2 ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-blue-100">
                    <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
                    <p className="mb-4">
                      Developed a comprehensive analysis of key economic principles that drive decision-making in the 
                      hospitality and tourism industries, highlighting how these concepts impact business operations, 
                      pricing strategies, and market dynamics.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Key Economic Concepts</h3>
                    
                    <h4 className="font-medium mb-2">Understanding Economics</h4>
                    <p className="mb-4">
                      Economics is the study of how individuals and businesses allocate limited resources to satisfy their needs and wants. 
                      In the hospitality industry, this involves understanding supply and demand, revenue management, and consumer behavior 
                      to maximize profitability.
                    </p>
                    
                    <h4 className="font-medium mb-2">Sequential Value in the Supply Chain</h4>
                    <p className="mb-4">
                      Sequential value refers to the step-by-step process of adding value to a product or service before it reaches the final consumer. 
                      In tourism, this could mean the journey from airline ticket booking to hotel stays and local attractions. Each step must create 
                      value to enhance customer satisfaction and encourage repeat business.
                    </p>
                    
                    <h4 className="font-medium mb-2">How Markets Determine Pricing</h4>
                    <p className="mb-4">
                      Pricing in the hospitality industry is influenced by factors such as demand, competition, and costs. Businesses use strategies 
                      like dynamic pricing, where hotel room rates and airline ticket prices fluctuate based on seasonality and customer demand.
                    </p>
                    
                    <h4 className="font-medium mb-2">Shifters of Demand</h4>
                    <p className="mb-4">
                      Demand in the hospitality industry can change due to several factors, including consumer income, preferences, external economic 
                      conditions, and special events. Understanding these shifts helps businesses adjust their marketing strategies and pricing models accordingly.
                    </p>
                    
                    <h4 className="font-medium mb-2">Franchising in the Hospitality Industry</h4>
                    <p className="mb-4">
                      Franchising allows businesses to expand while leveraging an established brand name and operational model. Popular franchises in 
                      hospitality include global hotel chains like Marriott and Hilton, as well as fast-food brands such as McDonald's and Subway. 
                      This model benefits both franchisees and franchisors through shared resources and brand recognition.
                    </p>
                    
                    <h4 className="font-medium mb-2">The Role of Competition</h4>
                    <p className="mb-4">
                      Competition drives innovation and improves service quality in the hospitality industry. Businesses must differentiate themselves 
                      through pricing, unique experiences, and customer service to stay ahead in the market. Strategies such as loyalty programs and 
                      exclusive offers help build a strong customer base.
                    </p>
                    
                    <h4 className="font-medium mb-2">Unemployment and Its Impact on Hospitality</h4>
                    <p className="mb-4">
                      Unemployment affects both labor supply and consumer spending in the hospitality industry. A high unemployment rate can reduce 
                      travel and leisure spending, while a labor shortage can make it difficult for businesses to provide quality service. Understanding 
                      economic trends helps businesses plan for workforce management.
                    </p>
                    
                    <h4 className="font-medium mb-2">Minimum Wage and Its Economic Influence</h4>
                    <p className="mb-4">
                      Minimum wage policies impact the hospitality industry by influencing labor costs and employment rates. While higher wages improve 
                      employee satisfaction and reduce turnover, they also increase operational costs. Businesses must find a balance between fair wages 
                      and financial sustainability.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Application in the Industry</h3>
                    <p>
                      This analysis provides hospitality and tourism professionals with a framework for understanding the economic forces that shape their industry. 
                      By applying these concepts, businesses can develop more effective pricing strategies, adapt to market changes, optimize their supply chains, 
                      and make informed decisions about expansion and labor management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Work 4 - Hotel Management Simulation */}
              <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
                <div 
                  className="cursor-pointer ocean-card"
                  onClick={() => toggleCase(3)}
                >
                  <div className="relative h-64 w-full">
          <Image
                      src="/hotel_management.jpg" 
                      alt="Hotel Management Simulation" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-blue-800">
                      HTM 301: Financial Decision Management – Hotel Simulation Project
                    </h2>
                    <span className="text-blue-600 text-xl font-bold ml-4 flex-shrink-0">
                      {expandedCase === 3 ? '▲' : '▼'}
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedCase === 3 ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-blue-100">
                    <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
                    <p className="mb-4">
                      In my HTM 301: Financial Decision Management course, I am gaining hands-on experience in hotel 
                      operations through a dynamic simulation project. My team and I take on the roles of real hotel 
                      managers, making critical financial and strategic decisions to ensure profitability and 
                      operational efficiency.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Key Challenges and Learning Experiences</h3>
                    <p className="mb-4">
                      Throughout the simulation, our professor presents various real-world challenges, such as revenue 
                      fluctuations, operational cost management, guest satisfaction, and competitive pricing strategies. 
                      We analyze financial statements, adjust pricing models, allocate budgets, and develop innovative 
                      strategies to enhance the hotel's performance.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Skills Developed</h3>
                    <p className="mb-4">
                      This project has strengthened my ability to work collaboratively under pressure, apply financial 
                      principles in a practical setting, and think critically to solve complex business problems. It has 
                      also deepened my understanding of revenue management, cost control, and financial forecasting—essential 
                      skills for success in the hospitality industry.
                    </p>
                    
                    <h3 className="font-semibold text-lg mb-3">Application to Career Goals</h3>
                    <p>
                      By applying economic and financial theories in a realistic business environment, I am developing 
                      the expertise needed to navigate the challenges of hotel management and drive sustainable profitability. 
                      This simulation experience has reinforced my passion for the operational and financial aspects of 
                      hospitality management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="content-fade-in rounded-xl shadow-lg p-4 bg-white bg-opacity-80">
            <h1 className="text-3xl font-bold mb-4 text-blue-900 wave-header">Resume</h1>
            
            {/* Import and render the Resume component */}
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <Resume />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
