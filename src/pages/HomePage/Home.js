import React from 'react';
import { Typography, Button } from '@mui/material';
import GreenBox from './GreenBox/GreenBox';
import BlueBox from './BlueBox/BlueBox';
import PinkBox from './PinkBox/PinkBox';
import YellowBox from './YellowBox/YellowBox';
import Box from '@mui/material/Box';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import useUser from 'hooks/useUser'

export default function Home () {

  const { profile} = useUser();
  const usuario = profile.givenName;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Typography variant='h1' sx={{ fontSize: '30px', textTransform: 'uppercase' }}>¡HOLA {usuario}! 👋🏻</Typography>

        <Box sx={{ borderRadius: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>

          <Box sx={{ marginRight: '2px', display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ backgroundColor: '#0090da', width: '140px', height: '70px', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bolder' }}>FOCO 1</Typography>
              <Typography sx={{ fontSize: '12px' }}>JUNTAR PLATA</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#323232', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '140px', height: '70px', borderEndEndRadius: '10px', borderTopRightRadius: '10px' }}>
              <img src='https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png' alt='avatar' style={{ width: '30px' }} />
              <Typography sx={{ color: '#ffffff', textAlign: 'center', fontSize: '12px' }}>{usuario}</Typography>
            </Box>
          </Box>

          <Box sx={{ marginLeft: '2px', display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ backgroundColor: '#0090da', width: '140px', height: '70px', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bolder' }}>FOCO 2</Typography>
              <Typography sx={{ fontSize: '12px' }}>TENER EQUIPO</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#323232', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '140px', height: '70px', borderEndEndRadius: '10px', borderTopRightRadius: '10px' }}>
              <img src='https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png' alt='avatar' style={{ width: '30px' }} />
              <Typography sx={{ color: '#ffffff', textAlign: 'center', fontSize: '12px' }}>{usuario}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space between' }}>

        <Box sx={{ backgroundColor: '#e7e7e8', width: '15%', borderRadius: '10px', margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
          <Typography variant='h4' sx={{ fontSize: '16px', textAlign: 'center' }}>CÓMO PLANIFICAMOS</Typography>
          <Box><FaLongArrowAltDown style={{ color: '#acacac' }} /></Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boderRadius: '15px', padding: '5px', width: '100%' }}>

          <Button sx={{ backgroundColor: '#acacac', color: 'white', textAlign: 'center', fontSize: '12px', minWidth: '100%', height: '80px' }} className='links'><Link to='./diagnostico' className='links' >DIAGNÓSTICO</Link></Button>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
                <Button sx={{ backgroundColor: '#f8c146', color: 'white', textAlign: 'center', fontSize: '12px', height: '80px', width: '100%' }} className='links'><Link to='' className='links' >METAS</Link></Button>
                <Button sx={{ backgroundColor: '#70ad47', color: 'white', textAlign: 'center', fontSize: '12px', height: '80px', width: '100%' }} className='links'><Link to='' className='links'>PRESUPUESTO</Link></Button>
              </Box>
              <Button sx={{ backgroundColor: '#68c7ff', color: 'white', textAlign: 'center', fontSize: '12px', width: '40%', height: '160px' }} className='links'><Link to='' className='links' >FOCO</Link></Button>
            </Box>
            <Button sx={{ backgroundColor: '#0092dd', color: 'white', textAlign: 'center', fontSize: '12px', height: '80px', minWidth: '100%' }} className='links'><Link to='' className='links' >PLANES OPERATIVOS</Link></Button>
            <Button sx={{ backgroundColor: '#005d8d', color: 'white', textAlign: 'center', fontSize: '12px', height: '80px', minWidth: '100%' }} className='links'><Link to='' className='links' >OBJETIVOS PERSONALES</Link></Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', }}>
          <BlueBox />
          <GreenBox />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '35%', }}>
          <YellowBox />
          <PinkBox />
        </Box>

      </Box>
    </Box>
  )
}


