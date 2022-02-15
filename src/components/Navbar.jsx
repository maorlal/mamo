import { Badge } from "@material-ui/core";
import { Facebook, Phone, AccountCircle, Instagram, Search, ShoppingCartOutlined, Subscriptions, MoreVert } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
//import { styled } from '@mui/material/styles';


const Container = styled.div`
  height: 100px;
  ${mobile({ height: "35px" })}
  direction: rtl;
  border-bottom-style: solid;
  border-bottom-color: #c5c5c5;
  border-bottom-width: 1px;  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px" })}
  margin: auto;
  margin-bottom: 1%;
  align-items: center;
  `;

const Left = styled.div`
    display: flex;
    margin: auto;
    flex: 1;
    ${mobile({ display: "none"})}
    `;

const Center = styled.div`
  flex: 5;
  text-align: center;
  position: relative;
  ${mobile({ flex: 1, justifyContent: "left" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: right;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  border-bottom-style: solid;
  border-bottom-color: #000000;
  border-bottom-width: 1px;
  ${mobile({ display: "none"})}
  `;

const Input = styled.input`
  border: none;
  height: 30px;
  ${mobile({ width: "50px" })}
  `;


const Logo = styled.h1`
  font-weight: bold;
  font-size: 4em;
  ${mobile({ fontSize: "30px" })}
  `;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  
  `;

const PhoneNumber = styled.a`
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
  return (
    <Container>
      <Wrapper>
        <Right>
          <SearchContainer>
            <Input placeholder="חיפוש" ></Input>
            <Search style={{ color: "gray", fontSize: 25 }} />
          </SearchContainer>
          <PhoneNumber href="tel:03-5514312">03-5514312
          <Phone/>
          </PhoneNumber>

        </Right>
        <Center>
          <Logo>MAMO</Logo>
        </Center>
        <Left>
          <MenuItem>
            <Instagram fontSize="large" />
          </MenuItem>
          <MenuItem><Facebook fontSize="large"/></MenuItem>
          <MenuItem>
            <AccountCircle fontSize="large"/>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined fontSize="large"/>
            </Badge>
          </MenuItem>
        </Left>
      </Wrapper>

    </Container>
  );
};

export default Navbar;

