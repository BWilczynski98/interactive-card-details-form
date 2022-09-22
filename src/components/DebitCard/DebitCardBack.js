import React from "react";
import { Box } from "@mui/material";
import { UserCard, BlackBar, CvvBar } from "./DebitCardBack.style";

const DebitCardBack = () => {
  return (
    <UserCard>
      <Box sx={{ height: "33.33%", display: "flex", alignItems: "flex-end" }}>
        <BlackBar />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", height: '20px' }}>
        <CvvBar />
      </Box>
    </UserCard>
  );
};

export default DebitCardBack;
