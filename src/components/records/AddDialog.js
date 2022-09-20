import { TextField, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import { toSingular } from 'misc/utils'

const status = [
  { id: 1, label: 'Activo', value: true }, { id: 2, label: 'Inactivo', value: false }
]

const formats = [
  { id: 1, label: '$ - Dolar' },
  { id: 2, label: '% - Porcentaje' },
  { id: 3, label: '# - Numeral' },
  { id: 4, label: 'S/N - Binario' }
]

const temporalities = [
  { id: 1, label: 'Anual' },
  { id: 2, label: 'Semestral' },
  { id: 3, label: 'Trimestral' },
  { id: 4, label: 'Mensual' }
]

const types = [
  { id: 1, label: 'Acumulaado' },
  { id: 2, label: 'Mínimo' },
  { id: 3, label: 'Promedio' },
  { id: 4, label: 'Último' }
]

const pillars = [
  { id: 1, label: 'Desarrollo comunitario' },
  { id: 2, label: 'Desarrollo institucional' },
  { id: 3, label: 'Incidente en política' },
  { id: 4, label: 'Promoción de la concienca y acción social' },
  { id: 5, label: 'RMI Legal' }
]

const areas = [
  { id: 1, label: 'Procesos y tecnología' },
  { id: 2, label: 'Administración y finanzas' },
  { id: 3, label: 'Comunicaciones' },
  { id: 5, label: 'Construcción y logística' },
  { id: 6, label: 'Desarrollo de fondos' },
  { id: 7, label: 'Viviendo y hábitat' },
  { id: 8, label: 'Detección y asignación' },
  { id: 9, label: 'Dirección general' },
  { id: 10, label: 'Formación y voluntariado' },
  { id: 11, label: 'Legal' },
  { id: 12, label: 'Personas' },
  { id: 13, label: 'Gestión comunitaria' },
  { id: 14, label: 'Programas y proyectos' },
  { id: 15, label: 'Equipos' },
  { id: 16, label: 'Centro de investigación social' },
  { id: 17, label: 'Procesos comunitarios' }
]

const countries = [
  { id: 1, label: 'Argentina' },
  { id: 2, label: 'Bolivia' },
  { id: 3, label: 'Brasil' },
  { id: 5, label: 'Chile' },
  { id: 6, label: 'Colombia' },
  { id: 7, label: 'Costa rica' },
  { id: 8, label: 'Ecuador' },
  { id: 9, label: 'El Salvador' },
  { id: 10, label: 'Estados Unidos' },
  { id: 11, label: 'Europa' },
  { id: 12, label: 'Guatemala' },
  { id: 13, label: 'Haití' },
  { id: 14, label: 'Honduras' },
  { id: 15, label: 'México' },
  { id: 16, label: 'Nicaragua' },
  { id: 17, label: 'Oficina internacional' },
  { id: 18, label: 'Panamá' },
  { id: 19, label: 'Paraguay' },
  { id: 20, label: 'Perú' },
  { id: 21, label: 'RD + Haití' },
  { id: 22, label: 'Repúlica Dominicana' },
  { id: 23, label: 'Uruguay' },
  { id: 24, label: 'Venezuela' }
]

const IndicatorDialogContent = ({ title, status }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoFocus
            margin='normal'
            label={toSingular(title)}
            type='text'
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // autoFocus
            margin='normal'
            label='Descripción'
            type='text'
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            defaultValue=''
            margin='normal'
            label='Seleccioná el estado'
            variant='standard'
            fullWidth
          >
            {formats.map((format) => (
              <MenuItem key={format.id} value={format.id}>
                {format.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            defaultValue=''
            margin='normal'
            label='Seleccioná la temporalidad'
            variant='standard'
            fullWidth
          >
            {temporalities.map((temporality) => (
              <MenuItem key={temporality.id} value={temporality.id}>
                {temporality.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            defaultValue=''
            margin='normal'
            label='Seleccioná el tipo'
            variant='standard'
            fullWidth
          >
            {types.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            defaultValue=''
            margin='normal'
            label='Seleccioná el pilar'
            variant='standard'
            fullWidth
          >
            {pillars.map((pillar) => (
              <MenuItem key={pillar.id} value={pillar.id}>
                {pillar.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            defaultValue=''
            margin='normal'
            label='Seleccioná el área'
            variant='standard'
            fullWidth
          >
            {areas.map((area) => (
              <MenuItem key={area.id} value={area.id}>
                {area.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            defaultValue=''
            margin='normal'
            label='Seleccioná el país'
            variant='standard'
            fullWidth
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  )
}
const GeneralDialogContent = ({ title, status }) => {
  return (
    <>
      <TextField
        autoFocus
        margin='normal'
        label={toSingular(title)}
        type='text'
        variant='standard'
        fullWidth
      />
      <TextField
        select
        defaultValue=''
        margin='normal'
        label='Seleccioná el estado'
        variant='standard'
        fullWidth
      >
        {status.map((status) => (
          <MenuItem key={status.id} value={status.value}>
            {status.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  )
}

export default function AddDialog ({ isOpenModal, handleCloseModal, title }) {
  return (
    <Dialog
      fullWidth
      maxWidth={title.toLowerCase() === 'indicadores' ? 'md' : 'sm'}
      open={isOpenModal}
      onClose={handleCloseModal}
    >
      <DialogTitle>Agregar {toSingular(title).toLowerCase()}</DialogTitle>
      <DialogContent>
        {title.toLowerCase() !== 'indicadores' && <GeneralDialogContent title={title} status={status} />}
        {title.toLowerCase() === 'indicadores' && <IndicatorDialogContent title={title} status={status} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant='outlined'>Cancelar</Button>
        <Button onClick={handleCloseModal} variant='contained' disableElevation>Guardar</Button>
      </DialogActions>
    </Dialog>
  )
}
