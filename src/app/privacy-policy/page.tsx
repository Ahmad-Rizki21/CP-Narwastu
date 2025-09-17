// src/app/privacy-policy/page.tsx

// Komponen Ikon (untuk membuat kode lebih rapi)
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mr-6">
    {children}
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-narwastu-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Kebijakan Privasi</h1>
          <p className="mt-4 text-lg text-narwastu-200 max-w-3xl mx-auto">
            Kami berkomitmen untuk melindungi privasi dan keamanan data Anda.
          </p>
        </div>
      </section>

      {/* Konten Utama Kebijakan Privasi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100">
            <div className="mb-8">
              <p className="text-gray-500">Terakhir diperbarui: 17 September 2025</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Selamat datang di PT. Narwastu Artha Tama. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda mengunjungi situs web kami. Dengan menggunakan situs kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
              </p>
            </div>

            <div className="space-y-12">
              {/* Poin 1: Informasi yang Kami Kumpulkan */}
              <div className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-narwastu-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </IconWrapper>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Informasi yang Kami Kumpulkan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kami mengumpulkan data yang Anda berikan secara sukarela, seperti nama, email, dan nomor telepon melalui formulir kontak, serta data teknis seperti alamat IP dan jenis browser untuk analisis.
                  </p>
                </div>
              </div>

              {/* Poin 2: Penggunaan Informasi */}
              <div className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-narwastu-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </IconWrapper>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Bagaimana Kami Menggunakan Informasi Anda</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Data Anda digunakan untuk menanggapi pertanyaan, menyediakan layanan, meningkatkan kualitas situs web kami, dan memenuhi kewajiban hukum. Kami tidak akan pernah menjual data pribadi Anda kepada pihak ketiga.
                  </p>
                </div>
              </div>

              {/* Poin 3: Keamanan Data */}
              <div className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-narwastu-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </IconWrapper>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Keamanan Data</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran.
                  </p>
                </div>
              </div>

              {/* Poin 4: Hubungi Kami */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Pertanyaan?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, jangan ragu untuk menghubungi kami melalui email di <a href="mailto:info@narwastuarthatama.com" className="text-narwastu-700 font-semibold hover:underline">info@narwastuarthatama.com</a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}