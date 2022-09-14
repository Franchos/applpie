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
  centerPadding: "50px",
  touchDrag: false,
  slidesToShow: 3,
  draggable: true,
  speed: 700,
  swipeToSlide: true,
  touchThreshold: 100,
  nextArrow: <ArrowForwardIosIcon sx={{ color: "white" }} />,
  prevArrow: <ArrowBackIosNewIcon sx={{ color: "white" }} />,
};

export const FavsSettings = {
  zoomFactor: 50,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  speed: 700,
  rows: 1,
  nextArrow: <ArrowForwardIosIcon sx={{ color: "white" }} />,
  prevArrow: <ArrowBackIosNewIcon sx={{ color: "white" }} />,
};

export const RecommendedSettings = {
  zoomFactor: 50,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3489,
  pauseOnHover: true,
  rows: 2,
  nextArrow: <ArrowForwardIosIcon sx={{ color: "white" }} />,
  prevArrow: <ArrowBackIosNewIcon sx={{ color: "white" }} />,
};
