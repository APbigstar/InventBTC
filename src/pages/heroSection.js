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

import HeroImg from "../assets/images/hero_img.png";

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  return (
    <React.Fragment>
      <Box
        sx={{
          ...theme.container,
          background: theme.background.primary,
          justifyContent: "space-between",
          py: theme.gaps[3],
        }}
      >
        <Box sx={{ paddingLeft: "120px" }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
              marginBottom: theme.gaps[2],
            }}
          >
            Welcome to the Future <br /> of Crowdfunding
          </h1>
          <p
            style={{
              fontSize: theme.fontSize.content,
              color: theme.colors.white,
              marginBottom: theme.gaps[5],
            }}
          >
            Join the revolution and support groundbreaking Bitcoin based
            projects
          </p>
          <Button
            className="navbar-item"
            variant="contained"
            sx={{
              ...theme.buttons.primary,
            }}
          >
            <span
              style={{
                display: isMobile ? "none" : "inline",
              }}
            >
              Get Started
            </span>
          </Button>
        </Box>
        <img src={HeroImg} alt="Hero Image" />
      </Box>
    </React.Fragment>
  );
};

export default HeroSection;
