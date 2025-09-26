"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              {theme === "dark" ? (
                <Image
                  src="/logo-dark.png"
                  alt="Magnest Realty Dark Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority={true}
                />
              ) : (
                <Image
                  src="/logo-light.png"
                  alt="Magnest Realty Light Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority={true}
                />
              )}
              <span className="text-lg font-medium">Magnest Realty</span>
            </Link>
          </div>

          <nav
            className={`md:block ${
              isMenuOpen ? "block" : "hidden"
            } absolute left-0 right-0 top-14 bg-background md:bg-transparent md:static md:top-auto`}
          >
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-0">
              <Link href="/#aboutus" className="hover:text-foreground/80 text-sm">
                About Us
              </Link>
              <Link href="/#services" className="hover:text-foreground/80 text-sm">
                Services
              </Link>
              <Link href="/#joinus" className="hover:text-foreground/80 text-sm">
                Join Us
              </Link>
              <Link href="/#partners" className="hover:text-foreground/80 text-sm">
                Partners
              </Link>
              
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={buttonVariants({ size: "sm", variant: "ghost" })}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            
              <>
                
                
              </>
            
              <>
                <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  
                </Link>
                <Link href="/contact" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                  Contact Us
                </Link>
              </>
           

            <button
              onClick={toggleMenu}
              className={`${buttonVariants({ size: "sm", variant: "ghost" })} md:hidden`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;










