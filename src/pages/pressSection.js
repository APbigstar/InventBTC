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

import PressCard from "../components/PressCard";
import ProjectCard from "../components/ProjectCard";

import { sliderSettings, PressData } from "../constant";

const PressSection = () => {
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
          mb: theme.gaps[3],
        }}
      >
        <h1
          style={{
            fontSize: theme.fontSize.subTitle,
            marginBottom: theme.gaps[3],
            textTransform: "uppercase",
          }}
        >
          CURATED PROJECTS
        </h1>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "minmax(0, 1fr)"
              : "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
            gap: "97px",
          }}
        >
          {PressData.map((item, index) => {
            if (index === 0) {
              return (
                <ProjectCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  amount={item.amout}
                  percent={item.percent}
                  leftDays={item.leftDays}
                />
              );
            } else {
              return (
                <PressCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  explain={item.explain}
                />
              );
            }
          })}
        </Box>
        {/* <Slider {...sliderSettings}>
          {PressData.map((item, index) => (
            <PressCard
              key={index}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))}
        </Slider> */}
      </Box>
    </React.Fragment>
  );
};

export default PressSection;
