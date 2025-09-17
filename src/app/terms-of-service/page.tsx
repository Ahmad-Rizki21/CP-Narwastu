// src/app/terms-of-service/page.tsx

// Komponen Ikon (untuk membuat kode lebih rapi)
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mr-6">
    {children}
  </div>
);

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-narwastu-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Syarat dan Ketentuan Layanan</h1>
          <p className="mt-4 text-lg text-narwastu-200 max-w-3xl mx-auto">
            Aturan dan pedoman penggunaan situs web dan layanan kami.
          </p>
        </div>
      </section>

      {/* Konten Utama Syarat dan Ketentuan */}
      <section className="py-20 bg-white"> {/* Latar belakang diubah menjadi putih */}
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100">
            <div className="mb-8">
              <p className="text-gray-500">Terakhir diperbarui: 17 September 2025</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Harap baca Syarat dan Ketentuan Layanan ini dengan saksama sebelum menggunakan situs web yang dioperasikan oleh PT. Narwastu Artha Tama. Akses Anda dan penggunaan Layanan kami dikondisikan pada penerimaan dan kepatuhan Anda terhadap Syarat ini.
              </p>
            </div>

            <div className="space-y-12">
              {/* Poin 1: Perjanjian */}
              <div className="flex items-start">
                <IconWrapper>
                  <svg className="w-7 h-7 text-narwastu-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </IconWrapper>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Perjanjian Penggunaan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Dengan mengakses atau menggunakan situs web ini, Anda setuju untuk terikat secara hukum oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, maka Anda tidak diizinkan untuk mengakses layanan.
                  </p>
                </div>
              </div>

              {/* Poin 2: Hak Kekayaan Intelektual */}
              <div className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-narwastu-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-1.026.977-2.24.977-3.631a8.003 8.003 0 00-11.21-6.63M12 11c0-3.517 1.009-6.799 2.753-9.571m3.44 2.04l-.054.09A13.916 13.916 0 0116 11a4 4 0 11-8 0c0-1.017.07-2.019.203-3m2.118-6.844A21.88 21.88 0 018.829 4m-3.839-1.132c-.645 1.026-.977 2.24-.977 3.631a8.003 8.003 0 0011.21 6.63"></path></svg>
                </IconWrapper>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Hak Kekayaan Intelektual</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Situs dan seluruh kontennya, termasuk teks, grafis, logo, dan gambar, adalah milik PT. Narwastu Artha Tama dan dilindungi oleh undang-undang hak cipta dan merek dagang internasional.
                  </p>
                </div>
              </div>

              {/* Poin 3: Batasan Tanggung Jawab */}
              <div className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-narwastu-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </IconWrapper>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Batasan Tanggung Jawab</h2>
                  <p className="text-gray-600 leading-relaxed">
                    PT. Narwastu Artha Tama tidak bertanggung jawab atas segala kerusakan tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan layanan atau konten situs kami.
                  </p>
                </div>
              </div>

              {/* Poin 4: Hubungi Kami */}
              <div className="border-t pt-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Perubahan pada Syarat</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau mengganti Syarat ini kapan saja. Jika revisi bersifat material, kami akan memberikan pemberitahuan setidaknya 30 hari sebelum syarat baru berlaku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}