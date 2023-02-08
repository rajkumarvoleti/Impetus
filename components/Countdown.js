import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const theme = useTheme();

  const deadline = "February, 17, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    display: "flex",
    flexDirection: "row",
    margin: "50px 0",
    maxWidth: "90vw",
    div: {
      width: "170px",
    },
    [theme.breakpoints.down("md")]: {
      div: {
        width: "100px",
        h2: {
          fontSize: "18px",
        },
      },
    },
  };

  return (
    <Box sx={styles}>
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h2">{("0" + days).slice(-2)} : </Typography>
        <Typography variant="h2">Days</Typography>
      </Box>
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h2">{("0" + hours).slice(-2)} : </Typography>
        <Typography variant="h2">Hours</Typography>
      </Box>
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h2">{("0" + mins).slice(-2)} : </Typography>
        <Typography variant="h2">Minutes</Typography>
      </Box>
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h2">{("0" + seconds).slice(-2)}</Typography>
        <Typography variant="h2">Seconds</Typography>
      </Box>
    </Box>
  );
}
