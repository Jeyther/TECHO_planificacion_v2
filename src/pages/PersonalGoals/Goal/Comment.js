import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const Container = styled(Stack)(({ theme }) => ({
    backgroundColor: '#CFE5F1',
    borderRadius: '15px',
    padding: `${theme.spacing(2)}`,
  }));

const Comment = () => {
    return ( 

        <Container>
            <Stack direction={'row'} alignItems={'baseline'} spacing={1}>
              <Typography
                variant="subtitle2"
                color={'#005D8D'}
                fontSize={16}
                fontWeight={600}
                sx={{ textTransform: 'uppercase' }}
              >
                Juan Perez
              </Typography>

              <Typography
                variant="subtitle2"
                color={'#005D8D'}
                fontWeight={400}
                fontSize={12}
              >
                30-11-2021 a las 13:47
              </Typography>
            </Stack>

            <Stack>
              <Typography
                textAlign={'center'}
                variant="subtitle2"
                color={'#333'}
                fontWeight={400}
              >
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum dapibus ultricies est. Phasellus ut sem at justo
                semper dapibus. Non, tempus mi. “
              </Typography>
            </Stack>
          </Container>

     );
}
 
export default Comment;