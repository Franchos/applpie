import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../state/user";
import TrendingCarousel from "../components/TrendingCarousel";
import { Box } from "@mui/material";

import BasicCarousel from "../components/BasicCarousel";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => dispatch(getUser(data)));
  }, [dispatch]);

  return (
    <Box>
      <TrendingCarousel />
      <BasicCarousel />
    </Box>
  );
}

export default Home;
