import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../common/MovieCard";
import { Box, Typography, Card, Button } from "@mui/material";
import ReactPlayer from "react-player";

export const Movie = ({ id }) => {
  // const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState({});
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    axios.get(`/movie/${id}`).then(({ data }) => setMovie(data));
    axios.get(`/movie/${id}/similar`).then(({ data }) => setSimilar(data));
    axios.get(`/movie/${id}/images`).then(({ data }) => setImage(data));
    axios.get(`${id}/videos`).then(({ data }) => {
      setVideo(data);
    });
  }, [setImage, id]);

  console.log(movie);

  const backdrop = !image.backdrops
    ? "https://wallpaperaccess.com/full/676563.jpg"
    : `https://image.tmdb.org/t/p/original${image.backdrops[1].file_path}`;

  const trailer = video.results ? video.results[0].key : false;

  const styles = {
    WallpaperStyle: {
      backgroundImage: `url(${backdrop})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "70vh",
      width: "100vw",
      overflowX: "hidden",
    },
    movieCardStyle: {
      margin: "15vh 10vh 10vh 10vh ",
    },
    titleStyle: {
      borderRadius: "5px",
      margin: "10vh",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "50vw",
      height: "auto",
    },
  };

  return (
    <>
      <Box style={styles.WallpaperStyle} display="flex">
        <Box display="flex" alignItems="center">
          <Box style={styles.movieCardStyle}>
            <MovieCard style={styles.movieCard} movie={movie} />
          </Box>

          <Box backgroundColor="primary.main" style={styles.titleStyle}>
            <Typography color="primary.second" margin="1vh" variant="h2">
              {movie.title}{" "}
              {movie.release_date && `(${movie?.release_date?.slice(0, 4)})`}
            </Typography>

            <Typography
              color="primary.second"
              margin="1vh"
              marginLeft="1vw"
              variant="h6"
            >
              {movie.tagline}
            </Typography>
            <Box margin="20px">
              <Typography color="primary.second">{movie.overview}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Card sx={{ overflowX: "hidden", borderRadius: "0" }}>
        {trailer && (
          <ReactPlayer
            width="100%"
            height="100vh"
            controls={true}
            url={`https://www.youtube.com/watch?v=${trailer}`}
          />
        )}
      </Card>
    </>
  );
};
