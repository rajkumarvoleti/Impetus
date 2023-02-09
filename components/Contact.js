import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import ContactCard from "./ContactCard";

const styles = {
  width: "90vw",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(8,1fr)",
      sm: "repeat(4,1fr)",
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
    <Box className="center1" sx={{ backgroundColor: "transparent" }}>
      <Box sx={styles} className="center1">
        <Box className="nav">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/expo">Expo</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/team">Team</Link>
          <Link
            style={{ gridColumn: "span 2", textAlign: "center" }}
            href="/industryacademiameet"
          >
            Industry Acadameia Meet
          </Link>
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
