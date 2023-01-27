import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import LearnMore from "./LearnMore";

export default function EventDescription() {
  const theme = useTheme();

  const styles = {
    "div h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "30px",
    },
    "div span": {
      fontSize: "18px",
      lineHeight: "0.5",
    },
    maxWidth: "500px",
    height: "100vh",
    position: "relative",
    left: "50vw",
    div: {
      position: "relative",
      top: "35vh",
    },
    [theme.breakpoints.down("lg")]: {
      left: "10vw",
      div: {
        top: "50vh",
        marginBottom: "300px",
      },
    },
    scrollSnapAlign: "center",
  };

  return (
    <Box sx={styles}>
      <Box>
        <Typography variant="h2">CADathon</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
          accusamus dolor laborum, sed molestiae. Culpa debitis corrupti ipsam
          eligendi natus reiciendis iusto, nesciunt voluptatibus corporis nulla
          praesentium iste amet?
        </Typography>
        <LearnMore link="/" />
      </Box>
    </Box>
  );
}
