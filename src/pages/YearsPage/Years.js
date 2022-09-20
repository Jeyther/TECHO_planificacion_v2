import CustomDataGrid from 'components/records/CustomDataGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';


const columns = [
  { id: 1, field: 'ano', headerName: 'Año', flex: 1 },
  { id: 2, field: 'situation', type: 'boolean', headerName: 'Estado', flex: 1 },
];

export default function Years() {
  const [data, setData] = useState([]);
  const url = 'http://localhost:8000/api/ano';

  const getData = async () => {
    await axios.get(url).then((res) => {
      res.data.situation = res.data.situation === 1 ? true : false;
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CustomDataGrid
      title="Años"
      columns={columns}
      rows={data}
      isLoading={false}
    />
  );
}
