"use client"; 
import React from "react"; 
import Image from "next/image"; 
import Link from "next/link";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 
import { ArrowRight } from "lucide-react"; 

const container = { 
    hidden: { opacity: 0 }, 
    visible: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.2, 
        }, 
    }, 
}; 

const fadeInUp = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, 
}; 
const hoverEffect = { 
    scale: 1.05, 
    transition: { duration: 0.3 }, 
}; 

export function SmartonicSection() { 
    const { ref, inView } = useInView({ 
        triggerOnce: true, 
        threshold: 0.1, 
    }); 
    return ( 
    <motion.section 
    ref={ref} 
    initial="hidden" 
    animate={inView ? "visible" : "hidden"} 
    variants={fadeInUp} 
    className="px-6 md:px-20 py-16 bg-[#0B1523] text-center text-white font-inter" > 
    
    {/* Header */} 
    <motion.div 
    variants={fadeInUp} 
    className="flex items-center justify-between mb-6" 
    > 
    
    {/* Logo Smartonic */} 
    <div className="flex items-center gap-2"> 
        <Image src="/Smartonic.png" 
        alt="Smartonic Logo" 
        width={64} 
        height={64} 
        priority 
        /> 
        
        <h3 className="text-[#2ABF7D] font-bold text-sm uppercase tracking-wider"> 
            SMARTONIC–FT 
        </h3> 
    </div> 
    
    {/* Logo UGM */} 
    <Image 
    src="/LogoUGM.png" 
    alt="Universitas Gadjah Mada" 
    width={96} 
    height={96} /> 
    </motion.div> 
    
    {/* Judul */} 
    <motion.h1 
    variants={fadeInUp} 
    className="text-2xl md:text-4xl font-bold leading-snug mt-4" > 
    SMART Speed Management & <br /> 
    Networked IoT Control with{" "} 
    <span className="text-[#00E389]">Reinforcement Learning</span> 
    </motion.h1> 
    
    {/* Subjudul */} 
    <motion.p 
    variants={fadeInUp} 
    className="text-gray-400 mt-3 text-base md:text-lg" > 
    Powered by IoT and Reinforcement Learning 
    </motion.p> 
    
    {/* Tombol */} 
       <motion.div variants={fadeInUp} className="mt-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-[#2ABF7D] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#00c77d] transition"
        >
          Go to Dashboard <ArrowRight size={18} />
        </Link>
      </motion.div>
        
    {/* Grid Fitur */} 
    <motion.div 
    variants={container} 
    initial="hidden" 
    animate={inView ? "visible" : "hidden"} 
    className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6" > 
    
    {/* Feature 1 */} 
    <motion.div 
    className="bg-[#121E2F] rounded-xl shadow-lg p-6 border border-gray-700" 
    variants={fadeInUp} 
    whileHover={hoverEffect} > 
    <div className="flex justify-center"> 
        <Image 
        src="/IOT.png" 
        alt="IoT Integration" 
        width={48} 
        height={48} 
        /> 
    </div> 
    <h3 className="text-[#00E389] font-bold text-lg mt-2"> 
        IoT Integration
    </h3> 
    
    <p className="text-gray-400 text-sm mt-2"> 
        Terhubung dengan sensor kecepatan pada kendaraan yang lewat 
    </p> 
    </motion.div> 
    
    {/* Feature 2 */} 
    <motion.div 
    className="bg-[#121E2F] rounded-xl shadow-lg p-6 border border-gray-700" 
    variants={fadeInUp} 
    whileHover={hoverEffect} 
    > 
    <div className="flex justify-center"> 
        <Image 
        src="/AdaptiveRL.png" 
        alt="Adaptive RL Control" 
        width={48} 
        height={48} 
        /> 
    </div> 
    <h3 className="text-[#00E389] font-bold text-lg mt-2"> 
        Adaptive RL Control 
    </h3> 
    <p className="text-gray-400 text-sm mt-2"> 
        Speed Bump beradaptasi otomatis menggunakan algoritma Reinforcement Learning 
    </p> 
    </motion.div> 
    
    {/* Feature 3 */} 
    <motion.div 
    className="bg-[#121E2F] rounded-xl shadow-lg p-6 border border-gray-700" 
    variants={fadeInUp} 
    whileHover={hoverEffect} 
    > 
    <div className="flex justify-center"> 
        <Image 
        src="/Analytic.png" 
        alt="Analytics Report" 
        width={48} 
        height={48} 
        /> 
    </div> 
    <h3 className="text-[#00E389] font-bold text-lg mt-2"> 
        Analytics Report 
    </h3> 
    <p className="text-gray-400 text-sm mt-2"> 
        Data historis kecepatan kendaraan di lingkungan Fakultas Teknik UGM 
        </p> 
    </motion.div> 
</motion.div> 
    
    {/* Footer kecil */} 
    <motion.p variants={fadeInUp} className="text-gray-500 text-xs mt-12"> 
        © 2025 Fakultas Teknik UGM 
        </motion.p> 
    </motion.section> 
    ); 
} 
export default SmartonicSection;