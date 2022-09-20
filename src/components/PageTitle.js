import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

const PageTitle = ({ title, buttonTitle, handleOpenModal }) => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={4} mb={4}>
            <Typography variant='h1' sx={{ textTransform: 'uppercase' }}>{title}</Typography>
            <Button
                variant='contained'
                startIcon={<AddIcon />}
                onClick={handleOpenModal}
                disableElevation
            >
                {buttonTitle}
            </Button>
        </Stack>
    );
}

export default PageTitle;