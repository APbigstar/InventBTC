import { createTheme } from "@mui/material/styles";

const themeSettings = createTheme({
  background: {
    primary: "#181824",
    secondary: "#F8F8F8",
    black: "#000000",
    footer: "#FFF0E5",
    white: "#ffffff",
  },
  colors: {
    primary: "#D88327",
    secondary: "#F68222",
    black: "#181824",
    grey: "#6A6A6A",
    white: "#ffffff",
    blue: "#0034EC",
    green: "#088366",
  },
  fontSize: {
    mainTitle: "72px",
    subTitle: "36px",
    medium: "30px",
    content: "24px",
    small: "14px",
    xsmall: "10px",
    logo: "24px",
  },
  buttons: {
    primary: {
      backgroundColor: "#D88327",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#F68222",
      },
      py: "10px",
      borderRadius: "6px",
    },
    secondary: {
      background: "white",
      border: `1px solid #C8C8C8`,
      color: "black",
      "&:hover": {
        border: `1px solid #C8C8C8`,
        background: "white",
      },
      py: "10px",
      borderRadius: "6px",
    },
  },
  gaps: {
    0: "6px",
    1: "10px",
    2: "20px",
    3: "30px",
    4: "40px",
    5: "50px",
    6: "100px",
    sectionGap: "30px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default themeSettings;
