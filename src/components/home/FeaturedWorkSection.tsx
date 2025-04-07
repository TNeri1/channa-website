"use client";

import { useState } from "react";
import CaseStudyItem from "./CaseStudyItem";

export default function FeaturedWorkSection() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const toggleCase = (index: number) => {
    if (expandedCase === index) {
      setExpandedCase(null);
    } else {
      setExpandedCase(index);
    }
  };

  return (
    <section id="featured-work" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="content-fade-in rounded-xl shadow-lg p-8 bg-white bg-opacity-80">
          <h1 className="text-3xl font-bold mb-6 text-blue-900 wave-header">Featured Work</h1>
          
          <div className="space-y-8">
            {/* Featured Work 1 - Egypt */}
            <CaseStudyItem 
              id={0}
              title="Sustainable Tourism Research: Addressing Overtourism in Hurghada, Egypt"
              image="/egypt.jpg"
              expandedCase={expandedCase}
              toggleCase={toggleCase}
            >
              <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
              <p className="mb-4">
                This research project examined the impacts of overtourism in Hurghada, Egypt, and proposed 
                sustainable alternatives to alleviate tourism pressure while maintaining economic benefits.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Overtourism in Hurghada: Impacts on Environment, Culture, and Society</h3>
              
              <h4 className="font-medium mb-2">Environmental Impacts</h4>
              <p className="mb-4">
                Hurghada&apos;s rapid tourism growth has led to environmental concerns, particularly affecting its marine ecosystems. 
                The expansion of coastal tourism has resulted in localized pollution, habitat loss, and resource depletion, 
                threatening the health of coral reefs and marine biodiversity.
              </p>
              
              <h4 className="font-medium mb-2">Socio-Cultural Impacts</h4>
              <p className="mb-4">
                The influx of tourists has strained Hurghada&apos;s infrastructure, leading to overcrowding and challenges in waste management. 
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
                The Aqaba Marine Park and Aqaba Bird Observatory exemplify Jordan&apos;s commitment to environmental conservation, 
                protecting marine and coastal habitats from tourism-related impacts. Strict regulations and environmental monitoring 
                in these locations help maintain ecological integrity while still providing visitor access.
              </p>
            </CaseStudyItem>

            {/* Featured Work 2 - Turtle Bay Resort */}
            <CaseStudyItem 
              id={1}
              title="Cultural Preservation at Turtle Bay Resort, North Shore Oahu"
              image="/turtle-bay.jpg"
              expandedCase={expandedCase}
              toggleCase={toggleCase}
            >
              <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
              <p className="mb-4">
                This case study analyzed how Turtle Bay Resort on Oahu&apos;s North Shore has integrated Hawaiian cultural 
                heritage into its hospitality operations while supporting the local community.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Cultural Integration Strategies</h3>
              
              <h4 className="font-medium mb-2">Authentic Hawaiian Experiences</h4>
              <p className="mb-4">
                Turtle Bay Resort has successfully integrated cultural education through various programs, including lei-making 
                workshops, ukulele lessons, and hula performances. These activities are led by local cultural practitioners, 
                ensuring authenticity while providing employment opportunities for community members.
              </p>
              
              <h4 className="font-medium mb-2">Environmental Stewardship</h4>
              <p className="mb-4">
                The resort&apos;s commitment to environmental conservation aligns with Native Hawaiian values of land stewardship. 
                Their partnership with local conservation organizations has resulted in the protection of 1,300 acres of coastal 
                land, preserving both natural habitats and culturally significant sites.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Community Engagement</h3>
              <p className="mb-4">
                Beyond cultural programming, Turtle Bay Resort has established meaningful relationships with the North Shore 
                community through employment opportunities and support for local businesses. The resort sources products from 
                local farms and artisans, creating a sustainable economic ecosystem that benefits residents.
              </p>
              
              <h4 className="font-medium mb-2">Educational Impact</h4>
              <p className="mb-4">
                My research focused on how the resort&apos;s approach creates educational opportunities for both guests and staff. 
                By learning about Hawaiian culture in an authentic setting, visitors develop a deeper appreciation for the 
                destination, while staff members strengthen their cultural knowledge and identity.
              </p>
            </CaseStudyItem>

            {/* Featured Work 3 - Sustainable Practices */}
            <CaseStudyItem 
              id={2}
              title="Sustainable Tourism Practices in Rural Cambodia"
              image="/cambodia.jpg"
              expandedCase={expandedCase}
              toggleCase={toggleCase}
            >
              <h3 className="font-semibold text-lg mb-3">Project Overview</h3>
              <p className="mb-4">
                This ongoing research project examines community-based tourism initiatives in rural Cambodia 
                and how they can be developed to benefit local communities while preserving cultural heritage.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Rural Tourism Development in Cambodia</h3>
              
              <h4 className="font-medium mb-2">Community Empowerment</h4>
              <p className="mb-4">
                My research has identified several successful models where rural communities have taken ownership 
                of tourism development. When local residents participate in decision-making processes and directly 
                benefit from tourism revenue, they become motivated stewards of both their cultural heritage and 
                natural resources.
              </p>
              
              <h4 className="font-medium mb-2">Cultural Preservation</h4>
              <p className="mb-4">
                In villages like Chi Phat and Banteay Chhmar, tourism has incentivized the preservation of traditional 
                crafts, culinary practices, and performing arts that might otherwise disappear. By creating economic 
                value for these cultural elements, tourism helps ensure their continuation for future generations.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Challenges and Opportunities</h3>
              <p className="mb-4">
                Despite the benefits, rural tourism initiatives in Cambodia face challenges including limited infrastructure, 
                inadequate training, and uneven distribution of benefits. My ongoing research aims to develop practical 
                frameworks for addressing these challenges while maximizing positive impacts for host communities.
              </p>
              
              <h4 className="font-medium mb-2">Future Directions</h4>
              <p className="mb-4">
                This project will continue with field research in selected Cambodian villages to document best practices 
                and develop actionable recommendations for tourism stakeholders. The findings aim to contribute to more 
                equitable and sustainable tourism development in my home country.
              </p>
            </CaseStudyItem>
          </div>
        </div>
      </div>
    </section>
  );
}
