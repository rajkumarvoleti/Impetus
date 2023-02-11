import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
// import "../components/a.css"

const styles = {
  height: "250px",
  width: "400px",
};

const SponsorCard=({sponsor})=> {
  return (
    <Box sx={styles} className="card">
      <Image src={`/images/${sponsor.imgname}`} alt="card" width="300" height="210" />
    </Box>
  );
}
export default SponsorCard;
