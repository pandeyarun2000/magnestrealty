'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    
    // Listen for theme changes from navbar
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem("theme") || "light";
      setTheme(currentTheme);
    };

    // Listen for storage changes (when theme is changed in navbar)
    window.addEventListener("storage", handleThemeChange);
    
    // Also listen for direct theme changes within the same tab
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="px-4 md:px-6 py-6 lg:py-8 w-full max-w-6xl mx-auto border-t border-border bg-background/40 backdrop-blur-lg">
      {/* Top Section: Logo + Brokerage & Contact Info */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
        {/* Left Side - Logo + Brokerage */}
        <div className="flex items-center justify-center lg:justify-start">
          <Link href="/" className="flex items-center gap-2 lg:gap-3">
            {theme === "dark" ? (
              <Image
                src="/logo-dark.png"
                alt="Magnest Realty Dark Logo"
                width={64}
                height={64}
                className="object-contain lg:w-16 lg:h-16"
                priority
              />
            ) : (
              <Image
                src="/logo-light.png"
                alt="Magnest Realty Light Logo"
                width={64}
                height={64}
                className="object-contain lg:w-16 lg:h-16"
                priority
              />
            )}
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-semibold">
                Magnest Realty
              </span>
              <span className="text-xs lg:text-sm text-muted-foreground hidden sm:block">
                
              </span>
            </div>
          </Link>
        </div>

        {/* Right Side - Contact Us and Details */}
        <div className="text-center lg:text-right space-y-2">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
            <Link href="/contact" className="hover:underline hover:text-primary transition-colors">
              Contact Us
            </Link>
          </h3>
          <address className="not-italic leading-relaxed text-sm lg:text-base text-muted-foreground space-y-1">
            <div>320 North Service Rd W, Suite 1007</div>
            <div>Oakville, ON L6M 2R7</div>
          </address>
          <div className="space-y-1 text-sm lg:text-base">
            <p className="text-muted-foreground">
              Phone: <span className="text-foreground font-medium">(647) 556-0022</span>
            </p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:realty@magnest.ca"
                className="text-foreground underline hover:text-primary transition-colors font-medium"
              >
                realty@magnest.ca
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 border-t border-border/40 pt-6 text-center lg:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MAGNEST REALTY INC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


