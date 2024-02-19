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

const FeedbackCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          ...theme.container,
          alignItems: "flex-start",
          width: "570px",
          ml: props.index % 2 === 0 && "auto !important",
        }}
      >
        <Box
          sx={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: theme.background.black,
            mr: theme.gaps[2],
          }}
        />
        <Box sx={{ flex: 1 }}>
          <h6
            style={{ fontSize: "20px", fontWeight: 900, lineHeight: "24.2px" }}
          >
            {props.title}
          </h6>
          <p
            style={{ fontSize: "20px", fontWeight: 400, lineHeight: "24.2px" }}
          >
            {props.content}
          </p>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FeedbackCard;
