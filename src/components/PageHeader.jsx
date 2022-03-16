import {
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Zoom,
  Box,
  Toolbar,
  AppBar,
  Divider,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NavMenu from "../components/Menu";

const theme = createTheme({
  direction: "rtl",
  palette: {
    text: {
      primary: "#D4AF37",
      secondary:"#D4AF37",
    },
    primary: {
      main: "#000000",
           
    },
    secondary:{
      main:"#f44336",
    },
    action:{
      active: "#FFD700",
    },
  },
});

export default function PageHeader() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Announcement />
        <Navbar />
        <NavMenu />
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
}
