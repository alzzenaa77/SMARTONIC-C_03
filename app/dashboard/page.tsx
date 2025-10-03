"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Chart from "@/app/components/Chart";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}; 

export default function DashboardPage() {
  return (
    <section className="p-8 bg-[#0B1523] text-white min-h-screen">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between mb-8"
      >
        {/* Logo Smartonic */}
        <div className="flex items-center gap-2">
          <Image
            src="/Smartonic.png"
            alt="Smartonic Logo"
            width={64}
            height={64}
            priority
          />
          <h3 className="text-[#2ABF7D] font-bold text-base uppercase tracking-wider">
            SMARTONIC–FT
          </h3>
        </div>

        {/* Logo UGM */}
        <Image
          src="/LogoUGM.png"
          alt="Universitas Gadjah Mada"
          width={96}
          height={96}
        />
      </motion.div>

      <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>

      {/* Status Kendaraan */}
      <div className="grid grid-cols-3 gap-6 text-center mb-10">
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg">Bump Status</h3>
          <p className="text-red-500 font-bold text-xl">TIDAK AKTIF</p>
        </div>
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg">Jumlah Kendaraan</h3>
          <p className="text-green-400 font-bold text-xl">50</p>
        </div>
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg">Densitas Kendaraan</h3>
          <p className="text-green-400 font-bold text-xl">30</p>
        </div>
      </div>

      {/* Grafik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Grafik Kecepatan</h3>
        <Chart type="line" />
        </div>
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Kendaraan/jam</h3>
        <Chart type="bar" />
        </div>
      </div>
      <motion.p variants={fadeInUp} className="text-gray-500 text-xs mt-12 text-center">
            © 2025 Fakultas Teknik UGM
      </motion.p>
    </section>
    );
}