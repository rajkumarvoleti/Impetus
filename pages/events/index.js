import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import EventDescription from "../../components/EventDescription";
import EventList from "../../components/EventList";
import disableScroll from "disable-scroll";
import { useEffect, useRef, useState } from "react";
import lodash, { debounce } from "lodash";
import { SwipeEventListener } from "swipe-event-listener";

export default function EventPage() {
  const theme = useTheme();
  const [currIdx, setCurrIdx] = useState(0);
  const images = ["laptop.png", "rocket.png"];
  const descRef = useRef(null);

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
      scrollSnapPointsY: "repeat(100vh)",
    },
  };

  const moveUp = () => {
    setCurrIdx((idx) => (idx === 7 ? idx : idx + 1));
  };

  const moveDown = () => {
    setCurrIdx((idx) => (idx === 0 ? idx : idx - 1));
  };

  const handleScroll = (val, swipe) => {
    if (val < 0) moveUp();
    else moveDown();
    if (swipe) {
      if (val < 0) {
        setTimeout(() => {
          descRef.current?.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }, 100);
      } else {
        setTimeout(() => {
          descRef.current?.scrollBy({
            top: -window.innerHeight,
            behavior: "smooth",
          });
        }, 10);
      }
<<<<<<< HEAD
    }
  };

  const handleDebounceScroll = lodash.debounce(handleScroll, 50, {
    leading: true,
    trailing: false,
  });
=======
    },
    100,
    { leading: true, trailing: false }
  );
>>>>>>> b1c788672c1f2541f9dc123f6bfa6f5335eeb319

  useEffect(() => {
    disableScroll.on(descRef.current, {
      disableKeys: "false",
    });
    descRef.current?.addEventListener("mousewheel", (e) => {
      const val = e.wheelDeltaY;
      lodash.debounce(handleDebounceScroll).cancel();
      handleDebounceScroll(val);
    });

    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 40) handleDebounceScroll(-1);
      if (e.keyCode === 38) handleDebounceScroll(1);
    });
    const { swipeArea } = SwipeEventListener({
      swipeArea: descRef.current,
    });
    swipeArea.addEventListener("swipeUp", () => handleDebounceScroll(-1, true));
    swipeArea.addEventListener("swipeDown", () =>
      handleDebounceScroll(1, true)
    );
    return () => {
      disableScroll.off();
    };
  }, []);

  return (
    <Box className="center1">
      {/* {currIdx} */}
      <Box sx={styles}>
        <EventList setCurrIdx={setCurrIdx} />
        <Box ref={descRef} className="descWrapper">
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
