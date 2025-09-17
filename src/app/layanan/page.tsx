// src/app/layanan/page.tsx
import Image from 'next/image';
export default function LayananPage() {
  return (
    <>
      {/* Hero Section dengan Gradient Background */}
      <section className="relative bg-gradient-to-br from-narwastu-red-800 via-narwastu-red-900 to-narwastu-burgundy text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Layanan & Solusi
                <span className="block bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                  IT Terdepan
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                Menyediakan solusi teknologi komprehensif yang dirancang untuk mendorong efisiensi 
                dan pertumbuhan bisnis Anda dengan standar enterprise terbaik.
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 animate-fade-in-up delay-200">
              <div className="glass-effect rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold">100+</div>
                <div className="text-red-200 text-sm sm:text-base">Klien Puas</div>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-red-200 text-sm sm:text-base">Support</div>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold">99.9%</div>
                <div className="text-red-200 text-sm sm:text-base">Uptime</div>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold">5+</div>
                <div className="text-red-200 text-sm sm:text-base">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
                Layanan Kami
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Solusi IT Komprehensif untuk Bisnis Modern
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Dari infrastruktur jaringan hingga keamanan siber, kami menyediakan layanan lengkap 
                untuk mendukung transformasi digital perusahaan Anda.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Service Card 1: Network Infrastructure */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-6 lg:p-8 card-hover animate-fade-in-up delay-100">
              <div className="relative">
                {/* Icon Container */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>

                {/* Badge */}
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full transform translate-x-2 -translate-y-2">
                  Popular
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                  Network Infrastructure
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                  Merancang dan mengimplementasikan fondasi jaringan yang andal, aman, dan skalabel. 
                  Solusi kami mencakup routing, switching, dan konektivitas nirkabel untuk mendukung operasi bisnis yang efisien.
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Enterprise-grade routing & switching
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wireless connectivity solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Scalable architecture design
                  </li>
                </ul>

                {/* <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 px-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-[1.02]">
                  Pelajari Lebih Lanjut
                </button> */}
              </div>
            </div>

            {/* Service Card 2: Network Security */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-6 lg:p-8 card-hover animate-fade-in-up delay-200">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                Network Security
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                Melindungi aset digital dan data penting perusahaan dari ancaman siber. 
                Layanan keamanan komprehensif dengan firewall, deteksi intrusi, dan manajemen kebijakan keamanan.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced firewall protection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Intrusion detection system
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Security policy management
                </li>
              </ul>

              {/* <button className="w-full bg-white border-2 border-red-600 text-red-600 font-semibold py-3 px-4 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-[1.02]">
                Konsultasi Gratis
              </button> */}
            </div>

            {/* Service Card 3: Manage Service */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-6 lg:p-8 card-hover animate-fade-in-up delay-300">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                Managed Services
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                Layanan pengelolaan IT proaktif untuk memastikan sistem berjalan optimal dan efisien. 
                Monitoring 24/7, pemeliharaan rutin, dan dukungan teknis komprehensif.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 system monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preventive maintenance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technical support
                </li>
              </ul>

              {/* <button className="w-full bg-white border-2 border-red-600 text-red-600 font-semibold py-3 px-4 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-[1.02]">
                Dapatkan Quote
              </button> */}
            </div>

            {/* Service Card 4: Finance Switching System */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-6 lg:p-8 card-hover animate-fade-in-up delay-400">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                Finance Switching System
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                Platform switching yang andal untuk memproses transaksi keuangan dengan standar keamanan tinggi. 
                Mendukung integrasi dengan berbagai jaringan perbankan dan sistem pembayaran.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Secure transaction processing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Banking network integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time monitoring
                </li>
              </ul>

              {/* <button className="w-full bg-white border-2 border-red-600 text-red-600 font-semibold py-3 px-4 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-[1.02]">
                Hubungi Kami
              </button> */}
            </div>

            {/* Service Card 5: Maintenance BTS */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-6 lg:p-8 card-hover animate-fade-in-up delay-500">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                Maintenance BTS
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                Jasa pemeliharaan profesional untuk Base Transceiver Station (BTS) guna memastikan konektivitas 
                telekomunikasi yang stabil dan performa jaringan seluler yang optimal.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preventive maintenance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emergency response
                </li>
              </ul>

              {/* <button className="w-full bg-white border-2 border-red-600 text-red-600 font-semibold py-3 px-4 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-[1.02]">
                Info Lebih Lanjut
              </button> */}
            </div>

            {/* Service Card 6: Software Development */}
            <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 p-6 lg:p-8 card-hover animate-fade-in-up delay-600">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                Software Development
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                Mengembangkan aplikasi web dan mobile kustom yang dirancang untuk memenuhi kebutuhan unik bisnis Anda. Dari perencanaan hingga peluncuran, kami memastikan solusi yang skalabel, aman, dan mudah digunakan.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom web & mobile applications
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  UI/UX design and prototyping
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Agile development methodology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
              Proses Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Metodologi yang terbukti untuk menghadirkan solusi IT terbaik bagi bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-700">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasi</h3>
              <p className="text-gray-600 text-sm">Analisis kebutuhan dan tantangan IT perusahaan Anda</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-700">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perencanaan</h3>
              <p className="text-gray-600 text-sm">Desain solusi yang sesuai dengan budget dan timeline</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-700">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Implementasi</h3>
              <p className="text-gray-600 text-sm">Eksekusi proyek dengan standar kualitas tinggi</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <span className="text-2xl font-bold text-red-700">04</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">Pemeliharaan dan dukungan teknis berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Teknologi & Partner Terpercaya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bekerja sama dengan vendor terkemuka untuk memberikan solusi terbaik
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                      <div className="group">
                        <Image 
                          src="/logos/PEPLINK.png" 
                          alt="Ingenico"
                          width={140}
                          height={50}
                          className="transition-all duration-300 filter group-hover:scale-110"
                        />
                      </div>
                      <div className="group">
                        <Image 
                          src="/logos/MAIPU.png"
                          alt="Juniper"
                          width={140}
                          height={50}
                          className="transition-all duration-300 filter group-hover:scale-110"
                        />
                      </div>
                    </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-gray-600">
                Temukan jawaban untuk pertanyaan umum tentang layanan kami
              </p>
            </div>

            <div className="space-y-6">
              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900">
                  Berapa lama waktu implementasi yang dibutuhkan?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-600">
                  Waktu implementasi bervariasi tergantung kompleksitas proyek. Umumnya berkisar antara 2-12 minggu. 
                  Kami akan memberikan timeline yang detail setelah fase konsultasi dan perencanaan.
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900">
                  Apakah tersedia layanan support 24/7?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-600">
                  Ya, kami menyediakan layanan support 24/7 untuk klien dengan paket Managed Services. 
                  Tim teknis kami siap membantu kapan saja untuk memastikan sistem Anda berjalan optimal.
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900">
                  Bagaimana dengan jaminan kualitas layanan?
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-600">
                  Kami memberikan jaminan uptime 99.9% dan garansi layanan sesuai dengan SLA yang disepakati. 
                  Jika terjadi masalah, kami akan segera memberikan solusi dan kompensasi sesuai kesepakatan.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section dengan Enhanced Design */}
      <section className="relative bg-gradient-to-br from-narwastu-red-800 via-narwastu-red-900 to-narwastu-burgundy text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-36 translate-y-36 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Siap Meningkatkan
                <span className="block">Infrastruktur IT Anda?</span>
              </h2>
              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed">
                Jangan biarkan masalah teknologi menghambat pertumbuhan bisnis. 
                Tim ahli kami siap membantu Anda mencapai efisiensi maksimal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="/kontak"
                  className="inline-flex items-center bg-white text-red-800 font-bold py-4 px-8 rounded-xl hover:bg-red-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 btn-modern"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Konsultasi Gratis
                </a>
                
                <a
                  href="tel:+6221-xxx-xxxx"
                  className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-red-800 transition-all duration-200 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hubungi Sekarang
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-red-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Konsultasi Tanpa Biaya</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Response 24 Jam</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Garansi Kualitas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}