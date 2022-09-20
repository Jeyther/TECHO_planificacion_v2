import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from '@mui/material';

const SmallTable = ({tableContent}) => {
  return (
    <>
      <TableContainer sx={{ borderRadius: '10px', height: '177px' }}>
        <Table sx={{ height: '100%' }}>
          <TableHead sx={{ backgroundColor: '#0092DD' }}>
            <TableRow>
              <TableCell
                align="center"
                colSpan={3}
                sx={{
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: '2px solid #fff',
                  color: 'white',
                }}
              >
                EVALUACIÓN
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  color: 'white',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: 'none',
                  borderRight: '2px solid #fff',
                  width: '33%',
                }}
              >
                1S
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  color: 'white',
                  border: 'none',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderRight: '2px solid #fff',
                  width: '33%',
                }}
              >
                2S
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  border: 'none',
                  fontSize: '22px',
                  fontWeight: 600,
                  width: '33%',
                  color: 'white',
                }}
              >
                AÑO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{}}>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: '#E7E7E8',
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: 'none',
                  borderRight: '2px solid #fff',
                }}
              >
                {tableContent.evaluacion.s1}
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: '#E7E7E8',
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: 'none',
                  borderRight: '2px solid #fff',
                }}
              >
                {tableContent.evaluacion.s2}
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: '#E7E7E8',
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: 'none',
                }}
              >
                {tableContent.evaluacion.año}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ borderRadius: '10px', height: '177px' }}>
        <Table sx={{ height: '100%' }}>
          <TableHead sx={{ backgroundColor: '#0092DD' }}>
            <TableRow>
              <TableCell
                align="center"
                colSpan={2}
                sx={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'white',
                  borderBottom: '2px solid #fff',
                }}
              >
                APROBACIÓN
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 600,
                  borderBottom: 'none',
                  borderRight: '2px solid #fff',
                  width: '50%',
                  padding: '10px',
                }}
              >
                JEFE/A DIRECTOR/A
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'white',
                  width: '50%',
                }}
              >
                PERSONAS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{}}>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: '#E7E7E8',
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: 'none',
                  borderRight: '2px solid #fff',
                  textTransform: 'uppercase',
                }}
              >
                {tableContent.aprobacion.jefe}
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  backgroundColor: '#E7E7E8',
                  color: 'rgba(0, 0, 0, 0.87)',
                  fontSize: '22px',
                  fontWeight: 600,
                  borderBottom: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {tableContent.aprobacion.personas}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SmallTable;
