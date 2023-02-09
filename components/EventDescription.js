import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import LearnMore from "./LearnMore";
import { useInViewport } from "react-in-viewport";

export default function EventDescription({ index, setCurrIdx, currIdx }) {
  const theme = useTheme();
  const ref = useRef(null);
  const headingRef = useRef(null);
  const { inViewport } = useInViewport(headingRef);

  const styles = {
    "div h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "30px",
      letterSpacing: "2px",
    },
    "div span": {
      fontSize: "18px",
      lineHeight: "0.5",
    },
    width: "500px",
    maxWidth: "90vw",
    textAlign: "justify",
    height: "100vh",
    position: "relative",
    left: "50vw",
    div: {
      position: "relative",
      top: "35vh",
    },
    [theme.breakpoints.down("lg")]: {
      left: "5vw",
      div: {
        top: "50vh",
        marginBottom: "300px",
      },
    },
    scrollSnapAlign: "center",
    // margin: "200px 0",
  };

  const handleScroll = () => {
    // ref.current.scrollIntoView(true);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (index === currIdx) handleScroll();
  }, [currIdx, index]);
  const heading=["CADathon","Yantra Search","Heatovation","Scrapyard","Quizzical Suspects","Death Race","Valorant","Fun Bunkers"];
  const link=["cadathon", "yantrasearch","heatovation","scrapyard","quizzical","deathrace","valorant","fun"];

  const cadathon='This competition aims to develop the idea of assembly of 3D structures on a CAD software.This event will be organized by the Society of Automotive Engineers (SAE), IIEST Shibpur  under the banner of "Impetus 6.0".';
  const yantrasearch='This event organized by ASME IIEST, aims to give you all the excitement of treasure hunt.You can look forward to having fun while solving mysteries together and hunting down simple machines in our college campus.';
  const heatovation='"Heatovation", organized by IMPETUS 6.0 in association with ISHRAE-IIEST Kolkata chapter empowers social entrepreneurs to create a culture for entrepreneurship and to promote entrepreneurial education in the field of HVAC.';
  const scrapyard='Innovation need not come from what everyone considers to be a resource; it can also come from making use of what others consider to be waste and producing something useful. With this thought in mind IMPETUS 6.0 presents to you "Scrapyard"';
  const quiz='To instil the essence of quizzing, IMechE IIEST, Shibpur brings to you a Grand General  Technical Quiz: "Quizzical Suspects" under the banner of Impetus 6.0';
  const deathrace='This competition aims to build a robot that can be manually controlled to maneuver across a track with different obstacle.';
  const valorant='This event is based on selection and awarding the best of the best in valorant.';
  const fun='Impetus 6.0 brings to you a proper carnival game of skill. Dodge between one bunker to another to make a lead over others. Test the cognitive and hand coordination in breaking down the complete pyramid. Try your hands on darts and wire wand loop. Take help with your partner in moving through the proper pathway in completing the event. If you can manage these, some prizes are surely waiting for you.';
  

  const content=[cadathon,yantrasearch,heatovation,scrapyard,quiz,deathrace,valorant,fun];

  return (
    <Box ref={ref} sx={styles}>
      <Box>
        <Typography ref={headingRef} variant="h2">
          {heading[currIdx % 8]}
        </Typography>
        <Typography variant="p">
          {content[currIdx%8]}
        </Typography>
        <LearnMore link={`/events/${link[currIdx%8]}`} />

        {/* `url(/images/${images[currIdx%8]}) */}
      </Box>
    </Box>
  );
}
