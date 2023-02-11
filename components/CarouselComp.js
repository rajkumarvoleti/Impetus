import { Box } from "@mui/system";
import Image from "next/image";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import { Typography } from "@mui/material";

export default function CarouselComp() {
  const carousel = useRef(null);

  const handleEnd = ({ index }) => {
    if (index == 2) {
      setTimeout(() => {
        carousel.current?.goTo(0);
      }, 1000);
    }
  };

  // const urls = [Image1.src, Image2.src, Image3.src];
  const urls = ["/images/pic5.jpg", "/images/pic2.jpg", "/images/pic1.jpg"];

  const styles = {
    position: "relative",
    width: "100vw",
    aspectRatio: {
      lg: "2/1",
      md: "1/1",
      sm: "4/5",
      xs: "4/5",
    },
    maxWidth: "800px",
    maxHeight: "90vh",
  };

  const styles2 = {
    width: "100vw",
    mt: "100px",
  };

  return (
    <Box sx={styles2} className="center1">
      <Carousel
        ref={carousel}
        showArrows={false}
        enableAutoPlay={true}
        onNextEnd={handleEnd}
        autoPlaySpeed={3000}
        enableMouseSwipe={false}
        pagination={false}
      >
        {urls.map((url) => (
          <Box key={url} sx={styles}>
            <Image
              src={url}
              alt="abacus"
              layout="fill"
              objectFit="cover"
              key={url}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
