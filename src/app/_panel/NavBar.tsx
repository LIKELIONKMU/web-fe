'use client'

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import KmuLionLogo from '@/public/logo/KmuLionLogo.png'
import NavButtonGroup from '@/component/NavBottonGroup'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter()

  const getPathValue = (path: string) => {
    if (path === '/about') return 'about'
    else if (path === '/activities') return 'activities'
    else if (path === '/recruit') return 'recruit'
    else return ''
  }

  const tabList = [
    {
      label: 'ABOUT',
      value: 'about',
      onClick: () => {
        router.push('/about')
      },
    },
    {
      label: 'ACTIVITIES',
      value: 'activities',
      onClick: () => {
        router.push('/activities')
      },
    },
    {
      label: 'RECRUIT',
      value: 'recruit',
      onClick: () => {
        router.push('/recruit')
      },
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: 'black' }}
        position="static"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton onClick={() => router.push('/')}>
            <Image
              src={KmuLionLogo}
              alt="KMULogo"
              width={256}
              priority={true}
            />
          </IconButton>
          <NavButtonGroup
            getPathValue={getPathValue}
            tabList={tabList}
            oreintation="horizontal"
            ariaLabel="navigation button group"
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
