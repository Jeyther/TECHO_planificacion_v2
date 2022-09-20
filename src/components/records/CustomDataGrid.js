import { useState } from 'react'
import {
  Tooltip,
  Container
  // CircularProgress
} from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddDialog from 'components/records/AddDialog'
import DialogDetails from 'components/records/DialogDetails'
import { FileCopy } from '@mui/icons-material'
import CustomTable from './CustomTable'
import AddPlanningDialog from './AddPlanningDialog'
import PageTitle from 'components/PageTitle'

// function CircularLoadingOverlay () {
//   return (
//     <GridOverlay sx={{ backgroundColor: '#fafafa' }}>
//       <CircularProgress />
//     </GridOverlay>
//   )
// }

const actions = (title) => {

  return {

    id: 3,
    field: 'actions',
    type: 'actions',
    headerName: 'Acciones',
    flex: 1,
    minWidth: title.toLowerCase().includes('planificación') ? 120 : 100,
    getActions: () => [
      <GridActionsCellItem
        key={1}
        icon={<Tooltip title="Editar"><EditIcon sx={{ color: '#fff' }} /></Tooltip>}
        label='Editar'
        onClick={() => window.alert('Iría a EDITAR un elemento.')}
        sx={{ backgroundColor: '#0092DD', '&:hover': { backgroundColor: 'orange' } }}
      />,
      ...(title.toLowerCase().includes('planificación') ?
        [<GridActionsCellItem
          key={3}
          icon={<Tooltip title="Duplicar"><FileCopy sx={{ color: '#fff' }} /></Tooltip>}
          label='Duplicar'
          onClick={() => window.alert('Iría a DUPLICAR un elemento.')}
          sx={{ backgroundColor: '#0092DD', '&:hover': { backgroundColor: 'orange' } }}
        />]
        : []),
      <GridActionsCellItem
        key={2}
        icon={<Tooltip title="Eliminar"><DeleteIcon sx={{ color: '#fff' }} /></Tooltip>}
        label='Eliminar'
        onClick={() => window.alert('Iría a ELIMINAR un elemento.')}
        sx={{ backgroundColor: '#0092DD', '&:hover': { backgroundColor: 'orange' } }}
      />
    ]

  }

}

export default function CustomDataGrid({ title, rows, columns, isLoading }) {
  const headers = [...columns, actions(title)]
  const [isOpenModal, setOpenModal] = useState(false)
  const [isOpenModalDetails, setOpenModalDetails] = useState(false)
  const [indicatorDetails, setIndicatorDetails] = useState({})

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleOpenModalDetails = (indicator) => {
    setIndicatorDetails(indicator)
    setOpenModalDetails(true)
  }
  const handleCloseModalDetails = () => {
    setIndicatorDetails({})
    setOpenModalDetails(false)
  }

  return (
    <>
      <DialogDetails isOpenModalDetails={isOpenModalDetails} handleCloseModalDetails={handleCloseModalDetails} indicatorDetails={indicatorDetails} columns={columns} />

      {title.toLowerCase().includes('planificación') ?
        <AddPlanningDialog isOpenModal={isOpenModal} handleOpenModalDetails={handleOpenModalDetails} handleCloseModal={handleCloseModal} title={title} />
        : <AddDialog isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} title={title} />}

      <PageTitle title={title} buttonTitle={"Agregar"} handleOpenModal={handleOpenModal} />

      <Container maxWidth={false} sx={{ height: 640, }}>

        <CustomTable handleOpenModalDetails={handleOpenModalDetails} isLoading={isLoading} rows={rows} headers={headers} pageSize={5} hasCheckbox={false} isDisableSelectionOnClick={true} />

      </Container>
    </>
  )
}
