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
    backdropFilter: "blur(5px)",
    position: "relative",
    // maxWidth: "1300px",
    padding: {
      lg: " 0 50px",
      md: "0 50px",
      sm: "0 30px",
      xs: "0 25px",
    },
    paddingTop: "20px !important",
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
    router.push("/home");
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
          background: "transparent",
          backdropFilter: `${top ? "none" : "blur(5px)"}`,
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          onClick={goToHome}
          src="/images/impetusLogo.png"
          // src="/images/Impetus Logo white.png"
          //"./images/Impetus Logo white.png"
          alt="logo"
          width={90}
          height={90}
          className="logo"
        />
        <SideBarComp />
      </AppBar>
    </Box>
  );
}
