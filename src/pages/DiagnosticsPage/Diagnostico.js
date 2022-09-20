import React from 'react';
import { useRef, useState, useContext } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { display } from '@mui/system';
import { NavLink } from 'react-router-dom';
import FodaContext from '../../context/FodaContext';
import './diagnostico.css';

const Diagnostico = () => {
  const [tagsFortalezas, setTagsFortalezas] = useState([]);
  const [tagsOportunidades, setTagsOportunidades] = useState([]);
  const [tagsDebilidades, setTagsDebilidades] = useState([]);
  const [tagsAmenazas, setTagsAmenazas] = useState([]);

  const { handleChange, takeFodaToContext, form, setForm, setPrueba } =
    useContext(FodaContext);

  const anioRef = useRef();
  const oportunidadesRef = useRef();
  const debilidadesRef = useRef();
  const amenazasRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const anioBuscado = form.find((el) => el.anio == anioRef.current.value);
    if (anioBuscado == undefined) {
      setForm([
        ...form,
        {
          anio: [anioRef.current.value],
          fortalezas: [...tagsFortalezas],
          oportunidades: [...tagsOportunidades],
          debilidades: [...tagsDebilidades],
          amenazas: [...tagsAmenazas],
        },
      ]);

      alert('El formulario se ha enviado');
      takeFodaToContext();
      e.target.value = '';
      let formulario = document.getElementById('formulario');

      setTagsFortalezas([]);
      setTagsOportunidades([]);
      setTagsDebilidades([]);
      setTagsAmenazas([]);
    } else {
      alert(`El año ${anioBuscado.anio} ya se encuentra creado`);
    }
  };

  const styleLinks = ({ isActive }) =>
    isActive
      ? {
          color: '#ffffff',
          background: '#ea6d4f',
        }
      : {
          color: '#ea6d4f',
        };

  function handleKeyDownFortalezas(e) {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTagsFortalezas([...tagsFortalezas, value]);
    e.target.value = '';
  }

  function handleKeyDownOportunidades(e) {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTagsOportunidades([...tagsOportunidades, value]);
    e.target.value = '';
  }

  function handleKeyDownDebilidades(e) {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTagsDebilidades([...tagsDebilidades, value]);
    e.target.value = '';
  }

  function handleKeyDownAmenazas(e) {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTagsAmenazas([...tagsAmenazas, value]);
    e.target.value = '';
  }

  function removeTagFortalezas(index) {
    setTagsFortalezas(tagsFortalezas.filter((el, i) => i !== index));
  }

  function removeTagOportunidades(index) {
    setTagsOportunidades(tagsOportunidades.filter((el, i) => i !== index));
  }

  function removeTagDebilidades(index) {
    setTagsDebilidades(tagsDebilidades.filter((el, i) => i !== index));
  }

  function removeTagAmenazas(index) {
    setTagsAmenazas(tagsAmenazas.filter((el, i) => i !== index));
  }

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ color: '#27759e', fontSize: '35px', textAlign: 'center' }}
      >
        DIAGNÓSTICO
      </Typography>
      <nav className="diagnostico-nav">
        <NavLink
          to="/diagnostico/fodaActual"
          style={styleLinks}
          className="navlinks"
        >
          F.O.D.A ACTUAL
        </NavLink>
        <NavLink to="/diagnostico" style={styleLinks} className="navlinks">
          CREAR F.O.D.A.
        </NavLink>
        <NavLink
          to="/diagnostico/verFodaAnterior"
          style={styleLinks}
          className="navlinks"
        >
          VER AÑOS ANTERIORES
        </NavLink>
        <NavLink
          to="/diagnostico/dataStudio"
          style={styleLinks}
          className="navlinks"
        >
          VER DATA STUDIO
        </NavLink>
      </nav>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        AÑO
      </Typography>

      <form onSubmit={handleSubmit} ref={formRef} id="formulario">
        <select
          name="anio"
          required
          className="select"
          onChange={handleChange}
          ref={anioRef}
        >
          <option disabled default>
            SELECCIONAR
          </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                margin: '20px 10px 20px 10px',
                width: '100%',
                height: '125px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                overflow: 'auto',
                gap: '0.5em',
                border: '2px solid #80c8ee',
                backgroundColor: '#ffffff',
              }}
              onChange={handleChange}
              name="fortalezas"
            >
              {tagsFortalezas.map((tag, index) => (
                <Box
                  sx={{
                    backgroundColor: '#CFE5F1',
                    padding: '3px 5px ',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '5px',
                  }}
                  key={index}
                >
                  <span className="text">{tag}</span>
                  <span
                    className="close darkBlue"
                    onClick={() => removeTagFortalezas(index)}
                  >
                    &times;
                  </span>
                </Box>
              ))}
              <input
                type="text"
                className="tag-input"
                onKeyDown={handleKeyDownFortalezas}
                placeholder="Escribir y pulsar Enter para confirmar..."
              ></input>
            </Box>

            <Box
              sx={{
                margin: '20px 10px 20px 10px',
                width: '100%',
                height: '125px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                overflow: 'auto',
                gap: '0.5em',
                border: '2px solid #b7d6a3',
                backgroundColor: '#ffffff',
              }}
              onChange={handleChange}
              name="fortalezas"
            >
              {tagsOportunidades.map((tag, index) => (
                <Box
                  sx={{
                    backgroundColor: '#DFE9DA',
                    padding: '3px 5px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '5px',
                  }}
                  key={index}
                >
                  <span className="text">{tag}</span>
                  <span
                    className="close darkGreen"
                    onClick={() => removeTagOportunidades(index)}
                  >
                    &times;
                  </span>
                </Box>
              ))}
              <input
                type="text"
                className="tag-input"
                onKeyDown={handleKeyDownOportunidades}
                placeholder="Escribir y pulsar Enter para confirmar..."
              ></input>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                margin: '20px 10px 20px 10px',
                width: '100%',
                height: '125px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                overflow: 'auto',
                gap: '0.5em',
                border: '2px solid #fbe0a2',
                backgroundColor: '#ffffff',
              }}
              onChange={handleChange}
              name="fortalezas"
            >
              {tagsDebilidades.map((tag, index) => (
                <Box
                  sx={{
                    backgroundColor: '#F4ECDA',
                    padding: '3px 5px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '5px',
                  }}
                  key={index}
                >
                  <span className="text">{tag}</span>
                  <span
                    className="close darkYellow"
                    onClick={() => removeTagDebilidades(index)}
                  >
                    &times;
                  </span>
                </Box>
              ))}
              <input
                type="text"
                className="tag-input"
                onKeyDown={handleKeyDownDebilidades}
                placeholder="Escribir y pulsar Enter para confirmar..."
              ></input>
            </Box>

            <Box
              sx={{
                margin: '20px 10px 20px 10px',
                width: '100%',
                height: '125px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                overflow: 'auto',
                gap: '0.5em',
                border: '2px solid #f4b6a7',
                backgroundColor: '#ffffff',
              }}
              onChange={handleChange}
              name="fortalezas"
            >
              {tagsAmenazas.map((tag, index) => (
                <Box
                  sx={{
                    backgroundColor: '#F2DEDA',
                    padding: '3px 5px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '5px',
                  }}
                  key={index}
                >
                  <span className="text">{tag}</span>
                  <span
                    className="close darkOrange"
                    onClick={() => removeTagAmenazas(index)}
                  >
                    &times;
                  </span>
                </Box>
              ))}
              <input
                type="text"
                className="tag-input"
                onKeyDown={handleKeyDownAmenazas}
                placeholder="Escribir y pulsar Enter para confirmar..."
              ></input>
            </Box>
          </Box>
          <input
            type="button"
            className="input-button"
            value="GUARDAR"
            onClick={handleSubmit}
          ></input>
        </Box>
      </form>
    </Box>
  );
};
export default Diagnostico;
