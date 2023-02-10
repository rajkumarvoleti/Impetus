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

  background: `url(/images/scrapyard_pg.jpg)  no-repeat  `,

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
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/quizzical");
  };
  const goBack = () => {
    router.push("/events/heatovation");
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
      name: "Bhawani Prasad Uddanti",
      phone: "+91 8374757468",
    },
    person2:
    {
      name: "Siddhi Suman",
      phone: "+91 7667709642",
    },
    person3:
    {
      name: "Anuvab Ghosh",
      phone: "+91 6291884285",
    }
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
            SCRAPYARD, an event that enables your untouched creativity and reasoning abilities to explode. Show case your innovative ideas as a team to create the assembly that fits the given problem statement.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "21px" }}>
            Dates:
            <li>-Round 1: 17th February, 2023  3:30pm-4:30pm</li>
            <li>-Round 2: 18th February, 2023  6:00pm-8:00pm</li>
          </ul>
          <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
            <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
              <Button variant="contained" size="large" onClick={event => window.location.href = 'https://forms.gle/dasQGHp3orck9jLp7'}>
                Register Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Objective</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            This is an event of 2 rounds. In the 1st round, Teams will be given a test of 30 questions. In the succeeding round the selected few teams will be given a problem statement on which they have to use their creative skills to make a structure out of scrap that fits the problem statement.
          </Typography>
          <Typography variant="h2">Basic Information</Typography>
          <ul>
            <li>
              ➜ Registration: Through G-forms, till 1 hour before commencement of Round 1
            </li>
            <li>
              ➜ Participation: A team of 2-3 members
            </li>
            <li>
              ➜ No. of Rounds: 2
            </li>
            <li>
              ➜ Venue: Round 1-Gallery 6, Round 2-1st Lobby
            </li>
            <li>
              Duration of each round: Round 1-1hr, Round 2-2hr

            </li>
            <li>
              ➜ Prizes worth <b>Rs.10000/-</b>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            <ul>
              <li>●	Scrapyard is going to be held in 2 rounds. Candidates qualified from the first round can only participate in second round (No lateral entry allowed)</li>
              <li>●	Registration will be done through google forms. And the registered teams will be provided with WhatsApp group link. Through which all the details about the event will be notified.</li>
              <li>
                <ul>
                  ●	Round 1:
                  <li>⮚	Round 1 is a test. It consists of 30 questions which should be completed within the given time limit of 1hr.</li>
                  <li>⮚	The Event team will provide the teams with OMR sheet along with the question paper. </li>
                  <li>
                    ⮚	After the completion of the test, the results will be notified through WhatsApp group.
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  ●	Round: 2
                  <li>⮚	The selected teams which are qualified through round-1 will be given a problem statement.</li>
                  <li>⮚	They should make a structure out of scrap that fits the problem statement with in 2hr time limit.</li>

                </ul>
              </li>

            </ul>
          </Typography>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul>
            <li>
              ●	Registered candidates are to be present in the venue before the commencement of the event.
            </li>
            <li>●	One participant cannot be a part of more than one team. </li>
            <li>●	No change in team structure is permitted after the team is registered.</li>
            <li>●	Usage of digital devices is strictly prohibited. Violation leads to immediate disqualification.</li>
            <li>

              <ul className="nestedList">
                ●	Round-1:
                <li>
                  ⮚	Participants are required to bring ball point pen along with them to fill the OMR sheet.
                </li>
                <li>
                  ⮚	Any type of malpractice will not be entertained during the test.
                </li>

              </ul>
            </li>
            <li>
              <ul className="nestedList">
                ●	Round-2:
                <li>⮚	All the requirements for this round will be provided.</li>
                <li>⮚	Plagiarism is prohibited.</li>
              </ul>
            </li>
            <li>
              ●	EVENT CO-ORDINATER HAVE THE FINAL SAY IN ALL ASPECTS IN THIS EVENT.
            </li>

          </ul>
        </Box>
        <Box>



          <Box className="fee">
            <Typography variant="h3"> Registration fee: </Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
             
            <li>-  Free (for IIEST Students)</li>
            <li>-  Rs.120 (for non-IIEST Students)</li>
          </ul>
            <Box sx={{ width: "100%" }} className="center1">
              <Button variant="contained" size="large" onClick={event => window.location.href = 'https://forms.gle/dasQGHp3orck9jLp7'}>
                Register Now
              </Button>
            </Box>
          </Box>
          <Typography variant="h2" sx={{ textAlign: "center", marginTop: "20px" }}>Event Coordinators</Typography>
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
