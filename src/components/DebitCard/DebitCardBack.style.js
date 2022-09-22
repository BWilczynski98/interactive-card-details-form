import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const UserCard = styled(Box)(({ theme }) => ({
  width: "440px",
  height: "251px",
  backgroundColor: theme.palette.primary.lightGrayishViolet,
  borderRadius: "0.625rem",
  boxShadow: '3px 3px 100px 5px #ddd',

}));

export const BlackBar = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  width: '100%',
  height: '20%',
  padding: '20px'
}));

export const CvvBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.darkGrayishViolet,
  width: '70%',
  height: '15%',
})) 