import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideBarComp from "./SideBarComp";
import Image from "next/image";
import { useRouter } from "next/router";

const styles = {
  position: "absolute",
  width: "100vw",
  ".appbar": {
    position: "relative",
    maxWidth: "1300px",
    padding: "20px 50px",
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
  const goToHome = () => {
    router.push("/");
  };
  return (
    <Box sx={styles} className="center2">
      <AppBar
        className="appbar"
        style={{ background: "transparent", position: "fixed" }}
      >
        <Image
          onClick={goToHome}
          src="images/logo.svg"
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
