import { DialogTitle, DialogContent, Dialog } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import { Login } from "./login";

//cambiar Modal por Dialog
export function ModalLogin({ open, onClose }) {
  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>LOGIN</DialogTitle>
      <DialogContent>
        <Login />
      </DialogContent>
    </Dialog>
  );
}
