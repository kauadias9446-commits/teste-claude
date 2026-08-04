use client

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function PreviewSandbox(){
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(24)

  useEffect(() => {
    // simple count-up animation to mock progress
    let mounted = true
    let target = 72
    const step = () => {
      setValue((v) => {
        const next = Math.min(target, v + Math.ceil((target - v) / 6))
        return next
      })
    }
    const id = setInterval(() => {
      if (!mounted) return
      step()
      if (value >= target) clearInterval(id)
    }, 300)
    return () => {
      mounted = false
      clearInterval(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-400">Progresso</div>
          <div className="text-2xl font-semibold">{value}%</div>
        </div>
        <div className="text-right text-xs text-gray-400">Linha do tempo</div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 C60 10, 160 10, 210 60" stroke="rgba(197,157,95,0.12)" strokeWidth="6" strokeLinecap="round" />
          <motion.path
            d="M10 60 C60 10, 160 10, 210 60"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />
        </svg>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 bg-[color:var(--glass)] rounded-lg p-3">
          <div className="text-xs text-gray-400">Planos ativos</div>
          <div className="font-medium">Primeiros passos</div>
        </div>
        <div className="w-20 bg-[color:var(--glass)] rounded-lg p-3 flex items-center justify-center">
          <div className="text-sm font-semibold">{value}%</div>
        </div>
      </div>
    </div>
  )
}
