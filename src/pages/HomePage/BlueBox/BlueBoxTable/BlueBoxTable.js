import { useMemo } from "react";
import { useTable } from "react-table";
import './blueBoxTable.css';


function BlueBoxTable() {

    const data = [
        {
            team: "COMUNIDADES ACTIVAS",
            firstT: 1,
            secondT: 1,
            thirdT: 1,
            fourthT: 1,
        },
        {
            team: "MESAS DE TRABAJO",
            firstT: 2,
            secondT: 1,
            thirdT: 4,
            fourthT: 1,
        },
        {
            team: "VIVIENDAS DE EMERGENCIA",
            firstT: 45,
            secondT: 60,
            thirdT: 60,
            fourthT: 80,
        },
        {
            team: "ACTIVIDADES DE FORMACIÓN",
            firstT: 1,
            secondT: 1,
            thirdT: 4,
            fourthT: 1,
        },


    ]

    const columns = useMemo(
        () => [
            {
                Header: "",
                accessor: "team",
                Cell: ({ value }) => <strong>{value}</strong>
            },
            {
                Header: "1T",
                accessor: "firstT"
            },
            {
                Header: "2T",
                accessor: "secondT"
            },
            {
                Header: "3T",
                accessor: "thirdT"
            },
            {
                Header: "4T",
                accessor: "fourthT"
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
    } = tableInstance;

    return (
        <div >
            <table {...getTableProps()} className="blueBox-table" >
                <thead className="blueBox-thead" >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='blueBox-tr'>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="blueBox-th" >{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className='blueBox-tbody'>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} className="blueBox-td" >{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default BlueBoxTable
