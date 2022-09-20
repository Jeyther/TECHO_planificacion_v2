import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material'

export default function DialogDetails ({ isOpenModalDetails, handleCloseModalDetails, columns, indicatorDetails }) {
  const formatDetail = (field) => {
    if (field === true) {
      return 'Activo'
    } else if (field === false) {
      return 'Inactivo'
    } else {
      return field
    }
  }

  return (
    <Dialog
      fullWidth
      maxWidth='md'
      open={isOpenModalDetails}
      onClose={handleCloseModalDetails}
    >
      <DialogTitle>Detalles</DialogTitle>
      <DialogContent>
        <List>
          {columns.map(column => (
            <ListItem key={column.id}>
              <ListItemText
                primary={column.headerName}
                secondary={formatDetail(indicatorDetails[column.field])}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModalDetails} variant='contained' disableElevation>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}
