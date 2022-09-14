import * as React from "react";

import PageviewIcon from "@mui/icons-material/Pageview";
import { Box, IconButton } from "@mui/material";
import { ModalSearching } from "./ModalSearching";
import { useState } from "react";

export const SearchBar = (open, onClose) => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <IconButton onClick={() => setDialog(true)}>
        <Box
          sx={{
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <PageviewIcon fontSize="large" />
        </Box>
      </IconButton>
      <ModalSearching
        open={dialog}
        onClose={() => {
          setDialog(false);
        }}
      />
    </>
  );
};
