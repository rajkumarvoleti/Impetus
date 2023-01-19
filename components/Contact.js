import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const styles = {
  width: "90vw",
  maxWidth: "1100px",
  ".nav": {
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(6,1fr)",
      sm: "repeat(3,1fr)",
      xs: "repeat(2,1fr)",
    },
    flexDirection: "row",
    gap: "0 40px",
    a: {
      fontSize: "20px",
      textDecoration: "none",
      color: "white",
      fontWeight: "400",
      margin: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    },
    pl: "20px",
  },
  ".icons": {
    fontSize: "100px",
    height: "100px",
    overflowY: "hidden",
    "button svg": {
      filter: "opacity(0.6)",
      margin: "15px",
      margin: {
        xs: "5px",
      },
      ":hover": {
        filter: "opacity(1)",
      },
      fontSize: "30px",
    },
  },
  ".terms p": {
    mt: "7px",
    mb: "40px",
  },
};

export default function Contact() {
  return (
    <Box className="center1" sx={{ backgroundColor: "black" }}>
      <Box sx={styles} className="center1">
        <Box className="nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/work">Work Shops</a>
          <a href="/sponsors">Sponsors</a>
          <a href="/team">Team</a>
        </Box>
        <Box className="icons center2">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Box>
        <Box className="terms center1 ">
          <em>Privacy Policy / Terms of Services</em>
          <p>Meet The Team</p>
        </Box>
      </Box>
    </Box>
  );
}
