import styled from '@emotion/styled';
import { IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: 'bold',
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  width: '50px',
  height: '50px',
  '&:hover': {
    backgroundColor: 'rgb(0, 102, 154)',
  },
  transition: 'background-color 250ms',
}));

const GoalNameBar = ({title, handleEditGoal, handleDeleteGoal}) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      mb={4}
    >

      <Title variant="subtitle1" fontWeight={'bold'}>
        {title}
      </Title>

      <Stack direction="row" spacing={3}>
        <CustomIconButton onClick={handleEditGoal} size="large" sx={{ backgroundColor: 'blue' }}>
          <EditIcon sx={{ fontSize: '28px' }} />
        </CustomIconButton>
        <CustomIconButton onClick={handleDeleteGoal}>
          <DeleteIcon sx={{ fontSize: '28px' }} />
        </CustomIconButton>
      </Stack>

    </Stack>
  );
};

export default GoalNameBar;
