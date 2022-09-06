import { Login } from "../Header/login";
import MenuAppBar from "../Header";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../state/user";
import MovieCard from "../../common/Card";
import MoviesGrid from "../../components/Grid";
import TrendingCarousel from "../../components/Carousel";
import { Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => dispatch(getUser(data)));
    console.log(user);
  }, [dispatch]);

  // if (!user._id) return <div>...cargando</div>;

  return (
    <>
      <div>{user.name}</div>
      <MenuAppBar />
      <Box>
        <TrendingCarousel />
      </Box>
    </>
  );
}

export default App;
