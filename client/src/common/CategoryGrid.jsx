import { Grid, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import genres from "../assets/genresWallpaper.json";
import InfiniteScroll from "react-infinite-scroll-component";

export default function CategoryGrid({ category }) {
  const [noMore, setNoMore] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(5);

  useEffect(() => {
    axios.get("/movies/popular").then(({ data }) => {
      setMovies(data);
    });
  }, [category]);

  const getOnScroll = async () => {
    axios.get(`/movies/popular/${page}`).then(({ data }) => {
      setMovies([...movies, ...data]);

      // page === 10 && setNoMore(false);

      setPage(page + 1);
    });
  };

  const categoryId = genres["genres"].filter((e, i) => e.name === category);

  const moviesFiltered = movies?.filter(
    (e, i) =>
      e.genre_ids[0] === categoryId[0].id ||
      e.genre_ids[1] === categoryId[0].id ||
      e.genre_ids[2] === categoryId[0].id ||
      e.genre_ids[3] === categoryId[0].id ||
      e.genre_ids[4] === categoryId[0].id
  );

  return (
    <>
      <Container sx={{ marginTop: 10 }}>
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={noMore}
          next={getOnScroll}
          loader={<>Loading</>}
          endMessage={<>go back to the top</>}
        >
          <Grid
            container
            rowSpacing={2}
            alignItems="center"
            style={{ minHeight: "100vh" }}
          >
            {moviesFiltered?.map((e, i) => (
              <Grid item rowSpacing={2} lg={3}>
                <MovieCard key={i} movie={e} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </>
  );
}
