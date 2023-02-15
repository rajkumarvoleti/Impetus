import { useTheme } from "@mui/material";
import { Box } from "@mui/system";

export default function EventDots({ currIdx, setCurrIdx }) {
  const theme = useTheme();

  const styles = {
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
    zIndex: "3",
    position: "fixed",
    mt: "65px",
    ml: "20px",
    div: {
      margin: "5px 0",
    },
    "div div": {
      width: "8px",
      height: "8px",
      backgroundColor: "white",
      borderRadius: "50%",
    },
    ".bigDot": {
      width: "15px",
      height: "15px",
    },
  };

  return (
    <Box sx={styles} className="center1">
      {[...Array(10)].map((x, i) => (
        <Box
          key={i}
          onClick={() => {
            setCurrIdx(i);
            console.log("hello");
          }}
        >
          <Box className={`${currIdx === i ? "bigDot" : ""}`} />
        </Box>
      ))}
    </Box>
  );
}
