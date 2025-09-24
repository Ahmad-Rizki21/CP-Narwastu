// src/app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900/95 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Solusi IT{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Inovatif
              </span>
              {' '}& Terpercaya
            </h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Menyediakan layanan Network, Security, dan Infrastructure terdepan 
              untuk mendukung transformasi digital dan pertumbuhan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/kontak"
                className="inline-flex items-center bg-white text-red-800 font-bold py-4 px-8 rounded-xl hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Hubungi Kami</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/layanan"
                className="inline-flex items-center border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-red-800 transition-all duration-200"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-red-800 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-red-800 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Klien Terpusat</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-red-800 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Proyek Selesai</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-red-800 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mitra Teknologi Kami
            </h2>
            <p className="text-lg text-gray-600">
              Bekerja sama dengan para pemimpin teknologi global untuk memberikan solusi terbaik.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="group">
              <Image 
                src="/logos/PEPLINK.png" 
                alt="Ingenico"
                width={140}
                height={50}
                className="grayscale group-hover:grayscale-0 transition-all duration-300 filter group-hover:scale-110"
              />
            </div>
            <div className="group">
              <Image 
                src="/logos/MAIPU.png"
                alt="Juniper"
                width={140}
                height={50}
                className="grayscale group-hover:grayscale-0 transition-all duration-300 filter group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dipercaya oleh Lintas Industri
            </h2>
            <p className="text-lg text-gray-600">
              Kami bangga dapat memberikan solusi dan layanan terbaik bagi para pelanggan kami.
            </p>
          </div>
          
          {/* Galeri Logo Customer */}
          {/* Slider Container */}
          <div className="slider-container">
            {/* Slider Track berisi DUPLIKAT dari logo untuk efek infinite */}
            <div className="slider-track flex items-center gap-x-16">
              {/* Grup Logo Pertama */}
              <Image src="/logos/Picture8.png" alt="Logo KUSO" width={120} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture9.png" alt="Logo Alfamart" width={150} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture10.png" alt="Logo Jakpro" width={150} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture11.png" alt="Logo Bakti" width={120} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture12.png" alt="Logo Bank Syariah Indonesia" width={140} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture13.png" alt="Logo Maluku Tenggara Barat" width={60} height={60} className="flex-shrink-0" />
              <Image src="/logos/Picture14.png" alt="Logo JGC" width={70} height={70} className="flex-shrink-0" />
              <Image src="/logos/Picture15.png" alt="Logo Untirta" width={70} height={70} className="flex-shrink-0" />
              <Image src="/logos/Picture16.png" alt="Logo PT Kurongkor Utama" width={100} height={70} className="flex-shrink-0" />

              {/* Grup Logo Kedua (Duplikat dari yang pertama) */}
              <Image src="/logos/Picture8.png" alt="Logo KUSO" width={120} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture9.png" alt="Logo Alfamart" width={150} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture10.png" alt="Logo Jakpro" width={150} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture11.png" alt="Logo Bakti" width={120} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture12.png" alt="Logo Bank Syariah Indonesia" width={140} height={50} className="flex-shrink-0" />
              <Image src="/logos/Picture13.png" alt="Logo Maluku Tenggara Barat" width={60} height={60} className="flex-shrink-0" />
              <Image src="/logos/Picture14.png" alt="Logo JGC" width={70} height={70} className="flex-shrink-0" />
              <Image src="/logos/Picture15.png" alt="Logo Untirta" width={70} height={70} className="flex-shrink-0" />
              <Image src="/logos/Picture16.png" alt="Logo PT Kurongkor Utama" width={100} height={70} className="flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Profesional Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi komprehensif untuk memenuhi kebutuhan teknologi bisnis Anda dengan standar internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Network Infrastructure */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Network Infrastructure
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Membangun fondasi jaringan yang andal, aman, dan skalabel untuk
                mendukung operasi bisnis yang efisien dan berkelanjutan.
              </p>
              <a href="/layanan/network-infrastructure" className="inline-flex items-center text-red-700 font-semibold hover:text-red-800">
                Pelajari lebih lanjut
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Network Security */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Network Security
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Melindungi aset digital dan data penting perusahaan Anda dari
                ancaman siber dengan solusi keamanan berlapis yang komprehensif.
              </p>
              <a href="/layanan/network-security" className="inline-flex items-center text-red-700 font-semibold hover:text-red-800">
                Pelajari lebih lanjut
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Manage Service */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Manage Service
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Layanan pengelolaan IT proaktif untuk memastikan sistem Anda
                berjalan optimal, efisien, dan tanpa gangguan dengan monitoring 24/7.
              </p>
              <a href="/layanan/manage-service" className="inline-flex items-center text-red-700 font-semibold hover:text-red-800">
                Pelajari lebih lanjut
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-6xl font-bold mb-6">
              Siap Untuk Mengembangkan Bisnis Anda?
            </h2>
            <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed">
              Konsultasikan kebutuhan IT Anda dengan tim ahli kami dan dapatkan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/kontak"
                className="group inline-flex items-center px-8 py-4 bg-white text-red-800 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Konsultasi Gratis</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+6221-xxx-xxxx"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-red-800 transition-all duration-300"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Hubungi Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}