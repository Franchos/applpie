import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginUser } from "../../state/user";

export function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("/auth/login", {
        email,
        password,
      })
      .then(({ data }) => dispatch(loginUser(data)));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        variant="filled"
        value={email}
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="filled"
        value={password}
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

// export default Login ;
