import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const styles = {
  typographyStyle: {
    position: "absolute",
    fontWeight: "600",
    top: 220,
    left: "50%",
    transform: "translateX(-50%)",
  },
};

export default function GenresCard({ movie }) {
  const variantFont =
    movie.name === "War" || movie.name === "Scary" ? "white" : "black";

  return (
    <Card
      height="500"
      width="300"
      backgroundColor="primary.main"
      sx={{ borderRadius: "10px", margin: "15px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          width="400"
          image={movie.image}
        />
        <Typography
          variant="h5"
          color={variantFont}
          sx={{
            position: "absolute",
            fontWeight: "600",
            top: 220,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {movie.name}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
