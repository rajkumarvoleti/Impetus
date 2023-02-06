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
        textAlign:"justify",
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
          <Typography variant="h2">Virtual Reality Expo</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum non
            optio cupiditate ipsa iste id nisi impedit laudantium. Modi, ipsa.
            Pariatur quas architecto hic expedita recusandae deleniti, enim
            omnis. Explicabo. Atque debitis amet temporibus tenetur. Placeat
            magnam ex officia nesciunt ipsam aut excepturi soluta ab impedit
            iste harum, ad, molestias deleniti, maiores hic veritatis sit saepe
            illum. Veritatis, facilis. Sit.
          </Typography>
          <Button sx={{ margin: "30px 0" }} variant="contained">
            Register
          </Button>
        </Box>
      </Box>
      <Box className="EV">
        <Box className="center1 img">
          <img src="/images/EV_nobg.png" alt="VR" />
        </Box>
        <Box className="content center1">
          <Typography variant="h2">Electric Vehicle Expo</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum non
            optio cupiditate ipsa iste id nisi impedit laudantium. Modi, ipsa.
            Pariatur quas architecto hic expedita recusandae deleniti, enim
            omnis. Explicabo. Atque debitis amet temporibus tenetur. Placeat
            magnam ex officia nesciunt ipsam aut excepturi soluta ab impedit
            iste harum, ad, molestias deleniti, maiores hic veritatis sit saepe
            illum. Veritatis, facilis. Sit.
          </Typography>
          <Button sx={{ margin: "30px 0" }} variant="contained">
            Register
          </Button>
        </Box>
      </Box>
      <Box sx={{ margin: "70px 0" }} className="Robo">
        <Box className="center1 img">
          <img src="/images/humanoidRobot.png" alt="Robo" />
        </Box>
        <Box className="content center1">
          <Typography variant="h2">Humanoid Robo Expo</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum non
            optio cupiditate ipsa iste id nisi impedit laudantium. Modi, ipsa.
            Pariatur quas architecto hic expedita recusandae deleniti, enim
            omnis. Explicabo. Atque debitis amet temporibus tenetur. Placeat
            magnam ex officia nesciunt ipsam aut excepturi soluta ab impedit
            iste harum, ad, molestias deleniti, maiores hic veritatis sit saepe
            illum. Veritatis, facilis. Sit.
          </Typography>
          <Button sx={{ margin: "30px 0" }} variant="contained">
            Register
          </Button>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
