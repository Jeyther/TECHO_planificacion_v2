import { TextField, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Tabs, Tab, Box, Divider, Typography} from '@mui/material'
import { toSingular } from 'misc/utils'
import CustomTable from './CustomTable'
import indicators from './../../data/indicators.json'
import deadlines from './../../data/deadlines.json'
import headquarters from './../../data/headquarters.json'
import { useState } from 'react';
import CustomSimpleTable from './CustomSimpleTable'

const indicatorsColumns = indicators.columns.filter(col => col.headerName !== "Estado" && col.headerName !== "Última actualización");
const indicatorsRows = indicators.rows;

const deadlinesColumns = deadlines.columns;
const deadlinesRows = deadlines.rows;

const headquartersColumns = headquarters.columns;
const headquartersRows = headquarters.rows;

const status = [
    { id: 1, label: 'Activo', value: true }, { id: 2, label: 'Inactivo', value: false }
]

const years = [
    { id: 1, label: 2019 },
    { id: 2, label: 2020 },
    { id: 3, label: 2021 },
    { id: 4, label: 2022 }
]

const IndicatorsDialogContent = ({ isLoading }) => {
    return (
        <Box sx={{ height: 820, width: '100%' }}>
            <CustomTable isLoading={isLoading} rows={indicatorsRows} headers={indicatorsColumns} pageSize={10} hasCheckbox={true} isDisableSelectionOnClick={false} />
        </Box>
    )
}

const DeadlinesDialogContent = () => {

    return (

        <Box sx={{ height: 950, width: '100%' }}>
            <CustomSimpleTable rows={deadlinesRows} headers={deadlinesColumns} pageSize={10} hasCheckbox={false} isDisableSelectionOnClick={true} />
        </Box>

    )

}

const HeadquarterDialogContent = () => {

    return (

        <Box sx={{ height: 1100, width: '100%' }}>
            <CustomTable rows={headquartersRows} headers={headquartersColumns} pageSize={15} hasCheckbox={true} isDisableSelectionOnClick={false} />
        </Box>

    )

}

const GeneralDialogContent = ({ title, status }) => {
    return (
        <Grid container spacing={6} mb={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    defaultValue=''
                    margin='normal'
                    label='Seleccioná el año'
                    variant='standard'
                    fullWidth
                >
                    {years.map((year) => (
                        <MenuItem key={year.id} value={year.label}>
                            {year.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    select
                    defaultValue=''
                    margin='normal'
                    label='Seleccioná el estado'
                    variant='standard'
                    fullWidth
                >
                    {status.map((status) => (
                        <MenuItem key={status.id} value={status.value}>
                            {status.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <DialogContent >
                    {children}
                </DialogContent>
            )}
        </div>
    );
}


export default function AddPlanningDialog({ isOpenModal, handleCloseModal, title }) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Dialog
                fullWidth
                maxWidth='xl'
                open={isOpenModal}
                onClose={handleCloseModal}
                scroll={'body'}
            >

                <Box sx={{ px: 4, py: 2 }}>

                    <DialogTitle>Agregar {toSingular(title).toLowerCase()}</DialogTitle>

                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                        <Tab label="Indices" value={0} disableRipple />
                        <Tab label="Plazos" value={1} disableRipple />
                        <Tab label="Sedes" value={2} disableRipple />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        <GeneralDialogContent title={title} status={status} sx={{ marginButtom: 10 }} />
                        <Divider variant="middle" sx={{ my: 4 }} />
                        <Typography variant="h5" sx={{ my: 2 }}>
                            Seleccione los Indicadores para el año
                        </Typography>
                        <IndicatorsDialogContent isLoading={false} />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <Typography variant="h5" sx={{ my: 2 }}>
                            Seleccione los Plazos
                        </Typography>
                        <DeadlinesDialogContent isLoading={false} />
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <Typography variant="h5" sx={{ my: 2 }}>
                            Seleccione las Sedes
                        </Typography>
                        <HeadquarterDialogContent isLoading={false} />
                    </TabPanel>

                    <DialogActions>
                        <Button onClick={handleCloseModal} variant='outlined'>Cancelar</Button>
                        <Button onClick={handleCloseModal} variant='contained' disableElevation>Guardar</Button>
                    </DialogActions>

                </Box>

            </Dialog>
        </>
    )
}
