import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Logo from "../assets/images/Footer_logo.png";
import MailCon from "../assets/images/mail_icon.png";
import FaceBookIcon from "../assets/images/facebook.png";
import DiscordIcon from "../assets/images/discord.png";
import TwitterIcon from "../assets/images/twitter.png";
import UtubuIcon from "../assets/images/utubu.png";

const pages = [
  { name: "EXPLORE", link: "/", menuItems: [] },
  { name: "FEATURED PROJECTS", link: "/", menuItems: [] },
  { name: "START A PROJECT", link: "/", menuItems: [] },
  { name: "TREASURY", menuItems: [], link: `/` },
];

function Footer(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.background.footer,
        padding: "60px",
      }}
    >
      <Box
        sx={{
          ...theme.container,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "145px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img src={Logo} alt="logo Images" style={{ width: "72px" }} />
        </Box>
        <Box
          sx={{
            ...theme.container,
            alignItems: "flex-start",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: "24px",
            borderBottom: "1px solid grey",
          }}
        >
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "235px",
            }}
          >
            <Box
              sx={{
                ...theme.container,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "220px",
              }}
            >
              <Box>
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    opacity: "0.7",
                    marginBottom: "13px",
                  }}
                >
                  Explore
                </h6>
                <Box
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                  }}
                >
                  <a href="#">What We Do</a>
                  <a href="#">Funding</a>
                </Box>
              </Box>
              <Box>
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    opacity: "0.7",
                    marginBottom: "13px",
                  }}
                >
                  About
                </h6>
                <Box
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                  }}
                >
                  <a href="#">About Us</a>
                  <a href="#">Blog</a>
                  <a href="#">Trust & Safety</a>
                  <a href="#">Help & Support</a>
                  <a href="#">Press</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </Box>
              </Box>
              <Box>
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    opacity: "0.7",
                    marginBottom: "13px",
                  }}
                >
                  Entrepreneurs
                </h6>
                <Box
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                  }}
                >
                  <a href="#">How It Works</a>
                  <a href="#">Creators Corner</a>
                  <a href="#">Fees</a>
                </Box>
              </Box>
            </Box>
            <Box sx={{ ...theme.container, flexDirection: "column" }}>
              <img src={MailCon} alt="Icon" style={{ marginBottom: "20px" }} />
              <h6
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 700,
                }}
              >
                Get it first
              </h6>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  lineHeight: "24px",
                  marginBottom: "41px",
                }}
              >
                Discover new innovations in the <br /> InventOnBTC newsletter
              </p>
              <Box sx={{ marginBottom: "10px", width: "282px" }}>
                <TextField
                  id="outlined-basic"
                  label="Your email address"
                  variant="filled"
                  name="first_name"
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: theme.background.white,
                      border: "none",
                      width: "100%",
                    },
                  }}
                  sx={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  width: "282px",
                  marginBottom: "25px",
                }}
              >
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: theme.colors.primary,
                    padding: "0px",
                    mr: "12px",
                    "&.Mui-checked": {
                      color: theme.colors.primary,
                    },
                  }}
                />
                <p>
                  I agree to the{" "}
                  <a
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                      fontWeight: 900,
                    }}
                  >
                    Terms of Use
                  </a>{" "}
                  and have read and understand the{" "}
                  <a
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                      fontWeight: 900,
                    }}
                  >
                    Privacy Policy
                  </a>
                </p>
              </Box>
              <Button
                className="navbar-item"
                variant="contained"
                sx={{
                  ...theme.buttons.primary,
                  width: "282px",
                }}
              >
                <span
                  style={{
                    display: isMobile ? "none" : "inline",
                  }}
                >
                  Sign me up
                </span>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              gap: "24px",
            }}
          >
            <Button
              className="navbar-item"
              variant="outlined"
              sx={{
                ...theme.buttons.secondary,
                width: "300px",
              }}
            >
              <span
                style={{
                  display: isMobile ? "none" : "inline",
                }}
              >
                BTC & STX
              </span>
            </Button>
            <img src={FaceBookIcon} alt="Icon" />
            <img src={TwitterIcon} alt="Icon" />
            <img src={UtubuIcon} alt="Icon" />
            <img src={DiscordIcon} alt="Icon" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...theme.container, padding: "15px", gap: theme.gaps[1] }}>
        <a style={{ padding: "12px", fontSize: "11px" }}>Terms of Use</a>
        <a style={{ padding: "12px", fontSize: "11px" }}>Privacy Policy</a>
        <a style={{ padding: "12px", fontSize: "11px" }}>Cookie Policy</a>
        <a style={{ padding: "12px", fontSize: "11px" }}>
          Do Not Sell My Personal Information
        </a>
        <a style={{ padding: "12px", fontSize: "11px" }}>Accessibility</a>
        <a style={{ padding: "12px", fontSize: "11px" }}>
          © 2024 InventOnBTC, Inc. All Rights Reserved
        </a>
      </Box>
    </Box>
  );
}
export default Footer;
