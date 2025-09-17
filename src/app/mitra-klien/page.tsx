"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function MitraKlienPage() {
  const partners = [
    { name: 'Peplink', logo: 'PEPLINK.png' },
    { name: 'Maipu', logo: 'MAIPU.png' },
  ];

  const clients = [
    { name: 'KUSO', logo: 'Picture8.png' },
    { name: 'Alfamart', logo: 'Picture9.png' },
    { name: 'Jakpro', logo: 'Picture10.png' },
    { name: 'Bakti', logo: 'Picture11.png' },
    { name: 'Bank Syariah Indonesia', logo: 'Picture12.png' },
    { name: 'Pemda Maluku Tenggara Barat', logo: 'Picture13.png' },
    { name: 'JGC', logo: 'Picture14.png' },
    { name: 'Universitas Sultan Ageng Tirtayasa', logo: 'Picture15.png' },
    { name: 'PT Kurongkor Utama', logo: 'Picture16.png' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-narwastu-maroon">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20" />
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
        >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Mitra & Klien Kami
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light drop-shadow">
            Membangun Kesuksesan Bersama Melalui Kemitraan yang Kuat
            </p>
        </motion.div>
        </section>

      {/* Partners Section */}
      <section className="py-24 px-4">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mitra Teknologi Global
            </h2>
            <div className="w-24 h-1 bg-narwastu-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kolaborasi dengan pemimpin industri teknologi untuk menghadirkan solusi inovatif
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            {partners.map((partner, index) => (
                <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 w-[300px]"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-narwastu-50 to-narwastu-100 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                <div className="flex justify-center items-center h-[150px]">
                    <Image
                    src={`/logos/${partner.logo}`}
                    alt={`Logo ${partner.name}`}
                    width={200}
                    height={80}
                    className="object-contain filter group-hover:brightness-110"
                    />
                </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
        </section>

      {/* Clients Section */}
      <section className="py-24 px-4 bg-white">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dipercaya oleh Lintas Industri
            </h2>
            <div className="w-24 h-1 bg-narwastu-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Membangun hubungan jangka panjang melalui kepercayaan dan dedikasi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-narwastu-50 to-narwastu-100 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                <Image
                  src={`/logos/${client.logo}`}
                  alt={`Logo ${client.name}`}
                  width={150}
                  height={60}
                  className="object-contain w-full h-full filter group-hover:brightness-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}