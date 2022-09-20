import { Box, Container } from '@mui/material'
import Footer from 'layout/Footer/Footer'
import Header from 'layout/Header/Header'
import useUser from 'hooks/useUser'
import Login from 'pages/Login/Login'

export default function Layout({ children }) {
  const { isLogged } = useUser()
  return (
    isLogged ?
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        {/* Agregar la siguiente prop para centrar verticalmente el contenido
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, py: 5 }} */}
        <Container maxWidth={"xl"} sx={{ py: 5,}}>
          {children}
        </Container>
        <Footer />
      </Box>
      :
      <Login />
  )
}
