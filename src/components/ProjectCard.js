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

  const handleRedirectProjectDetail = () => {
    localStorage.setItem("selectedProjectImage", props.image);
    localStorage.setItem("selectedProjectTitle", props.title);
    navigate(`/project_detail/`);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "366px",
          border: "1px solid gray",
          cursor: "pointer",
        }}
        onClick={handleRedirectProjectDetail}
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
            <p style={{ color: theme.colors.green, fontWeight: "900" }}>
              FUNDING
            </p>
            <FavoriteBorderIcon sx={{ opacity: 0.4 }} />
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
          <p
            style={{ marginBottom: theme.gaps[2], textTransform: "uppercase" }}
          >
            {props.type}
          </p>
          <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
            <div style={{ fontSize: theme.fontSize.xsmall }}>
              <span
                style={{ fontSize: theme.fontSize.small, fontWeight: "bold" }}
              >
                <div dangerouslySetInnerHTML={{ __html: props.amount }}></div>
              </span>
            </div>
            <p>
              <span
                style={{
                  fontSize: theme.fontSize.xsmall,
                  fontWeight: "bold",
                  opacity: 0.6,
                }}
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
            <p style={{ marginBottom: "11px" }}>{props.leftDays}days left</p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectCard;
