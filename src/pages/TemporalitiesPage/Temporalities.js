import CustomDataGrid from 'components/records/CustomDataGrid'

const columns = [
  { id: 1, field: 'temporality', headerName: 'Temporalidad', flex: 1 },
  { id: 2, field: 'status', type: 'boolean', headerName: 'Estado', flex: 1 }
]

const rows = [
  { id: 1, temporality: 'Anual', status: true },
  { id: 2, temporality: 'Mensual', status: true },
  { id: 3, temporality: 'Semestral', status: true },
  { id: 4, temporality: 'Trimestal', status: true }
]

export default function Temporalities () {
  return <CustomDataGrid title='Temporalidades' columns={columns} rows={rows} isLoading={false} />
}
