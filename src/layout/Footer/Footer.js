import { Link as RouterLink } from 'react-router-dom'
import { Box, Typography, Link, Divider } from '@mui/material'

const Copyright = () => {
  return (
    <Typography variant='body2' align='center' sx={{ textTransform: 'uppercase' }}>
      &copy; {new Date().getFullYear() + ' '}
      <Link component={RouterLink} to='/'>
        Techo
      </Link>
    </Typography>
  )
}

export default function Footer () {
  return (
    <Box sx={{ marginTop: 'auto' }}>
      <Divider />
      <Box sx={{ p: 4 }} component='footer'>
        <Copyright />
      </Box>
    </Box>
  )
}
