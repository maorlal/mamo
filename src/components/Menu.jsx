import * as React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { mobile ,  } from "../responsive";
import {Search ,  Menu as MenuIcon } from "@material-ui/icons";
import IconButton from '@mui/material/IconButton';
import Menu  from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SideBar from '../components/SideBar';
import { Divider } from '@material-ui/core';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Toolbar from '@mui/material/Toolbar';

const Container = styled.nav`
height: 30px;
display: grid;
grid-gap: 500px 10px;
border-bottom-style: solid;
border-bottom-color: #c5c5c5;
border-bottom-width: 1px;
padding-left: 10%;
padding-right: 10%;
direction: rtl;
`;

const Wrapper = styled.div`
padding: 5px 5px;
display: flex;
justify-content: space-between;
border: #000000;
`;

const BarMenuItem = styled.a`
margin-left: 10px;
margin-right: 10px;
display: inline-block;
font-size: 18px;
color: #000000;
&:hover{
  color: #cacaca;
}
text-decoration: none;
&::before{
  content: "";
}
cursor: pointer;
`;

const BarMenuWrapper= styled.div`
${mobile({ display: 'none' })}

`;
const SideMenuWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    justify-content: right;
    bottom: 20%;
    margin-right: -17%;
    cursor: pointer;
  }
`;

const MenuItemsList = [
  {name: 'שעונים', ref: '/ref'},
  {name: 'יום יום', ref: '/ref'},
  {name: 'אביזרי עישון', ref: '/ref'},
  {name: 'משחקים', ref: '/ref'},
  {name: 'מטריות', ref: '/ref'},
  {name: 'אלקטרוניה', ref: '/ref'},

  // ['שעונים','/ref'],
  // ['סוללות','/ref'],
  // ['יום יום','/ref'],
  // ['אביזרי עישון','/ref'],
  // ['משחקים','/ref'],
  // ['מטריות','/ref'],
  // ['אלקטרוניה','/ref']
];

const SearchContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    
    cursor: pointer;
  }
`;

const Input = styled.input`
  border: none;
  height: 30px;
  ${mobile({ width: "50px" })}
  `;



const ITEM_HEIGHT = 48;






export default function NavMenu(){
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
  
  return( 
    <Container>
    <Wrapper>   
      
    <BarMenuWrapper>
    {MenuItemsList.map((MenuItemsList) => (
      <BarMenuItem key={MenuItemsList} onClick={showSidebar}>
      {MenuItemsList.name}
      </BarMenuItem>
      ))}
      </BarMenuWrapper>
      <Toolbar  id="back-to-top-anchor"/>

      <SideMenuWrapper>
      <SideBar/>
      </SideMenuWrapper>
      <SearchContainer>
     {/* <Input placeholder="חיפוש" ></Input> */}
     <Search style={{ color: "black", fontSize: 25 }} />
      </SearchContainer>
      </Wrapper>
      </Container>
  );
}
      
      
      