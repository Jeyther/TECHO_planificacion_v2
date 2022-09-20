import CustomDataGrid from 'components/records/CustomDataGrid'
import indicators from './../../data/indicators.json'

const columns = indicators.columns.filter(col => col.headerName !== "Estado" && col.headerName !== "Última actualización");

const rows = indicators.rows;

export default function Indicators () {
  return <CustomDataGrid title='Indicadores' columns={columns} rows={rows} isLoading={false} />
}
