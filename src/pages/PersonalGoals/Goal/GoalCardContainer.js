import React from 'react';

import styled from '@emotion/styled';
import GoalNameBar from './GoalNameBar';
import GoalContent from './GoalContent';
import { Stack} from '@mui/material';
import CommentsContainer from './CommentsContainer';

const Container = styled(Stack)(({ theme }) => ({
  color: theme.palette.mode === 'light? "#333": "#F3F3F4"',
  backgroundColor: theme.palette.mode === 'light' ? '#FFF' : '#3d3d3d',
  width: '100%',
  borderRadius: '10px',
  border: ` 1px solid ${theme.palette.primary.main}`,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  // height: '100%',
}));


const GoalCard = ({ title, quantity }) => {

  const handleEditGoal = () => {
    alert('Editar objetivo');
  }

  const handleDeleteGoal = () => {
    alert('Eliminar objetivo');
  }

  const handleViewComments = () => {
    alert('Ver comentarios');
  }

  return (
    <Container>
      
      <GoalNameBar title={'NOMBRE DEL OBJETIVO'} handleEditGoal={handleEditGoal} handleDeleteGoal={handleDeleteGoal} />

      <GoalContent/>

      <CommentsContainer title= {title} quantity={quantity} handleViewComments={handleViewComments} />

    </Container>
  );
};

export default GoalCard;
