import { createTheme } from "@mui/material/styles";

const themeSettings = createTheme({
  background: {
    primary: "#181824",
    secondary: "#F8F8F8",
  },
  colors: {
    primary: "#D88327",
    secondary: "#F68222",
    black: "#181824",
    white: "#ffffff",
    blue: "535bf6",
  },
  fontSize: {
    mainTitle: "72px",
    subTitle: "40px",
    medium: "30px",
    content: "24px",
    small: "14px",
    logo: "36px",
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
  },
  gaps: {
    0: "6px",
    1: "10px",
    2: "20px",
    3: "30px",
    4: "40px",
    5: "50px",
    6: "100px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default themeSettings;
