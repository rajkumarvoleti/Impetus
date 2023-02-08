import { Box } from "@mui/system";

const styles = {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "absolute",
  zIndex: 1,

  "#bgVideo": {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    filter: "brightness(50%)",
  },
};

export default function HomePageVideo() {
  return (
    <Box sx={styles}>
      <video
        onLoadStart={() => console.log("loading")}
        onLoad={() => console.log("loaded")}
        autoPlay
        muted
        loop
        id="bgVideo"
      >
        <source src="images/bgvideo1.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
