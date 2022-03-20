import { Badge, Paper } from "@material-ui/core";
import {
  Facebook,
  Phone,
  AccountCircle,
  Instagram,
  Search,
  ShoppingCartOutlined,
  Subscriptions,
  MoreVert,
  BorderColor,
} from "@material-ui/icons";

import React from "react";
import { styled } from "@mui/material/styles";
import { mobile } from "../responsive";
import { useNavigate, Link } from "react-router-dom";
import { Box, Grid, ButtonBase, TextField } from "@mui/material";
import logo from "./images/logo.jpeg";

const Container = styled("div")`
  height: 135px;
  ${mobile({ height: "35px" })}
  direction: rtl;
  border-bottom-style: solid;
  border-bottom-color: #d4af37;
  border-bottom-width: 1px;
`;

const Wrapper = styled(Grid)`
  height: inherit;
  /* padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-content: center; */
  ${mobile({ padding: "0px 10px" })}
  margin: auto;
  margin-bottom: 1%;
`;

const Left = styled(Grid)`
  padding-right: 30px;
  ${mobile({ display: "none" })}
`;

const Center = styled(Grid)`
  ${mobile({ flex: 0, justifyContent: "left" })}
`;
const Right = styled(Grid)`
  /* flex: 1;
  display: flex;
  position: relative;
  justify-content: right; */
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const SearchContainer = styled("div")`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  ${mobile({ display: "none" })}
`;

const Input = styled("input")`
  border: none;
  height: 30px;
  ${mobile({ width: "50px" })}
`;

const Logo = styled("img")`
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
  ${mobile({ height: "30%" })}
`;

const MenuItem = styled(Grid)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const PhoneNumber = styled("a")`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: right;
    margin-left: auto;
    padding: 5px;
    text-decoration: solid;
    color: black;
    font-size: larger;
    font-weight: 700;
  }
`;

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Wrapper
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Left item>
          <Grid xs container direction="row">
            <MenuItem item>
              <Instagram color="error" fontSize="large" />
            </MenuItem>
            <MenuItem item>
              <Facebook color="error" fontSize="large" />
            </MenuItem>
            <MenuItem item>
              <AccountCircle color="error" fontSize="large" />
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined color="error" fontSize="large" />
              </Badge>
            </MenuItem>
          </Grid>
        </Left>
        <Center item>
          <ButtonBase
            sx={{ width: 340, height: 140 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Logo alt="complex" src={logo}></Logo>
          </ButtonBase>
        </Center>
        <Right item>
          <SearchContainer>
            <TextField
              error
              id="outlined-search"
              label="חיפוש"
              type="search"
              color="secondary"
              sx={{Input:{ color: '#f44336' } }}
            />
          </SearchContainer>
          <PhoneNumber href="tel:03-6825549">
            03-6825549
            <Phone />
          </PhoneNumber>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
