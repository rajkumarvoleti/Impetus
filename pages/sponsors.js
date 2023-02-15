import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../components/Contact";
import SponsorCard from "../components/SponsorCard";

export default function SponsorsPage() {
  const styles = {
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: "48px",
    },
    p: {
      mb: "100px",
    },
  };
  const sponsor = {
    sponsor1: {
      imgname: "Logiczap.png",
    },
    sponsor2: {
      imgname: "elearnmarkets.jpg",
    },
    sponsor3: {
      imgname: "idp.jpg",
    },
    sponsor4: {
      imgname: "iic.jpg",
    },
    sponsor5: {
      imgname: "IMechE.jpg",
    },
    sponsor6: {
      imgname: "Mahr.jpg",
    },
    sponsor7: {
      imgname: "moople.jpg",
    },
    sponsor8: {
      imgname: "ThinkAgainLab.jpg",
    },
    sponsor9: {
      imgname: "Alo bus.png",
    },
    sponsor10: {
      imgname: "Asawa insulation.png",
    },
    sponsor11: {
      imgname: "Dyna Temp.png",
    },
    sponsor12: {
      imgname: "Roasted.png",
    },
    sponsor13: {
      imgname: "7Spices.png",
    },
  };
  return (
    <Box sx={styles} className="center1">
      <Typography variant="h1">Sponsors</Typography>
      <Box className="cards">
        <SponsorCard sponsor={sponsor.sponsor1} />
        <SponsorCard sponsor={sponsor.sponsor2} />
        <SponsorCard sponsor={sponsor.sponsor3} />
        <SponsorCard sponsor={sponsor.sponsor4} />
        <SponsorCard sponsor={sponsor.sponsor5} />
        <SponsorCard sponsor={sponsor.sponsor6} />
        <SponsorCard sponsor={sponsor.sponsor7} />
        <SponsorCard sponsor={sponsor.sponsor8} />
        <SponsorCard sponsor={sponsor.sponsor9} />
        <SponsorCard sponsor={sponsor.sponsor10} />
        <SponsorCard sponsor={sponsor.sponsor11} />
        <SponsorCard sponsor={sponsor.sponsor12} />
        <SponsorCard sponsor={sponsor.sponsor13} />
      </Box>
      <Contact />
    </Box>
  );
}
