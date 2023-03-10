import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const styles = {
  height: "180px!IMPORTANT",
  width: "400px",
  img: {
    margin: "10px",
  },
  "div h4": {
    margin: "10px",
  },
  div: {
    display: "flex !important",
    flexDirection: "column",
  },

  display: "flex !important",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const EventMag=({person})=>{
  return (
    <Box sx={styles} className="pcard">
      

      <Box className="title">
        <Typography variant="h3" fontSize="25px">
          {person.name}
        </Typography>
        <Typography variant="h4" fontSize="18px">
          {person.post}
        </Typography>
        <Typography variant="h5" fontSize="16px">
          
        </Typography>
        <Typography varint="h5" fontSize="16px">
          {person.phone}
        </Typography>
      </Box>

      
    </Box>
  );
}

export default EventMag;
