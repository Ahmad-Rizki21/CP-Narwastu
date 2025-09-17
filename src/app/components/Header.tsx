'use client';

// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-red-100 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* GANTI BAGIAN INI */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Menggunakan Image component */}
            <Image 
              src="/logos/LOGO.png"
              alt="Narwastu IT Solutions Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-red-800">NARWASTU</span>
              <span className="text-xs text-gray-500 -mt-1">IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 relative group"
            >
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/layanan" 
              className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 relative group"
            >
              Layanan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <div 
              className="relative" 
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-red-700 font-medium transition-colors duration-200 relative group flex items-center">
                Tentang Kami
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border">
                  <Link href="/tentang-kami" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700">Profil Perusahaan</Link>
                  <Link href="/grup-kami" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700">Grup Kami</Link>
                  <Link href="/mitra-klien" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700">Mitra & Klien</Link>
                </div>
              )}
            </div>
            <Link 
              href="/kontak" 
              className="bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-2 rounded-lg font-medium hover:from-red-800 hover:to-red-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Kontak
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0 overflow-hidden'}`}>
          <div className="py-4 space-y-4 border-t border-gray-100">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-red-700 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              href="/layanan" 
              className="block text-gray-700 hover:text-red-700 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link href="/tentang-kami" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Profil Perusahaan</Link>
            <Link href="/grup-kami" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Grup Kami</Link>
            <Link href="/mitra-klien" className="block text-gray-700 hover:text-red-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Mitra & Klien</Link>

          </div>
        </div>
      </nav>
    </header>
  );
}