import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  Link,
  Button,
  IconButton,
} from '@mui/material'
import TechoLogo from 'assets/images/negative_logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Submenu from 'components/Submenu'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CategoryIcon from '@mui/icons-material/Category'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import useUser from 'hooks/useUser'
import UserMenu from 'components/UserMenu'
import { useThemeContext } from 'theme/Theme'

export const Logo = () => {
  return (
    <Link
      component={RouterLink}
      style={{ color: 'white', textDecoration: 'none', backgroundColor: '#333', height: '115px', width: '245px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      to='/'
    >
      <Box
        component='img'
        sx={{
          height: 50,
          width: 'auto',
        }}
        alt='Techo Logo'
        src={TechoLogo}
      />
    </Link>
  )
}

const menu = [
  {
    name: 'Inicio',
    to: '/',
    submenu: null
  },
  {
    name: 'Registros',
    to: null,
    submenu: [
      {
        name: 'Años',
        icon: <CalendarTodayIcon fontSize='small' />,
        to: '/years'
      },
      {
        name: 'Temporalidades',
        icon: <ScheduleIcon fontSize='small' />,
        to: '/temporalities'
      },
      {
        name: 'Tipos',
        icon: <CategoryIcon fontSize='small' />,
        to: '/types'
      },
      {
        name: 'Pilares',
        icon: <ViewColumnIcon fontSize='small' />,
        to: '/pillars'
      },
      {
        name: 'Indicadores',
        icon: <EqualizerIcon fontSize='small' />,
        to: '/indicators'
      },
      {
        name: 'Crear planificación',
        icon: <AddBoxIcon fontSize='small' />,
        to: '/planning'
      }
    ]
  },
  {
    name: 'Diagnóstico',
    to: '/diagnostico',
    submenu: null
  },
  {
    name: 'Metas',
    to: '/goals',
    submenu: null
  },
  {
    name: 'Focos',
    to: '/spotlights',
    submenu: null
  },
  {
    name: 'Presupuesto',
    to: '/budget',
    submenu: null
  },
  {
    name: 'Planes Operativos',
    to: '/operational-plans',
    submenu: null
  },
  {
    name: 'Objetivos Personales',
    to: '/personal-goals',
    submenu: null
  },
  {
    name: 'Pedidos O.I',
    to: '/orders',
    submenu: null
  },

]

const buttonStyles = (index, selectedIndex) => {
  return {
    position: 'relative',
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: 1.2,
    textAlign: 'center',
    inlineSize: { md: 'min-content' },
    '&:hover': {
      backgroundColor: 'inherit'
    },
    '&:before, &:after': {
      position: 'absolute',
      transition: 'all 0.35s ease',
    },
    '&:before': {
      bottom: 0,
      left: '0px',
      display: 'block',
      height: '4px',
      width: selectedIndex === index ? '100%' : 0,
      content: '""',
      backgroundColor: '#F8C146',
      borderRadius: '8px',
    },
    '&:hover:before': {
      opacity: 1,
      width: '100%',
    },
  }

};

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [sublinks, setSublinks] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMenuOpen = Boolean(anchorEl)
  const { isLogged } = useUser()

  const handleButtonClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleSubmenuClick = (event, sublinks) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setSublinks(sublinks)
  }

  const onHandleClose = () => {
    setAnchorEl(null)
  }

  const {colorMode,theme} = useThemeContext();

  return (
    <AppBar position='sticky' elevation={0} enableColorOnDark>
      <Toolbar disableGutters>
        <Logo />
        <Box component="nav" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'},px: 4 }}>
          {menu.map((item, index) => (
            <Button
              key={item.name}
              component={item.submenu ? null : RouterLink}
              tabIndex={index}
              to={item.submenu ? null : item.to}
              onClick={item.submenu ? (e) => handleSubmenuClick(e, item.submenu) : (event) => handleButtonClick(event, index)}
              startIcon={item.icon || null}
              endIcon={item.submenu ? <ArrowDropDownIcon /> : null}
              sx={buttonStyles(index, selectedIndex)}
              color="inherit"
              disableRipple
            >
              {item.name}
            </Button>
          ))}
          <Submenu
            isMenuOpen={isMenuOpen}
            anchorEl={anchorEl}
            onHandleClose={onHandleClose}
            sublinks={sublinks}
            handleButtonClick={handleButtonClick}
          />
        </Box>

        <IconButton
          sx={{ ml: 1 }}
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {isLogged
          ? <UserMenu />
          : null}
      </Toolbar>
    </AppBar>
  )
}
