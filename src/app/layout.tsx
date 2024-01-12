import React from 'react'
import type { Metadata } from 'next'
import { Pretendard } from '../styles/font'

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
    <html lang="ko">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={Pretendard.className}>{children}</body>
    </html>
  )
}
