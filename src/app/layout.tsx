import React from 'react'
import '../styles/global.css'
import '../styles/reset.css'
import type { Metadata } from 'next'
import { Pretendard } from '../styles/font'
import MuiThemeProvider from '../styles/MuiThemeProvider'
import MainLayout from '../components/Main/MainLayout'

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
      <body className={Pretendard.className}>
        <MuiThemeProvider>
          <MainLayout>{children}</MainLayout>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
