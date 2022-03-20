import { Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { mobile } from "../responsive";

const Container = styled("div")`
  height: 25px;
  display: contents;
  display: flex;
  border-bottom-style: solid;
  border-bottom-color: #d4af37;
  border-bottom-width: 1px;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled("div")`
  /* padding: 5px 5px; */
  display: flex;
  justify-content: space-between;
`;

const TopMenuItem = styled(Typography)`
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
  font-size: 16px;
  &:hover {
    color: #cacaca;
  }
  text-decoration: none;
  &::before {
    content: "";
  }
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper>
        <TopMenuItem href="/page/ret">מדיניות החלפות והחזרות</TopMenuItem>
        <TopMenuItem href="/page/ret">אודותינו</TopMenuItem>
        <TopMenuItem href="/page/ret">תקנון</TopMenuItem>
        <TopMenuItem href="/page/ret">מאמרים</TopMenuItem>
      </Wrapper>
    </Container>
  );
};

export default Announcement;
