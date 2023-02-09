import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import CarouselComp from "../components/CarouselComp";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import Image from "next/image";
import BackgroundParticles from "../components/BgParticles2";

export default function IAMPage() {
  const theme = useTheme();

  const styles = {
    width: "100vw",
    ">*": {
      zIndex: "3",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    h2: {
      mt: "20px",
      mb: "15px",
    },
    ".content": {
      zIndex: "3",
      maxWidth: "1000px",
      mt: "30px",
      p: {
        textIndent: "50px",
        textAlign: "justify",
        margin: "30px",
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".benefits": {
      maxWidth: "1000px",
      mt: "30px",
      ml: "10px",
      mr: "10px",
      div: {
        margin: "60px 0",
      },
    },
    ".pattern": {
      display: "flex",
      maxWidth: "90vw",
    },
    ".patternR": {
      maxWidth: "90vw",
      display: "flex",
      flexDirection: "row-reverse",
      flexGrow: "1",
    },
    ".pattern, .patternR": {
      alignItems: "center",
      justifyContent: "center",
    },
    ".patimg, .pattext": {
      width: "600px",
      height: "auto",
      maxWidth: "80vw",
      maxHeight: "600px",
      margin: "50px",
    },
    ".pattext": {
      textAlign: "justify",
    },
    ".pattext h3": {
      margin: "30px 0",
      fontSize: "32px",
      fontWeight: "600px",
    },
    [theme.breakpoints.down("md")]: {
      ".patimg, .pattext": {
        margin: "0",
      },
    },
  };

  return (
    <Box>
      <BackgroundParticles />
      <Box sx={styles} className="center1">
        <CarouselComp />
        <Typography variant="h1">Industry Academia Meet</Typography>
        <Typography variant="h4">19th February, 2023 - ?-? PM</Typography>
        <Box className="content">
          <Typography variant="p">
            {/* Industry-Academia Meet is a platform where we aim to establish a
            productive dialogue between the Industrial and Academic spheres,
            provide exposure to students and academicians about the current and
            future scenario of the Industrial environment, and enable them to
            upskill themselves and be future-proof and Industry- ready.
            <br></br>
            IMPETUS aims to create strong interactive communication between
            leading officials from multiple industries, academicians, and
            prospective students. The meet will cushion the process of campus
            engagement between the companies and the institute and provide a
            holistic perspective to their respective needs.
            <br></br>
            The interactive nature of the sessions and expert- led discussion
            panels will help the participants to have an enhanced learning
            experience. */}
            The industrial meet in IMPETUS is to foster a productive dialogue between industry and academia, provide exposure to students and academics about current and future industrial trends, and equip them with the skills to be future-proof and industry-ready. It seeks to establish interactive communication between industry leaders, academicians, and students, bridging the gap between the company and institute and offering a comprehensive understanding of their needs. The expert-led discussion panels and interactive sessions will enhance the learning experience for participants. This event aims to create a common ground for the collaboration of industry and academia, prioritize knowledge sharing, and facilitate thought-provoking discussions on best practices, employability, and talent identification in campus recruitment.
            <br></br>
            <br></br>

            <Typography variant="h2" sx={{ textIndent: "0" }}>Aim</Typography>
            <Typography variant="p">IMPETUS aims to create strong interactive communication between leading officials from multiple indus- tries, academicians and prospective students. The meet will cushion the process of campus engagement be- tween the companies and the insti- tute and provide a holistic perspective to their respective needs. It induces innovative practices, insights, scenar- ios. the interactive nature of the ses- sions and expert-led discussion panels will transcend the participants to an enhanced learning experience</Typography>
            <br></br><br></br>                  
            <Typography variant="h2" sx={{ textIndent: "0" }}>Takeaways for the Corporate
            </Typography>
            <Typography variant="p">
              <ul>
                <li>➜ Resolving technical issues through projects and consultancy</li>
                <li>➜  Presentation of viable solutions through sound studies and research publications by the top-notch aca- demicians of the institute
                </li>
                <li>➜ Innovative and time-effective strategies to ease the hiring process Active interaction of the industries with the scholars of the institute and to brainstorm issues and challenges faced by the respective members
                </li>
                <li>➜ Understand the insights and rate the institute
                </li>

              </ul>
              <br></br><br></br>
            </Typography>
            <Typography variant="h2" sx={{ textIndent: "0" }}>Benifits for the Institute
            </Typography>
            <Typography variant="p">
              <ul>
                <li>➜ A chance to meet and interact with elite officials, technical and HR heads from multiple sectors
                </li>
                <li>➜ Learn the basic fundamentals and the newest trends in campus hiring
                </li>
                <li>➜ To showcase the technical prowess of the institute and their success stories to the re- cruiters
                </li>
                <li>➜ An effort to change the landscape of campus recruitment in the pool of campus talent and remodel training and skill-building exercises to sculpt out the industry - ready young engineers to persuade recruiters
                </li>
                <li>➜ Way to enable students to choose the most relevant job</li>
                <li>➜ Develop a better employment ecosystem which is a win-win for the students, institute and corporate.</li>
              </ul>
            </Typography>


          </Typography>
          <br></br>
        </Box>
        <Box className="benefits">
          <Box className="pattern">
            <Image
              className="patimg"
              src="/images/Interaction.png"
              alt="card"
              width="400"
              height="400"
            />
            <Box className="pattext">
              <Typography variant="h3" fontSize={"30px"} align="left">
                Industry-Academia Interaction
              </Typography>
              <Typography variant="p">
                Active interaction between the industries and scholars of the
                institute and brainstorming prevalent issues and challenges -
                paving the way for future collaboration.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Animi, quia.
              </Typography>
            </Box>
          </Box>
          <Box className="patternR">
            <Image
              className="patimg"
              src="/images/Planning1.png"
              alt="card"
              width="400"
              height="400"
            />
            <Box className="pattext">
              <Typography variant="h3" fontSize={"30px"} align="left">
                Strategy Planning
              </Typography>
              <Typography variant="p">
                Innovative and time-effective strategies to ease the hiring
                process.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Animi, quia.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi, quia.
              </Typography>
            </Box>
          </Box>
          <Box className="pattern">
            <Image
              className="patimg"
              src="/images/Solution.png"
              alt="card"
              width="400"
              height="400"
            />
            <Box className="pattext">
              <Typography variant="h3" fontSize={"30px"} align="left">
                Solutions from Academicians
              </Typography>
              <Typography variant="p">
                Presentation of viable solutions through sound studies and
                research publications by the top- notch academicians of the
                institute.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi, quia.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi, quia.
              </Typography>
            </Box>
          </Box>
          <Box className="patternR">
            <Image
              className="patimg"
              src="/images/Networking.png"
              alt="card"
              width="400"
              height="400"
            />
            <Box className="pattext">
              <Typography variant="h3" fontSize={"30px"} align="left">
                Building Industry to Industry Connection
              </Typography>
              <Typography variant="p">
                An opportunity to interact with prominent delegates from other
                industries and research institutes during IMPETUS 2023.Lorem
                ipsum dolor sit amet amet consectetur adipisicing elit. Animi,
                quia.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography variant="h2" style={{ mt: "20px", mb: "15px" }}>
          Our Speakers
        </Typography>
        <Box className="contact">
          <ContactCard />
          <ContactCard />
        </Box>
        <Contact />
      </Box>
    </Box>
  );
}
