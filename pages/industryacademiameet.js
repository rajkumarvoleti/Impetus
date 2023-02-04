import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CarouselComp from "../components/CarouselComp";
import TimeLineComp from "../components/TimeLineComp";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import Image from "next/image";

export default function IAMPage() {
    const styles = {
        width: "100vw",
        // ml:"20px",
        // mr:"20px",
        h1: {
            m: "50px 0",
            fontSize: "60px",
            textAlign: "center",
        },
        h2: {
            mt:"20px", mb:"15px",
        },
        ".content": {
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
        },
        ".pattern": {
            display: "flex",
        },
        ".patternR": {
            display: "flex",
            flexDirection: "row-reverse",
            flexGrow: "1",
        },
        ".patimg": {
            width: "100%",
            flexGrow: "1",
            height: "100%",
            margin:"auto 0",
        },
        ".pattext": {
            margin: "auto 0",
            textAlign: "justify",
            width: "100%",
            padding:"20px",
        },

    };
                
    return (
        <Box sx={styles} className="center1">
            <CarouselComp />
            <Typography variant="h1">Industry Academia Meet</Typography>
            <Typography variant="h4">March 20, 2022 - 2-8 PM</Typography>
            <Box className="content">
                <Typography variant="p">
                    Industry-Academia Meet is a platform where we aim to establish a productive dialogue between the Industrial and Academic spheres, provide exposure to students and academicians about the current and future scenario of the Industrial environment, and enable them to upskill themselves and be future-proof and Industry- ready.
                    <br></br>
                    IMPETUS aims to create strong interactive communication between leading officials from multiple industries, academicians, and prospective students. The meet will cushion the process of campus engagement between the companies and the institute and provide a holistic perspective to their respective needs.
                    <br></br>
                    The interactive nature of the sessions and expert- led discussion panels will help the participants to have an enhanced learning experience.
                </Typography>
                <br></br>

            </Box>
            <Box className="benefits">
                <Box className="pattern">
                    <Image className="patimg" src="/images/Interaction.png" alt="card" width="400" height="400" />
                    <Box className="pattext">
                        <Typography variant="h3" fontSize={"30px"} align="left">Industry-Academia Interaction</Typography>
                        <Typography variant="p" >Active interaction between the industries and scholars of the institute and brainstorming prevalent issues and challenges - paving the way for future collaboration.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.
                        </Typography>
                    </Box>
                </Box>
                <Box className="patternR">
                    <Image className="patimg" src="/images/Planning1.png" alt="card" width="400" height="400" />
                    <Box className="pattext">
                        <Typography variant="h3" fontSize={"30px"} align="left">Strategy Planning</Typography>
                        <Typography variant="p" >Innovative and time-effective strategies to ease the hiring process.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.
                        </Typography>
                    </Box>
                </Box>
                <Box className="pattern">
                    <Image className="patimg" src="/images/Solution.png" alt="card" width="400" height="400" />
                    <Box className="pattext">
                        <Typography variant="h3" fontSize={"30px"} align="left">Solutions from Academicians</Typography>
                        <Typography variant="p" >Presentation of viable solutions through sound studies and research publications by the top- notch academicians of the institute.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.
                        </Typography>
                    </Box>
                </Box>
                <Box className="patternR">
                    <Image className="patimg" src="/images/Networking.png" alt="card" width="400" height="400" />
                    <Box className="pattext">
                        <Typography variant="h3" fontSize={"30px"} align="left">Building Industry to Industry Connection</Typography>
                        <Typography variant="p" >An opportunity to interact with prominent delegates from other industries and research institutes during IMPETUS 2023.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quia.
                        </Typography>
                    </Box>
                </Box>
               
            </Box>
            <Typography variant="h2" style={{mt:"20px", mb:"15px",}}>Our Speakers</Typography>
            <Box className="contact">
                <ContactCard />
                <ContactCard />
            </Box>
            <Contact />
        </Box>
    );
}
