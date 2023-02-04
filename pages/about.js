import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageListComp from "../components/imageListComp";

export default function AboutPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const theme = useTheme();

  const styles = {
    width: "100vw",
    ".videos": {
      width: "100vw",
      "#trailer": {
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
        width: "100vw",
        height: "100vh",
        objectFit: "contain",
      },
      filter: "brightness(80%)",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    "div .content": {
      mt: "30px",
      maxWidth: "1000px",
      p: {
        textIndent: "50px",
        textAlign: "justify",
        margin: "30px",
      },
      ".date": {
        display: "block",
        textAlign: "center",
        textIndent: "0",
        margin: "30px 0",
        fontSize: "32px",
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".aboutImpetus, .aboutDept": {
      margin: "70px 0",
    },
  };

  const muteVideo = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) setMuted(false);
    else setMuted(true);
  };

  const toggleVolume = () => {
    setMuted(!muted);
  };

  const handleSize = (e) => {
    const width = e.target.innerWidth;
    if (width < 900) videoRef.current.pause();
    else {
      setMuted(true);
      videoRef.current.play().catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    if (window.innerWidth > 900)
      videoRef.current?.play().catch((e) => console.log(e));
    else videoRef.current?.pause();
    window.addEventListener("scroll", muteVideo);
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
      window.removeEventListener("scroll", muteVideo);
      videoRef.current?.pause();
    };
  }, []);

  return (
    <Box sx={styles} className="center1">
      <Box className="videos">
        <video
          onClick={toggleVolume}
          ref={videoRef}
          muted={muted}
          id="trailer"
          autoPlay
          loop
        >
          <source src="images/trailer.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box className="aboutImpetus center1">
        <Image
          sx={{ mt: "50px" }}
          src="/images/impetusLogo.png"
          height="300"
          width="300"
          alt="SME"
        />
        <Box className="content">
          <Typography variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            non aut qui id nam libero repellat molestias, fugit voluptates alias
            perspiciatis? Numquam ad voluptas dolores ducimus ratione doloremque
            a fugit. Nostrum exercitationem asperiores ad impedit. Quisquam nemo
            iure atque libero, at harum repellendus suscipit sed mollitia vel
            nostrum rerum a nam veritatis cum iusto dignissimos. Aspernatur,
            non? Inventore, sapiente. Minima? Nisi esse delectus ab repellendus
            nesciunt error, animi quod aperiam repudiandae sed? Totam, amet?
            Maxime laboriosam rerum suscipit. Sint in libero nam iusto cumque
            reiciendis impedit officiis! Excepturi, recusandae fugit.
          </Typography>
          <Typography variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            non aut qui id nam libero repellat molestias, fugit voluptates alias
            perspiciatis? Numquam ad voluptas dolores ducimus ratione doloremque
            a fugit. pturi, recusandae fugit.
          </Typography>
          <Typography className="date" variant="p">
            17th Feb - 19th Feb
          </Typography>
        </Box>
      </Box>
      <Box>
        <ImageListComp />
      </Box>
      <Box className="aboutDept center1">
        <Image src="/images/SME.png" height="300" width="300" alt="SME" />
        <Box className="content">
          <Typography variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            non aut qui id nam libero repellat molestias, fugit voluptates alias
            perspiciatis? Numquam ad voluptas dolores ducimus ratione doloremque
            a fugit. Nostrum exercitationem asperiores ad impedit. Quisquam nemo
            iure atque libero, at harum repellendus suscipit sed mollitia vel
            nostrum rerum a nam veritatis cum iusto dignissimos. Aspernatur,
            non? Inventore, sapiente. Minima? Nisi esse delectus ab repellendus
            nesciunt error, animi quod aperiam repudiandae sed? Totam, amet?
            Maxime laboriosam rerum suscipit. Sint in libero nam iusto cumque
            reiciendis impedit officiis! Excepturi, recusandae fugit.
          </Typography>
          <Typography variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            non aut qui id nam libero repellat molestias, fugit voluptates alias
            perspiciatis? Numquam ad voluptas dolores ducimus ratione doloremque
            a fugit. pturi, recusandae fugit.
          </Typography>
        </Box>
      </Box>
      <Box className="contact">
        <ContactCard />
        <ContactCard />
      </Box>
      <Contact />
    </Box>
  );
}
