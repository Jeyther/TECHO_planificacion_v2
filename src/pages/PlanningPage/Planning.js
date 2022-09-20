import CustomDataGrid from 'components/records/CustomDataGrid'
import plans from './../../data/plans.json'

const columns = plans.columns;

const rows = plans.rows;

export default function Years () {
  return <CustomDataGrid title='Planificación' columns={columns} rows={rows} isLoading={false} />
}
