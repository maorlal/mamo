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


export default function PageHeader() {
  return (
    
      <AppBar position="fixed">
        <Announcement />
        <Navbar />
        <NavMenu />
      </AppBar>
    
  );
}
