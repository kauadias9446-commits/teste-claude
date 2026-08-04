import React from 'react'

export default function Hero(){
  return (
    <header className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#071023] via-[#07182a] to-[#071023] py-28">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold leading-tight">Evolução que te entende</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">Acompanhe seu progresso ao longo do tempo com orientações personalizadas impulsionadas por IA.</p>
            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 rounded-md bg-[#06b6d4] text-black font-semibold shadow-md hover:brightness-105 transition">Começar minha evolução</button>
              <button className="px-5 py-3 rounded-md border border-gray-700 text-gray-200 hover:bg-white/5 transition">Conhecer a plataforma</button>
            </div>
          </div>

          <div className="w-[520px] h-[320px] bg-[#0b1220] rounded-2xl shadow-xl border border-white/6 flex items-center justify-center">
            <div className="text-sm text-gray-400">Preview do dashboard (client-only)</div>
          </div>
        </div>
      </div>
    </header>
  )
}
