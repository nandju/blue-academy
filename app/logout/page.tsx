"use client"

import { useEffect } from "react"

export default function LogoutPage() {
  useEffect(() => {
    const doLogout = async () => {
      try {
        await fetch("/api/logout", { method: "POST" })
      } catch {}
      window.location.href = "/login"
    }
    doLogout()
  }, [])

  return null
}


