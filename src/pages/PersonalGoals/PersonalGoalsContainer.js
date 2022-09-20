import React from 'react';
import PageTitle from 'components/PageTitle';
import SearchStack from 'components/SearchStack';
import ViewChips from './ViewChips';
import UserCard from './UserCard';
import { Stack } from '@mui/material';
import GoalCardContainer from './Goal/GoalCardContainer';

const PersonalGoalsContainer = () => {

  const handleOpenModal = () => {
    alert('Iria a crear un objetivo');
  }

  const handleEditUser = () => {
    alert('Iria a editar el usuario');
  }

  return (
    <>
      <PageTitle
        title="Objetivos personales"
        buttonTitle="Crear Objetivo"
        handleOpenModal={handleOpenModal}
      />

      <ViewChips />

      <SearchStack
        quantity={2}
        title="Objetivos en total"
        searchPlaceholder="Buscar objetivo"
      />

      <Stack direction={'row'} spacing={4}>
        <UserCard handleEditUser={handleEditUser} />
        <Stack spacing={5} width={"100%"} height={"680px"} paddingBottom={"40px"} sx={{overflow:"auto"}}>
          <GoalCardContainer quantity={3} title="comentarios en total" />
          <GoalCardContainer quantity={3} title="comentarios en total"/>
          <GoalCardContainer quantity={3} title="comentarios en total"/>
        </Stack>
      </Stack>
    </>
  );
};

export default PersonalGoalsContainer;
