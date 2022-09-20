import React from 'react';
import { useRef, useState } from 'react';
import { Box } from '@mui/material';

function CrearFoda() {
    const [form, setForm] = useState([]);

    const anioRef = useRef();
    const fortalezasRef = useRef();
    const oportunidadesRef = useRef();
    const debilidadesRef = useRef();
    const amenazasRef = useRef();
    const formRef = useRef();

    const handleChange = (e) => {
        console.log(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm([
            ...form,
            {
                Año: anioRef.current.value,
                fortalezas: fortalezasRef.current.value,
                Oportunidades: oportunidadesRef.current.value,
                Debilidades: debilidadesRef.current.value,
                Amenazas: amenazasRef.current.value,
            }
        ]);
        //   formRef.reset();
        console.log(form[0].fortalezas)
        alert("El formulario se ha enviado");
    };

    return (
        <Box>

            <form onSubmit={handleSubmit} ref={formRef}>
                <select name="anio" required className='select' onChange={handleChange} value={form.anio} ref={anioRef}>
                    <option disabled>SELECCIONAR</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <textarea placeholder='ESCRIBIR...' required className='textarea blue' rows='8' cols='115' wrap='hard' onChange={handleChange} name="fortalezas" ref={fortalezasRef}></textarea>
                        <textarea placeholder='ESCRIBIR...' required className='textarea green' rows='8' cols='115' wrap='hard' name="oportunidades" onChange={handleChange} ref={oportunidadesRef}></textarea>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <textarea placeholder='ESCRIBIR...' required className='textarea yellow' rows='8' cols='115' wrap='hard' name='debilidades' onChange={handleChange} ref={debilidadesRef}></textarea>
                        <textarea placeholder='ESCRIBIR...' required className='textarea orange' rows='8' cols='115' wrap='hard' name='amenazas' onChange={handleChange} ref={amenazasRef}></textarea>
                    </Box>
                    <input type='submit' className='input-button' value='GUARDAR'></input>
                </Box>

            </form>

        </Box>
    )
}

export default CrearFoda