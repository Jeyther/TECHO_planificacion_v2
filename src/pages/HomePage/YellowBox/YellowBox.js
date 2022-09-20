import React from 'react'
import YellowBoxGraph from './YellowBoxGraph';
import YellowBoxBarId from './YellowBoxBarJd';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


function YellowBox() {
  return (
    <Box sx={{
      backgroundColor: '#f4ecda',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      height: '280px',
      borderRadius: '10px',
      margin: '2px',
      padding: '5px',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'start' }}>
        <Typography variant='h2' sx={{ fontSize: '20px', color: '#d78e01', marginLeft: '4px', marginTop: '10px', textAlign: 'left' }} >
          OBJETIVOS PERSONALES
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        margin: '2px',
        padding: '5px',
      }}>
        <Box sx={{ width: '65%', }}>
          <YellowBoxBarId />
        </Box>
        <Box sx={{ width: '35%', }}>
          <YellowBoxGraph />
        </Box>
      </Box>
    </Box>
  )
}

export default YellowBox