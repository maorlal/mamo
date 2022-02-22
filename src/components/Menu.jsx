import * as React from "react";
import { useState } from "react";
// import styled from "styled-components";
import { styled, alpha, createTheme } from "@mui/material/styles";
import { mobile } from "../responsive";
import { Menu as MenuIcon, Refresh } from "@material-ui/icons";
import {
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Zoom,
  Box,
  Toolbar,
  InputBase,
  Grid,
} from "@mui/material/";
// import Menu  from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import SideBar from "../components/SideBar";
import { Divider } from "@material-ui/core";
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Zoom from '@mui/material/Zoom';
// import Toolbar from '@mui/material/Toolbar';
// import InputBase from '@mui/material/InputBase';
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  direction: "rtl",
});

const Container = styled("div")`
  height: 30px;

  border-bottom-style: solid;
  border-bottom-color: #c5c5c5;
  border-bottom-width: 1px;
  padding-left: 10%;
  padding-right: 10%;
  direction: rtl;
`;

const Wrapper = styled(Grid)`
  padding: 5px 5px;

  border: #000000;
`;

const BarMenuItem = styled("a")`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
  color: #000000;
  &:hover {
    color: #cacaca;
  }
  text-decoration: none;
  &::before {
    content: "";
  }
  cursor: pointer;
`;

const BarMenuWrapper = styled(Grid)`
  ${mobile({ display: "none" })}
`;

const SideMenuWrapper = styled(Grid)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-top: -3%;
    position: inherit;
    justify-content: right;
    margin-right: -21%;
    cursor: pointer;
  }
`;

const MenuItemsList = [
  { name: "שעונים", ref: "../" },
  { name: "יום יום", ref: "/ref" },
  { name: "אביזרי עישון", ref: "/ref" },
  { name: "משחקים", ref: "/ref" },
  { name: "מטריות", ref: "/ref" },
  { name: "אלקטרוניה", ref: "/ref" },

  // ['שעונים','/ref'],
  // ['סוללות','/ref'],
  // ['יום יום','/ref'],
  // ['אביזרי עישון','/ref'],
  // ['משחקים','/ref'],
  // ['מטריות','/ref'],
  // ['אלקטרוניה','/ref']
];

const SearchContainer = styled("div")`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;

    cursor: pointer;
  }
`;

const Input = styled("input")`
  border: none;
  height: 5px;
  ${mobile({ width: "50px" })}
`;

const ITEM_HEIGHT = 48;

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <Wrapper
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <BarMenuWrapper
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {MenuItemsList.map((item) => (
            <BarMenuWrapper>
              <BarMenuItem key={item} onClick={Refresh}>
                {item.name}
              </BarMenuItem>
            </BarMenuWrapper>
          ))}
        </BarMenuWrapper>
        <SideMenuWrapper>
          <SideBar />
          <SearchIcon/>
        </SideMenuWrapper>
      </Wrapper>
    </Container>
  );
}
