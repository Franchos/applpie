import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { ModalMovies } from "./ModalMovies";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Rating from "@mui/material/Rating";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { setFav, removeFav } from "../state/user";

export default function MovieCard({ movie }) {
  // const cutTitle =
  //   movie.title.length > 20
  //     ? movie.title.substring(0, 20) + "..."
  //     : movie.title;

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vote = parseInt(movie.vote_average);

  const [dialog, setDialog] = useState(false);

  const [activeFav, setActiveFav] = useState(false);

  const handleFavorite = () => {
    axios
      .post("/users/fav", {
        movie: movie,
        user_id: user._id,
      })
      .then(({ data }) => {
        setActiveFav(true);
        dispatch(setFav(data));
      });
  };

  const handleDeleteFavorite = () => {
    axios
      .put(`/users/fav/${user._id}`, {
        movie_id: movie.id,
      })
      .then(({ data }) => {
        setActiveFav(false);
        dispatch(removeFav(data));
      });
  };

  return (
    <>
      <Card
        style={{ backgroundColor: "transparent" }}
        sx={{
          m: "0vh",
          maxWidth: 265,
          boxShadow: "0 0 0 0",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            sx={{
              borderRadius: "5px",
              maxHeight: 500,
              "&:hover": {
                transform: "scale(1.01)",
              },
              transition: "transform 0.4s ease-in-out",
            }}
            onClick={() => {
              // setDialog(true);
              navigate(`/movie/${movie.id}`);
            }}
          />
        </CardActionArea>
        <CardActions
          disableSpacing={true}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box
            backgroundColor="primary.main"
            sx={{
              borderRadius: "10px",
              padding: "3px 10px 3px 10px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0px 2px 16px -4px rgba(0,0,0,0.35)",
            }}
          >
            <Rating
              readOnly
              fontSize="small"
              icon={<StarRoundedIcon style={{ color: "primary.main" }} />}
              emptyIcon={<StarBorderRoundedIcon style={{ color: "white" }} />}
              value={movie.vote_average / 2}
            />
          </Box>

          <Box
            backgroundColor="primary.main"
            sx={{
              borderRadius: "10px",

              display: "flex",
              alignItems: "center",
              boxShadow: "0px 2px 16px -4px rgba(0,0,0,0.35)",
            }}
          >
            <IconButton
              sx={{ display: "flex" }}
              fontsize="small"
              aria-label="add to favorites"
              onClick={() => {
                !activeFav ? handleFavorite() : handleDeleteFavorite();
              }}
            >
              <FavoriteIcon
                fontSize="small"
                sx={{
                  color: activeFav ? "red" : "white",

                  "&:hover": { color: "red" },
                }}
              />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
      <ModalMovies
        movie={movie}
        open={dialog}
        onClose={() => setDialog(false)}
      />
    </>
  );
}
