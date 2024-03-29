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

import ProjectCard from "../components/ProjectCard";

import { sliderSettings, ProjectsData } from "../constant";

const ProjectSection = () => {
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
        }}
      >
        <h1
          style={{
            fontSize: theme.fontSize.subTitle,
            textAlign: "left",
            color: theme.colors.black,
            marginBottom: theme.gaps[3],
            textTransform: "uppercase",
            fontWeight: "900",
          }}
        >
          TRENDING PROJECTS
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
          {ProjectsData.map((item, index) => (
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
          ))}
        </Box>
        {/* <Slider {...sliderSettings}>
          
        </Slider> */}
      </Box>
    </React.Fragment>
  );
};

export default ProjectSection;
