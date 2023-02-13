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

  background: `url(/images/deathrace_pg.jpg)  no-repeat  `,

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
    textIndent: "30px",
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
  ".nestedList":{
    margin:"0",
  },
  ".nestedList li":{
    // marginLeft:"30px",
  }
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/valorant");
  };
  const goBack = () => {
    router.push("/events/quizzical");
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
      name: "Shobhit Das",
      phone: "+91 7602274162",
    },
    person2:
    {
      name: "Abhishek Rajput",
      phone: "+91 9355127436",
    },
    person3:
    {
      name: "Avi Ambast",
      phone: "+91 7277876396",
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
          This competition aims to build a robot that can be manually controlled to maneuver across a track
with different obstacle.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "21px" }}>
            Dates:
            <li><ul className="BulletNone"><li>Round 1: 17th February, 2023  4:30pm-6:00pm</li></ul></li>
            <li><ul className="BulletNone"><li>Round 2: 18th February, 2023  6pm-7pm</li></ul></li>
          </ul>
          <Box sx={{ width: "100%", marginTop:"30px" }} className="center1">
          <Button variant="contained" size="large" onClick={event => window.location.href = 'https://forms.gle/9Yr3SwWXFUFFZXsQ6'}>
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Objective</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
          Reach the limit line with minimum penalties in the least possible time.
          </Typography>
          <Typography variant="h2">Basic Information</Typography>
          <ul className="bulletArrow">
            <li><ul className="BulletNone"><li>
              Registration – Till 1 hour before commencement of Round 1
            </li></ul></li>
            <li><ul className="BulletNone"><li>
              Participation – Team
            </li></ul></li>
            <li><ul className="BulletNone"><li>
              Venue – Netaji Bhavan
            </li></ul></li>
            <li><ul className="BulletNone"><li>
              No. of Rounds – 2
            </li></ul></li>
            
            <li><ul className="BulletNone"><li>
              Prizes worth <b>Rs.8000/-</b>
            </li></ul></li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
          Death Race is going to be held in 2 rounds. Candidates qualified from the first round can only
participate in second round (No lateral entry allowed).
          </Typography>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul className="bulletArrow">
            <li><ul className="BulletNone"><li>
              Registered candidates are to be present in the amenities before the commencement
of the event.
            </li></ul></li>
            <li>
             
              <ul className="nestedList">
              ROUND 1-
                <li><ul className="BulletNone"><li>
                  The first round is the HEATS; all the foams win take a run in the arena one at a time. The time taken to complete the arena will be noted. There is a maximum time limit of 10 minutes beyond which the bot cannot continue to run.
                </li></ul></li>
                <li><ul className="BulletNone"><li>
                  Participants Completing the arena is a must in order to be considered for
Qualification to the next round.
                </li></ul></li>
                <li><ul className="BulletNone"><li>
                  One restart is allowed per team in the first round. However, in the next round, the team will start with same penalty points
                </li></ul></li>
                
              </ul>
            </li>
            <li>
              
              <ul className="nestedList">
              ROUND 2-
                <li><ul className="BulletNone"><li>Second round will be a knockout round, where two teams win face off
against each other. Loser will be eliminated and the winner moves on to the next round, subsequent similar rounds will carry on until only two teams are left
for the final showdown</li></ul></li>
                <li><ul className="BulletNone"><li>Restarts from checkpoint are allowed.</li></ul></li>
              </ul>
            </li>

          </ul>
        </Box>
        <Box>
          <Typography variant="h6">If any team faces any problem, they are supposed to report to the Event Co-Ordinator or
            Pool Volunteer without much delay.<br></br><br></br></Typography>
          

          <Box className="fee">
            <Typography variant="h3">Registration fee:</Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
             
            <li><ul className="BulletNone"><li>Free (for IIEST Students)</li></ul></li>
            <li><ul className="BulletNone"><li>Rs.50 (for non-IIEST Students)</li></ul></li>
          </ul>
            <Box sx={{ width: "100%" }} className="center1">
            <Button variant="contained" size="large" onClick={event => window.location.href = 'https://forms.gle/9Yr3SwWXFUFFZXsQ6'}>
              Register Now
            </Button>
          </Box>
          </Box>
          <Typography variant="h2" sx={{textAlign:"center", marginTop:"20px"}}>Event Coordinators</Typography>
          <Box className="contact">
            <EventMag person={person.person1} />
            <EventMag person={person.person2} />
            <EventMag person={person.person3} />
          </Box>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
