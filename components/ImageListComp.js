import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { repeat } from "lodash";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const styles = {
  width: "1000px",
  height: "450px",
  maxHeight: "90vh",
  maxWidth: "90vw",
  transform: "translateZ(0)",
  margin: "30px 0",
  gridTemplateColumns: {
    lg: "repeat(12,1fr) !important",
    md: "repeat(12,1fr) !important",
    sm: "repeat(6,1fr) !important",
    xs: "repeat(6,1fr) !important",
  },
};

export default function ImageListComp() {
  return (
    <ImageList sx={styles} rowHeight={200} gap={1}>
      {itemData.map((item, idx) => {
        const cols = item.cols;
        const rows = item.rows;

        return (
          <ImageListItem key={idx} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/pic1.jpg",
    // title: "pic1",
    cols: 6,
    rows: 4,
  },
  {
    img: "/images/pic2.jpg",
    // title: "Burger",
    cols: 3,
    rows: 2,
  },
  {
    img: "/images/pic3.jpg",
    // title: "Camera",
    cols: 3,
    rows: 2,
  },
  {
    img: "/images/pic4.jpg",
    // title: "Coffee",
    cols: 2,
    rows: 2,
  },
  {
    img: "/images/pic5.jpg",
    // title: "Mushrooms",
    cols: 4,
    rows: 6,
  },
  {
    img: "/images/pic6.jpg",
    // title: "Breakfast",
    cols: 6,
    rows: 6,
  },
  {
    img: "/images/pic7.jpg",
    // title: "Burger",
    cols: 3,
    rows: 3,
  },
  {
    img: "/images/pic8.jpg",
    // title: "Camera",
    cols: 3,
    rows: 2,
  },
  {
    img: "/images/pic9.jpg",
    // title: "Coffee",
    cols: 4,
    rows: 2,
  },
  {
    img: "/images/pic10.jpg",
    // title: "Mushrooms",
    cols: 2,
    rows: 4,
  },
];
