"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Waves, Droplets } from "lucide-react"

export default function LoaderPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#0d6ebb] via-[#0DBD9F] to-[#0d6ebb] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 text-white/10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Waves size={80} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-white/10"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Droplets size={60} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-white/10"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Waves size={50} />
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Logo or Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <img 
                src="/assets/images/logo.png"
                alt="LearnHub Logo"
                className="h-16 w-16 rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Academy
          </motion.h1>
          <motion.p
            className="text-white/90 text-lg md:text-xl font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Protégeons nos océans ensemble
          </motion.p>
          <motion.p
            className="text-white/70 text-sm mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Formation environnementale • Lutte contre la pollution plastique
          </motion.p>
        </div>

        <div className="w-80 mx-auto">
          <div className="flex justify-between text-white/80 text-sm mb-2 font-medium">
            <span>Chargement</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden backdrop-blur-sm shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-white to-[#0DBD9F] rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "200%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 text-white/60 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Droplets size={16} />
            </motion.div>
            <span>Préparation de votre espace de formation...</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <motion.path
            d="M0,60 C300,90 600,30 900,60 C1200,90 1200,100 1200,100 L0,100 Z"
            fill="white"
            animate={{
              d: [
                "M0,60 C300,90 600,30 900,60 C1200,90 1200,100 1200,100 L0,100 Z",
                "M0,60 C300,30 600,90 900,60 C1200,30 1200,100 1200,100 L0,100 Z",
                "M0,60 C300,90 600,30 900,60 C1200,90 1200,100 1200,100 L0,100 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}