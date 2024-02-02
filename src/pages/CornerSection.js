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

import { CornerData } from "../constant";

const CornerSection = () => {
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
            textAlign: "center",
            color: theme.colors.primary,
            marginBottom: theme.gaps[3],
            textTransform: "uppercase",
          }}
        >
          Creators' coner
        </h1>
        <Box
          sx={{
            ...theme.container,
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {CornerData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "47%",
                p: theme.gaps[2],
                ...theme.container,
                alignItems: "stretch",
                border: "1px solid grey",
                marginBottom: theme.gaps[3],
              }}
            >
              <img
                style={{
                  width: "183px",
                  height: "183px",
                  marginRight: theme.gaps[2],
                }}
                src={item.image}
                alt="Corner"
              />
              <Box
                sx={{
                  ...theme.container,
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <Box sx={{ marginBottom: theme.gaps[5] }}>
                  <p
                    style={{
                      fontSize: theme.fontSize.content,
                      fontWeight: "bold",
                      marginBottom: theme.gaps[2],
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: theme.fontSize.small,
                      opacity: 0.6,
                    }}
                  >
                    {item.content}
                  </p>
                </Box>
                <p
                  style={{
                    fontSize: theme.fontSize.small,
                    opacity: 0.6,
                    color: theme.colors.blue,
                  }}
                >
                  {"Read More"}
                </p>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{ ...theme.container, flexDirection: "column", pb: theme.gaps[5] }}
      >
        <h1
          style={{
            fontSize: theme.fontSize.mainTitle,
            color: theme.colors.primary,
            marginBottom: theme.gaps[2],
          }}
        >
          Start or Support Bitcoin Projects{" "}
        </h1>
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
    </React.Fragment>
  );
};

export default CornerSection;
