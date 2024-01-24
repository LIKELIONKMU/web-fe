import { Box, AppBar, Toolbar, IconButton } from '@mui/material'
import HeaderLogo from '../../icons/HeaderLogo'

const NavBar = () => {
  return (
    <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <IconButton></IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
