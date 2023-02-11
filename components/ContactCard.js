import { useState , useEffect} from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

const styles = {
  height: "400px",
  width: "400px",
  img: {
    margin: "10px",
  },
  "div h4": {
    margin: "10px",
  },
  ".title": {
    display: "flex !important",
    flexDirection: "column",
  },

  display: "flex !important",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const ContactCard = ({ person }) => {

  const [hover, setHover] = useState(false);

  const onHover = () => setHover(true);
  const offHover = () => setHover(false);
  const toggleHover = () => setHover(!hover);


  return (
    <Box sx={styles} className="pcard">
      <Image
        className={`profile ${hover ? "profileHover" : ""}`}
        // ({person.imgname}="#")?
        onMouseEnter={onHover}
        onClick={toggleHover}
        onMouseLeave={offHover}
        src={`/images/${person.imgname}`}
        style={{ borderRadius: "50%" }}
        alt="guy"
        height="200"
        width="200"
        onClick={clicked}
      />

      <Box className="title">
        <Typography variant="h3" fontSize="25px">
          {person.name}
        </Typography>
        <Typography variant="h4" fontSize="18px">
          {person.post}
        </Typography>

        <Typography varint="h5" fontSize="16px">
          {person.phone}
        </Typography>
      </Box>

      <Box
        onMouseEnter={onHover}
        onClick={toggleHover}
        onMouseLeave={offHover}
        className={`text ${hover ? "textHover" : ""}`}
      >
        {/* <a href="#">
          <FacebookIcon />
        </a> */}
        <a href={person.insta}>
          <InstagramIcon />
        </a>
        <a href={person.link}>
          <LinkedInIcon />
        </a>
      </Box>
    </Box>
  );
};

export default ContactCard;
