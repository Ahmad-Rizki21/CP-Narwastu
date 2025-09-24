import Image from 'next/image';

export default function GrupKamiPage() {
  return (
    <>
      {/* Hero Section dengan Gradient dan Animasi */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900/95 to-slate-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-narwastu-red-200 bg-clip-text text-transparent">
              Grup Perusahaan Kami
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-narwastu-200 max-w-3xl mx-auto leading-relaxed">
              Sinergi kekuatan untuk memberikan layanan yang lebih luas dan terintegrasi
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-narwastu-red-400 to-narwastu-red-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Company Cards Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Anak Perusahaan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dua pilar utama yang mendukung ekosistem teknologi informasi dan komunikasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* Card PT. Artacomindo Jejaring Nusa */}
            <div className="group relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-narwastu-red-600 to-narwastu-red-800"></div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-12 translate-x-8 -translate-y-8">
                <div className="w-full h-full bg-narwastu-red-600 rounded-lg"></div>
              </div>
              
              <div className="p-8 md:p-10">
                {/* Logo Container */}
                <div className="flex justify-center mb-6 transform transition-transform duration-300 group-hover:scale-105">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <Image 
                      src="/logos/ARTACOM-LOGO.png"
                      alt="Logo Artacomindo Jejaring Nusa"
                      width={200}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    PT. Artacomindo Jejaring Nusa
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-narwastu-red-50 text-narwastu-red-700 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Didirikan 05 Desember 2014
                  </div>
                </div>
                
                {/* Company Details */}
                <div className="space-y-6">
                  {/* Business Field */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      Bidang Usaha
                    </h4>
                    <p className="text-gray-600">
                      Jasa Layanan VSAT dan Internet dengan Izin Jaringan Tetap Tertutup (JarTapTup) dari Kominfo
                    </p>
                  </div>
                  
                  {/* Ownership */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 6a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                      Kepemilikan Saham
                    </h4>
                    <p className="text-gray-600">
                      89% Saham perusahaan dimiliki oleh PT. Narwastu Artha Tama
                    </p>
                  </div>
                  
                  {/* Main Clients */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pelanggan Utama
                    </h4>
                    <p className="text-gray-600">
                      Jaringan Retail Modern AlfaMart se-Indonesia, BAKTI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card PT. Artacomindotama */}
            <div className="group relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-narwastu-red-600 to-narwastu-red-800"></div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-12 translate-x-8 -translate-y-8">
                <div className="w-full h-full bg-narwastu-red-600 rounded-lg"></div>
              </div>
              
              <div className="p-8 md:p-10">
                {/* Logo Container */}
                <div className="flex justify-center mb-6 transform transition-transform duration-300 group-hover:scale-105">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <Image 
                      src="/logos/ARTACOMINDOTAMA-LOGO.png"
                      alt="Logo Artacomindotama"
                      width={220}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    PT. Artacomindotama
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-narwastu-red-50 text-narwastu-red-700 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Didirikan 14 Mei 2012
                  </div>
                </div>
                
                {/* Company Details */}
                <div className="space-y-6">
                  {/* Business Field */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      Bidang Usaha
                    </h4>
                    <p className="text-gray-600">
                      ICT (Information, Communication and Technology)
                    </p>
                  </div>
                  
                  {/* Ownership */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 6a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                      Kepemilikan Saham
                    </h4>
                    <p className="text-gray-600">
                      90% Saham perusahaan dimiliki oleh PT. Narwastu Artha Tama
                    </p>
                  </div>
                  
                  {/* Main Clients */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pelanggan Utama
                    </h4>
                    <p className="text-gray-600">
                      Bank Syariah Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-narwastu-red-200">2</div>
              <p className="text-lg text-narwastu-200">Anak Perusahaan</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-narwastu-red-200">10+</div>
              <p className="text-lg text-narwastu-200">Tahun Pengalaman</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-narwastu-red-200">1000+</div>
              <p className="text-lg text-narwastu-200">Klien Terlayani</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}