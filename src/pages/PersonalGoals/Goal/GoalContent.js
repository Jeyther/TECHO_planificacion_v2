import React from 'react';
import { Stack, Typography } from '@mui/material';
import SmallTable from './SmallTable';

const tableContent = {
  evaluacion: {
    s1: 1,
    s2: 2,
    año: 1.5,
  },
  aprobacion: {
    jefe: 'si',
    personas: 'si',
  },
};

const GoalContent = () => {
  return (
    <Stack direction="row" spacing={3} mb={5}>
      <Stack direction="column" width={'100%'} spacing={2}>
        <Typography variant="subtitle2" color="secondary">
          PONDERACIÓN: 30%
        </Typography>

        <Typography variant="h2" sx={{ fontWeight: 500 }}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dapibus ultricies est. Phasellus ut sem at justo semper dapibus.
          Aenean vitae nisi malesuada, eleifend mauris non, tempus mi. “
        </Typography>
      </Stack>
      <SmallTable tableContent={tableContent}/>
    </Stack>
  );
};

export default GoalContent;
