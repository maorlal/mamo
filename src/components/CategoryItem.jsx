import styled from "styled-components";
import { mobile } from "../responsive";
import Button from "@mui/material/Button";
import ProductList from "../pages/ProductList";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const SButton = styled(Button)`
  border: none;
  padding: 10px;
  /* background-color: white; */
  color: gray;
  cursor: pointer;
  font-weight: 600;
  
`;

const breadcrumbNameMap = {
  "/pages/poductlist": "שעונים",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

const CategoryItem = ({ item }) => {
  let navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <SButton
          onClick={() => {
            navigate(item.ref);
          }}
        >
          {item.title}
        </SButton>
      </Info>
    </Container>
  );
};

export default CategoryItem;
