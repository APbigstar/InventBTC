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
  Slider,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import HeartIcon from "../assets/images/hero_img.png";

const ProjectCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "400px",
          border: "1px solid gray",
          margin: "auto",
          cursor: "pointer",
        }}
        onClick={() => navigate("/project_detail")}
      >
        <img
          style={{ width: "100%", margin: "auto" }}
          src={props.image}
          alt="Project Image"
        />
        <Box sx={{ p: theme.gaps[2], height: "338px" }}>
          <Box
            sx={{
              ...theme.container,
              justifyContent: "space-between",
              mb: theme.gaps[2],
            }}
          >
            <p style={{ color: theme.colors.secondary }}>FUNDING</p>
            <FavoriteBorderIcon />
          </Box>
          <p
            style={{
              fontSize: theme.fontSize.content,
              fontWeight: "bold",
              marginBottom: theme.gaps[1],
            }}
          >
            {props.title}
          </p>
          <p
            style={{
              fontSize: theme.fontSize.small,
              marginBottom: theme.gaps[2],
            }}
          >
            {props.content}
          </p>
          <p style={{ marginBottom: theme.gaps[2] }}>{props.type}</p>
          <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
            <p>
              <span
                style={{ fontSize: theme.fontSize.content, fontWeight: "bold" }}
              >
                ${props.amount}
              </span>
              USD raised
            </p>
            <p>
              <span
                style={{ fontSize: theme.fontSize.content, fontWeight: "bold" }}
              >
                {props.percent}%
              </span>
            </p>
          </Box>
          <Slider
            size="big"
            aria-label="Big"
            sx={{
              height: "10px",
              paddingTop: theme.gaps[1],
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
            defaultValue={props.percent}
            valueLabelDisplay="auto"
          />
          <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
            <AccessTimeIcon sx={{ marginRight: "7px" }} />
            <p>{props.leftDays}days left</p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectCard;
