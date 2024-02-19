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
import Coin1 from "../assets/images/coin_1.png";
import Coin2 from "../assets/images/coin_2.png";

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
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
            Crowdfunding for <br /> Bitcoin start-ups
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
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              gap: theme.gaps[2],
            }}
          >
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
            <Button
              className="navbar-item"
              variant="outlined"
              sx={{
                ...theme.buttons.secondary,
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
        </Box>
        <img src={HeroImg} alt="Hero Image" />
        <Box sx={{ position: "absolute", left: "121px", bottom: "76px" }}>
          <p style={{ color: theme.colors.white, marginBottom: theme.gaps[1] }}>
            Fund with
          </p>
          <Box sx={{ ...theme.container, gap: theme.gaps[2] }}>
            <img src={Coin1} alt="Coin Icon" />
            <img src={Coin2} alt="Coin Icon" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default HeroSection;
