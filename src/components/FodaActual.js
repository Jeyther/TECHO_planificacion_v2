import React from 'react'
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../pages/DiagnosticsPage/diagnostico.css'
import { useState, useContext, useEffect } from 'react';
import FodaContext from '../context/FodaContext'
import './../pages/DiagnosticsPage/diagnostico.css'
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri'

function FodaActual() {
  const [tagsActual, setTagsActual] = useState([]);
  const [fortalezasActual, setFortalezasActual] = useState([]);
  const [oportunidadesActual, setOportunidadesActual] = useState([]);
  const [debilidadesActual, setDebilidadesActual] = useState([]);
  const [amenazasActual, setAmenazasActual] = useState([]);
  const [edit, setEdit] = useState(false)

  const { takeFodaToContext, form, setForm, cargarFodaDeLocalStorage} = useContext(FodaContext);

  let anioActual = 2022;

  useEffect(() => {

    let arrayFortalezasActual;
    let arrayOportunidadesActual;
    let arrayDebilidadesActual;
    let arrayAmenazasActual;
    let objetoDelAnioActual;

    cargarFodaDeLocalStorage();
    objetoDelAnioActual = form.find(el => el.anio == anioActual)

    if (objetoDelAnioActual !== undefined) {

      arrayFortalezasActual = objetoDelAnioActual.fortalezas;
      arrayOportunidadesActual = objetoDelAnioActual.oportunidades;
      arrayDebilidadesActual = objetoDelAnioActual.debilidades;
      arrayAmenazasActual = objetoDelAnioActual.amenazas;

      setFortalezasActual(arrayFortalezasActual);
      setOportunidadesActual(arrayOportunidadesActual);
      setDebilidadesActual(arrayDebilidadesActual);
      setAmenazasActual(arrayAmenazasActual);

    } else {

      setFortalezasActual([]);
      setOportunidadesActual([]);
      setDebilidadesActual([]);
      setAmenazasActual([]);

    }
  }, [])

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
    setTagsActual(tagsActual.filter((el, i) => i !== index))

  }

  function handleSubmitActual() {

    const aniosNoActuales = form.filter((el) => el.anio != anioActual)
    console.log(aniosNoActuales)
    console.log(fortalezasActual)
    setForm([]);
    console.log(form)

    setForm([
      ...aniosNoActuales,
      {
        anio: [anioActual],
        fortalezas: [...fortalezasActual],
        oportunidades: [...oportunidadesActual],
        debilidades: [...debilidadesActual],
        amenazas: [...amenazasActual],
      }
    ]);

    alert(`El año ${anioActual} se ha guardado`);
    console.log(form)
    takeFodaToContext()

  }

  function handleCancelActual() {
    let arrayFortalezasActual;
    let arrayOportunidadesActual;
    let arrayDebilidadesActual;
    let arrayAmenazasActual;
    let objetoDelAnioActual;

    objetoDelAnioActual = form.find(el => el.anio == anioActual)

    if (objetoDelAnioActual !== undefined) {

      arrayFortalezasActual = objetoDelAnioActual.fortalezas;
      arrayOportunidadesActual = objetoDelAnioActual.oportunidades;
      arrayDebilidadesActual = objetoDelAnioActual.debilidades;
      arrayAmenazasActual = objetoDelAnioActual.amenazas;

      setFortalezasActual(arrayFortalezasActual);
      setOportunidadesActual(arrayOportunidadesActual);
      setDebilidadesActual(arrayDebilidadesActual);
      setAmenazasActual(arrayAmenazasActual);

    } else {

      setFortalezasActual([]);
      setOportunidadesActual([]);
      setDebilidadesActual([]);
      setAmenazasActual([]);

    }

  }

  function handleEliminarActual() {
    let filtrados = form.filter((el => el.anio != anioActual));
    setForm(filtrados)
    console.log(filtrados)
  }

  function handleEditarActual() {
    setEdit(!edit)
  }

  const buttonStyle = {
    margin: '5px 5px auto',
    backgrounCcolor: '#0092dd',
    color: ' #0092DD',
    padding: '5px 15px 5px 15px',
    borderRadius: '5px',
    padding: '10px',
    border: '2px solid  #0092DD'
  }


  function handleKeyDownActualFortalezas(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setFortalezasActual([...fortalezasActual, value])
    e.target.value = ''
  }

  function handleKeyDownActualOportunidades(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setOportunidadesActual([...oportunidadesActual, value])
    e.target.value = ''
  }

  function handleKeyDownActualDebilidades(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setDebilidadesActual([...debilidadesActual, value])
    e.target.value = ''
  }

  function handleKeyDownActualAmenazas(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setAmenazasActual([...amenazasActual, value])
    e.target.value = ''
  }


  function removeTagFortalezasActual(index) {
    edit && setFortalezasActual(fortalezasActual.filter((el, i) => i !== index))
  }

  function removeTagOportunidadesActual(index) {
    edit && setOportunidadesActual(oportunidadesActual.filter((el, i) => i !== index))
  }

  function removeTagDebilidadesActual(index) {
    edit && setDebilidadesActual(debilidadesActual.filter((el, i) => i !== index))
  }

  function removeTagAmenazasActual(index) {
    edit && setAmenazasActual(amenazasActual.filter((el, i) => i !== index))
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
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: "10px" }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>AÑO {anioActual}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>

          <button type='button' style={buttonStyle} onClick={handleEditarActual}><FaEdit style={{ marginRight: '5px' }} />EDITAR</button>
          <button style={buttonStyle} onClick={handleEliminarActual}><RiDeleteBin5Fill style={{ marginRight: '5px' }} />ELIMINAR</button>

        </Box>
      </Box>


      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>FORTALEZAS</Typography>

            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #26a7ec', backgroundColor: '#CFE5F1',

              display: 'flex', flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>

              {

                fortalezasActual.map((tag, index) => (
                  <Box sx={{ backgroundColor: '#80c8ee', padding: '3px 5px ', borderRadius: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px', flexWrap: 'nowrap' }} key={index}>
                    <Box sx={{ color: '#000000' }}  >{tag}</Box>

                    <Box sx={{
                      height: '20px',
                      width: '20px',

                      display: 'inline-block',
                      color: '#0092DD',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '.5em',
                      fontSize: '18px',
                      fontWeight: 'bolder',
                      cursor: 'pointer',
                    }} onClick={() => removeTagFortalezasActual(index)}>{edit && "x"}</Box>
                  </Box>
                ))}
              {edit && <input type="text" className='tag-input' placeholder="Escribir y pulsar Enter para confirmar..." onKeyDown={handleKeyDownActualFortalezas}></input>
              }

            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>OPORTUNIDADES</Typography>
            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #70AD47', backgroundColor: '#DFE9DA', display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                oportunidadesActual.map((tag, index) => (
                  <Box sx={{ backgroundColor: '#b7d6a3', padding: '3px 5px ', borderRadius: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px', flexWrap: 'nowrap' }} key={index}>
                    <Box sx={{ color: '#000000' }}  >{tag}</Box>
                    <Box sx={{
                      height: '20px',
                      width: '20px',
                      display: 'inline-block',
                      color: '#70AD47',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '.5em',
                      fontSize: '18px',
                      fontWeight: 'bolder',
                      cursor: 'pointer',
                    }} onClick={() => removeTagOportunidadesActual(index)}>{edit && "x"}</Box>
                  </Box>
                ))}
              {edit && <input type="text" className='tag-input' placeholder="Escribir y pulsar Enter para confirmar..." onKeyDown={handleKeyDownActualOportunidades}></input>}

            </Box>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>DEBILIDADES</Typography>
            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #F8C146', backgroundColor: '#F4ECDA', display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                debilidadesActual.map((tag, index) => (
                  <Box sx={{ backgroundColor: '#fbe0a2', padding: '3px 5px ', borderRadius: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px', flexWrap: 'nowrap' }} key={index}>
                    <Box sx={{ color: '#000000' }}  >{tag}</Box>
                    <Box sx={{
                      height: '20px',
                      width: '20px',
                      display: 'inline-block',
                      color: '#F8C146',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '.5em',
                      fontSize: '18px',
                      fontWeight: 'bolder',
                      cursor: 'pointer',
                    }} onClick={() => removeTagDebilidadesActual(index)}>{edit && "x"}</Box>
                  </Box>

                ))}
              {edit && <input type="text" className='tag-input' placeholder="Escribir y pulsar Enter para confirmar..." onKeyDown={handleKeyDownActualDebilidades}></input>}

            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>AMENAZAS</Typography>
            <Box sx={{
              height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #EA6D4F', backgroundColor: '#F2DEDA', display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflow: 'auto',
              gap: '0.5em',
            }}>
              {
                amenazasActual.map((tag, index) => (
                  <Box sx={{ backgroundColor: '#f4b6a7', padding: '3px 5px ', borderRadius: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px', flexWrap: 'nowrap' }} key={index}>
                    <Box sx={{ color: '#000000' }}  >{tag}</Box>
                    <Box sx={{
                      height: '20px',
                      width: '20px',
                      display: 'inline-block',
                      color: '#EA6D4F',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '.5em',
                      fontSize: '18px',
                      fontWeight: 'bolder',
                      cursor: 'pointer',
                    }} onClick={() => removeTagAmenazasActual(index)}>{edit && "x"}</Box>
                  </Box>
                ))}
              {edit && <input type="text" className='tag-input' placeholder="Escribir y pulsar Enter para confirmar..." onKeyDown={handleKeyDownActualAmenazas}></input>}

            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
          <button style={buttonStyle} onClick={handleSubmitActual}>GUARDAR</button>
          <button style={buttonStyle} onClick={handleCancelActual}>CANCELAR</button>
        </Box>
      </Box>
    </Box>
  )
}

export default FodaActual
