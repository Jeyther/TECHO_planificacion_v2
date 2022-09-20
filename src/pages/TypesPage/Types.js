import CustomDataGrid from 'components/records/CustomDataGrid'

const columns = [
  { id: 1, field: 'types', headerName: 'Tipo', flex: 1 },
  { id: 2, field: 'status', type: 'boolean', headerName: 'Estado', flex: 1 }
]

const rows = [
  { id: 1, types: 'Acumulado', status: true },
  { id: 2, types: 'Mínimo', status: true },
  { id: 3, types: 'Promedio', status: true },
  { id: 4, types: 'Último', status: true }
]

export default function Types () {
  return <CustomDataGrid title='Tipos' columns={columns} rows={rows} isLoading={false} />
}
