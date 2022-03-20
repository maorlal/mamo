import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const theme = createTheme({
  direction: "rtl",
  palette: {
    
    // background: {
    //   default: "#000000",
    //   paper: "#000000",
    // },
    primary: {
      main: "#000000",
      contrastText: "#d32f2f",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
});
//   text: {
//     primary: "#D4AF37",
//     secondary:"#D4AF37",
//   },
//   primary: {
//     main: "#FFD700",

//   },
//   secondary:{
//     main:"#000000",
//   },
//   action:{
//     active: "#FFD700",
//   },

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const App = () => {
  return (
    // <StyleSheetManager stylisPlugins={[rtlPlugin]}>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <Home />
        </div>
      </ThemeProvider>
    </CacheProvider>

  );
};

export default App;
