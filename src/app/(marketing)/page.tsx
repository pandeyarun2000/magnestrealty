"use client";

import { useState } from "react";
import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";

import { ArrowRight, ChevronRight, UserIcon, Zap, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



import PartnersSection from "@/components/PartnersSection";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";


const HomePage = () => {
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {/* SEO and Social Media Metadata */}
      <Head>
        <title>Magnest Realty – Expert Real Estate Guidance</title>
        <meta name="description" content="Magnest Realty is a real estate brokerage dedicated to Growth, Trust, and Relationship, helping clients achieve financial freedom through commercial and residential real estate investment. We also help real estate professionals build their pipelines and succeed if they are passionate and focused to create value for their clients." />
        <meta name="keywords" content="real estate brokerage, commercial investment, residential investment, financial freedom, real estate agents, real estate advice" />
        <meta name="author" content="Magnest Realty Team" />
        {/* Open Graph (OG) Tags for Social Media */}
        <meta property="og:title" content="Magnest Realty – Expert Real Estate Guidance" />
        <meta property="og:description" content="Magnest Realty is a brokerage focused on Growth, Trust, and Relationship. We help clients achieve financial freedom through strategic real estate investing, and support agents to build successful pipelines. Real estate advice that puts you ahead – use client." />
        <meta property="og:image" content="https://www.magnest.ca/images/magnest-og.png" />
        <meta property="og:url" content="https://www.magnest.ca" />
        <meta property="og:site_name" content="Magnest Realty" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Magnest Realty – Expert Real Estate Guidance" />
        <meta name="twitter:description" content="Real estate advice that puts you ahead – use client." />
        <meta name="twitter:image" content="https://www.magnest.ca/images/magnest-og.png" />
        <meta name="twitter:site" content="@magnest_realty" />
        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Magnest Realty – Expert Real Estate Guidance",
            description: "Magnest Realty is a real estate brokerage dedicated to Growth, Trust, and Relationship, helping clients achieve financial freedom through commercial and residential real estate investment.",
            url: "https://www.magnest.ca",
            publisher: {
              "@type": "Organization",
              name: "Magnest Realty",
              logo: {
                "@type": "ImageObject",
                url: "https://www.magnest.ca/images/logo.png",
              },
            },
          })}
        </script>
        <GoogleAnalytics gaId="G-XR9Y62KK8G" /> 
      </Head>

      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
        </video>



        {/* Hero Section */}
<Wrapper>
  <Container>
    <div className="flex flex-col items-center justify-center py-20 h-full">
      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
        <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
        <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
          <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
          Welcome to Magnest Realty
          <ChevronRight className="w-4 h-4" />
        </span>
      </button>
      
      {/* Added spacing with mt-12 and proper container structure */}
      
      <div className="flex flex-col items-center mt-12 max-w-3xl w-11/12 md:w-full">
       
        <div className="relative p-8">
          
          <h2 className="text-3xl lg:text-4xl font-semibold text-center relative z-10">
            Real estate advice that puts you ahead
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
            Magnest Realty is committed to Growth, Trust, and Relationship, helping clients achieve wealth and success through commercial and residential real estate, and empowering agents to reach business goals and build pipelines with confidence.
          </p>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-12 w-full gap-4">
                  
          
            <Link href="/contact" className="flex flex-col md:flex-row items-center justify-center w-full md:w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-4 py-2 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
              <p className="text-foreground text-sm text-center md:text-base font-medium">
                ✨ Ready to discuss your real estate goals?
              </p>
              <Button size="sm" className="rounded-full border border-foreground/20">
                Contact Us Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          )
        </div>

        <section id="#" className="scroll-mt-20"></section>
      </div>
      
      <div className="relative flex items-center py-10 md:py-20 w-full">
        <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
      </div>
    </div>
  </Container>
</Wrapper>
</section>
        {/* About Us */}
