import { Box, duration, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HomePageAbout from "../components/HomePageAbout";
import HomePageVideo from "../components/HomePageVideo";
import VideoText from "../components/VideoText";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../components/Contact";

const styles = {
  minHeight: "100vh",
  minWidth: "100vw",
};

const containerStyles = {
  background: "url(images/grid.svg) no-repeat center",
  backgroundColor: "black",
  height: "100vh",
  height: {
    xs: "90vh",
  },
  width: "100vw",
};

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const hideIt = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  return (
    <Box>
      <Box sx={containerStyles}>
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{ opacity: opacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {isVisible && (
              <Box sx={styles}>
                <HomePageVideo />
                <VideoText hideIt={hideIt} />
              </Box>
            )}
          </motion.div>
        </AnimatePresence>
        <HomePageAbout />
      </Box>
      <Contact />
    </Box>
  );
}
