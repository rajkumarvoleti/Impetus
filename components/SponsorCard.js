import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
// import "../components/a.css"

const styles = {
    height: "250px",
    width: "400px",
    
  };


export default function SponsorCard(){
    return (
    <Box sx={styles} className="card">
        <Image src="/images/cocacola.png" alt="card" width="300" height="210" />
        
    </Box>
    );
}