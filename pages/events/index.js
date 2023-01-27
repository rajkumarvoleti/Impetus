import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import EventDescription from "../../components/EventDescription";
import EventList from "../../components/EventList";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

export default function EventPage() {
  const theme = useTheme();
  const scrollRef = useRef(null);

  const styles = {
    width: "100vw",
    paddingLeft: "100px",
    minHeight: "100vh",
    backgroundColor: "black",
    background: "url(/images/laptop.png) no-repeat",
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
        <EventList />
        <Box className="descWrapper">
          <EventDescription />
          <EventDescription />
          <EventDescription />
          <EventDescription />
          <EventDescription />
        </Box>
      </Box>
    </Box>
  );
}
