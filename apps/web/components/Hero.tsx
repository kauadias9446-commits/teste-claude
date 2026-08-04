import React from 'react'
import { tokens } from '../design/tokens'

export default function Hero(){
  return (
    <header className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#000000] via-[#070707] to-[#000000] py-28">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold leading-tight">Evolução que te entende</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">Acompanhe seu progresso ao longo do tempo com orientações personalizadas impulsionadas por IA.</p>
            <div className="mt-8 flex items-center gap-4">
              <button
                className="px-6 py-3 rounded-md text-black font-semibold shadow-md hover:brightness-105 transition-transform transform"
                style={{ backgroundColor: tokens.colors.brand.gold }}
                aria-label="Começar minha evolução"
              >
                Começar minha evolução
              </button>

              <button
                className="px-5 py-3 rounded-md border text-gray-200 hover:bg-white/5 transition"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                aria-label="Conhecer a plataforma"
              >
                Conhecer a plataforma
              </button>
            </div>
          </div>

          <div className="w-full md:w-[520px] h-[320px] bg-[color:var(--card-bg)] rounded-2xl shadow-xl border" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">Preview do dashboard (client-only)</div>
          </div>
        </div>
      </div>
    </header>
  )
}
