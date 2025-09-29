"use client";

import { Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper } from "@/components";
import Image from 'next/image';

const PartnersSection = () => {
  return (
<Wrapper className="flex flex-col items-center justify-center py-20 relative">
  <Container>
    <div className="max-w-md mx-auto text-start md:text-center">
      <SectionBadge title="Supported By" />
      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Our Ecosystem</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We're proud to be supported by leading institutions advancing innovation, technology, and financial investment, empowering our real estate brokerage to deliver comprehensive solutions with strong industry partnerships.
      </p>           
    </div>

    <div className="flex justify-center mt-12 gap-12">
      <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => window.open('https://innovationfactory.ca', '_blank')}>
        <Image 
          src="/assets/logos/iFLogo.png"
          alt="iF Logo"
          width={150}
          height={80}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => window.open('https://www.nurture180.com', '_blank')}>
        <Image 
          src="/assets/logos/N180.png"
          alt="N180 Logo"
          width={75}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </div>
      
    </div>
  </Container>
</Wrapper>

  );
};

export default PartnersSection;


