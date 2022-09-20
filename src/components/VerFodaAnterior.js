import React from 'react'
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useRef, useState, useContext, } from 'react';
import FodaContext from '../context/FodaContext'
import '../pages/DiagnosticsPage/diagnostico.css'
import Tags from './Tags';

function VerFodaAnterior() {
  const [tagsVer, setTagsVer] = useState([]);
  const [fortalezasVer, setFortalezasVer] = useState([]);
  const [oportunidadesVer, setOportunidadesVer] = useState([]);
  const [debilidadesVer, setDebilidadesVer] = useState([]);
  const [amenazasVer, setAmenazasVer] = useState([]);

  const anioVerRef = useRef();
  const { form, } = useContext(FodaContext);

  let objetoDelAnio = {}
  let objetoAnio = [];

  let objetoDelAnio2;

  let anioElegido;
  const handleChangeVer = (e) => {

    let index = e.target.selectedIndex;
    console.log(e.target.options[index].text)
    anioElegido = e.target.options[index].text

    anioBuscado(anioElegido)

  }
  let arrayFortalezas;
  let arrayOportunidades;
  let arrayDebilidades;
  let arrayAmenazas;

  function anioBuscado(anio) {
    console.log(form)
    console.log(anio)
    objetoDelAnio2 = form.find(el => el.anio == anio)
    console.log(objetoDelAnio2)
    if (objetoDelAnio2 !== undefined) {
      console.log(objetoDelAnio2.fortalezas);
      arrayFortalezas = objetoDelAnio2.fortalezas;
      arrayOportunidades = objetoDelAnio2.oportunidades;
      arrayDebilidades = objetoDelAnio2.debilidades;
      arrayAmenazas = objetoDelAnio2.amenazas;

      setFortalezasVer(arrayFortalezas);
      setOportunidadesVer(arrayOportunidades);
      setDebilidadesVer(arrayDebilidades);
      setAmenazasVer(arrayAmenazas);

    } else { alert(`El año ${anio} no ha sido creado`) }

  }

  const styleLinks = ({ isActive }) =>
    isActive
      ? {
        color: '#ffffff',
        background: '#ea6d4f',
      }
      : {
        color: '#ea6d4f',
      }

  function removeTagVer(index) {
    setTagsVer(tagsVer.filter((el, i) => i !== index))

  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h2' sx={{ color: '#27759e', fontSize: '35px', textAlign: 'center' }}>DIAGNÓSTICO</Typography>
      <nav className='diagnostico-nav'>
        <NavLink to="/diagnostico/fodaActual" style={styleLinks} className="navlinks">F.O.D.A ACTUAL</NavLink>
        <NavLink to="/diagnostico" style={styleLinks} className="navlinks">CREAR F.O.D.A.</NavLink>
        <NavLink to="/diagnostico/verFodaAnterior" style={styleLinks} className="navlinks">VER AÑOS ANTERIORES</NavLink>
        <NavLink to="/diagnostico/dataStudio" style={styleLinks} className="navlinks">VER DATA STUDIO</NavLink>

      </nav>
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>AÑO</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <select name="anio" required className='select' id="anios" onChange={handleChangeVer} ref={anioVerRef}>
          <option disabled selected="true">SELECCIONAR</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>

      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>FORTALEZAS</Typography>

            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #26a7ec', backgroundColor: '#CFE5F1',

              display: 'flex', flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                fortalezasVer
                  ? <Tags tagProp={fortalezasVer} backgroundCol={'#80c8ee'} x={'#0092DD'}></Tags>
                  : <p></p>
              }

            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>OPORTUNIDADES</Typography>
            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #70AD47', backgroundColor: '#DFE9DA', display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                oportunidadesVer
                  ? <Tags tagProp={oportunidadesVer} backgroundCol={'#b7d6a3'} x={'#70AD47'} ></Tags>
                  : <p></p>
              }

            </Box>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>DEBILIDADES</Typography>
            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #F8C146', backgroundColor: '#F4ECDA', display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                debilidadesVer
                  ? <Tags tagProp={debilidadesVer} backgroundCol={'#fbe0a2'} x={'#F8C146'}></Tags>
                  : <p></p>
              }

            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>AMENAZAS</Typography>
            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #EA6D4F', backgroundColor: '#F2DEDA', display: 'flex',

              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                amenazasVer
                  ? <Tags tagProp={amenazasVer} backgroundCol={'#f4b6a7'} x={'#EA6D4F'}></Tags>
                  : <p></p>
              }

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default VerFodaAnterior
