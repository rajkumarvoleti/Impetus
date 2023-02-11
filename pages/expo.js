import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { BackgroundParticles } from "../components/BgParticles";
import Contact from "../components/Contact";

export default function ExpoPage() {
  const theme = useTheme();

  const styles = {
    backgroundImage:
      "linear-gradient(to right bottom, #370535, #2e0625, #240618, #18030d, #000000)",
    ".Robo .img img": {
      width: "400px !important",
    },
    ".VR, .EV, .Robo": {
      width: "100vw",
      minHeight: "100vh",
      overflowY: "hidden",
      display: "grid",
      [theme.breakpoints.down("md")]: {
        placeItems: "center",
      },
      gridTemplateColumns: "1fr 1fr",
      ">*": {
        [theme.breakpoints.down("md")]: {
          gridColumn: "span 2",
        },
      },
      ".img": {
        width: "100%",
        minHeight: "400px",
        img: {
          width: {
            lg: "600px",
            md: "600px",
            sm: "500px",
            xs: "500px",
          },
          filter: "drop-shadow(16px 16px 10px black)",
        },
      },
      ".content": {
        width: "550px",
        maxWidth: "90vw",
        margin: "50px 0",
        textAlign: "justify",
        h2: {
          margin: "30px 0",
        },
      },
    },
    [theme.breakpoints.up("md")]: {
      ".EV .content": {
        order: "-1",
        marginLeft: "100px !Important",
      },
    },
    ".Robo .img img": {
      width: "300px !important",
      // height: "400px",
    },
  };

  return (
    <Box sx={styles}>
      <BackgroundParticles />
      <Box className="VR">
        <Box className="center1 img">
          <img src="/images/VR1.png" alt="VR" />
        </Box>
        <Box className="content center1">
          <Typography variant="h2">Tech Show</Typography>
          <Typography variant="p">
            Get ready for a Tech Show involving some of most future gen techs that will fascinate your mind. At this Tech Show, we Impetus 6.0 bring you-<br></br><br></br>
            1. VIRTUAL REALITY ZONE - Feel the aura and landscape of the moon with your own eyes. Virtual reality experience from actual satellite footages to get the experience of having your own foot on the moon.<br></br><br></br>
            2. AUGMENTED REALITY ZONE(Selfie Zone) - In the current world of Insta, Snapchat and Reels, the rulers are those who know how to Filter. Here, Design your own mobile filters with our AR technology, take snaps, share with your friends and family, get millions and millions of likes and love. Just dont forget to tag our Impetus in it.<br></br><br></br>
            3. 3-D Printing - Get to see industry specialists work on one of most advanced 3-D printers in the world to create amazing miracles. A magic to amaze, a magic to learn, a magic to be the future.
            <br></br><br></br>
            Venue- Parade Ground, IIEST Shibpur Campus
          </Typography>
          {/* <Button sx={{ margin: "30px 0" }} variant="contained">
            Register
          </Button> */}
        </Box>
      </Box>
      <Box className="EV">
        <Box className="center1 img">
          <img src="/images/EV_nobg.png" alt="VR" />
        </Box>
        <Box className="content center1">
          <Typography variant="h2">Electric Vehicle Expo</Typography>
          <Typography variant="p">
            With the world moving towards being an eco-friendly place to be, we engineers have to the pioneers while moving ahead in our vehicles. And these vehicles just can't be a usual bike or car, they need to be ELECTRIC.<br></br><br></br>
            So we at IMPETUS 6.0 bring to you, a designated expo for the EVs that are gonna rule the roads soon. During the Impetus 6.0 events do come to our expo to gaze upon one of the most efficient electronic vehicle and get a chance to meet the manufacturers of this NextGen Technology. Not only these EVs will be a cool way to roam around but they will make you realise that how important this transition of electronic vehicles are in the current world scenario.<br></br><br></br>

            Venue- Netaji Bhawan, IIEST Shibpur Campus
          </Typography>
          {/* <Button sx={{ margin: "30px 0" }} variant="contained">
            Register
          </Button> */}
        </Box>
      </Box>
      <Box sx={{ margin: "70px 0" }} className="Robo">
        <Box className="center1 img">
          <img src="/images/humanoidRobot.png" alt="Robo" />
        </Box>
        <Box className="content center1">
          <Typography variant="h2">Humanoid Robo Expo</Typography>
          <Typography variant="p">
            From imagination to daydreams. From dreams to sci-fi movies. From movies to possible future. And now, we bring the FUTURE here.<br></br><br></br>
            Come to IIEST Shibpur to meet our ROBO FRIEND, 'ENZO'. A robot that has helped thousands of patients when even nurses cant keep close to them. A robot that the served has humanity when it was needed the most.<br></br><br></br>
            At the expo, get to see our humanoid robot, Enzo. Get a chance to physically meet it, meet the industrial experts who made it and learn from the best.<br></br><br></br>

            Venue - Parade Ground, IIEST Shibpur Campus
          </Typography>
          {/* <Button sx={{ margin: "30px 0" }} variant="contained">
            Register
          </Button> */}
        </Box>
      </Box>
      
      <Contact />
    </Box>
  );
}
