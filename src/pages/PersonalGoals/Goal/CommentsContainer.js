import { Stack, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import Comment from './Comment';

const Container = styled(Stack)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? '#005D8D' : '#F3F3F4',
  border: `1px solid ${theme.palette.primary.main}`,
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  borderRadius: '10px',
}));

const GoalsQuantity = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#333' : '#F3F3F4',
  color: theme.palette.background.default,
  borderRadius: '50%',
  padding: theme.spacing(1.3),
  lineHeight: 0.6,
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: 'bold',
}));

const TextButton = styled(Typography)(({ theme }) => ({

  fontWeight: 400,
  "&:hover": {
    color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.text.secondary,
    cursor:"pointer"
  }

}));

const CommentsContainer = ({ title, quantity, handleViewComments }) => {
  return (
    <Container>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ mb: 2 }}
      >
        <Toolbar disableGutters variant="dense">
          <GoalsQuantity>{quantity}</GoalsQuantity>

          <Typography
            variant="subtitle2"
            color={'textPrimary'}
            sx={{
              marginLeft: 1,
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
        </Toolbar>

        <TextButton variant="subtitle2" onClick={handleViewComments}>
          Ver Todos
        </TextButton>
      </Stack>

      <Stack direction={'row'} spacing={4}>
        <Comment />
        <Comment />
      </Stack>
    </Container>
  );
};

export default CommentsContainer;
