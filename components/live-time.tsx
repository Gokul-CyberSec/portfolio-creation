"use client"

import { useEffect, useState } from "react"

export function LiveTime() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      })
      const dateString = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      setTime(timeString)
      setDate(dateString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-green-400 text-xs">
      <div className="font-bold">{time}</div>
      <div className="opacity-70">{date}</div>
    </div>
  )
}
