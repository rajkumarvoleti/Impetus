import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import SponsorCard from "../components/SponsorCard";

export default function SponsorsPage(){

    const styles={
        h1:{
            mt:"100px",
            mb:"50px",
            fontSize:"36px"
        },
        p:{
            mb:"100px",
        }
        
        
    };


    return (
        <Box sx={styles} className="center1">
            <Typography variant="h1">Sponsors</Typography>
            <Box className="cards">
                <SponsorCard/>
                <SponsorCard/>
                <SponsorCard/>
                <SponsorCard/>
                <SponsorCard/>
                <SponsorCard/>
                <SponsorCard/>
                <SponsorCard/>
                
                
            </Box>
            <Typography variant="p" >For any queries please contact</Typography>
        </Box>
    );
}
