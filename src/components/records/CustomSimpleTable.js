import { MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const CustomSimpleTable = ({ rows, headers, pageSize, hasCheckbox, isDisableSelectionOnClick }) => {

    return (

        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead sx={{ backgroundColor: '#0092DD' }}>
                    <TableRow>
                        {headers.map((header, index) => {
                            return (
                                <TableCell
                                    sx={{ color: '#f0f0f0' }}
                                    key={index}
                                >
                                    {header.headerName}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell componenet="th" scope="row" sx={{ fontSize: '1rem' }} >{row.month}</TableCell>
                            <TableCell componenet="th" scope="row" >
                                <Select
                                    id="demo-simple-select"
                                    value={1}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    fullWidth
                                    size="small"
                                >
                                    {row.plan && row.plan.map((plan, index) => (
                                        <MenuItem key={index} value={plan.value}>{plan.label}</MenuItem>
                                    ))}
                                </Select>
                            </TableCell>
                            <TableCell componenet="th" scope="row" >
                                <Select
                                    id="demo-simple-select"
                                    value={1}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    fullWidth
                                    size="small"
                                >
                                    {row.real && row.real.map((real, index) => (
                                        <MenuItem key={index} value={real.value}>{real.label}</MenuItem>
                                    ))}
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </TableContainer>

    );
}

export default CustomSimpleTable;