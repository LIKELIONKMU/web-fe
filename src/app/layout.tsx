import React from 'react'
import type { Metadata } from 'next'

export const meta: Metadata = {
  title: 'likelion-kmu',
  description: 'likelion-kmu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
