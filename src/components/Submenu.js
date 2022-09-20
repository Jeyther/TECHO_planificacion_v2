import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import {
  Grid,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material'

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

export default function Submenu ({ isMenuOpen, anchorEl, onHandleClose, sublinks, handleButtonClick }) {
  const classes = useStyles()
  return (
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
            {sublinks?.map(sublink => (
              <Link
                to={sublink.to}
                className={classes.link}
                key={sublink.name}
                onClick={() => handleButtonClick(-1)}
              >
                <ListItem>
                  <ListItemIcon>
                    {sublink.icon}
                  </ListItemIcon>
                  <ListItemText primary={sublink.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
      </Grid>
    </Popover>
  )
}
