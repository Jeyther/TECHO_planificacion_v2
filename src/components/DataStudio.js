import React from 'react'
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../pages/DiagnosticsPage/diagnostico.css'
import DataStudioTableOne from './DataStudioTableOne';
import DataStudioTableTwo from './DataStudioTableTwo';
import DataStudioTableThree from './DataStudioTableThree';

function DataStudio() {

  const styleLinks = ({ isActive }) =>
    isActive
    ? {
      color: '#ffffff',
      backgroundColor: '#ea6d4f',

    }
    : {
      color: '#ea6d4f',
     
      }

  return (
    <Box>
      <Typography variant='h2' sx={{ color: '#27759e', fontSize: '35px', textAlign: 'center' }}>DIAGNÓSTICO</Typography>
      <nav className='diagnostico-nav'>
        <NavLink to="/diagnostico/fodaActual" style={styleLinks} className="navlinks">F.O.D.A ACTUAL</NavLink>
        <NavLink to="/diagnostico" style={styleLinks} className="navlinks">CREAR F.O.D.A.</NavLink>
        <NavLink to="/diagnostico/verFodaAnterior" style={styleLinks} className="navlinks">VER AÑOS ANTERIORES</NavLink>
        <NavLink to="/diagnostico/dataStudio" style={styleLinks} className="navlinks">VER DATA STUDIO</NavLink>

      </nav>
      <Box sx={{ backgroundColor: "#ffffff", display: "flex", flexDirection: "column", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
          <Typography variant="h6">TECHO</Typography>
          <Typography variant="h5" sx={{ fontSize: "15px", fontWeight: "bold", textDecoration: "underline" }}>Indicadores por pilar al cierre del 1er semestre</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
          <Box sx={{ width: "70%", }}>
            <DataStudioTableOne />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "30%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <DataStudioTableThree />
            <DataStudioTableTwo />
          </Box>

        </Box>
      </Box>
    </Box>

  )
}

export default DataStudio