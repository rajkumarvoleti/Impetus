import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../components/ContactCard";

export default function TeamPage() {
  const theme = useTheme();

  const styles = {
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: "36px",
    },
    div: {
      display: "grid",
      // gridGap:"10px",
      mb:"50px",
      gridTemplateColumns: "1fr 1fr",
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr",
      },
    },
  };

  return (
    <Box sx={styles} className="center1">
      <Typography variant="h1">Contact Us</Typography>
      <Box>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </Box>
    </Box>
  );
}
