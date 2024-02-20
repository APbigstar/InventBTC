import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackerCard from "../components/BackerCard";

import Coin1 from "../assets/images/coin_1.png";
import Coin2 from "../assets/images/coin_2.png";
import LinkIcon from "../assets/images/link_icon.png";

import { BackerData } from "../constant";

import ProjectDetailImg from "../assets/images/project_detail.png";

const ProjectDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const [image, setImage] = React.useState("");
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    setImage(localStorage.getItem("selectedProjectImage"));
    setTitle(localStorage.getItem("selectedProjectTitle"));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ p: theme.gaps[3] }}>
        <Box
          sx={{
            ...theme.container,
            alignItems: "stretch",
            pt: theme.gaps[6],
            mb: theme.gaps[6],
          }}
        >
          <img
            style={{ width: "695px", height: "523px" }}
            src={image}
            alt="Project Detail"
          />
          <Box sx={{ width: "40%", pl: theme.gaps[3] }}>
            <p style={{ color: theme.colors.secondary }}>FUNDING</p>
            <h1
              style={{
                fontSize: theme.fontSize.subTitle,
                color: theme.colors.primary,
                marginBottom: theme.gaps[3],
                textTransform: "uppercase",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                marginBottom: theme.gaps[3],
                fontSize: theme.fontSize.medium,
              }}
            >
              Bringing an easy to use Bitcoin Wallet with ordinals , BRC20 and
              Stamps integration
            </p>
            <Box
              sx={{
                ...theme.container,
                justifyContent: "flex-start",
                mb: theme.gaps[3],
              }}
            >
              <p style={{ marginRight: theme.gaps[1] }}>AKASO</p>
              <Box>
                <p
                  style={{
                    fontSize: theme.fontSize.content,
                    fontWeight: "bold",
                  }}
                >
                  Ava InnLead
                </p>
                <p style={{ fontSize: theme.fontSize.content }}>
                  3 Campaigns | Hongkong, Hong Kong
                </p>
              </Box>
            </Box>
            <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
              <p>
                <span
                  style={{
                    fontSize: theme.fontSize.content,
                    fontWeight: "bold",
                    marginRight: "11px",
                  }}
                >
                  1.22
                </span>
                ₿TC raised
              </p>
              <p>
                <span
                  style={{
                    fontSize: theme.fontSize.content,
                    fontWeight: "bold",
                  }}
                >
                  4 ₿TC goal
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
              defaultValue={4}
              valueLabelDisplay="auto"
            />
            <Box
              sx={{
                ...theme.container,
                justifyContent: "space-between",
                marginBottom: theme.gaps[3],
              }}
            >
              <p>
                <span style={{ fontWeight: "bold" }}>1.22 BTC </span>
                by 239 backers
                <br />
                1.22 BTC funded of 4 BTC goal
              </p>
            </Box>
            <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
              <Box
                sx={{
                  ...theme.container,
                  justifyContent: "flex-start",
                  gap: theme.gaps[2],
                }}
              >
                <Box sx={{ ...theme.container, gap: theme.gaps[2] }}>
                  <img src={Coin1} alt="Coin Icon" />
                  <img src={Coin2} alt="Coin Icon" />
                </Box>
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
                    Fund Now
                  </span>
                </Button>
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  justifyContent: "flex-start",
                  gap: theme.gaps[2],
                }}
              >
                <FacebookIcon sx={{ opacity: 0.6 }} />
                <TwitterIcon sx={{ opacity: 0.6 }} />
                <img src={LinkIcon} alt="Icon" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: theme.gaps[2], mb: theme.gaps[6] }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
            }}
          >
            Backer Rewards
          </h1>
          <p style={{ opacity: 0.5, marginBottom: theme.gaps[3] }}>
            You can fund this project by choosing from the packages and deals on
            offer.
          </p>
          <Box sx={{ ...theme.container, gap: theme.gaps[1] }}>
            {BackerData.map((item, index) => (
              <BackerCard
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ px: theme.gaps[2], mb: theme.gaps[6] }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
            }}
          >
            Project Details{" "}
          </h1>
          <p style={{ opacity: 0.5, marginBottom: theme.gaps[3] }}>
            Learn more about the project, its goals, timeline, and team members.
          </p>
          <Box
            sx={{
              ...theme.container,
              alignItems: "stretch",
              mb: theme.gaps[3],
            }}
          >
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Project Goals
              </h2>
              <p>Discover the objectives and vision of the project.</p>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                FAQ
              </h2>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Updates(2)
              </h2>
              <p>The latest updates on the project.</p>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Discussion (21)
              </h2>
              <p>Lets discuss</p>
            </Box>
          </Box>
          <Box
            sx={{ background: "#D9D9D9", height: "500px", mb: theme.gaps[6] }}
          />
        </Box>
        <Box sx={{ px: theme.gaps[2], mb: theme.gaps[6] }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
            }}
          >
            Backer Rewards{" "}
          </h1>
          <p style={{ opacity: 0.5, marginBottom: theme.gaps[3] }}>
            Check out the exciting rewards you can get by backing this project
            at different funding levels.
          </p>
          <Box
            sx={{
              ...theme.container,
              alignItems: "stretch",
              mb: theme.gaps[3],
              gap: theme.gaps[1],
            }}
          >
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Bronze Backer
              </h2>
              <p>
                Get exclusive project updates and a shoutout on our social media
                platforms.
              </p>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Silver Backer
              </h2>
              <p>
                Receive a limited edition project t-shirt and a personalized
                thank you note from the project team.
              </p>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Gold Backer
              </h2>
              <p>
                Get early access to the project's beta version and have your
                name featured in the project credits.
              </p>
            </Box>
            <Box
              sx={{
                width: "25%",
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Platinum Backer
              </h2>
              <p>
                Join the project team for a virtual meet and greet session and
                receive a signed copy of the project's official merchandise.
              </p>
            </Box>
          </Box>
          <Box
            sx={{
              width: "25%",
              borderRadius: "10px",
              px: theme.gaps[2],
              py: theme.gaps[3],
              background: "#F8F8F8",
              margin: "auto",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                marginBottom: theme.gaps[1],
              }}
            >
              Diamond Backer
            </h2>
            <p>
              Become an official sponsor of the project and have your logo
              prominently displayed on the project's website and marketing
              materials.
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default ProjectDetail;
