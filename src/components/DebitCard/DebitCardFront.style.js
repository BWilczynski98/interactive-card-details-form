import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const UserCard = styled(Box)(({ theme }) => ({
  width: "440px",
  height: "251px",
  background:
    "linear-gradient(90deg, rgba(100,72,254,1) 0%, rgba(96,5,148,1) 100%)",
  borderRadius: "0.625rem",
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
}));

export const InformationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Circle = styled(Box)(({ theme }) => ({
  width: "3.125rem",
  height: "3.125rem",
  borderRadius: "100%",
  backgroundColor: theme.palette.primary.white,
}));

export const EmptyCircle = styled(Box)(({ theme }) => ({
  width: "1.875rem",
  height: "1.875rem",
  borderRadius: "100%",
  border: `1px solid ${theme.palette.primary.white}`,
}));

export const CardNumberBox = styled(Box)(({ theme }) => ({
  height: "33.33%",
  display: "flex",
  alignItems: "flex-end",
}));

export const CardNumber = styled(Typography)(({ theme }) => ({
  letterSpacing: "0.188rem",
}));
