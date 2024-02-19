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

const BlogCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box>
        <img
          src={props.img}
          alt="Img"
          style={{ width: "394px", marginBottom: "30px" }}
        />
        <h6
          style={{
            fontSize: "15.25px",
            fontWeight: 500,
            lineHeight: "24px",
            marginBottom: "80x",
            textAlign: "left",
          }}
        >
          {props.title}
        </h6>
        <p
          style={{
            fontSize: "15.25px",
            fontWeight: 500,
            lineHeight: "24px",
            marginBottom: "80x",
            opacity: 0.6,
            textAlign: "left",
          }}
        >
          {props.content}
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "18px",
            textAlign: "left",
          }}
        >
          {"Learn more >"}
        </p>
      </Box>
    </React.Fragment>
  );
};

export default BlogCard;
