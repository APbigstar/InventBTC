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

import FeedbackCard from "../components/FeedbackCard";

import { FeedbackData } from "../constant";

const Feedback = () => {
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
            fontSize: "72px",
            textTransform: 900,
            marginBottom: theme.gaps[2],
          }}
        >
          What People Are Saying
        </h1>

        <p style={{ fontSize: "24px", lineHeight: "24px", opacity: 0.6 }}>
          Don't just take our word for it. Here's what our satisfied startup
          founders and <br /> backers have to say about their experience with
          our crowdfunding platform.
        </p>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "minmax(0, 1fr)"
              : "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "97px",
            marginTop: "65px",
          }}
        >
          {FeedbackData.map((item, index) => {
            return (
              <FeedbackCard
                key={index}
                index={index}
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

export default Feedback;
