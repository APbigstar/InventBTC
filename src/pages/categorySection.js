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

import CategoryLogo from "../assets/images/Footer_logo.png";

import { CategoryData } from "../constant";

const CategorySection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  return (
    <React.Fragment>
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          p: theme.gaps[3],
        }}
      >
        <img
          style={{ marginBottom: theme.gaps[2] }}
          src={CategoryLogo}
          alt="Logo"
        />
        <h1
          style={{
            fontWeight: "bold",
            fontSize: theme.fontSize.subTitle,
            textTransform: "uppercase",
            marginBottom: theme.gaps[2],
          }}
        >
          Which Categories are you interested in?
        </h1>
        <p
          style={{
            fontSize: theme.fontSize.medium,
            textTransform: "uppercase",
            marginBottom: theme.gaps[5],
          }}
        >
          Discover projects that align with your interests
        </p>
        <p
          style={{
            fontSize: theme.fontSize.medium,
            textTransform: "uppercase",
            marginBottom: theme.gaps[3],
          }}
        >
          Explore the top categories
        </p>
        <Box
          sx={{
            ...theme.container,
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          {CategoryData.map((item, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <img src={item.image} alt="Category" />
              <p
                style={{
                  fontSize: theme.fontSize.medium,
                  textTransform: "uppercase",
                }}
              >
                {" "}
                {item.title}{" "}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CategorySection;
