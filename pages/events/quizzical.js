import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Contact from "../../components/Contact";
import ContactCard from "../../components/ContactCard";

const imageStyles = {
  width: "80vw",
  height: "80vh",

  background: `url(/images/quizzical_pg.jpg)  no-repeat  `,
   

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  margin: "50px",
  textAlign:"justify",
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
  return (
    <Box sx={{ width: "100vw" }} className="center1">
      <Box className="center1">
        <Box sx={imageStyles}></Box>
      </Box>
      <Box sx={dataStyles} className="data">
        <Box>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            magnam unde quam quis doloremque soluta reiciendis rem modi
            voluptate iure amet pariatur laudantium fuga saepe architecto at
            possimus sit dignissimos. Quo animi omnis tempore cupiditate
            eligendi asperiores reprehenderit?
          </Typography>
          <Typography variant="p">Date: 01/02/03 05:06pm</Typography>
          <Box sx={{ width: "100%" }} className="center1">
            <Button variant="contained" size="large">
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{ textIndent: "60px" }} variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            molestiae hic quidem enim libero odit fuga adipisci minima dolorem
            vitae quam distinctio in nesciunt doloribus, sapiente voluptates?
            Natus, expedita ipsam. Perferendis ullam officia voluptatum atque
            corporis sint possimus hic?
          </Typography>
          <ul>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h2">Judging Criteria</Typography>
          <ul>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
            <li>
              ➜ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              reprehenderit.
            </li>
          </ul>
          <Box className="fee">
            <Typography>Registration fee: 1500</Typography>
            <Button variant="contained">Register Now</Button>
          </Box>
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
