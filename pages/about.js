import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CarouselComp from "../components/CarouselComp";
import TimeLineComp from "../components/TimeLineComp";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";

export default function AboutPage() {
  const styles = {
    width: "100vw",
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
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
  };

  return (
    <Box sx={styles} className="center1">
      <CarouselComp />
      <Typography variant="h1">IMPETUS</Typography>
      <Box className="content">
        <Typography variant="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam non
          aut qui id nam libero repellat molestias, fugit voluptates alias
          perspiciatis? Numquam ad voluptas dolores ducimus ratione doloremque a
          fugit. Nostrum exercitationem asperiores ad impedit. Quisquam nemo
          iure atque libero, at harum repellendus suscipit sed mollitia vel
          nostrum rerum a nam veritatis cum iusto dignissimos. Aspernatur, non?
          Inventore, sapiente. Minima? Nisi esse delectus ab repellendus
          nesciunt error, animi quod aperiam repudiandae sed? Totam, amet?
          Maxime laboriosam rerum suscipit. Sint in libero nam iusto cumque
          reiciendis impedit officiis! Excepturi, recusandae fugit.
        </Typography>
      </Box>
      <Box className="contact">
        <ContactCard />
        <ContactCard />
      </Box>
      <Contact />
    </Box>
  );
}
