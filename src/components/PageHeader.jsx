import {IconButton , Menu , MenuItem , useScrollTrigger , Zoom , Box , Toolbar , AppBar,Divider} from '@mui/material/';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NavMenu from "../components/Menu";

const theme = createTheme({
    direction: 'rtl',
    palette: {
        type: 'light',
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#737172',
        },
      },
  });


export default function PageHeader() {
    return (
        <ThemeProvider theme={theme}>
        <AppBar position="fixed">
             <Announcement />
             <Navbar/>
             <NavMenu/>
        </AppBar>
        <Toolbar />
      </ThemeProvider>
    );
  }

  