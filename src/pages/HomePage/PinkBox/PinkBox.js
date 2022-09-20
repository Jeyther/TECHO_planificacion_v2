import { useMemo } from "react";
import { Column, useTable } from "react-table";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './pinkBox.css';


function PinkBox() {

    const data = [
        {
            planesOperativos: "Programas",
            objetivos: 3,
            resultadosClave: 1,
        },
        {
            planesOperativos: "Personas",
            objetivos: 2,
            resultadosClave: 1,
        },
        {
            planesOperativos: "Gestión Comuna",
            objetivos: 1,
            resultadosClave: 1,
        },

    ]

    const columns = useMemo(
        () => [
            {
                Header: "PLANES OPERATIVOS",
                accessor: "planesOperativos",
                Cell: ({ value }) => <strong>{value}</strong>
            },
            {
                Header: "OBJETIVOS",
                accessor: "objetivos"
            },
            {
                Header: "RESULTADOS CLAVE",
                accessor: "resultadosClave"
            }
        ],
        []
    );

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        footerGroups
    } = tableInstance;


    return (
        <Box sx={{
            backgroundColor: '#f2deda',
            borderRadius: '10px',
            padding: '1rem',
            width: '100%',
            height: '280px',
            margin: '2px',
        }}>
            <Typography variant='h2' sx={{
                color: '#ea6d4f',
                paddingTop: '0',
                marginBottom: '3rem',
                fontSize: '20px',
            }}>
                PLANES OPERATIVOS
            </Typography>

            <table {...getTableProps()} className="pinkBox-table" >
                <thead className="pinkBox-thead" >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='pinkBox-tr'>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="pinkBox-th" >{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className='pinkBox-tbody'>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} className="pinkBox-td" >{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Box>
    );
}

export default PinkBox
