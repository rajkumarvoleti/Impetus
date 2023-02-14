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

  background: `url(/images/road.png)  no-repeat  `,

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
  ".nestedList": {
    margin: "0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/valorant");
  };
  const goBack = () => {
    router.push("/events/lineFollower");
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
      name: "Avi ",
      phone: "+91 7277876396",
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
            A good strategy and designing build the path from an ordinary
            concept to an extraordinary success.
            To identify and promote all such visionary geniuses, the Department of Mechanical
            Engineering, IIEST Shibpur in collaboration with Namekart brings to you, Roadmap-
            Strategy Design Contest, in its annual tech-fest IMPETUS 6.0.
            Roadmap is a team event. Each team will be given a problem statement related to a
            real-life business case. They have to evaluate, rationalize and then present it in the
            best possible way in front of a jury composed of IIM Alumni. RoadMap is your
            chance to practice case-solving and be challenged by a panel of industry-leading
            professionals, which is an experience rarely gained while studying.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "21px" }}>
            Dates: Round 1 + Round 2 : 18th February, 2023 12:45pm

          </ul>
          <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
            <Button
              variant="contained"
              size="large"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/7zy4cKVY6sJWeFnp8")
              }
            >
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          {/* <Typography variant="h2">Objective</Typography> */}
          {/* <Typography sx={{ textIndent: "60px" }} variant="p">

          </Typography> */}
          <Typography variant="h2">Basic Information</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  Team size: 2 to 4 members
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>No. of Rounds: 2</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Duration of Round 2: 1hr</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Venue: Conference Hall, 2nd floor , Department of Mechanical
                  Engineering</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Prizes worth <b>Rs.15000/-</b>
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Last date of Registration: 18/02/23; 11:00 am
                </li>
              </ul>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            <ul className="bulletArrow">
              <li>
                <ul className="nestedList">
                  Round 1 -
                  <li>
                    <ul className="BulletNone">
                      <li>
                        Problem statement will be provided to teams on __th February, by 8 pm.
                        Each team has to plan a strategy of approach and submit their solution in
                        Presentation with a maximum of 10 slides and a 2 page executive summary of the
                        deck in PDF format by 11 am on 18th February, 2023. Top performers of Round 1
                        will be announced on 18th February, who will then participate in Round 2.
                      </li>
                    </ul>
                  </li>
                  {/* Problem statement will be provided to teams on __th February, by 8 pm.
                  Each team has to plan a strategy of approach and submit their solution in
                  Presentation with a maximum of 10 slides and a 2 page executive summary of the
                  deck in PDF format by 11 am on 18th February, 2023. Top performers of Round 1
                  will be announced on 18th February, who will then participate in Round 2.<br></br><br></br> */}
                  Submit your strategy in pdf format by 11 am on 18th February, 2023.<br></br><br></br>
                  NOTE:-
                  <li>
                    <ul className="BulletNone">
                      <li>
                        Only team leaders should fill the above given submission form.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="BulletNone">
                      <li>
                        Problem Statement will be released on the SME social media pages and
                        website of Impetus 6.0.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="BulletNone">
                      <li>
                        Mention team leader name, team members name, college name, department
                        and contact details of team leader on the first page of the documents to be
                        submitted.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="BulletNone">
                      <li>
                        Rename the files as Team Leader name_College name_Department before
                        submitting.
                      </li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li>
                <ul className="nestedList">
                  Round 2 -
                  <li>
                    <ul className="BulletNone">
                      <li>
                        This would be a presentation round which will be conducted on 18th
                        March from 1:00 pm. Here the esteemed judges will evaluate the work and findings
                        of the top 6 teams.
                      </li>
                    </ul>
                  </li>

                </ul>
              </li>





            </ul>
          </Typography>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  The event will take place in the conference hall in the Department of
                  Mechanical Engineering.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  The Panel’s decision will be final. However, in case of any factual
                  discrepancies (if present), it will be dealt separately.
                </li>
              </ul>
            </li>

          </ul>

          <Typography variant="h2">Rewards</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  Cash prize worth Rs. 15,000 to be awarded to the winners.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Strategy internships at Namekart.
                </li>
              </ul>
            </li>

          </ul>
        </Box>
        <Box>


          <Box className="fee">
            <Typography variant="h3">Registration fee:</Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
              <li>
                <ul className="BulletNone">
                  <li>Free (for IIEST Students)</li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>Rs. 30(for non-IIEST Students)</li>
                </ul>
              </li>
            </ul>
            <Box sx={{ width: "100%" }} className="center1">
              <Button
                variant="contained"
                size="large"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/7zy4cKVY6sJWeFnp8")
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
            <EventMag person={person.person1} />
            {/* <EventMag person={person.person2} /> */}
          </Box>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
