import { Typography, Button, Box, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Error404 from 'assets/images/error404.svg'

export default function NoMatchRoute () {
  return (
    <>
      <Stack justifyContent='center' alignItems='center'>
        <Typography variant='h1' color='primary' sx={{ textTransform: 'uppercase' }}>
          Página no encontrada
        </Typography>
        <Typography variant='h2' color='initial' sx={{ textTransform: 'uppercase', mt: 2 }}>
          Es posible que la página haya sido eliminada o que la dirección no exista.
        </Typography>
        <Box
          component='img'
          sx={{
            height: 333,
            width: 450,
            mt: 8
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 }
          }}
          alt='Error 404'
          src={Error404}
        />
      </Stack>
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button component={RouterLink} to='/' variant='contained' disableElevation>Volver al inicio</Button>
      </Box>
    </>
  )
}
