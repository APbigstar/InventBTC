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

const WorkflowSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  return (
    <React.Fragment>
      <Box
        sx={{
          py: theme.gaps[3],
          px: theme.gaps[5],
        }}
      >
        <h1
          style={{
            fontSize: theme.fontSize.mainTitle,
            color: theme.colors.primary,
            fontWeight: "bold",
          }}
        >
          How it works?
        </h1>
        <p
          style={{
            width: "816px",
            fontSize: theme.fontSize.content,
            opacity: 0.5,
            marginBottom: theme.gaps[5],
          }}
        >
          Welcome to InventOnBTC, where you can support and fund projects
          created on Bitcoin. Here's how it works:
        </p>
        <Box sx={{ ...theme.container, marginBottom: theme.gaps[2] }}>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              sx={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              1
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              sx={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              2
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              sx={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              3
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              sx={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              4
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            ...theme.container,
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              width: "25%",
              p: theme.gaps[3],
              mr: theme.gaps[2],
              background: theme.background.secondary,
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: theme.fontSize.subTitle,
                marginBottom: theme.gaps[1],
              }}
            >
              1. Dicover Projects
            </p>
            <p style={{ opacity: 0.5 }}>
              Browse through a wide range of innovative projects that are
              seeking funding. From technology to art, there's something for
              everyone.
            </p>
          </Box>
          <Box
            sx={{
              width: "25%",
              p: theme.gaps[3],
              mr: theme.gaps[2],
              background: theme.background.secondary,
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: theme.fontSize.subTitle,
                marginBottom: theme.gaps[1],
              }}
            >
              2. Fund with Bitcoin
            </p>
            <p style={{ opacity: 0.5 }}>
              Once you find a project you're interested in, contribute to its
              funding using Bitcoin. Our secure payment system ensures your
              transactions are safe and transparent.
            </p>
          </Box>
          <Box
            sx={{
              width: "25%",
              p: theme.gaps[3],
              mr: theme.gaps[2],
              background: theme.background.secondary,
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: theme.fontSize.subTitle,
                marginBottom: theme.gaps[1],
              }}
            >
              3. Track Progress
            </p>
            <p style={{ opacity: 0.5 }}>
              Stay updated on the progress of the projects you've supported. Get
              insights into how the funds are being utilized and the milestones
              achieved.
            </p>
          </Box>
          <Box
            sx={{
              width: "25%",
              p: theme.gaps[3],
              background: theme.background.secondary,
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: theme.fontSize.subTitle,
                marginBottom: theme.gaps[1],
              }}
            >
              4. Engage with the Community
            </p>
            <p style={{ opacity: 0.5 }}>
              Connect with other supporters and project creators in our vibrant
              community. Share ideas, provide feedback, and collaborate to make
              a difference.
            </p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default WorkflowSection;
