import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Tambahkan konfigurasi di bawah ini
  images: {
    unoptimized: true,
  },
};

export default nextConfig;