import React from 'react';
import { Avatar, Chip, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import useUser from 'hooks/useUser';

const ViewChips = () => {
    const { profile } = useUser();
    return (
        <Stack direction='row' alignItems='center' justifyContent='start' spacing={4} mb={4} >

            <Chip
                label='MIS OBJETIVOS'
                onClick={() => { }}
                color="secondary"
                icon={<Avatar
                    alt={profile.name}
                    src={profile.imageUrl}
                    sx={{ width: 28, height: 28 }}
                />}
                sx={{ fontWeight: "bold", fontSize:"16px", p:.5 }}
            />
            <Chip
                label='MI EQUIPO'
                variant='outlined'
                onClick={() => { }}
                color="secondary"
                icon={<GroupsIcon />}
                sx={{ fontWeight: "bold", fontSize:"16px", p:.5  }}
            />

        </Stack>
    );
}

export default ViewChips;