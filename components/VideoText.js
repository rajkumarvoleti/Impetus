import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";

const styles = {
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
};

export default function VideoText({ hideIt }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", hideIt);
    return () => {
      window.removeEventListener("scroll", hideIt);
    };
  }, []);

  return (
    <Box ref={scrollRef} sx={styles} className="center1">
      <Typography variant="h1">IMPETUS</Typography>
      <Typography variant="h4">IIEST Mechancial Fest</Typography>
      <Button onClick={hideIt} size="large" variant="outlined" primary>
        Enter
      </Button>
    </Box>
  );
}
