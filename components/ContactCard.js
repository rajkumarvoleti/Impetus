import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const styles = {
  height: "400px",
  width: "400px",
  img: {
    margin: "20px",
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

export default function ContactCard() {
  return (
    <Box sx={styles}>
      <Image src="/images/guy.png" alt="guy" height="200" width="200" />
      <Box>
        <Typography variant="h3" fontSize="25px">
          Priyanshu Choudary
        </Typography>
        <Typography variant="h4" fontSize="18px">
          CONVENER
        </Typography>
        <Typography variant="h5" fontSize="16px">
          priyanshu@techniche.org
        </Typography>
        <Typography varint="h5" fontSize="16px">
          +91 9799054122
        </Typography>
      </Box>
    </Box>
  );
}
