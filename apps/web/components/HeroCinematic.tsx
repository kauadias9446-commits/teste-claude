import React from 'react'
import dynamic from 'next/dynamic'
import Button from './ui/Button'
import { tokens } from '../design/tokens'

const PreviewSandbox = dynamic(() => import('./PreviewSandbox.client'), {
  ssr: false,
  loading: () => (
    <div className="w-full md:w-[520px] h-[320px] rounded-2xl bg-[color:var(--card-bg)] flex items-center justify-center animate-pulse">
      <div className="text-sm text-gray-400">Carregando preview...</div>
    </div>
  )
})

export default function HeroCinematic(){
  return (
    <header className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#000000] via-[#070707] to-[#000000] py-28">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold leading-tight">Evolução que te entende</h1>
            <p className="mt-4 text-lg text-muted max-w-xl">Acompanhe seu progresso ao longo do tempo com orientações personalizadas impulsionadas por IA.</p>
            <div className="mt-8 flex items-center gap-4">
              <Button variant="primary" aria-label="Começar minha evolução">Começar minha evolução</Button>
              <Button variant="ghost" aria-label="Conhecer a plataforma">Conhecer a plataforma</Button>
            </div>
          </div>

          <div className="w-full md:w-[520px] h-[320px] rounded-2xl shadow-xl border flex items-center justify-center" style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: 'var(--card-bg)' }}>
            <PreviewSandbox />
          </div>
        </div>
      </div>
    </header>
  )
}
