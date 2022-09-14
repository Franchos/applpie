import {
  DialogTitle,
  DialogContent,
  Dialog,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export function ModalSearching({ open, onClose }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const styles = {
    buttonStyle: {
      display: "flex",
      margin: "10px",
      justifyContent: "space-between",
    },
  };

  useEffect(() => {
    axios.get(`/search/movie/${query}`).then(({ data }) => {
      setMovies(data.results);
    });
  }, [query]);

  console.log(movies);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth={true}>
      <DialogTitle sx={{ backgroundColor: "primary.main" }}>
        <TextField
          autoFocus
          color="third"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            placeholder: "Search Here",
          }}
          sx={{ borderColor: "white !important", input: { color: "white" } }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </DialogTitle>
      <DialogContent
        dividers={false}
        sx={{
          backgroundColor: "#0F0C08",

          overflow: "hidden",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: 10,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "primary.main",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "secondary.second",
            borderRadius: 2,
          },
        }}
      >
        <Box
          height="50vh"
          width="30vw"
          sx={{ backgroundColor: "primary.main" }}
        >
          {movies.map((e, i) => (
            <Box
              sx={{
                backgroundColor: "secondary.second",
                borderRadius: "5px",
                m: "5px",
                display: "flex",
                alignItems: "center",

                "&:hover": e.backdrop_path
                  ? {
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500${e.backdrop_path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "secondary.main",
                      opacity: 0.05,
                    }
                  : {
                      backgroundColor: "secondary.main",
                    },
              }}
              height="5vh"
              width="42vw"
              onClick={() => {
                onClose();
                navigate(`/movie/${e.id}`);
              }}
            >
              <Box sx={{ backgroundColor: "transparent" }}>
                <Typography
                  fontWeight={600}
                  color="secondary.third"
                  variant="body2"
                  sx={{
                    marginLeft: "20px",

                    zIndex: "0",
                  }}
                >
                  {e.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
