import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingComp() {
  const styles = {
    height: "100vh",
    width: "100vw",
    ".loadingText": {
      display: "flex",
      flexDirection: "row",
    },
  };

  const [dots, setDots] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDots((dots + 1) % 3);
    }, 500);
  }, [dots]);

  return (
    <Box sx={styles} className="center1">
      <Image
        src="/images/loading.gif"
        alt="loading..."
        height={300}
        width={500}
      />
      {/* <video
        onLoadStart={() => console.log("loading")}
        onLoad={() => console.log("loaded")}
        autoPlay
        muted
        loop
        id="loading"
      >
        <source src="images/loading1.mp4" type="video/mp4" />
      </video> */}
      <Box className="loadingText">
        <Typography variant="p">Loading</Typography>
        <p>&nbsp;.</p>
        {dots >= 1 ? <p>&nbsp;.</p> : <p>&nbsp;&nbsp;</p>}
        {dots >= 2 ? <p>&nbsp;.</p> : <p>&nbsp;&nbsp;</p>}
      </Box>
    </Box>
  );
}
