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

  background: `url(/images/Valorant_pg.jpg)  no-repeat  `,

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
    router.push("/events/fun");
  };
  const goBack = () => {
    router.push("/events/deathrace");
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
      name: "Anuvab Ghosh",
      phone: "+91 6291884285",
    },
    person2: {
      name: "Shreyash Manze",
      phone: "+91 7700001193",
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
            Valorant has found an exponentially rising popularity amid the
            youngsters today. So for the grand gaming event of Impetus 6, we
            bring to you a Valorant tournament, where teams of 5 each, lock
            horns to be the best of the best. It will be conducted in 3 rounds,
            a knockout round, the eliminations, and the semi final and the final
            clash will be a best of 3 matches. The winners take home total prize
            money worth Rs. 10000.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "21px" }}>
            Dates: 18th February, 2023 8:00pm
          </ul>
          <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
            <Button
              variant="contained"
              size="large"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/uod5aCaiKHrSE5tV7")
              }
            >
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Basic Information</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  Registration Fees: ₹250 per team, one time re-entry ₹100 per
                  team.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  Pre-requirements: Laptop with valorant and discord installed,
                  stable internet connection.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  Participation: team of 5 players, coach (not compulsory) and
                  one extra player tinformed before.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>Platform: Discord and Valorant.</li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>No. of rounds: 3 (elimination, semi-finals, finals).</li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>Duration of each round: 100mins</li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  Prizes worth <b>Rs.10000/-</b>
                </li>
              </ul>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "0px" }} variant="p">
            <ul className="bulletArrow">
              <li>
                <ul className="BulletNone">
                  <li>
                    Registration will be done through google form. Participants
                    will be required to join the discord server of Impetus 6.0.
                  </li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>The total teams will be divided into two pools.</li>
                </ul>
              </li>
              <li>
                <ul className="nestedList">
                  ROUND 1-
                  <li>
                    <ul className="BulletNone">
                      <li>
                        Each pool will have one match (best of 1) based on
                        knockout and teams moving forward will have more
                        knockouts based on the flow of the events, until 4 teams
                        are left. Overtime will be like ‘Endgame’ (after 12-12
                        score first team to get 13-12 score wins).
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
                      <li>
                        The teams will have match based on best of 1 and two
                        teams will be selected for finals. Overtime will be
                        normal competitive wise (after 12-12 score first team to
                        win two consecutive rounds wins).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="nestedList">
                  ROUND 3-
                  <li>
                    <ul className="BulletNone">
                      <li>
                        {" "}
                        Finals will be best of 3. Overtime rules same as ROUND
                        2.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li></li>
              <li></li>
            </ul>
          </Typography>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>The tournament will be only on Mumbai Server.</li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>All weapons are allowed.</li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  All the players must sit in the respective voice channel
                  through mobile/PC.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  By Patch notes 6.0, since Breeze and Bind are temporarily
                  removed from the game officially, hence; Ascent, Split, Haven,
                  Icebox, Fracture, Pearl, Lotus map will be played.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  The veto process will be explained by the respective admins.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Technical pause will be of 5 minutes.</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Tactical pause will be of 1 minute each (2 times, as per the
                  RIOT tactical timeout section).
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Coaches must be on mute during the game after the agent select
                  is done, and can unmute only in tactical timeout.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Only coaches are allowed to sit in the coach slot, no players
                  or managers are allowed to sit in the coach slot.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  The max time to wait will be 10 minutes, if the team does not
                  show in that 10 minute, the opponent will get a forfeit win.
                </li>
              </ul>
            </li>
          </ul>
        </Box>
        <Box>
          <Box className="fee">
            <Typography variant="h3">Registration fee: </Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
              {/* <li> Free (for IIEST Students)</li> */}
              <li>
                <ul className="BulletNone">
                  <li> Rs.250 </li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li> Rs.100 (for Rentry)</li>
                </ul>
              </li>
            </ul>
            <Box sx={{ width: "100%" }} className="center1">
              <Button
                variant="contained"
                size="large"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/uod5aCaiKHrSE5tV7")
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
            <EventMag person={person.person2} />
          </Box>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
