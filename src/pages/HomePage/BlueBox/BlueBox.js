import React from 'react'
import BlueBoxGraph from './BlueBoxGraph/BlueBoxGraph'
import BlueBoxTable from './BlueBoxTable/BlueBoxTable';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function BlueBox() {
  return (

    <Box sx={{
      backgroundColor: '#cfe5f1',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start',
      width: '100%',
      height: '280px',
      margin: '2px',
      padding: '1rem'
    }}>

      <Typography variant='h2' sx={{ color: '#0092dd', paddingTop: 0, fontSize: '20px' }}>EQUIPO</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '100%',
      }}>

        <Box sx={{
          width: '31%',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <BlueBoxTable />
        </Box>
        <Box sx={{
          width: '35%',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <BlueBoxGraph />
        </Box>
      </Box>
    </Box>
  )
}

export default BlueBox