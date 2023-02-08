import { Box } from "@mui/system";
import { useLoading } from "./LoadingContext";

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
  const { startLoading, stopLoading } = useLoading();

  return (
    <Box sx={styles}>
      <video
        onLoadStart={startLoading}
        onLoad={stopLoading}
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
