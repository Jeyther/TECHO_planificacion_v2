import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { Container, Stack, Button, Typography, Box } from '@mui/material'
import leftImageLogin from 'assets/images/leftImage_login.png'
import TechLogo from 'assets/images/rgb_logo.png'
import GoogleIcon from '@mui/icons-material/Google'
import useUser from 'hooks/useUser'

const CLIENT_ID = '62146245264-9e4e46ckj012g1jfscn1kf03r7qkkdqs.apps.googleusercontent.com'

export default function Login () {
  const { isLogged, login } = useUser()
  const history = useHistory()

  useEffect(() => {
    if (isLogged) history.push('/home')
  }, [isLogged, history])

  const onLoginSuccess = (res) => {
    login(res.profileObj)
  }

  const onLoginFailure = (res) => {
    console.error('Login failed:', res)
  }

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: 'flex' }}
    >
      <Box
        component='img'
        src={leftImageLogin}
        sx={{ minHeight: '100vh', maxWidth: '50%', objectFit: 'cover' }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <Stack spacing={4} justifyContent='center' alignItems='center' flexGrow='1'>
          <Box
            component='img'
            src={TechLogo}
            sx={{
              width: 435,
              height: 'auto'
            }}
            alt='TECHO LOGO'
          />

          <Typography
            variant='subtitle2'
            sx={{
              textAlign: 'center',
              textTransform: 'uppercase'
            }}
          >
            Iniciá sesión para acceder al<br />sistema de planificación anual
          </Typography>

          <GoogleLogin
            clientId={CLIENT_ID}
            render={renderProps => (
              <Button
                onClick={() => renderProps.onClick()}
                disabled={renderProps.disabled}
                startIcon={<GoogleIcon />}
                variant='contained'
                disableElevation
              >
                Ingresar con el correo de google
              </Button>
            )}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy='single_host_origin'
          />
        </Stack>
        <Typography
          color='primary'
          variant='overline'
          sx={{
            textTransform: 'uppercase',
            mb: 2,
            fontWeight: 500
          }}
        >
          Copyright Techo © 2018-2021
        </Typography>
      </Box>
    </Container>
  )
}
