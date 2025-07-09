"use client";

import React from "react";

const products = [
  { name: "Dumper Placer", src: "/container 2.jpg" },
  // { name: "Water Tanker", src: "/images/water-tanker.jpg" },
  { name: "Garbage Container", src: "/garbage.jpg" },
  { name: "Shrub Cutter", src: "/cutter.jpg" },
  { name: "Water Tanker", src: "/water-tanker.jpg" },
  { name: "Forklift", src: "/forklift.jpg" },
  // { name: "Sky Lift", src: "/images/sky-lift.jpg" },
  { name: "Swings", src: "/generated-A1a5VW6JqGioLBo1.jpg" },
  { name: "Mobile Toilets", src: "/toilet-van.jpg" },
  { name: "Twin hanging dustbins", src: "/dustbin.jpg" },
  { name: "Cattle Lifter", src: "/container.jpg" },
  { name: "Rickshaw Rehri", src: "/rickshaw.jpg" },
  { name: "Hydraulic Tipper", src: "/tipper.jpg" },
  { name: "Wire Net Trolley", src: "/trolley.jpg" },
  // { name: "Cable Car", src: "./cable.jpg" },
  // { name: "Scooter Platform", src: "/cart.jpg" },
];

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">

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
      {/* Title */}
      <div className="text-center my-8">
        <p className="uppercase text-sm text-white tracking-wide">New Collection</p>
        <h1 className="text-3xl font-semibold mt-2">Explore our products</h1>
      </div>

      {/* Product Grid */}
      <main className="px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-76 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                {product.name}
              </div>
            </div>
          ))}
        </div>
      </main>

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
    </div>
  );
}
