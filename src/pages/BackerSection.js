import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Checkbox, Button, TextField } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeImage from "../assets/images/backer_fore_img.png";
import MainImage1 from "../assets/images/backer_main_image_1.png";
import MainImage2 from "../assets/images/backer_main_image_2.png";
import StepIcon1 from "../assets/images/backer_step_icon_1.png";
import StepIcon2 from "../assets/images/backer_step_icon_2.png";
import StepIcon3 from "../assets/images/backer_step_icon_3.png";
import StepIcon4 from "../assets/images/backer_step_icon_4.png";
import Coin1 from "../assets/images/coin_1.png";
import Coin2 from "../assets/images/coin_2.png";
import XverseIcon from "../assets/images/xverse_icon.png";
import LeatherIcon from "../assets/images/leather_icon.png";

const BackerSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "440px",
          backgroundImage: `url(${ForeImage})`,
          backgroundSize: "cover",
        }}
      />
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          gap: theme.gaps.sectionGap,
        }}
      >
        <Box sx={{ ...theme.container, padding: "108px", gap: "97px" }}>
          <img src={MainImage1} alt="Image" />
          <div style={{ textAlign: "center", flex: 1 }}>
            <h1
              style={{
                fontSize: "48px",
                lineHeight: "44.8px",
                marginBottom: "40px",
              }}
            >
              Fund the next big thing <br /> on{" "}
              <span style={{ color: theme.colors.primary }}>Bitcoin</span>
            </h1>
            <p style={{ lineHeight: "24px" }}>
              Invent on BTC gives you access and opportunity to support
              groundbreaking Bitcoin innovations among <br /> many different
              categories. This is your chance to get on the ground floor and
              support these gems who are <br /> sometimes offering amazing perks
              to their early supporters. Every day you will find exciting new
              ideas <br />
              taking flight on the platform. <br /> With our amazing and feature
              rich platform we’ll make crowdfunding exciting and give you access
              that has <br /> never been seen before in the Blockchain space.
            </p>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "68px",
          background: theme.background.sectionColor,
          ...theme.container,
          flexDirection: "column",
          gap: theme.gaps[3],
        }}
      >
        <Box sx={{ ...theme.container }}>
          <h3 style={{ fontSize: theme.fontSize.subTitle }}>
            Bringing you{" "}
            <span style={{ color: theme.colors.blue }}>
              CURATED{" "}
              <Checkbox
                defaultChecked
                sx={{
                  color: theme.colors.blue,
                  padding: "0px",
                  mr: "12px",
                  "&.Mui-checked": {
                    color: theme.colors.blue,
                  },
                }}
              />
            </span>{" "}
            projects
          </h3>
        </Box>
        <p style={{ lineHeight: "24px", textAlign: "center" }}>
          Curated Projects on the Invent On BTC Platform are marked with the
          blue tick. <br /> It is only given to those who have satisfied the
          requirements set by the Invent On BTC platform
        </p>
        <p
          style={{
            lineHeight: "24px",
            textAlign: "center",
            color: theme.colors.blue,
            fontWeight: 600,
          }}
        >
          With curated projects you can get even more in-depth information about
          projects like analytics, founder
          <br /> interviews and a chance to know more about the vision and
          interact with the team through twitter spaces.
        </p>
      </Box>
      <Box
        sx={{
          padding: "97px",
          ...theme.container,
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ fontSize: theme.fontSize.subTitle }}>
          Innovations from ideas to launched projects
        </h2>
        <Box sx={{ ...theme.container, gap: "20px" }}>
          <img src={StepIcon1} alt="Icon" />
          <Box sx={{ width: "119px", border: "1px solid black" }} />
          <img src={StepIcon2} alt="Icon" />
          <Box sx={{ width: "119px", border: "1px solid black" }} />
          <img src={StepIcon3} alt="Icon" />
          <Box sx={{ width: "119px", border: "1px solid black" }} />
          <img src={StepIcon4} alt="Icon" />
        </Box>
        <p style={{ lineHeight: "24px", textAlign: "center" }}>
          Invent On BTC gives you access to projects on all stages in their
          journey. They could be as early as just an idea or could be an <br />
          already launched project looking to go to the next level. We support
          any and all Bitcoin <br />
          startups regardless on what stage of development they are on. <br />
          Read about the projects, go through data and analytics, look into
          founder’s interviews and get your questions <br />
          answered by the project team on twitter spaces. We give the backers an
          unprecedented level of control and <br />
          access to the projects they want to back.
        </p>
        <Button
          className="navbar-item"
          variant="contained"
          sx={{
            ...theme.buttons.primary,
            width: "150px",
          }}
        >
          <span
            style={{
              display: isMobile ? "none" : "inline",
            }}
          >
            EXPLORE <br />
            Projects
          </span>
        </Button>
      </Box>
      <Box
        sx={{
          padding: "30px",
          background: theme.background.sectionColor,
          ...theme.container,
          gap: theme.gaps[3],
          flexDirection: "column",
          marginBottom: theme.gaps[6],
        }}
      >
        <Box sx={{ ...theme.container, alignItems: "stretch", gap: "144px" }}>
          <Box>
            <p
              style={{
                fontSize: theme.fontSize.subTitle,
                marginBottom: theme.gaps[2],
              }}
            >
              Fund With
            </p>
            <Box sx={{ ...theme.container, gap: "49px" }}>
              <img src={Coin1} alt="Icon" />
              <img src={Coin2} alt="Icon" />
            </Box>
          </Box>
          <Box>
            <p
              style={{
                fontSize: theme.fontSize.subTitle,
                marginBottom: theme.gaps[2],
              }}
            >
              Wallet integration
            </p>
            <Box sx={{ ...theme.container, gap: "49px" }}>
              <img src={XverseIcon} alt="Icon" style={{ width: "78px" }} />
              <img src={LeatherIcon} alt="Icon" style={{ width: "78px" }} />
            </Box>
          </Box>
        </Box>
        <p style={{ textAlign: "center", lineHeight: "24px" }}>
          You can fund projects using BTC and STX. <br /> With integration of
          popular Bitcoin and Stacks wallets, just download XVERSE or Leather
          wallet and
          <br />
          start funding.
        </p>
      </Box>
      <Box
        sx={{
          paddingBottom: "56px",
          ...theme.container,
          flexDirection: "column",
        }}
      >
        <Box sx={{ ...theme.container, gap: "49px", alignItems: "flex-start" }}>
          <img src={MainImage2} alt="Image" />
          <Box>
            <p
              style={{
                fontSize: theme.fontSize.subTitle,
                marginBottom: "48px",
              }}
            >
              Perks and Rewards
            </p>
            <p style={{ lineHeight: "24px", marginBottom: "110px" }}>
              Each project decides what they want to offer in terms of perks or
              rewards to <br />
              backers. They could range from digital assets to physical goods
              and everything
              <br /> in between.
              <br /> Perks and Rewards are listed on the project fund page.
            </p>
            <Box
              sx={{
                ...theme.container,
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "76px",
              }}
            >
              <p style={{ fontSize: "12px", lineHeight: "21px" }}>
                Newsletter:
              </p>
              <p style={{ fontSize: "12px", lineHeight: "21px" }}>
                Get updates on the latest projects campaigns and the Bitcoin
                ecosystem
              </p>
              <Box
                sx={{
                  marginBottom: "10px",
                  ...theme.container,
                  justifyContent: "flex-start",
                  marginTop: theme.gaps[1],
                  marginBottom: theme.gaps[2],
                }}
              >
                <TextField
                  id="outlined"
                  label="Your email address"
                  variant="outlined"
                  name="first_name"
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: theme.background.white,
                    },
                  }}
                  sx={{
                    display: "block",
                    width: "267px",
                  }}
                />
                <Button
                  className="navbar-item"
                  variant="contained"
                  sx={{
                    ...theme.buttons.primary,
                    width: "160px",
                  }}
                >
                  SUBSCRIBE
                </Button>
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginBottom: "25px",
                }}
              >
                <Checkbox
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
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default BackerSection;
