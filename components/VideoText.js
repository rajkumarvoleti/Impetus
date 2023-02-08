import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import Countdown from "../components/Countdown";

const styles = {
  scrollbarWidth: "none",
  overflowY:"hidden",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  zIndex: 2,
  h1: {
    fontSize: {
      xs: "50px",
      md: "80px",
      lg: "120px",
    },
    overflowY: "hidden",
  },
  h4: {
    m: "20px 0",
    overflowY: "hidden",
  },
  ".noMarginB":{
    marginBottom:"10px",
  },
  ".noMarginT":{
    marginTop:"0",
  }
};

export default function VideoText({ hideIt }) {
  const scrollRef = useRef(null);

  return (
    <Box ref={scrollRef} sx={styles} className="center1">
      <Typography variant="h1" >IMPETUS</Typography>
      <Typography variant="h4" className="noMarginB">Anuanl Techfest of Department of Mechanical Engineering,</Typography>
      <Typography variant="h4" className="noMarginT">IIEST Shibpur</Typography>
      <Countdown />
      <Button onClick={hideIt} size="large" variant="outlined" primary>
        Enter
      </Button>
    </Box>
  );
}
