import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../state/movies";
import MovieCard from "../common/Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#000000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MoviesGrid() {
  const dispatch = useDispatch();
  //usar array que me trae el get con axios en trending para probar...
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    axios.get("/trending/day").then(({ data }) => {
      dispatch(getMovies(data));
    });
  }, []);

  return (
    // <>señor grid</>
    <Box sx={{ display: "flex" }}>
      <Grid
        container
        spacing={8}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
          marginLeft: 0,
        }}
      >
        {movies.results?.map((e, i) => (
          <Item key={i}>
            <MovieCard title={e.title} poster_path={e.poster_path} id={e.id} />
          </Item>
        ))}
      </Grid>
    </Box>
  );
}
