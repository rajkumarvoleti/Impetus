import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Contact from "../../components/Contact";
import ContactCard from "../../components/ContactCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/fun_pg.jpg)  no-repeat  `,

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  margin: "50px",
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0",
  },
  "div span,ul": {
    display: "block",
    margin: "20px 0",
  },
  "div ul li": {
    textIndent: "30px",
  },
  ".fee": {
    width: "100%",
    button: {
      margin: "10px 0",
    },
  },
  ".contact": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goBack = () => {
    router.push("/events/valorant");
  };

  const headerStyles = {
    width: "800px",
    maxWidth: "90vw",
    position: "relative",
    button: {
      position: "absolute",
      border: "1px solid white",
      backdropFilter: "blur(10px)",
    },
    ".left": {
      left: "0",
      [theme.breakpoints.down("md")]: {
        top: "100px",
      },
    },
    ".right": {
      right: "0",
      [theme.breakpoints.down("md")]: {
        bottom: "50px",
      },
    },
  };
  return (
    <Box sx={{ width: "100vw" }} className="center1">
      <Box sx={headerStyles} className="center2">
        <IconButton onClick={goBack} className="left">
          <ArrowBackIcon fontSize="large" color="white" />
        </IconButton>
        <Box sx={imageStyles}></Box>
      </Box>
      <Box sx={dataStyles} className="data">
        <Box>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            Impetus 6.0 brings to you a proper carnival game of skill. Dodge
            between one bunker to another to make a lead over others . Test the
            cognitive and hand coordination in breaking down the complete
            pyramid. Try your hands on darts and wire wand loop. Take help with
            your partner in moving through the proper pathway in completing the
            event. If you can manage all these , some prizes are surely waiting
            for you.
          </Typography>
          {/* <Typography variant="p">Date: 01/02/03 05:06pm</Typography> */}
          <Typography variant="h2">Lazer Maze Game</Typography>
          <Typography variant="p">
            Imagine being in utter darkness, smoke all around and you are
            trapped in a maze made of Lazer Lights. Go through the maze with
            upmost precision to push the buzzer that gets to amazing gifts. But
            but but, One wrong step, one touch and you are gone. Seemed
            enthralling, this is what we are bringing you all at our
            mega-techfest, the name everyone knows.<br></br>
            <br></br>A fun, exciting, full of adrenaline rush maze filled with a
            lot of twists and turns and amazing gifts. Be a part of this
            over-the-top experience that you will find nowhere.<br></br>
            <br></br>
            And for the fans of TBBT, you know what this is, you know what this
            is gonna be, so get ready to have a BUZZZZINGA!<br></br>
            <br></br>
            Venue - Parade Ground, IIEST Shibpur.
          </Typography>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
