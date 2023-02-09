import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Contact from "../../components/Contact";
import ContactCard from "../../components/ContactCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "600px",
  minHeight: "400px",

  background: `url(/images/cadathon_pg.jpg)  no-repeat  `,

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
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
  },
  ".right": {
    right: "0",
  },
};

const dataStyles = {
  margin: "50px",
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0 0 0",
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
  ".nestedList": {
    margin: "0",
  },
  ".nestedList li": {
    marginLeft: "30px",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/yantrasearch");
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

  return (
    <Box sx={{ width: "100vw" }} className="center1">
      <Box sx={headerStyles} className="center2">
        <Box sx={imageStyles}></Box>
        <IconButton onClick={goNext} className="right">
          <ArrowForwardIcon fontSize="large" color="white" />
        </IconButton>
      </Box>
      <Box sx={dataStyles} className="data">
        <Box>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            This competition aims to develop the idea of assembly of 3D
            structures on a CAD software. This event will be organized by the
            Society of Automotive Engineers (SAE), IIEST Shibpur under the
            banner of &quot;Impetus 6.0&quot;.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "21px" }}>
            Dates:
            <li>-Round 1: 17th February, 2023 1pm-2pm</li>
            <li>-Round 2: 18th February, 2023 10am-11:30am</li>
          </ul>
          <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
            <Button
              variant="contained"
              size="large"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/NRdSf7w4pvX5E96y7")
              }
            >
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Objective</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            Initially, the organizing team will set up an objective and the
            participants will have to designed it within the speculated time
            while satisfying some given condition.
          </Typography>
          <Typography variant="h2">Basic Information</Typography>
          <ul>
            <li>➜ Registration – Till 1 hour before commencement of Round 1</li>
            <li>➜ Participation – Individual</li>
            <li>➜ Venue – Department building (IIEST Shibpur)</li>
            <li>➜ No. of Rounds – 2</li>
            <li>
              <ul className="nestedList">
                ➜ Duration of each round-
                <li>Round 1- 60 min</li>
                <li>Round 2- 150min</li>
              </ul>
            </li>
            <li>
              ➜ Prizes worth <b>Rs.8000/-</b>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            <b>CADathon</b> is going to be held in 2 rounds. In the first round
            of competition participants are expected to replicate the given
            parts and submit them in an hour. Candidates qualified from the
            first round can only participate in second round (No lateral entry
            allowed).
          </Typography>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul>
            <li>
              ➜ Registered candidates are to be present in the department
              building before the commencement of the event.
            </li>
            <li>
              <ul className="nestedList">
                ➜ ROUND 1-
                <li>-Each participant will be provided with an objective</li>
                <li>
                  -Participants are required to bring their own laptop with any
                  CAD software installed in it.
                </li>
                <li>
                  -Participants need to replicate a 2D drawing of some
                  components into their 3D design.
                </li>
                <li>
                  -The top participants of 1st round will continue to Round 2.
                  Evaluation will be done based on accuracy and time consumed.
                </li>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                ➜ ROUND 2-
                <li>
                  -The selected participants from 1st round will be provided
                  with an objective to replicate a dynamic mechanical mechanism
                  based on the problem statement.
                </li>
                <li>
                  Participants will be evaluated based on time and accuracy.
                </li>
              </ul>
            </li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h6">
            If any team faces any problem, they are supposed to report to the
            Event Co-Ordinator or Pool Volunteer without much delay.<br></br>
            <br></br>
          </Typography>

          <Box className="fee">
            <Typography variant="h3">Registration fee: 1500</Typography>
            <Box sx={{ width: "100%" }} className="center1">
              <Button
                variant="contained"
                size="large"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/NRdSf7w4pvX5E96y7")
                }
              >
                Register Now
              </Button>
            </Box>
          </Box>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Event Coordinators
          </Typography>
          <Box className="contact">
            <ContactCard />
            <ContactCard />
          </Box>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
