import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SideBarComp from "./SideBarComp";
import Image from "next/image";
import { useRouter } from "next/router";

const styles = {
  position: "absolute",
  width: "100vw",
  ".appbar": {
    position: "relative",
    // maxWidth: "1300px",
    padding: "0 50px",
    paddingTop: "20px",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ".logo": {
      cursor: "pointer",
    },
  },
};

export default function AppbarComp() {
  const router = useRouter();
  const [top, setTop] = useState(true);
  const goToHome = () => {
    router.push("/");
  };

  const handleTop = () => {
    if (window.scrollY === 0) setTop(true);
    else setTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTop);
    return () => {
      window.removeEventListener("scroll", handleTop);
    };
  }, []);

  return (
    <Box sx={styles} className="center2">
      <AppBar
        className="appbar"
        style={{
          background: `${top ? "transparent" : "rgb(0,0,0,0.3)"}`,
          backdropFilter: "blur(2px)",
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          onClick={goToHome}
          src="images/logo.svg"
          //"./images/Impetus Logo white.png"
          alt="logo"
          width={50}
          height={50}
          className="logo"
        />
        <SideBarComp />
      </AppBar>
    </Box>
  );
}
