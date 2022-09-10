import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const TrendingSettings = {
  zoomFactor: 50,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3489,
  pauseOnHover: true,
  rows: 1,
  nextArrow: <ArrowForwardIosIcon sx={{ color: "black" }} />,
  prevArrow: <ArrowBackIosNewIcon sx={{ color: "black" }} />,
};
export const BasicSettings = {
  zoomFactor: 50,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3245,
  pauseOnHover: true,
  rows: 1,
  nextArrow: <ArrowForwardIosIcon sx={{ color: "black" }} />,
  prevArrow: <ArrowBackIosNewIcon sx={{ color: "black" }} />,
};

export const GenresSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  nextArrow: <ArrowForwardIosIcon sx={{ color: "white" }} />,
  prevArrow: <ArrowBackIosNewIcon sx={{ color: "white" }} />,
};
