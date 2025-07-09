"use client";

import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      {/* Header */}
      <header className="px-8 py-4 bg-white shadow">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="/home-m2W83rvo7BuMwBOR.jpg" // Replace with your logo path
              alt="Company Logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-3xl font-bold tracking-wide text-gray-800">
              KAKAR FABRICATORS
            </span>
          </div>
        </div>
        <nav className="flex justify-center space-x-8 mt-4">
          <a href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row flex-1 px-8 py-12 gap-8">
        {/* Left - Contact Details */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            Have questions or want to request a quote? Fill out the form or
            contact us directly. We’re here to help!
          </p>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-700">kakar.fabricators453@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg"> Phone</h3>
              <p className="text-gray-700">+91 94174-28641</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg"> Location</h3>
              <p className="text-gray-700">
                Plot no 29, Adjoining Focal Point Phase 7, Ludhiana
              </p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>
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
