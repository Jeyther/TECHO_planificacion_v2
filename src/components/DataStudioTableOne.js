import { useMemo } from "react";
import { Column, useTable } from "react-table";
import Box from '@mui/material/Box';
import './dataStudioTableOne.css';

function DataStudioTableOne() {

    const data = [
        {
            number: "1.",
            kpi: "Número de tipologías de viviendas definidas como oportunidades de implementación",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "2.",
            kpi: "Número de kits complementarios diseñados para mejoras habitacionales",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "3.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "4.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "5.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "6.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "7.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "8.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "9.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
        {
            number: "10.",
            kpi: "Número de kits complementarios de mejoras habitacionales ejecutados",
            plan1s: 0,
            real1s: 0,
            cumplimiento1s: 0,
        },
    ]

    const columns = useMemo(
        () => [
            {
                Header: "",
                accessor: "number",
                Cell: ({ value }) => <strong>{value}</strong>
            },
            {
                Header: "KPI",
                accessor: "kpi"
            },
            {
                Header: "PLAN 1 S",
                accessor: "plan1s"
            },
            {
                Header: "REAL 1 S",
                accessor: "real1s"
            },
            {
                Header: "CUMPLIMIENTO 1 S",
                accessor: "cumplimiento1s"
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
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '1rem',
            width: '100%',
            height: '300px',
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

export default DataStudioTableOne
