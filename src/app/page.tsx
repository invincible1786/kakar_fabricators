'use client';

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
{/* Header */}
<header className="px-8 py-4 bg-white shadow">
  {/* Top Row - Logo and Company Name */}
  <div className="flex items-center justify-between">
    {/* Logo - Top Left */}
    <div className="flex-shrink-0">
      <img
        src="/home-m2W83rvo7BuMwBOR.jpg" // Replace with your logo path
        alt="Company Logo"
        className="h-12 w-auto"
      />
    </div>

    {/* Company Name - Center */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <span className="text-3xl font-bold tracking-wide text-gray-800">
        KAKAR FABRICATORS
      </span>
    </div>
  </div>

  {/* Navigation Links - Below Company Name */}
  <nav className="flex justify-center space-x-8 mt-4">
    <a href="home" className="text-gray-700 hover:text-blue-600">
      Home
    </a>
    <a href="products" className="text-gray-700 hover:text-blue-600">
      Products
    </a>
    <a href="contact" className="text-gray-700 hover:text-blue-600">
      Contact Us
    </a>
  </nav>
</header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/download-mjE7653VODhrQ20X.jpg')" }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          Where Innovation <br /> meets Excellence
        </h1>
      </section>

      {/* About Us */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-white">About Us</h2>
        <p className="max-w-2xl mx-auto text-white leading-relaxed">
          At Kakar Fabricators, we forge excellence through unwavering commitment
          to hard work, superior quality, innovative solutions, and punctual delivery
          on every project.
        </p>
        <p className="mt-2 text-white italic">
          In Business since July - 1997
        </p>
      </section>

      {/* Services */}
      <section id="products" className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "SANITARY EQUIPMENT", image: "/bathroom.jpg" },
            { title: "SWINGS", image: "/generated-A1a5VW6JqGioLBo1.jpg" },
            { title: "ENGINE PUMPS", image: "/generated-A0xjL6k3geCr2RRq.jpg" },
            { title: "HANDLING EQUIPMENT", image: "/download-AGBb0EB9kncLk9Bb.jpg" },
          ].map((service) => (
            <div key={service.title} className="text-center">
              <div className="w-full h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg shadow transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.214!2d75.8708!3d30.9009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83f229b3db03%3A0x2e34e2fef6ad2e58!2sKakar%20Fabricators!5e0!3m2!1sen!2sin!4v1629999999999!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-lg shadow w-full"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer
  id="contact"
  className="bg-black text-gray-300 text-center py-10 px-4 border-t border-gray-700"
>
  <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
    GET IN TOUCH
  </h3>
  <p className="text-white   mb-1">
    Email –{" "}
    <a
      href="mailto:kakar.fabricators453@gmail.com"
      className="hover:text-blue-400 transition-colors"
    >
      kakar.fabricators453@gmail.com
    </a>
  </p>
  <p className="text-white mb-1">Contact – 94174-28641</p>
  <p className="text-white">
    Location – Plot no 29, Adjoining Focal Point Phase 7, Ludhiana
  </p>

  <div className="mt-6 text-sm text-white flex justify-center space-x-4">
    <a
      href="#"
      className="hover:text-white hover:underline transition-colors"
    >
      Terms of Use
    </a>
    <span>|</span>
    <a
      href="#"
      className="hover:text-white hover:underline transition-colors"
    >
      Privacy Policy
    </a>
    <span>|</span>
    <a
      href="#"
      className="hover:text-white hover:underline transition-colors"
    >
      Disclaimer
    </a>
  </div>

  <p className="mt-6 text-white text-xs">
    &copy; 2025 Kakar Fabricators. All rights reserved.
  </p>
</footer>

    </main>
  );
}
