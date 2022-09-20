import { useMemo } from "react";
import { Column, useTable } from "react-table";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './dataStudioTableOne.css';

function DataStudioTableThree() {

    const id = "al backend darle a cada uno un id"

    const data = [
        {
            check: "Desarrollo comunitario",
        },
        {
            check: "Desarrollo institucional",
        },
        {
            check: "Incidencia en política",
        },
        {
            check: "Promoción de la conciencia y acción social",
        },
        {
            check: "RMI legal",
        },
    ]

    const columns = useMemo(
        () => [
            {
                Header: "",
                accessor: "check",
            },
            {
                Header: "PILAR (1)",
                accessor: ""
            },
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
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '1rem',
            width: '100%',
            margin: '2px',
        }}>

            <table {...getTableProps()} className="dataBox-table" >
                <thead className="dataBox-thead" >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='dataBox-tr'>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="dataBox-th" >{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className='dataBox-tbody'>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                <input type="checkbox" id={id} value="id"></input>
                                {row.cells.map((cell) => {
                                    return (

                                        <td {...cell.getCellProps()} className="dataBox-td" >{cell.render("Cell")}</td>
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

export default DataStudioTableThree