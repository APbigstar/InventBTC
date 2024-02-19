import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogCard from "../components/BlogCard";

import { BlogData } from "../constant";

const Blogs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          p: theme.gaps[3],
          background: theme.background.white,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            textTransform: 700,
            marginBottom: theme.gaps[2],
            textTransform: "uppercase",
          }}
        >
          Blog
        </h1>

        <p style={{ fontSize: "24px", lineHeight: "24px" }}>
          Keep up-to date on the Bitcoin Economy
        </p>
        <Box
          sx={{
            ...theme.container,
            gap: "70px",
            marginTop: "65px",
          }}
        >
          {BlogData.map((item, index) => {
            return (
              <BlogCard
                key={index}
                img={item.image}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Blogs;
