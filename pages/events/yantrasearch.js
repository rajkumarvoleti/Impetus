import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Contact from "../../components/Contact";
import ContactCard from "../../components/ContactCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import EventMag from "../../components/EventManagement";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/yantra_pg.jpg)  no-repeat  `,

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  margin: "50px",
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0",
  },
  "div span,ul": {
    display: "block",
    margin: "20px 0",
  },
  "div ul li": {
    // textIndent: "30px",
  },
  ".fee": {
    width: "100%",
    button: {
      margin: "10px 0",
    },
  },
  ".contact": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/heatovation");
  };
  const goBack = () => {
    router.push("/events/cadathon");
  };

  const headerStyles = {
    width: "800px",
    maxWidth: "90vw",
    position: "relative",
    button: {
      position: "absolute",
      border: "1px solid white",
      backdropFilter: "blur(10px)",
    },
    ".left": {
      left: "0",
      [theme.breakpoints.down("md")]: {
        top: "100px",
      },
    },
    ".right": {
      right: "0",
      [theme.breakpoints.down("md")]: {
        bottom: "50px",
      },
    },
  };
  const person = {
    person1: {
      name: "Shreyash Manze",
      phone: "+91 7700001193",
    },
    person2: {
      name: "Sayantan Paul",
      phone: "+91 9830664404",
    },
  };
  return (
    <Box sx={{ width: "100vw" }} className="center1">
      <Box sx={headerStyles} className="center2">
        <IconButton onClick={goBack} className="left">
          <ArrowBackIcon fontSize="large" color="white" />
        </IconButton>
        <Box sx={imageStyles}></Box>
        <IconButton onClick={goNext} className="right">
          <ArrowForwardIcon fontSize="large" color="white" />
        </IconButton>
      </Box>
      <Box sx={dataStyles} className="data">
        <Box>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            This event organized by ASME IIEST, aims to give you all the
            excitement of treasure hunt. You can look forward to having fun
            while solving mysteries together and hunting down simple machines in
            our college campus.
          </Typography>

          <ul style={{ fontSize: "22px" }}>
            Dates: 18th February, 2023 2:30pm
          </ul>
          <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
            <Button
              variant="contained"
              size="large"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/FDULjEMRXuQWYGjx9")
              }
            >
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Objective</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            Teams will be provided with 10 riddles, which needs to be solved one
            after another. The answer to the riddles will be simple
            machines/mechanisms found in campus, which they need to click
            picture of and sent to the corresponding volunteer to get the next
            riddle. The team completing the whole task in least time wins.
          </Typography>
          <Typography variant="h2">Basic Information</Typography>
          <ul className="bulletArrow">
            <li>
              Registration – Till 1 hour before commencement of event. (On spot
              registrations will be available only if slots are available)
            </li>
            <li>Pre-requirements – WhatsApp, moderate internet connection</li>
            <li>Participation – team of 2-3 members</li>
            {/* <li>Platform – Gallery 5, Department of Mechanical Engineering</li> */}
            <li>No. of Rounds – 1</li>
            {/* <li>Duration of event – 2 hours approximately</li> */}
            <li>
              Prizes worth <b>Rs.10000/-</b>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <ul className="bulletArrow">
            <li>10 riddles will be numbered 1 to 10.</li>
            <li>
              All the teams need to come to the meeting place from where the
              event will commence.
            </li>
            <li>
              Volunteers will be assigned to different teams; each volunteer
              will cater to multiple teams at once so it is suggested to be
              patient for their response.
            </li>
            <li>
              The contact no. of the Volunteer will be provided, who will
              provide the teams with riddles one after the other, after each one
              is solved.
            </li>
            <li>
              Team needs to solve the given riddle (answer will be some simple
              machine or mechanism), find the machine/mechanism around them,
              click a selfie with the whole team, and send it to the associated
              volunteer over WhatsApp while mentioning their team’s name too.
            </li>
            <li>
              If the answer is correct the volunteer will give you the next
              riddle.
            </li>
            <li>Team fastest to solve 10 riddles wins.</li>
            <li>The next two runners up will be awarded.</li>
          </ul>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul className="bulletArrow">
            <li>
              All team members must be present at the common spot before the
              event starts.
            </li>
            <li>
              Attempt to bribe the volunteer to get clues or answer will lead to
              disqualification.
            </li>
            <li>Do not Ask for help from anyone or misguide anyone.</li>
            <li>
              Maintain co-ordination amongst team mates, more than one person
              sending solution & picture to volunteer will lead to penalty.
            </li>
            <li>
              <b>Tip</b>: This event aims to get your body moving around the
              campus rather than sit in one place, stay on your feet to complete
              the tasks quickly and to complete elementary exercise needed for
              the day!
            </li>
          </ul>
        </Box>
        <Box>
          <Box className="fee">
            <Typography variant="h3">Registration fee: </Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
              <li>Free (for IIEST Students)</li>
              <li>Rs.160 (for non-IIEST Students)</li>
            </ul>
            <Box sx={{ width: "100%" }} className="center1">
              <Box
                sx={{ width: "100%", marginTop: "30px" }}
                className="center1"
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={(event) =>
                    (window.location.href =
                      "https://forms.gle/FDULjEMRXuQWYGjx9")
                  }
                >
                  Register Now
                </Button>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Event Coordinators
          </Typography>
          <Box className="contact">
            <EventMag person={person.person1} />
            <EventMag person={person.person2} />
          </Box>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
