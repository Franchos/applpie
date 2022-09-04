import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

// import {useDispatch, useSelector} from "react-redux"

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  // useEffect usarlo despues con axios para pedidos del back...

  const handleText = (e) => {
    const result = e.target.value;
    return setResult(result);
  };

  const handleSubmit = () => setText(result);
  console.log(text);
  return (
    <div>
      <div>
        <TextField variant="filled" onChange={(e) => handleText(e)} />
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      <div>
        <TextField variant="filled"></TextField>
        <Button variant="contained" color="primary" size="large">
          Submit
        </Button>
      </div>
      <div>
        <TextField variant="filled"></TextField>
        <Button variant="contained" color="primary" size="large">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
