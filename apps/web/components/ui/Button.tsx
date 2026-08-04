'use client'

import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', children, className = '', ...props }: Props){
  const base = 'px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2'
  const primary = `bg-[color:var(--accent)] text-black shadow-sm hover:brightness-105`
  const ghost = `border border-white/8 text-gray-200 hover:bg-white/5`

  const cls = `${base} ${variant === 'primary' ? primary : ghost} ${className}`

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
