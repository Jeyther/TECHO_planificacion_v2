import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import {
  Box,
  Link,
  Button,
  Avatar,
  Stack,
  Popover,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { GoogleLogout } from 'react-google-login'
import useUser from 'hooks/useUser'

const CLIENT_ID = '62146245264-9e4e46ckj012g1jfscn1kf03r7qkkdqs.apps.googleusercontent.com'

const useStyles = makeStyles(theme => ({
  list: {
    padding: theme.spacing(2)
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

export default function UserMenu () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const { profile, logout } = useUser()

  const onLogoutSuccess = () => {
    logout()
  }

  const handleClick = (event, sublinks) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const onHandleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box display='flex' justifyCenter='center' alignItems='center'>
      <Stack direction='row' alignItems='center'>
        <Button
          startIcon={<Avatar
            alt={profile.name}
            src={profile.imageUrl}
            />}
          endIcon={<ArrowDropDownIcon />}
          sx={{ m: 2, color: 'white',fontSize: '20px', textTransform: 'none' }}
          onClick={handleClick}
        >
          {/* {profile.givenName} */}
        </Button>
        <Popover
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={onHandleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          elevation={3}
          onClick={onHandleClose}
        >
          <Grid container>
            <Grid item>
              <List className={classes.list} dense>
                <GoogleLogout
                  clientId={CLIENT_ID}
                  render={renderProps => (
                    <Link
                      onClick={() => renderProps.onClick()}
                      className={classes.link}
                      sx={{ cursor: 'pointer' }}
                    >
                      <ListItem>
                        <ListItemIcon>
                          <LogoutIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='Cerrar sesión' />
                      </ListItem>
                    </Link>

                  )}
                  onLogoutSuccess={onLogoutSuccess}
                />
              </List>
            </Grid>
          </Grid>
        </Popover>

      </Stack>
    </Box>
  )
}
