"use client"

import { useEffect, useState } from "react"

export function RouteAnimation() {
  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => (prev + 1) % 45)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ADB5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ADB5" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Map grid background */}
        <g opacity="0.1">
          {[...Array(10)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#EEEEEE" strokeWidth="1" />
          ))}
          {[...Array(10)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" stroke="#EEEEEE" strokeWidth="1" />
          ))}
        </g>

        {/* Animated route path */}
        <path
          d="M 50 350 Q 100 300, 150 280 T 250 200 Q 300 150, 350 100"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1000"
          strokeDashoffset="0"
          className="animate-route-draw"
        />

        {/* Start point */}
        <circle cx="50" cy="350" r="8" fill="#00ADB5" className="animate-pulse-dot" />

        {/* End point */}
        <circle cx="350" cy="100" r="8" fill="#00ADB5" className="animate-pulse-dot" />

        {/* Waypoints */}
        <circle cx="150" cy="280" r="5" fill="#00ADB5" opacity="0.6" />
        <circle cx="250" cy="200" r="5" fill="#00ADB5" opacity="0.6" />
      </svg>

      {/* Speed indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl p-6 shadow-2xl border border-border">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2 animate-speed-increment" key={speed}>
            {speed}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">km/h</div>
        </div>
      </div>
    </div>
  )
}
