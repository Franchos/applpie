import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GenresCard({ movie: category }) {
  const navigate = useNavigate();

  const variantFont =
    category.name === "War" || category.name === "Scary" ? "white" : "black";

  return (
    <Card
      height="500"
      width="300"
      backgroundColor="primary.main"
      sx={{ borderRadius: "10px", margin: "15px" }}
    >
      <CardActionArea onClick={() => navigate(`/category/${category.name}`)}>
        <CardMedia
          component="img"
          height="500"
          width="400"
          image={category.image}
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
          {category.name}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
