import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import EventDescription from "../../components/EventDescription";
import EventList from "../../components/EventList";
import useScrollSnap from "react-use-scroll-snap";
import { useRef, useState } from "react";

export default function EventPage() {
  const theme = useTheme();
  const [currIdx, setCurrIdx] = useState(0);
  const images = ["laptop.png", "rocket.png"];

  const styles = {
    width: "100vw",
    paddingLeft: "100px",
    minHeight: "100vh",
    backgroundColor: "black",
    background: `url(/images/${images[currIdx % 2]}) no-repeat`,
    backgroundPosition: "30%",
    [theme.breakpoints.down("lg")]: {
      backgroundPosition: "50% 10%",
      paddingLeft: "0",
    },
    backgroundAttachment: "fixed",
    position: "relative",
    ".descWrapper": {
      height: "100vh",
      overflowY: "scroll",
      scrollSnapType: "y mandatory",
    },
  };

  return (
    <Box className="center1">
      <Box sx={styles}>
        <EventList setCurrIdx={setCurrIdx} />
        <Box className="descWrapper">
          <EventDescription
            index={0}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={1}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={2}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={3}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={4}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={5}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={6}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={7}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
        </Box>
      </Box>
    </Box>
  );
}
