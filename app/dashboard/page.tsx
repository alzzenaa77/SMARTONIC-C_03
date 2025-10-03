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
    <section className="pt-2 md:pt-4 px-6 md:px-10 bg-[#0B1523] text-white min-h-screen font-inter">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between mb-6"
      >
        {/* Logo Smartonic */}
        <div className="flex items-center gap-2">
          <Image
            src="/Smartonic.png"
            alt="Smartonic Logo"
            width={90}
            height={80}
            priority
          />
          <h3 className="text-[#2ABF7D] font-bold text-xl md:text-xl uppercase tracking-wider">
            SMARTONIC–FT
          </h3>

        </div>

        {/* Logo UGM */}
        <Image
          src="/LogoUGM.png"
          alt="Universitas Gadjah Mada"
          width={130}
          height={100}
        />
      </motion.div>

      {/* Banner Welcome */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative bg-[#CAD8EB] rounded-xl overflow-hidden mb-8 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Text */}
        <div className="px-6 py-4 md:px-10 md:py-6 font-poppins">
          <h2 className="text-lg md:text-xl text-[#1E3E67] font-semibold">
            Welcome to
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-[#1E3E67] leading-snug">
            Smartonic-FT Dashboard,
          </h1>
          <p className="text-[#1E3E67] text-sm md:text-base lg:text-lg italic max-w-4xl leading-relaxed">
  Safer Roads Through Smart Speed & IoT Reinforcement — SMARTONIC-FT as an innovative 
  solution for intelligent traffic monitoring and adaptive speed control developed by Capstone C_03
</p>


        </div>


        {/* Background Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <Image
            src="/teknik2.png"
            alt="Gedung Fakultas Teknik UGM"
            width={500}
            height={300}
            className="object-contain h-full"
          />
        </div>
      </motion.div>

      {/* Status Kendaraan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-center">
        {/* Bump Status */}
        <div className="bg-[#121E2F] p-6 rounded-lg border border-[#2ABF7D]">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-mono">Bump Status</h3>
            <Image
              src="/bump.png"   
              alt="Bump Icon"
              width={30}
              height={30}
            />
          </div>
          <p className="text-red-500 font-extrabold text-2xl mt-2 font-mono">
            TIDAK AKTIF
          </p>
        </div>

        {/* Jumlah Kendaraan */}
        <div className="bg-[#121E2F] p-6 rounded-lg border border-[#2ABF7D]">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-mono">Jumlah Kendaraan</h3>
            <Image
              src="/kendaraan.png" 
              alt="Car Icon"
              width={30}
              height={40}
            />
          </div>
          <p className="text-green-400 font-extrabold text-2xl mt-2 font-mono">
            50
          </p>
        </div>

        {/* Densitas Kendaraan */}
        <div className="bg-[#121E2F] p-6 rounded-lg border border-[#2ABF7D]">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-mono">Densitas Kendaraan</h3>
            <Image
              src="/densitas.png"   // ganti dengan ikon densitas
              alt="Density Icon"
              width={20}
              height={35}
            />
          </div>
          <p className="text-green-400 font-extrabold text-2xl mt-2 font-mono">
            30
          </p>
        </div>
      </div>


      {/* Grafik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Grafik Kecepatan
          </h3>
          <Chart type="line" />
        </div>
        <div className="bg-[#121E2F] p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Kendaraan/jam
          </h3>
          <Chart type="bar" />
        </div>
      </div>

      {/* Footer */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-gray-500 text-xs mt-12 text-center"
      >
        © 2025 Fakultas Teknik UGM
      </motion.p>
    </section>
  );
}