<Wrapper className="flex flex-col items-center justify-center py-12 relative">
  <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
  <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
  
  <section id="aboutus" className="scroll-mt-20 w-full">
    <Container>
      <div className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="About Us" />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Expertise You Can Trust
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mt-6">
          Our expertise lies in providing the best advice in residential and commercial real estate transactions. 
          We carefully select our team, bringing together top talent with years of corporate experience and 
          education from leading business schools. Above all, we are committed to placing our clients' best 
          interests at the heart of every decision.
        </p>
      </div>
    </Container>

    {/* Action Items Grid */}
    <Container>
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Buy</h3>
            <p className="text-sm md:text-base text-muted-foreground">Find your perfect home or investment property</p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Sell</h3>
            <p className="text-sm md:text-base text-muted-foreground">Maximize your property's market value</p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Invest</h3>
            <p className="text-sm md:text-base text-muted-foreground">Build wealth through strategic real estate</p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Manage</h3>
            <p className="text-sm md:text-base text-muted-foreground">Property management and portfolio asset optimization</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</Wrapper>

        {/* Services */}
<Wrapper className="flex flex-col items-center justify-center py-12 relative">
  <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
  <section id="services" className="scroll-mt-20">
    <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
    
    {/* Intro */}
    <Container>
      <div className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="Our Services" />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Guiding You Through Every Real Estate Decision
        </h2>
        <p className="text-muted-foreground mt-6">
          At MagNest Realty, we combine market insight, corporate experience, 
          and client-first focus to provide tailored solutions in residential 
          and commercial real estate.
        </p>
      </div>
    </Container>

    {/* Visual (optional illustration / icon) */}
    <Container>
      <div className="flex items-center justify-center mx-auto mt-8">
        <Icons.feature className="w-auto h-80" />
      </div>
    </Container>

    {/* Services Grid */}
    <Container>
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start lg:items-start px-0 md:px-0"
            >
              <div className="flex items-center justify-center">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
              <p className="text-muted-foreground mt-2 text-start lg:text-start">
                {feature.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
</Wrapper>


{/* Join Us */}
<Wrapper className="flex flex-col items-center justify-center py-12 relative">
  {/* Soft background accent */}
  <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>

  <section id="joinus" className="scroll-mt-20 w-full max-w-4xl mx-auto px-4">
    <Container>
      <div className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="Join Us" />
        <h2 className="text-4xl font-extrabold mt-6 leading-relaxed text-foreground">
          Be Part of Magnest Realty
        </h2>
        <p className="text-muted-foreground mt-6 text-lg max-w-lg mx-auto leading-relaxed">
          At Magnest Realty, we believe in hiring the best so that we can provide exceptional service to our clients. 
          If you are tech-savvy, motivated, and aligned with our values of Growth, Trust, and Relationship, 
          this is the right place for you. Contact us today and start building the financial freedom you aspire to achieve.
        </p>
      </div>
    </Container>
  </section>

 {/* Benefits Grid */}
          <Container>
            <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                <div className="flex flex-col items-start lg:items-start px-0 md:px-0">
                  <div className="flex items-center justify-center">
                    <UserIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">Exceptional Talent</h3>
                  <p className="text-base text-muted-foreground mt-2 text-start lg:text-start">
                    Join a team of highly skilled professionals with years of corporate experience and education from leading business schools.
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-start px-0 md:px-0">
                  <div className="flex items-center justify-center">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">100% Commission</h3>
                  <p className="text-base text-muted-foreground mt-2 text-start lg:text-start">
                    Keep all your earnings with no hidden fees or desk costs. Build the financial freedom you aspire to achieve.
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-start px-0 md:px-0">
                  <div className="flex items-center justify-center">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">AI-Powered Support</h3>
                  <p className="text-base text-muted-foreground mt-2 text-start lg:text-start">
                    Access cutting-edge AI tools designed to streamline your business and help you succeed in today's market.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mt-8">
                <Button asChild className="px-8 py-3">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
</Wrapper>

{/* Partners Section */}
        <section id="partners" className="scroll-mt-20 w-full max-w-4xl mx-auto px-4">
          <PartnersSection />
        </section>
        

        {/* Final CTA Lamp Section */}
        <LampContainer>          
          <div className="max-w-md mx-auto text-start md:text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
              Invest, grow, and succeed <br /> with us
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Build your future—financial freedom and trusted relationships—with real estate advice that puts you ahead.
            </p>
            <Button variant="white" className="mt-6" asChild>
              <Link href="/contact">
                Get started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </LampContainer>

        

        
      
    </>
  );
};

export default HomePage;
