import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BudgetPeople from './Graphs/BudgetPeople';
import BudgetTerritory from './Graphs/BudgetTerritory';
import { GifBox } from '@mui/icons-material';

function GreenBox() {

  const ingresos = 22200364;
  const egresos = 1000000;
  const saldo = 21200364;

  const text = {
    fontSize: '16px',
    margin: '2px',
    textAlign: 'justify',
  }

  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'start',
      backgroundColor: '#dfe9da',
      borderRadius: '10px',
      padding: '8px',
      width: '100%',
      height: '280px',
      margin: '2px',
    }}>

      <Typography variant='h2' sx={{
        fontSize: '20px',
        marginTop: '10px',
        marginLeft: '10px',
        color: '#70ad47',
      }}>
        PRESUPUESTO
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        width: '100%',
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          height: '250px',
          width: '34%'
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Typography variant='h3' sx={text}>
              Ingresos =
            </Typography>
            <Box sx={{
              backgroundColor: '#70ad47',
              color: 'white',
              borderRadius: '3px',
              padding: '2px 5px',
            }}>
              {ingresos}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Typography variant='h3' sx={text}>
              Egresos =
            </Typography>
            <Box sx={{
              backgroundColor: '#ea6d4f',
              color: 'white',
              borderRadius: '3px',
              padding: '2px 5px',
            }}>{egresos}</Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Typography variant='h3' sx={text}>
              Saldo =
            </Typography>
            <Box sx={{
              backgroundColor: '#333333',
              color: 'white',
              borderRadius: '3px',
              padding: '2px 5px',
            }}>
              {saldo}
            </Box>
          </Box>
        </Box>

        <Box sx={{
          width: '33%',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <BudgetPeople />
        </Box>

        <Box sx={{
          width: '33%',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <BudgetTerritory />
        </Box>
      </Box>
    </Box>
  )
}

export default GreenBox