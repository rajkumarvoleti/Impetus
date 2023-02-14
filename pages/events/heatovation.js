import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Contact from "../../components/Contact";
// import ContactCard from "../../components/ContactCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import EventMag from "../../components/EventManagement";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",
  background: `url(/images/heatovation_pg.jpg)  no-repeat  `,

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
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/scrapyard");
  };
  const goBack = () => {
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
  const person = {
    person1: {
      name: "Upendra Kikkari",
      phone: "+91 9704810737",
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
            HEATOVATION is an event organized by the Impetus 6.0 which invites
            participation from students with entrepreneurial/ problem-solving
            mindsets in the field of HVAC pan India. It would require its
            participants to present their solutions to the panel of judges and
            answer their queries based on the presentation.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "22px" }}>
            Dates: 17th February, 2023 3:00pm
          </ul>
        </Box>
        <Box className="data">
          <Typography variant="h2">Problem Statement</Typography>
          <Typography sx={{ textIndent: "60px" }} style={{}} variant="p">
            <ul className="bulletArrow">
              <li>
                <ul className="BulletNone">
                  <li>Effective desalination using solar power systems.</li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>Waste heat and district heating</li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>
                    Design of cooling vest for regulating body temperatures for
                    miners.
                  </li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>
                    Thermo-electric refrigeration for household applications
                  </li>
                </ul>
              </li>
            </ul>
            <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
              <Button
                variant="contained"
                size="large"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/7hvpvMP7NWcABpCF9")
                }
              >
                Submit Form
              </Button>
            </Box>
          </Typography>
          <Typography variant="h2">Objective</Typography>
          <Typography sx={{ textIndent: "60px" }} style={{}} variant="p">
            <ul className="bulletArrow">
              <li>
                <ul className="BulletNone">
                  <li>
                    You have to upload the presentation along with an abstract
                    of your idea (in less than 350 words) on the given link and
                    the top 5 performers will be selected for the second round.
                  </li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>
                    In the second round, the participants will be given an
                    opportunity to present the idea in front of the judges after
                    which top performers will be announced.
                  </li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>
                    Team size : Individual or group of a maximum of 2 members.
                  </li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>Event duration : 1 hour 15 minutes</li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>
                    Rules are subject to change and decisions of impetus team
                    are absolute and binding.
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
          <Typography variant="h2">Basic Information</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  Deadline for round 1– 2 days before commencement of the event
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Participation – team of maximum 2 members</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Expected Participation – 15+ teams</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>No. of Rounds – 2</li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  Prizes worth <b>Rs.8000/-</b>
                </li>
              </ul>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            The following event occur in two rounds. The first round will be an
            online pitch deck submission. You have to upload the presentation
            along with an abstract of the presentation on the given form link
            and the top 5 performers will be selected for the second round. In
            the second round, the participants will be given an opportunity to
            present the idea in front of the judges after which top performers
            will be announced.
          </Typography>

          <Typography variant="h2">Rules and Regulations</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="nestedList">
                BASIC RULES-
                <li>
                  <ul className="BulletNone">
                    <li>
                      This competition is open to every student from the
                      colleges all over India.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      Start-up idea presentation is a must for this competition.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      Formation of Teams: A maximum of 2 members is permitted
                      per team.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>A candidate can participate individually also.</li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      One participant cannot be a part of more than one team.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      No change in team structure is permitted after the team is
                      registered.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      Registration: Individuals/teams registered through this
                      form will only be considered valid.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                ROUND 1-
                <li>
                  <ul className="BulletNone">
                    <li>
                      This will be an online pitch deck submission round.
                      Participants have to submit their presentation (in .pptx
                      format) along with an abstract.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      The word limit of abstract should be strictly within 350
                      words (in .docx format).
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      Abstract should be precise and to the point and must be an
                      entrepreneurial/ problem-solving.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      Participants have to submit their files through the
                      provided link only.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      The last date for the round 1 will be three days before
                      the event and the result will be announced two days before
                      the event.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                ROUND 2-
                <li>
                  <ul className="BulletNone">
                    <li>This will be a presentation round.</li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      The participants will be given an opportunity to present
                      their idea in-front of the judges
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="BulletNone">
                    <li>
                      Time limit for the presentation is 10 minutes and another
                      5 minutes time will be given for interaction with the
                      judges.
                    </li>
                  </ul>
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
            <Typography variant="h3">Registration fee: </Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
              <li>
                <ul className="BulletNone">
                  <li> Free (for IIEST Students)</li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li> Rs.100 (for non-IIEST Students)</li>
                </ul>
              </li>
            </ul>
            {/* <Box sx={{ width: "100%" }} className="center1">
              <Button variant="contained" size="large" onClick={event => window.location.href = 'https://forms.gle/jEjFTbph1K6W3aH79'}>
                Register Now
              </Button>
            </Box> */}
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
