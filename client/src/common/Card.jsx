import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MovieCard({ title, poster_path, id }) {
  //hacer un axios get de trending week. para probar y poner adentro 5 cards de un grid para mostrar en home.
  //   console.log(title);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </CardActionArea>
      <CardActions disableSpacing={false}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
      </CardActions>
    </Card>
  );
}
