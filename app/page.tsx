"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoaderPage from "@/components/loader-page/loader-page"
import { HeroSection } from "@/components/home-page/hero-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">{isLoading ? <LoaderPage key="loader" /> : <HeroSection key="main" />}</AnimatePresence>
    </div>
  )
}
