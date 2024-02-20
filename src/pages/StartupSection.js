import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Checkbox, Button, TextField } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeImage from "../assets/images/startup_fore_image.png";
import Coin1 from "../assets/images/coin_1.png";
import Coin2 from "../assets/images/coin_2.png";
import RocketIcon from "../assets/images/rocket.png";
import Planet from "../assets/images/planet.png";
import CuratedIcon1 from "../assets/images/curated_icon_1.png";
import CuratedIcon2 from "../assets/images/curated_icon_2.png";
import CuratedIcon3 from "../assets/images/curated_icon_3.png";
import CuratedIcon4 from "../assets/images/curated_icon_3.png";

import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

import { ProjectsFundData, ResourceData } from "../constant";

const StartupSection = () => {
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
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          gap: theme.gaps.sectionGap,
          width: "100%",
        }}
      >
        <Box
          sx={{
            ...theme.container,
            flexDirection: "column",
            gap: theme.gaps[2],
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ ...theme.container }}>
            <h1 style={{ fontSize: "64px", fontWeight: 900 }}>
              Become a <br /> Bitcoin
              <br /> Entrepreneur
            </h1>
            <Button
              className="navbar-item"
              variant="contained"
              sx={{
                ...theme.buttons.primary,
                width: "320px",
                height: "89px",
                fontSize: "24px",
                ml: theme.gaps[2],
              }}
            >
              <span
                style={{
                  display: isMobile ? "none" : "inline",
                }}
              >
                start a project
              </span>
            </Button>
          </Box>
          <Box>
            <p style={{ marginBottom: "12px" }}>Get Funded With</p>
            <Box
              sx={{
                ...theme.container,
                justifyContent: "flex-start",
                gap: theme.gaps[2],
              }}
            >
              <img src={Coin1} alt="Icon" />
              <img src={Coin2} alt="Icon" />
            </Box>
          </Box>
          <Box sx={{ ...theme.container, gap: "80px" }}>
            <Box sx={{ textAlign: "center" }}>
              <img src={RocketIcon} alt="Icon" />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: "50px",
                }}
              >
                fund your ideas
              </p>
              <p
                style={{
                  fontWeight: 700,
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                Entrepreneurship through crowdfunding
              </p>
              <p
                style={{
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                Get access to crowdfunding for your innovate <br /> ideas in the
                Bitcoin economy. Extend your <br /> reach to the crypto
                ecosystem.
              </p>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <img src={Planet} alt="Icon" />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: "50px",
                }}
              >
                PLATFORM
              </p>
              <p
                style={{
                  fontWeight: 700,
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                Platform for all in the Bitcoin Enonomy
              </p>
              <p
                style={{
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                This is a platform for all. From artists to <br /> technologists
                and everything in between in the <br /> Bitcoin ecosystem.
                Anyone is welcome to <br /> create and innovate
              </p>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "50px",
            background: theme.background.sectionColor,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              lineHeight: "40px",
              marginBottom: theme.gaps[1],
            }}
          >
            GET CURATED
          </h1>
          <p style={{ lineHeight: "27px", marginBottom: theme.gaps[2] }}>
            {" "}
            Curated Projects on the Invent On BTC Platform are marked with the
            blue tick. <br /> This is a badge that makes the project stand-out
            from the rest and is only given to those who have <br />
            satisfied the requirements set by the Invent On BTC platform
          </p>
          <h2 style={{ marginBottom: theme.gaps[2] }}>
            Advantages to get curated
          </h2>
          <Box
            sx={{ ...theme.container, gap: "80px", alignItems: "flex-start" }}
          >
            <Box>
              <img
                src={CuratedIcon1}
                alt="Icon"
                style={{ marginBottom: "20px" }}
              />
              <p style={{ textAlign: "left", lineHeight: "18px" }}>
                Get Featured on the <br /> CURATED PROJECTS <br />
                section and get a blue <br /> tick.
              </p>
            </Box>
            <Box>
              <img
                src={CuratedIcon2}
                alt="Icon"
                style={{ marginBottom: "20px" }}
              />
              <p style={{ textAlign: "left", lineHeight: "24px" }}>
                Your project gets
                <br /> analytics blogs and
                <br /> Founder interviews to
                <br />
                increase community
                <br /> engagement and
                <br /> credibility.
              </p>
            </Box>
            <Box>
              <img
                src={CuratedIcon3}
                alt="Icon"
                style={{ marginBottom: "20px" }}
              />
              <p style={{ textAlign: "left", lineHeight: "24px" }}>
                We will host Twitter
                <br /> spaces for you and your
                <br /> team to introduce you to
                <br /> the Bitcoin and crypto
                <br /> community.
              </p>
            </Box>
            <Box>
              <img
                src={CuratedIcon4}
                alt="Icon"
                style={{ marginBottom: "20px" }}
              />
              <p style={{ textAlign: "left", lineHeight: "24  px" }}>
                Get included in the
                <br /> Treasury pool for a<br /> chance to get funded by <br />
                Invent On BTC
              </p>
            </Box>
          </Box>
        </Box>
        <Box>
          <p
            style={{
              marginBottom: theme.gaps[5],
              fontSize: "36px",
              fontWeight: "900",
            }}
          >
            PROJECTS FUNDED THROUGH{" "}
            <span style={{ color: theme.colors.primary }}>INVENT ON BTC</span>{" "}
          </p>
          <Box
            sx={{
              ...theme.container,
              gap: "180px",
            }}
          >
            {ProjectsFundData.map((item, index) => (
              <ProjectCard
                key={index}
                image={item.image}
                title={item.title}
                content={item.content}
                type={item.type}
                amount={item.amout}
                percent={item.percent}
                leftDays={item.leftDays}
              />
            ))}
          </Box>
        </Box>
        <Box style={{ marginBottom: theme.gaps[5] }}>
          <p
            style={{
              marginBottom: theme.gaps[2],
              fontSize: "36px",
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            CREATOR RESOURCES
          </p>
          <p style={{ textAlign: "center", marginBottom: theme.gaps[5] }}>
            Some tools and resources to help you <br /> on you Bitcoin
            Entrepreneurial journey
          </p>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "minmax(0, 1fr)"
                : "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "80px",
            }}
          >
            {ResourceData.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  img={item.image}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default StartupSection;
