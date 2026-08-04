import React from 'react'
import HeroCinematic from '../../components/HeroCinematic'

export default function Page(){
  return (
    <main>
      <HeroCinematic />
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Demo</h2>
        <p className="text-muted">O restante do site e a aplicação demo serão implementados em etapas seguindo o plano arquitetural.</p>
      </section>
    </main>
  )
}
