import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LearnMore from "./LearnMore";

const containerStyles = {
  height: "100vh",
  height: {
    xs: "90vh",
  },
  width: "100vw",
  padding: "50px",
  padding: {
    xs: "0",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const style = {
  ".trailer": {
    flex: "1",
    article: {
      aspectRatio: "16/9",
      width: {
        xs: "310px",
        sm: "450px",
        lg: "400px",
      },
    },
  },
  ".content": {
    flex: "1",
    h1: {
      padding: "20px 0",
      textAlign: {
        lg: "left",
        sm: "center",
        xs: "center",
      },
      fontSize: {
        lg: "48px",
        sm: "32px",
        xs: "32px",
      },
    },
    p: {
      display: "inline-block",
      lineHeight: "1.3",
      height: "auto",
      minHeight: "150px",
      maxWidth: "500px",
      textAlign: "justify",
    },
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80vw",
  gap: "30px",
  margin: "20px",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    lg: "row",
  },
};

export default function HomePageAbout() {
  return (
    <AnimatePresence>
      <Box id="about" sx={containerStyles}>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          exit={{ y: 1000 }}
          transition={{ duration: 3 }}
        >
          <Box sx={style}>
            <Box className="content">
              <Typography className="flux" variant="h1">
                IMPETUS
              </Typography>
              <p>
                Theoretical knowledge will serve no purpose until combined with
                skills and real-world knowledge. IMPETUS is an attempt to bring
                the industry closer to the students at IIEST, Shibpur. It is
                organized annually by the Society of Mechanical Engineers (SME)
                on behalf of the department of Mechanical Engineering. This
                occasion unites experts from both industries and education on
                IIEST&apos;s soil and provides opportunity to the students to
                get the best of both worlds. The various events in impetus are
                designed to enrich one&apos;s practical knowledge, while they
                also give you a chance to interact with leading industry
                professionals in the field of mechanical engineering.
              </p>
              <LearnMore link={"about"} />
            </Box>
            <Box className="trailer center1">
              <LiteYouTubeEmbed id="2lkuTTIsR60" />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </AnimatePresence>
  );
}
