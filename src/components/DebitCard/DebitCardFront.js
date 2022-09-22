import { Typography, Box } from '@mui/material'
import React from 'react'
import { Circle, UserCard, EmptyCircle, CardNumber, StyledBox, InformationBox } from './DebitCardFront.style'

const DebitCardFront = () => {
  return (
    <>
      <UserCard>
        <StyledBox>
          <Circle/>
          <EmptyCircle />
        </StyledBox>
        <Box>
          <CardNumber variant='h2'>9591 6489 6389 1010</CardNumber>
        </Box>
        <InformationBox>
          <Typography variant='h3'>Felicia Leire</Typography>
          <Typography variant='h3'>09/00</Typography>
        </InformationBox>
      </UserCard>
    </>
  )
}

export default DebitCardFront
