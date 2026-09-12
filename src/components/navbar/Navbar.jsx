import React from "react";

function Navbar() {
  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Skills", link: "#skills" },
    { id: 3, name: "Experience", link: "#experience" },
    { id: 4, name: "My projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];
  return (
    <header data-aos="fade-up" className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <a href="#home" className="font-bold text-white text-2xl sm:text-3xl">Portfolio</a>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:text-base text-gray-300">
            {NavbarLinks.map((item) => (
              <a key={item.id} href={item.link} className="hover:text-white transition duration-300">{item.name}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:block text-gray-950 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
