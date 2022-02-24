import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Grid, Box} from "@mui/material"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MAMO</Logo>
        <Desc>
        ניתן לפנות אלינו בכל שאלה בכל עת ונדאג לחזור אליכם תוך 24 שעות
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>מקבלים כרטיסי אשראי</Title>
        {/* <List>
          <ListItem>עמוד הבית</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List> */}
        <Box sx={{ width: "auto" , height: "auto" }}>
        <Grid 
        container 
        spacing={1}
        direction="row"
        alignItems="center"
        >
          {/* should change into map move src to data file */}
          <Grid>
          <Payment src="https://www.ninja-polo.com/images/visa.png" />
          </Grid>
          <Grid>
          <Payment src="https://www.ninja-polo.com/images/isracard.png" />
            </Grid>
            <Grid>
          <Payment src="https://www.ninja-polo.com/images/mastercard.png" />
            </Grid>
            <Grid>
          <Payment src="https://www.ninja-polo.com/images/diners.png" />
            </Grid>
            <Grid>
          <Payment src="https://www.ninja-polo.com/images/americanexpress.png" />
            </Grid>
        </Grid>
          </Box>
      </Center>
      <Right>
        <Title>צור קשר</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> כפר גלעדי 5 , תל אביב
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 03-5555555
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@MAMO.co.il
        </ContactItem>       
      </Right>
    </Container>
  );
};

export default Footer;
